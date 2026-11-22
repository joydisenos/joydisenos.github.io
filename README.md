# Portafolio — Joseph Vásquez

Portafolio profesional y página de contacto para **Joseph Vásquez**, desarrollador web full-stack (PHP · Laravel · WordPress). Construido como una SPA con React y Vite, con un diseño oscuro orientado al detalle y listo para publicarse en GitHub Pages.

**Demo:** https://joydisenos.github.io/

## Características

- SPA de una sola página con navegación por secciones y scroll suave.
- Diseño responsive (móvil, tablet y escritorio) con animaciones de entrada y respeto por `prefers-reduced-motion`.
- Bilingüe **ES / EN**: el idioma se guarda en `localStorage` y actualiza `<html lang>`, el título y la meta descripción.
- Sección de proyectos con filtros por categoría, capturas reales y casos con reto, solución y resultado.
- Ofertas rápidas (sitio/landing, rescate WordPress/PHP/Laravel, módulo o app a medida) con tiempos y entregables.
- Formulario de contacto sin backend que preselecciona la oferta elegida y compone un `mailto:` con los datos ingresados.
- Servicios y stack con React Native para apps móviles.
- Datos estructurados JSON-LD, Open Graph, sitemap, robots.txt y favicon.
- Accesibilidad auditada con Lighthouse (100 en accesibilidad, buenas prácticas y SEO).
- Botones de descarga del CV y enlaces a WhatsApp / email.

## Stack

- React 19
- Vite 8
- CSS moderno (custom properties, grid, clamp) — sin frameworks de UI
- Google Fonts: Space Grotesk, Inter y JetBrains Mono

## Desarrollo local

Requiere Node.js 20.19+ (recomendado 22 o superior).

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Personalización

| Qué | Dónde |
| --- | --- |
| Textos, servicios, proceso y traducciones | `src/data/content.js` |
| Proyectos, enlaces, capturas y datos de contacto | `src/data/site.js` |
| Imágenes de proyectos | `public/projects/` (recomendado 1100 × 688 px) |
| CV descargable | `public/cv-joseph-vasquez.pdf` |
| Portada para redes | `public/og-cover.jpg` (1200 × 630 px) |
| Favicon | `public/favicon.svg` |
| Estilos | `src/styles.css` |

### LinkedIn

El enlace de LinkedIn está vacío a propósito. Cuando tengas el perfil, completa `linkedin` en `src/data/site.js` y agrégalo en el componente que corresponda (por ejemplo, en `Contact` o `Footer`).

### Formulario de contacto

El formulario abre el cliente de correo del visitante con el mensaje ya redactado, así que no necesita servidor ni servicios de terceros. Si más adelante quieres recibir mensajes directamente, puedes conectarlo a Formspree, Resend o una función serverless.

## Publicación en GitHub Pages

El repositorio incluye `.github/workflows/deploy.yml`. Para activarlo:

1. Sube los cambios a la rama `main`.
2. En GitHub, ve a **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. El workflow compila el sitio y publica `dist/` en cada push a `main`.

El sitio queda disponible en `https://<usuario>.github.io/`. Si el repositorio no es `joydisenos.github.io`, cambia `base` en `vite.config.js` por `'/<nombre-del-repositorio>/'` y actualiza las URLs absolutas de `index.html` (canonical, Open Graph, JSON-LD, sitemap y robots.txt).

## Estructura

```
├── .github/workflows/deploy.yml
├── public/
│   ├── projects/            # capturas de los proyectos
│   ├── cv-joseph-vasquez.pdf
│   ├── favicon.svg
│   ├── og-cover.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── ualtoque-terminos.html
├── src/
│   ├── components/
│   ├── data/
│   │   ├── content.js       # textos ES/EN
│   │   └── site.js          # proyectos y datos de contacto
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
└── package.json
```

## Notas

- Las capturas de los proyectos son vistas previas de sitios públicos. Las marcas, logotipos y contenidos pertenecen a sus respectivos dueños.
- `public/ualtoque-terminos.html` se conserva porque es una página legal existente del proyecto Ualtoque; no está enlazada desde el portafolio.
- El sitio no usa backend ni cookies de terceros. Solo guarda la preferencia de idioma en el navegador.

---

Diseñado y desarrollado por **Joseph Vásquez**.
