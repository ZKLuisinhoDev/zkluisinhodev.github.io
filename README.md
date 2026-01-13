# Portfolio de Desarrollador

Este proyecto es un portfolio personal construido con [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) y HTML.

## 🚀 Características

- **Diseño Responsivo**: Se adapta a cualquier dispositivo.
- **Tema Oscuro**: Elegante y moderno por defecto.
- **Alto Rendimiento**: Gracias a la arquitectura de Islas de Astro.
- **Fácil de Personalizar**: Componentes modulares.

## 🛠️ Instalación

1. Clona este repositorio (si aún no lo tienes localmente).
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📦 Despliegue en GitHub Pages

Este proyecto incluye un flujo de trabajo de GitHub Actions en `.github/workflows/deploy.yml`.

### Pasos para desplegar:

1. Crea un repositorio en GitHub.
2. Sube tu código:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
4. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
5. Asegúrate de actualizar `astro.config.mjs`:
   - `site`: Tu URL de GitHub Pages (ej. `https://tu-usuario.github.io`).
   - `base`: El nombre de tu repositorio si no es un sitio de usuario (ej. `/mi-portfolio`).

## 📝 Personalización

Edita los archivos en `src/components/` para cambiar textos, proyectos e información.
