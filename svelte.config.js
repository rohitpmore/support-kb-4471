import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';

const runbook = fileURLToPath(new URL('./src/lib/layouts/runbook.svelte', import.meta.url));

// Build scaffold for the kb export: .svx pages through mdsvex, `layout: runbook` from src/lib/layouts.
export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({ extensions: ['.svx'], layout: { runbook } }),
  ],
  kit: {
    adapter: adapter(),
    alias: { '#lib': 'src/lib' },
    prerender: {
      entries: ['/kb', '/kb/triage/dedupe', '/kb/decisions/0001-dedupe-by-subject', '/kb/incidents/4471', '/kb/incidents/4471-split'],
    },
  },
};
