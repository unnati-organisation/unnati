import { load } from "js-yaml";

/** Parse eager `?raw` glob values into typed objects, skipping malformed files. */
export function parseYamlRecords<T>(records: Record<string, string>): T[] {
  const items: T[] = [];
  for (const [file, raw] of Object.entries(records)) {
    try {
      items.push(load(raw) as T);
    } catch (err) {
      console.error(`[content] Skipping malformed YAML file: ${file}`, err);
    }
  }
  return items;
}