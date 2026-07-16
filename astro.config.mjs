// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://paritas-atelier.pages.dev",
  vite: {
    plugins: [tailwind()],
  },
});
