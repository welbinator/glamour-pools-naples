// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.PAGES_BASE || undefined;

export default defineConfig({
  base,
  site: 'https://glamour-pools-naples.james-welbes.workers.dev',
  build: { inlineStylesheets: 'never' },
});
