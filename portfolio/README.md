# Plantilla de Portafolio

Una plantilla de portafolio estática, responsive y lista para subir a GitHub Pages. Incluye secciones de inicio, proyectos, experiencia, formación y contacto.

## Estructura

```
portfolio/
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # Interactividad (menú móvil, scroll, formulario)
└── README.md       # Este archivo
```

## Cómo usar

1. Copia esta carpeta `portfolio` a tu repositorio de GitHub.
2. Edita `index.html` con tu información personal:
   - Reemplaza **Tu Nombre** por tu nombre real.
   - Actualiza el título, descripción y enlaces de redes sociales.
   - Modifica los proyectos, experiencia y formación con tus datos.
3. Opcional: cambia los colores en `styles.css` editando las variables CSS en `:root`.
4. Para el formulario de contacto, crea una cuenta en [Formspree](https://formspree.io) y reemplaza `https://formspree.io/f/tu-formulario` por tu URL real.

## Subir a GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub: **Settings > Pages**.
2. En **Source**, selecciona **Deploy from a branch**.
3. Selecciona la rama que contiene la carpeta `portfolio` (normalmente `main`).
4. En **Folder**, elige `/portfolio` (si usas GitHub Pages desde una carpeta) o copia el contenido de esta carpeta a la raíz del repositorio y elige `/(root)`.
5. Guarda y espera unos minutos. Tu portafolio estará disponible en `https://tusuario.github.io/portafolio/`.

> Si usas una carpeta `/portfolio`, asegúrate de que la URL base en `index.html` (`og:url`) coincida con la ruta real.

## Personalización rápida

| Elemento | Dónde cambiar |
|----------|---------------|
| Nombre y título | `index.html`, sección `#inicio` |
| Proyectos | `index.html`, sección `#proyectos` |
| Experiencia | `index.html`, sección `#experiencia` |
| Formación | `index.html`, sección `#formacion` |
| Colores | `styles.css`, variables `:root` |
| Tipografía | `index.html`, enlaces de Google Fonts |

## Licencia

Libre para uso personal y comercial. Atribución opcional.
