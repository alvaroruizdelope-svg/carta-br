# CARTA-B/R

Carta digital de demostración para bares y restaurantes, desarrollada por [AV CODE STUDIO](https://alvaro-web.pages.dev/). Incluye 14 categorías y 80 productos con precios ficticios en euros. El buscador filtra por nombre e ignora mayúsculas y tildes.

## Abrir en local

Abre `index.html` en un navegador. También puedes servir la carpeta con Python, si lo tienes instalado:

```sh
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador. El proyecto usa HTML, CSS y JavaScript, y no necesita instalar dependencias ni compilar archivos.

## Personalizar una carta

- **Identidad y contacto.** Edita `establecimiento` en `js/carta.js` para cambiar el nombre, el lema, la descripción y el texto del pie. Rellena `contacto` con los datos facilitados por el establecimiento. Escribe la dirección y el teléfono como texto, los horarios como una lista de líneas y las redes como una lista de objetos con `nombre` y `url` (HTTPS). Los campos vacíos se omiten. Cambia `demostracion` a `false` cuando la carta contenga datos reales. Actualiza también el título, la descripción para buscadores y los textos de identidad de `index.html`.
- **Colores.** Cambia las variables de `:root` en `css/estilos.css` y el `theme-color` de `index.html`. Comprueba el contraste del texto y de los indicadores de foco con la nueva paleta.
- **Categorías.** Cada categoría de `carta` en `js/carta.js` tiene un `id` único sin espacios ni tildes, un `nombre`, un `grupo` (`comida` o `bebidas`) y una lista de `productos`. El orden de la lista determina el orden dentro de cada grupo. «Ver bebidas» lleva a la primera categoría de bebidas.
- **Productos.** Cada ficha tiene `nombre`, `descripcion` y `precio`. Guarda el precio como número decimal con punto (por ejemplo, `5.50`). La web lo presenta como `5,50 €`. Puedes añadir `alergenos` como una lista de textos cuando dispongas de información verificada. Si el campo se omite o está vacío, no aparece en la ficha.

## Publicar

La raíz del repositorio contiene la web lista para publicar. Las rutas de CSS y JavaScript son relativas, por lo que también funcionan dentro del subdirectorio de un proyecto de GitHub Pages.

### GitHub Pages

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige **main** y **/ (root)** y pulsa **Save**.
4. Espera a que termine el despliegue. Abre la URL que muestra GitHub Pages y prueba la carta desde un móvil.

### Cloudflare Pages

1. En el panel de Cloudflare, abre **Workers & Pages → Create application → Pages** y conecta el repositorio `alvaroruizdelope-svg/carta-br` desde GitHub.
2. Elige `main` como rama de producción y **None** como framework. Deja vacío el comando de compilación y usa `.` como directorio de salida.
3. Pulsa **Save and Deploy**. Abre la URL que proporciona Cloudflare y prueba la carta desde un móvil.

### Código QR para las mesas

Cuando la URL pública definitiva funcione desde un móvil, crea un QR con esa URL HTTPS. Guarda una versión SVG para imprimir, con fondo claro y margen alrededor. Escanea el archivo o una prueba impresa y comprueba que abre la dirección publicada antes de distribuirlo.
