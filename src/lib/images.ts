import type { ImageMetadata } from "astro";

/**
 * Eagerly resolves every image under src/assets so we can look them up by
 * their legacy public path ("/images/foo.jpg") and feed them to Astro's
 * <Image /> component for optimization.
 */
const imageGlob = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true }
);

const byPublicPath: Record<string, ImageMetadata> = {};
for (const key of Object.keys(imageGlob)) {
  const publicPath = `/${key.split("/src/assets/")[1]}`;
  byPublicPath[publicPath] = imageGlob[key].default;
}

/** Whether an asset exists for the given legacy public path. */
export function hasImage(path: string | undefined): boolean {
  if (!path) return false;
  const key = path.startsWith("/") ? path : `/${path}`;
  return key in byPublicPath;
}

/** Map a legacy public asset path to its importable ImageMetadata. */
export function img(path: string | undefined): ImageMetadata {
  if (!path) throw new Error(`<Image> requires a path, got ${String(path)}`);
  const key = path.startsWith("/") ? path : `/${path}`;
  const meta = byPublicPath[key];
  if (!meta) throw new Error(`Image not found for path: ${path}`);
  return meta;
}
