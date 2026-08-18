# UNNATI Website

Astro + Tailwind site for UNNATI, deployed to GitHub Pages at `/unnati/`.

## Content editing (Decap CMS)

Site content lives as YAML files in `content/` and is edited through a local
Decap CMS editor — no external services or accounts required.

Start the site and the CMS proxy (two terminals):

```sh
npm run dev     # site at http://localhost:4321/unnati/
npm run cms     # Decap local proxy on http://localhost:8081
```

Then open the editor:

- Development and production: http://localhost:4321/unnati/admin/ (also works
  at `/unnati/admin` without the trailing slash)

### Collections

| Collection | Type | Files |
| --- | --- | --- |
| Anchors | folder | `content/anchors/*.yml` |
| Projects | folder | `content/projects/*.yml` |
| Updates | folder | `content/updates/*.yml` |
| Resources | folder | `content/resources/*.yml` |
| Site | file | `content/site.yml` |
| Accountability | file | `content/accountability.yml` |

### Media

Images uploaded through the CMS are saved to `src/assets/images/` and served
from `/images/`. Media files are committed to the repository and deployed with
the site.

## Static assets

Static assets, like `favicon.svg` and CMS configuration, live in the `public/`
directory. Any static asset in `public/` is copied as-is to the build output.

## Development

```sh
npm install
npm run dev        # start Astro dev server on http://localhost:4321/unnati/
npm run cms        # start the Decap CMS local proxy on http://localhost:8081
npm run build      # build the static site into dist/
npm run preview    # preview the build locally
npx astro check    # type-check and diagnostics
```

The built site is published to GitHub Pages at `/unnati/`.