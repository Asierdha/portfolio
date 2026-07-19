# Portafolio — Asier Del Hoyo Álvarez

Portafolio estático (HTML + CSS + JS) listo para desplegar en GitHub Pages desde el repositorio [`Asierdha/portfolio`](https://github.com/Asierdha/portfolio).

## Estructura

```
portfolio/
├── index.html            # Página principal
├── styles.css            # Estilos
├── script.js             # Interactividad (menú móvil, scroll suave, año)
├── CV_AsierDelHoyo.pdf   # CV descargable desde el sitio
└── README.md             # Este archivo
```

Todas las rutas internas (`styles.css`, `script.js`, `CV_AsierDelHoyo.pdf`) son **relativas**, así que el sitio funciona tanto en la raíz del dominio como bajo un subpath (`/portfolio/`) sin cambios.

## Despliegue en GitHub Pages (repositorio `Asierdha/portfolio`)

Recomendado: publicar el contenido de esta carpeta como sitio del repositorio, quedando accesible en:

**https://asierdha.github.io/portfolio/**

### Opción A — Servir directamente desde la carpeta `/portfolio` (más simple)

1. Sube todo el proyecto a la rama `main` del repo `Asierdha/portfolio` (incluida esta carpeta).
2. Entra en **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**.
4. Selecciona rama `main` y carpeta `/portfolio`.
5. Guarda. En 1–2 minutos el sitio estará en `https://asierdha.github.io/portfolio/`.

### Opción B — Mover el contenido a la raíz del repo

1. Copia el contenido de `portfolio/` a la raíz del repositorio `Asierdha/portfolio`.
2. En **Settings → Pages**, selecciona rama `main` y carpeta `/(root)`.
3. El sitio quedará igualmente en `https://asierdha.github.io/portfolio/`.

## Personalizar

- Textos: edita `index.html`.
- Colores y tipografía: variables CSS al inicio de `styles.css` (`:root`).
- CV: sustituye `CV_AsierDelHoyo.pdf` por una versión actualizada manteniendo el mismo nombre.
