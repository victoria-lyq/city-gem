import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/mapbox": {
        target: "https://api.mapbox.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mapbox/, ""),
      },
    },
  },
});
