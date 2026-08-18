// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

/**
 * Dev-only static serving of the media library so Decap CMS previews work.
 * Content stores image values as absolute public paths ("/pubs/x.jpg",
 * "/sub-images/x.jpg", "/images/x.jpg") which point at files in src/assets.
 * The production site serves these through Astro's optimized <Image> pipeline
 * (src/lib/images.ts), but the CMS renders raw <img src> URLs, so in dev we
 * expose src/assets at those public paths. Never included in production builds.
 */
function devMediaServing() {
  const root = join(process.cwd(), 'src/assets');
  const publicToDir = {
    '/images': 'images',
    '/pubs': 'pubs',
    '/sub-images': 'sub-images',
  };
  /** @type {Record<string, string>} */
  const contentTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.avif': 'image/avif',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  /** @type {import('vite').Plugin} */
  return {
    name: 'dev-media-serving',
    apply: 'serve',
    configureServer(/** @type {import('vite').ViteDevServer} */ server) {
      server.middlewares.use(
        /**
         * @param {import('node:http').IncomingMessage} req
         * @param {import('node:http').ServerResponse} res
         * @param {() => void} next
         */
        (req, res, next) => {
          const url = (req.url ?? '').split('?')[0];
          for (const [publicPath, dir] of Object.entries(publicToDir)) {
            if (url.startsWith(`${publicPath}/`)) {
              const file = join(root, dir, url.slice(publicPath.length));
              if (!file.startsWith(root)) return next();
              readFile(file)
                .then((buf) => {
                  res.setHeader(
                    'Content-Type',
                    contentTypes[extname(file).toLowerCase()] ?? 'application/octet-stream',
                  );
                  res.setHeader('Cache-Control', 'no-store');
                  res.end(buf);
                })
                .catch(() => next());
              return;
            }
          }
          next();
        },
      );
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.unnati.org',
  base: '/unnati/',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss(), devMediaServing()],
  },
});
