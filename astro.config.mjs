// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Reemplaza con tu dominio o 'https://<tu-usuario>.github.io'
  site: "https://example.github.io",
  // Si despliegas en <tu-usuario>.github.io/<nombre-repo>, agrega base: '/nombre-repo'
  // base: '/portafolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
