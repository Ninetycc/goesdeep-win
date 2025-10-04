import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  
  adapter: cloudflare({
  imageService: 'compile', // This tells Astro to use sharp during build for image optimization
  }),
});

