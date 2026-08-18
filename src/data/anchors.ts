import { parseYamlRecords } from "../lib/yaml";

export interface Anchor {
  slug: string;
  nav: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  heroImage: string;
  order?: number;
}

const raw = import.meta.glob<string>("/content/anchors/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const anchors: Anchor[] = parseYamlRecords<Anchor>(raw).sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);

export const anchorBySlug = (slug: string): Anchor | undefined =>
  anchors.find((a) => a.slug === slug);