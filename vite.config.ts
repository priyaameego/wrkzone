import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "next/link": path.resolve(import.meta.dirname, "./src/lib/compat/next-link.tsx"),
      "next/image": path.resolve(import.meta.dirname, "./src/lib/compat/next-image.tsx"),
      "next/navigation": path.resolve(import.meta.dirname, "./src/lib/compat/next-navigation.tsx"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
