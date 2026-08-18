import { parseYamlRecords } from "../lib/yaml";

export interface Update {
  slug: string;
  title: string;
  date: string;
  venue: string;
  summary: string;
  details: string[];
  images: string[];
  video?: string;
  poster?: string;
  brochure?: string;
  order?: number;
}

const raw = import.meta.glob<string>("/content/updates/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const updates: Update[] = parseYamlRecords<Update>(raw).sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);