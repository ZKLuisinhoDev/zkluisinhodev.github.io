# 🚀 LuisinhoDEV | Portfolio Profesional

¡Bienvenido a mi sitio personal! Soy un **Ingeniero de Sistemas (Universidad de Nariño)** enfocado en el desarrollo Full Stack, Inteligencia Artificial y Diseño Multimedia. Este portfolio está diseñado para mostrar mi trayectoria, habilidades técnicas y proyectos destacados.

## �️ Tecnologías Utilizadas

- **Frontend:** Astro 5, Tailwind CSS 4, React.
- **Backend & IA:** Python (Django/DRF), TensorFlow, Keras.
- **Infraestructura:** Supabase, Render, Vercel, GitHub Actions.
- **Diseño:** Multimedia & UI/UX (Certificación SENA).

## ✨ Características Principales

- **Velocidad Extrema:** Construido con la arquitectura de islas de Astro para un rendimiento óptimo.
- **Carrusel Interactivo:** Galería de imágenes integrada para visualizar capturas de pantalla de mis proyectos.
- **Diseño Premium:** Estética oscura moderna con animaciones fluidas y micro-interacciones.
- **Contacto Directo:** Enlaces rápidos a WhatsApp, Correo y LinkedIn.

## � Despliegue en GitHub Pages (Automático)

Este repositorio está configurado con **GitHub Actions**. Cada vez que hagas `git push` a la rama `main`, tu sitio se actualizará automáticamente.

### Configuración Necesaria:

1.  **Astro Config:** Abre `astro.config.mjs` y actualiza la propiedad `site`:
    ```javascript
    export default defineConfig({
      site: "https://ZKLuisinhoDev.github.io",
      base: "/nombre-de-tu-repo", // Opcional: solo si el repo no se llama igual que tu perfil
      // ...
    });
    ```
2.  **GitHub Settings:**
    - Ve a tu repositorio en GitHub.
    - Selecciona **Settings** > **Pages**.
    - En **Build and deployment** > **Source**, elige **GitHub Actions**.

## 💻 Instalación Local

Si quieres clonar este proyecto y probarlo localmente:

1.  **Instala las dependencias:**
    ```bash
    npm install
    ```
2.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
3.  **(Opcional) Abrir túnel público con Tunnelmole:**
    ```bash
    npx tunnelmole 4321
    ```



---

Desarrollado con ❤️ por **LuisinhoDEV**
