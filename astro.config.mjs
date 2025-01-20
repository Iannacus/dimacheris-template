// @ts-check
import { defineConfig } from 'astro/config';
import dimacheri from "@iannacus/dimacheri"

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [dimacheri({}), mdx()]
});