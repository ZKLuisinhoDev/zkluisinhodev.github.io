// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Reemplaza con tu dominio o 'https://<tu-usuario>.github.io'
  site: "https://ZKLuisinhoDev.github.io",
  // Si despliegas en <tu-usuario>.github.io/<nombre-repo>, agrega base: '/nombre-repo'
  base: "/luisinhodev.github.io",
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
