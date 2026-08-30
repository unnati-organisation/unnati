import { load } from "js-yaml";
import { marked } from "marked";

export interface BoardMember {
  name: string;
  role: string;
  address: string;
  image: string;
  bio?: string;
}

export interface Office {
  city: string;
  label: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const raw = import.meta.glob<string>("/content/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const data = (raw["/content/site.yml"] ? load(raw["/content/site.yml"]) : {}) as {
  board?: BoardMember[];
  offices?: Office[];
};

/* Load board member bios from markdown files in content/board-bios/ */
const bioFiles = import.meta.glob<string>("/content/board-bios/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const biosByName: Record<string, string> = {};
for (const rawMd of Object.values(bioFiles)) {
  const match = rawMd.match(/^---\nname:\s*(.+)\n---\n([\s\S]*)$/);
  if (match) {
    const name = match[1].trim();
    const body = match[2].trim();
    if (body) {
      biosByName[name] = marked.parse(body) as string;
    }
  }
}

export const board: BoardMember[] = (data.board ?? []).map((m) => ({
  ...m,
  bio: biosByName[m.name] ?? m.bio,
}));

export const offices: Office[] = data.offices ?? [];
