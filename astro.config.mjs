// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mugbeeBlog.github.io",
  vite: {
    server: {
      watch: {
        usePolling: true, // WSL2環境での変更検知安定化
      },
    },
  },
});
