import { anchors } from "./anchors";
import { parseYamlRecords } from "../lib/yaml";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tags: string[]; // anchor slugs — a project may belong to several anchors
  period: string;
  support: string;
  highlights: string[];
  details?: string[];
  gallery?: string[];
  order?: number;
}

const raw = import.meta.glob<string>("/content/projects/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const projects: Project[] = parseYamlRecords<Project>(raw).sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);

export const projectsForAnchor = (slug: string): Project[] =>
  projects.filter((p) => p.tags.includes(slug));

export const otherProjectsForAnchor = (slug: string): Project[] =>
  projects.filter((p) => !p.tags.includes(slug) && p.tags.length > 0).slice(0, 1);

export const anchorName = (slug: string): string =>
  anchors.find((a) => a.slug === slug)?.nav ?? "";