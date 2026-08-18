import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dump, type DumpOptions } from "js-yaml";

import { anchors } from "../src/data/anchors";
import { projects } from "../src/data/projects";
import { updates } from "../src/data/updates";
import { publications, pubLinks, type Publication } from "../src/data/resources";
import { board, offices } from "../src/data/site";
import {
  policyGroups,
  certifications,
  adminFinancial,
  annualReports,
} from "../src/data/accountability";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = resolve(root, "content");

function writeYml(relPath: string, data: unknown) {
  const file = resolve(contentDir, relPath);
  mkdirSync(dirname(file), { recursive: true });
  const options: DumpOptions = { noRefs: true, lineWidth: 120 };
  (options as { quotingType?: string }).quotingType = '"';
  writeFileSync(file, dump(data, options), "utf8");
}

/** Drop `undefined` values so optional fields are omitted from the YAML. */
function clean<T>(value: T): T {
  if (Array.isArray(value)) return value.map(clean) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v !== undefined) out[k] = clean(v);
    }
    return out as T;
  }
  return value;
}

// ---- Folder collections (one file per entry, order = current array index) ----

anchors.forEach((a, order) => {
  writeYml(`anchors/${a.slug}.yml`, clean({ ...a, order }));
});

projects.forEach((p, order) => {
  writeYml(`projects/${p.slug}.yml`, clean({ ...p, order }));
});

updates.forEach((u, order) => {
  writeYml(`updates/${u.slug}.yml`, clean({ ...u, order }));
});

const resFolder = resolve(contentDir, "resources");
mkdirSync(resFolder, { recursive: true });
publications.forEach((p: Publication, order) => {
  const url = p.url ?? pubLinks[p.id];
  const entry: Record<string, unknown> = {
    id: p.id,
    title: p.title,
    description: p.description,
    format: p.format,
    themes: p.themes,
    languages: p.languages,
    badge: p.badge,
    order,
  };
  if (p.year !== undefined) entry.year = p.year;
  if (p.image !== undefined) entry.image = p.image;
  if (url !== undefined) entry.url = url;
  writeYml(`resources/${p.id}.yml`, entry);
});

// ---- File collections (single YAML holding arrays) ----

writeYml("site.yml", { board: clean(board), offices: clean(offices) });
writeYml("accountability.yml", {
  policyGroups: clean(policyGroups),
  certifications: clean(certifications),
  adminFinancial: clean(adminFinancial),
  annualReports: clean(annualReports),
});

console.log("Content migration complete.");
console.log(`  content/anchors   -> ${anchors.length} files`);
console.log(`  content/projects  -> ${projects.length} files`);
console.log(`  content/updates   -> ${updates.length} files`);
console.log(`  content/resources -> ${publications.length} files`);
console.log(`  content/site.yml, content/accountability.yml written`);