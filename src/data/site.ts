import { load } from "js-yaml";
import { marked } from "marked";

export interface BoardMember {
  name: string;
  role: string;
  address: string;
  image: string;
  bio?: string;
  order?: number;
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
  offices?: Office[];
};

/* Load board members from individual YAML files in content/board-members/ */
const boardFiles = import.meta.glob<string>("/content/board-members/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const board: BoardMember[] = Object.values(boardFiles)
  .map((raw) => load(raw) as BoardMember)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  .map((m) => ({
    ...m,
    bio: m.bio?.trim() ? (marked.parse(m.bio) as string) : undefined,
  }));

export const offices: Office[] = data.offices ?? [];
