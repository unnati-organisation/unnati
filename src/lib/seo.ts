import { anchors } from "../data/anchors";

/** Site-wide name used in og:site_name, Organization and WebSite schema. */
export const siteName = "UNNATI — Organisation for Development Education";

/** Absolute URL for a path (or asset) on the configured site. */
export function absoluteURL(site: URL, path: string): string {
  return new URL(path, site).toString();
}

/** Canonical URL for the current page — trailing-slash form to match the sitemap. */
export function canonicalURL(site: URL, pathname: string): string {
  const clean = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return new URL(clean, site).toString();
}

const sectionLabels: Record<string, string> = {
  about: "About Us",
  resources: "Resources",
  contact: "Contact",
  "accountability-and-transparency": "Accountability & Transparency",
  "thematic-anchors": "Thematic Anchors",
};

export interface Breadcrumb {
  name: string;
  item: string;
}

/** Breadcrumb trail for the current path, or null on the homepage. */
export function breadcrumb(site: URL, pathname: string): Breadcrumb[] | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs: Breadcrumb[] = [{ name: "Home", item: new URL("/", site).toString() }];

  const section = segments[0];
  const label = sectionLabels[section];
  if (!label) return null;

  crumbs.push({ name: label, item: canonicalURL(site, `/${section}`) });

  if (segments.length > 1) {
    const anchor = anchors.find((a) => a.slug === segments[1]);
    if (anchor) {
      crumbs.push({ name: anchor.nav, item: canonicalURL(site, `/${section}/${anchor.slug}`) });
    }
  }

  return crumbs;
}
