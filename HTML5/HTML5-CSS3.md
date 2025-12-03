# PLAN DE TRABAJO: APRENDER HTML5 Y CSS3 DESDE LO BÁSICO

---

## 🔹 SECCIÓN 1 — Introducción a la Web

### Objetivo
Entender cómo funciona una página web antes de escribir código.

### Contenido

**¿Qué es HTML, CSS y JavaScript?**

- **HTML** es el lenguaje que define la estructura y el contenido de una página (títulos, párrafos, imágenes, enlaces).
- **CSS** es el lenguaje que define la apariencia: colores, tamaños, fuentes, márgenes y distribución visual.
- **JavaScript** es el lenguaje que permite añadir interacción y dinamismo, como menús que se despliegan, validación de formularios o contenido que cambia sin recargar la página.

**¿Cómo funciona el navegador?**

Cuando escribes una dirección (URL) en el navegador, este envía una petición a un servidor, recibe archivos (HTML, CSS, JS, imágenes) y los interpreta para mostrar la página. El navegador lee el HTML primero, construye la estructura, luego aplica los estilos CSS y finalmente ejecuta el código JavaScript para añadir interactividad.

**¿Qué es el DOM?**

El DOM (Document Object Model) es una representación en forma de árbol de todos los elementos HTML de la página. El navegador lo construye a partir del HTML y luego CSS y JavaScript lo utilizan para aplicar estilos, cambiar contenido y responder a eventos del usuario.

**¿Qué es VSCode y cómo configurar un entorno básico?**

Visual Studio Code (VSCode) es un editor de código muy popular para desarrollo web. Permite trabajar con HTML, CSS y JavaScript cómodamente, con resaltado de sintaxis, autocompletado y muchas extensiones útiles.

**Instalación y configuración básica:**
1. Descarga VSCode desde https://code.visualstudio.com/
2. Instala y abre la aplicación
3. Crea una carpeta para tu proyecto
4. Abre esa carpeta en VSCode (File > Open Folder)

**Extensiones útiles:**
- **Live Server**: Inicia un servidor local y actualiza la página automáticamente al guardar cambios
- **Prettier**: Formatea automáticamente el código para mantenerlo legible y consistente
- **HTML Snippets**: Acelera la escritura de etiquetas HTML
- **CSS IntelliSense**: Autocompletado para propiedades CSS

### Ejercicio Práctico

1. Crea una carpeta llamada `mi-primer-sitio`
2. Abre la carpeta en VSCode
3. Crea un archivo `index.html` con esta estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Esta es mi primera página web.</p>
</body>
</html>
```

4. Guarda el archivo
5. Instala Live Server (busca en extensiones) y actívalo haciendo clic derecho en el archivo > "Open with Live Server"
6. Verás tu página en el navegador

---

## 🔹 SECCIÓN 2 — Fundamentos de HTML5

### Objetivo
Aprender a estructurar correctamente una página web.

### Contenido

**Estructura Base de HTML5**

Toda página HTML5 comienza con una declaración de tipo de documento y luego las etiquetas principales:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Metadatos y configuración -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página</title>
</head>
<body>
    <!-- Contenido visible -->
</body>
</html>
```

- `<!DOCTYPE html>`: Declara que es un documento HTML5
- `<html>`: Contenedor raíz de la página
- `<head>`: Contiene metadatos (no se ve en la página)
- `<body>`: Contiene todo el contenido visible

**Etiquetas de Texto**

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Subtítulo menor</h3>
<!-- ... hasta <h6> -->

<p>Este es un párrafo de texto.</p>

<p>Texto con <strong>énfasis fuerte</strong> y <em>énfasis cursiva</em>.</p>

<span>Texto en línea sin salto de línea</span>
```

**Listas**

```html
<!-- Lista Desordenada -->
<ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
</ul>

<!-- Lista Ordenada -->
<ol>
    <li>Paso uno</li>
    <li>Paso dos</li>
    <li>Paso tres</li>
</ol>
```

**Enlaces**

```html
<a href="https://ejemplo.com">Haz clic aquí</a>
<a href="otra-pagina.html">Ir a otra página</a>
<a href="#seccion">Ir a una sección de esta página</a>
```

**Imágenes**

```html
<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200">
```

El atributo `alt` es fundamental para accesibilidad y SEO.

**Tablas**

```html
<table>
    <tr>
        <th>Encabezado 1</th>
        <th>Encabezado 2</th>
    </tr>
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
    </tr>
</table>
```

**Formularios Básicos**

```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    
    <label for="email">Correo:</label>
    <input type="email" id="email" name="email">
    
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje"></textarea>
    
    <button type="submit">Enviar</button>
</form>
```

### Ejercicios Prácticos

**Ejercicio 1: Página de Biografía Personal**

Crea un archivo `biografia.html` que incluya:
- Un título principal con tu nombre
- Un párrafo introductorio
- Una lista de tus intereses
- Una foto tuya (o un placeholder)
- Información de contacto

**Ejercicio 2: Formulario de Contacto Básico**

Crea un archivo `contacto.html` con:
- Campo para nombre
- Campo para correo electrónico
- Área de texto para mensaje
- Botón de envío

**Ejercicio 3: Tabla con Datos**

Crea una tabla que contenga:
- Encabezados (por ejemplo: Nombre, Nivel, Duración)
- Al menos 5 filas de datos ficticios

---

## 🔹 SECCIÓN 3 — Semántica en HTML5

### Objetivo
Escribir HTML profesional y accesible.

### Contenido

**Etiquetas Semánticas**

HTML5 incluye etiquetas que describen el significado del contenido:

```html
<header>
    <h1>Título del Sitio</h1>
    <p>Subtítulo o descripción</p>
</header>

<nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
</nav>

<main>
    <section>
        <h2>Primera Sección</h2>
        <article>
            <h3>Artículo 1</h3>
            <p>Contenido del artículo...</p>
        </article>
        <article>
            <h3>Artículo 2</h3>
            <p>Contenido del artículo...</p>
        </article>
    </section>

    <aside>
        <h2>Barra Lateral</h2>
        <p>Contenido adicional...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

**Ventajas de la Semántica:**
- Mejora el SEO (buscadores entienden mejor el contenido)
- Mejor accesibilidad (lectores de pantalla navegan mejor)
- Código más legible y mantenible
- Estructura clara del contenido

**Atributos Globales**

```html
<!-- id: Identificador único -->
<section id="seccion-principal">...</section>

<!-- class: Para agrupar elementos con estilos comunes -->
<p class="destacado">Párrafo importante</p>
<p class="destacado">Otro párrafo importante</p>

<!-- data-*: Atributos personalizados para guardar datos -->
<button data-accion="guardar" data-id="123">Guardar</button>
```

**Accesibilidad Básica**

```html
<!-- Siempre incluir alt en imágenes -->
<img src="foto.jpg" alt="Foto de perfil de Juan Pérez">

<!-- Usar roles cuando sea necesario -->
<div role="alert">Mensaje de error importante</div>

<!-- Asociar labels con inputs -->
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email">
```

### Ejercicios Prácticos

**Ejercicio 1: Sitio de Noticias**

Crea `noticias.html` con estructura semántica que incluya:
- Header con logo y navegación
- Sección principal con varios artículos
- Barra lateral con noticias destacadas
- Footer

**Ejercicio 2: Rediseñar Biografía con Semántica**

Reescribe tu página de biografía de la sección 2 usando:
- `<header>` para la presentación inicial
- `<section>` para diferentes áreas temáticas
- `<article>` para cada bloque de contenido
- `<footer>` para información de contacto

---

## 🔹 SECCIÓN 4 — Fundamentos de CSS3

### Objetivo
Aprender a dar estilo a tu HTML.

### Contenido

**¿Qué es CSS?**

CSS (Cascading Style Sheets) es el lenguaje que controla la apariencia visual de una página: colores, tamaños, espacios, tipografía y más.

**Formas de Aplicar CSS**

**1. CSS Inline (dentro de la etiqueta)**
```html
<p style="color: red; font-size: 18px;">Texto rojo</p>
```
❌ No recomendado para proyectos grandes

**2. CSS Internal (en el head)**
```html
<head>
    <style>
        p { color: blue; }
    </style>
</head>
```
✓ Bueno para páginas pequeñas

**3. CSS External (archivo separado)** ⭐ Recomendado
```html
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
```

**Selectores Básicos**

```css
/* Por etiqueta */
p { color: black; }

/* Por clase */
.destacado { font-weight: bold; }

/* Por id */
#principal { background-color: lightgray; }

/* Múltiples selectores */
h1, h2, h3 { color: navy; }
```

**Propiedades Esenciales**

```css
/* Colores */
color: red;                          /* Color del texto */
background-color: yellow;            /* Color de fondo */

/* Tamaño */
font-size: 16px;                     /* Tamaño de fuente */
width: 300px;                        /* Ancho */
height: 200px;                       /* Alto */

/* Espacios */
margin: 20px;                        /* Espacio externo */
padding: 15px;                       /* Espacio interno */

/* Bordes */
border: 2px solid black;             /* Borde */
border-radius: 10px;                 /* Bordes redondeados */

/* Sombra */
box-shadow: 0 4px 8px rgba(0,0,0,0.2);
```

**Modelo de Caja (Box Model)**

Cada elemento está compuesto por:
1. **Content**: El contenido (texto, imágenes)
2. **Padding**: Espacio interno
3. **Border**: Borde
4. **Margin**: Espacio externo

```css
div {
    content-width: 200px;
    padding: 10px;
    border: 2px solid black;
    margin: 15px;
}
```

**Fuentes y Tipografía**

```css
body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    font-weight: normal;              /* normal, bold, 700 */
    text-align: center;               /* left, right, center, justify */
}
```

### Ejercicios Prácticos

**Ejercicio 1: Dar Estilo a Tu Biografía**

1. Crea un archivo `estilos.css`
2. Enlázalo en tu `biografia.html`
3. Aplica estilos:
   - Elige colores para fondo y texto
   - Define una fuente legible
   - Ajusta tamaños de títulos y párrafos
   - Añade márgenes y rellenos

**Ejercicio 2: Tarjeta de Presentación**

Crea un HTML con una `<div>` que simule una tarjeta y aplícale:
- Ancho de 300px
- Borde de 2px
- Bordes redondeados
- Sombra
- Colores profesionales
- Espaciado interno

```html
<div class="tarjeta">
    <h2>Mi Nombre</h2>
    <p>Desarrollador Web</p>
</div>
```

---

## 🔹 SECCIÓN 5 — Selectores, Herencia y Especificidad

### Objetivo
Dominar el comportamiento real del CSS en proyectos.

### Contenido

**Selectores Avanzados**

```css
/* Descendiente: Todos los <p> dentro de <div> */
div p { color: blue; }

/* Hijo directo: Solo <p> que son hijos directos de <div> */
div > p { color: green; }

/* Adyacente: <p> inmediatamente después de <h2> */
h2 + p { font-weight: bold; }

/* Hermano general: Todos los <p> después de <h2> */
h2 ~ p { margin-left: 20px; }

/* Primer hijo */
li:first-child { font-weight: bold; }

/* Último hijo */
li:last-child { border-bottom: none; }

/* Enésimo hijo */
li:nth-child(2) { background-color: yellow; }
li:nth-child(odd) { background-color: lightgray; }
li:nth-child(even) { background-color: white; }
```

**Herencia y Cascada**

```css
body {
    font-family: Arial;
    color: black;
}

/* Los elementos heredan font-family y color de body */
p { }
```

No todo se hereda (ejemplo: margin, padding, border no se heredan).

**Especificidad**

La especificidad determina qué estilo se aplica cuando hay conflicto:

```css
/* Especificidad baja */
p { color: blue; }

/* Especificidad media (clase) */
.importante { color: red; }

/* Especificidad alta (id) */
#principal { color: green; }

/* Especificidad altísima (inline) */
<p style="color: purple;">Texto</p>
```

Orden de especificidad (de menor a mayor):
1. Etiquetas
2. Clases y atributos
3. ID
4. Estilos inline

**Variables CSS**

```css
:root {
    --color-primario: #3498db;
    --color-secundario: #2ecc71;
    --espaciado: 16px;
}

body {
    color: var(--color-primario);
    margin: var(--espaciado);
}

button {
    background-color: var(--color-secundario);
}

/* Cambiar fácilmente valores globales */
@media (max-width: 768px) {
    :root {
        --espaciado: 12px;
    }
}
```

### Ejercicios Prácticos

**Ejercicio 1: Menú Vertical Avanzado**

Crea un menú con selectores avanzados:

```html
<ul class="menu">
    <li><a href="#home">Inicio</a></li>
    <li><a href="#about">Acerca de</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
</ul>
```

```css
.menu li:first-child a { font-weight: bold; }
.menu li:last-child { border-bottom: none; }
.menu li:nth-child(even) { background-color: #f0f0f0; }
.menu a:hover { color: #3498db; }
```

**Ejercicio 2: Sistema de Variables CSS**

Define variables para tu sitio y úsalas:

```css
:root {
    --primary: #2c3e50;
    --accent: #e74c3c;
    --text: #333;
    --padding: 20px;
}

body { color: var(--text); }
button { background: var(--accent); }
.container { padding: var(--padding); }
```

---

## 🔹 SECCIÓN 6 — Layouts: Display, Flexbox y Grid

### Objetivo
Aprender a organizar contenido como lo hacen los profesionales.

### Contenido

**Display Property**

```css
/* Block: Ocupa todo el ancho disponible */
display: block;              /* <div>, <p>, <h1> por defecto */

/* Inline: Solo el espacio necesario, en la misma línea */
display: inline;             /* <span>, <a>, <strong> por defecto */

/* Inline-block: Mezcla de ambos */
display: inline-block;

/* Flexbox: Sistema flexible unidimensional */
display: flex;

/* Grid: Sistema bidimensional */
display: grid;

/* None: Oculta el elemento */
display: none;
```

**Flexbox**

Perfecta para organizar elementos en una dirección (fila o columna):

```css
.contenedor {
    display: flex;
    
    /* Alineación en eje principal (horizontal por defecto) */
    justify-content: center;           /* flex-start, flex-end, space-around, space-between */
    
    /* Alineación en eje cruzado (vertical) */
    align-items: center;               /* flex-start, flex-end, stretch */
    
    /* Dirección de los elementos */
    flex-direction: row;               /* row, column, row-reverse, column-reverse */
    
    /* Permitir que los elementos se ajusten a la siguiente línea */
    flex-wrap: wrap;                   /* nowrap, wrap, wrap-reverse */
    
    /* Espacio entre elementos */
    gap: 10px;
}

.item {
    flex: 1;                           /* Crece para ocupar espacio disponible */
}
```

**CSS Grid**

Para layouts bidimensionales complejos:

```css
.grid-container {
    display: grid;
    
    /* Definir columnas */
    grid-template-columns: 1fr 1fr 1fr;     /* Tres columnas iguales */
    grid-template-columns: 200px 1fr;      /* Primera 200px, segunda flexible */
    grid-template-columns: repeat(4, 1fr);  /* Cuatro columnas iguales */
    
    /* Definir filas */
    grid-template-rows: 100px auto 100px;
    
    /* Espacio entre celdas */
    gap: 20px;
    grid-gap: 20px;                    /* Versión antigua */
}

/* Nombrar áreas */
.grid-container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### Ejercicios Prácticos

**Ejercicio 1: Header Responsive con Flexbox**

```html
<header class="header">
    <div class="logo">Mi Logo</div>
    <nav class="menu">
        <a href="#home">Inicio</a>
        <a href="#about">Acerca</a>
        <a href="#servicios">Servicios</a>
    </nav>
    <button class="cta">Contactar</button>
</header>
```

```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: white;
}

.menu {
    display: flex;
    gap: 20px;
}

.menu a {
    color: white;
    text-decoration: none;
}
```

**Ejercicio 2: Galería con CSS Grid**

```html
<div class="galeria">
    <img src="img1.jpg" alt="Imagen 1">
    <img src="img2.jpg" alt="Imagen 2">
    <img src="img3.jpg" alt="Imagen 3">
    <img src="img4.jpg" alt="Imagen 4">
</div>
```

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.galeria img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
}
```

---

## 🔹 SECCIÓN 7 — Responsive Design

### Objetivo
Hacer diseños que funcionen en móvil, tablet y desktop.

### Contenido

**Media Queries**

Aplican estilos diferentes según características del dispositivo:

```css
/* Pantallas pequeñas (móvil) */
@media (max-width: 600px) {
    body { font-size: 14px; }
    .container { width: 100%; }
}

/* Tablets */
@media (min-width: 601px) and (max-width: 1024px) {
    .container { width: 90%; }
}

/* Pantallas grandes (desktop) */
@media (min-width: 1025px) {
    .container { width: 1200px; }
}
```

**Mobile-First vs Desktop-First**

**Mobile-First** (Recomendado):
```css
/* Estilos base para móvil */
body { font-size: 14px; }

/* Ampliar para tablets */
@media (min-width: 768px) {
    body { font-size: 16px; }
}

/* Ampliar para desktop */
@media (min-width: 1024px) {
    body { font-size: 18px; }
}
```

**Desktop-First**:
```css
/* Estilos para desktop */
body { font-size: 18px; }

/* Reducir para tablets */
@media (max-width: 1024px) {
    body { font-size: 16px; }
}

/* Reducir más para móvil */
@media (max-width: 768px) {
    body { font-size: 14px; }
}
```

**Breakpoints Comunes**

```
Móvil: < 600px
Tablet: 601px - 1024px
Desktop: > 1024px
```

**Unidades Relativas**

```css
/* Porcentaje: relativo al padre */
.elemento { width: 50%; }

/* Viewport Width: % del ancho de la ventana */
.elemento { width: 100vw; }

/* Viewport Height: % del alto de la ventana */
.elemento { height: 50vh; }

/* rem: relativo al tamaño de fuente root (html) */
html { font-size: 16px; }
.elemento { padding: 1rem; }         /* 16px */
.elemento { padding: 2rem; }         /* 32px */

/* em: relativo al tamaño de fuente del elemento */
.container { font-size: 20px; }
.elemento { padding: 1em; }          /* 20px */
```

**Meta Viewport**

Esencial para responsive en el `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Ejercicios Prácticos

**Ejercicio 1: Biografía Responsive**

Adapta tu página de biografía:
- En móvil: una columna
- En tablet: dos columnas
- En desktop: tres columnas

```css
.contenedor {
    display: grid;
    grid-template-columns: 1fr;       /* Móvil */
}

@media (min-width: 768px) {
    .contenedor {
        grid-template-columns: 1fr 1fr;  /* Tablet */
    }
}

@media (min-width: 1024px) {
    .contenedor {
        grid-template-columns: 1fr 1fr 1fr;  /* Desktop */
    }
}
```

**Ejercicio 2: Menú Hamburguesa (CSS Puro)**

```html
<header>
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="menu-button">☰</label>
    <nav class="menu">
        <a href="#home">Inicio</a>
        <a href="#about">Acerca</a>
        <a href="#contacto">Contacto</a>
    </nav>
</header>
```

```css
.menu { display: none; }

#menu-toggle:checked ~ .menu {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .menu-button { display: none; }
    .menu { display: flex !important; }
}
```

---

## 🔹 SECCIÓN 8 — Animaciones y Transiciones

### Objetivo
Darle vida y dinamismo a tus páginas.

### Contenido

**Transiciones**

Suavizan cambios de propiedades:

```css
.botton {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.boton:hover {
    background-color: red;
}

/* Múltiples propiedades */
.caja {
    width: 100px;
    height: 100px;
    transition: width 0.3s, height 0.3s;
}

.caja:hover {
    width: 200px;
    height: 200px;
}

/* Transición en todo */
.elemento {
    transition: all 0.5s ease;
}
```

**Transform**

Aplica transformaciones visuales:

```css
/* Trasladar */
transform: translateX(50px);
transform: translateY(30px);
transform: translate(50px, 30px);

/* Escalar */
transform: scale(1.5);               /* 150% del tamaño original */
transform: scaleX(2);
transform: scaleY(0.5);

/* Rotar */
transform: rotate(45deg);
transform: rotateX(45deg);
transform: rotateY(45deg);

/* Sesgar */
transform: skewX(20deg);

/* Combinar */
transform: translate(50px, 30px) rotate(45deg) scale(1.2);
```

**Animaciones con @keyframes**

```css
@keyframes deslizar {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.elemento {
    animation: deslizar 2s ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
}
```

**Efectos Hover**

```css
.boton {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.boton:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

.boton:active {
    transform: translateY(0);
}
```

### Ejercicios Prácticos

**Ejercicio 1: Botón con Animación Hover**

```html
<button class="boton">Presióname</button>
```

```css
.boton {
    padding: 15px 30px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.boton:hover {
    background-color: #2980b9;
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
}
```

**Ejercicio 2: Animación al Cargar**

```html
<div class="contenedor">
    <h1>Bienvenido</h1>
    <p>Esta página tiene una animación de carga</p>
</div>
```

```css
@keyframes aparecer {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.contenedor {
    animation: aparecer 1s ease-out;
}

h1 { animation: aparecer 0.8s ease-out 0.2s both; }
p { animation: aparecer 0.8s ease-out 0.4s both; }
```

---

## 🔹 SECCIÓN 9 — Proyecto Final: Landing Page Completa

### Objetivo
Integrar todo lo aprendido en un proyecto completo.

### Descripción del Proyecto

Crearás una landing page moderna y profesional que incluya:

**Estructura General**
```
- Header con menú de navegación
- Sección Héroe (hero section)
- Sección de Características
- Sección de Testimonios
- Galería de Trabajos/Proyectos
- Formulario de Contacto
- Footer
```

**Requerimientos**

✅ Diseño profesional y moderno
✅ Responsive (funciona en móvil, tablet y desktop)
✅ Animaciones suaves al interactuar
✅ Menú de navegación
✅ Formulario de contacto
✅ Galerías con imágenes
✅ Colores consistentes usando variables CSS
✅ Tipografía clara y legible

### Estructura HTML Recomendada

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Landing Page</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

<!-- Header -->
<header class="header">
    <div class="container">
        <div class="logo">Mi Empresa</div>
        <nav class="menu">
            <a href="#inicio">Inicio</a>
            <a href="#caracteristicas">Características</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </div>
</header>

<!-- Sección Héroe -->
<section class="hero">
    <div class="hero-content">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Descubre lo que puedo hacer por ti</p>
        <button class="cta">Empezar Ahora</button>
    </div>
</section>

<!-- Características -->
<section id="caracteristicas" class="caracteristicas">
    <h2>¿Por qué elegirnos?</h2>
    <div class="cards">
        <div class="card">
            <h3>Característica 1</h3>
            <p>Descripción de la característica</p>
        </div>
        <div class="card">
            <h3>Característica 2</h3>
            <p>Descripción de la característica</p>
        </div>
        <div class="card">
            <h3>Característica 3</h3>
            <p>Descripción de la característica</p>
        </div>
    </div>
</section>

<!-- Galería -->
<section id="galeria" class="galeria">
    <h2>Nuestros Trabajos</h2>
    <div class="grid-galeria">
        <img src="trabajo1.jpg" alt="Trabajo 1">
        <img src="trabajo2.jpg" alt="Trabajo 2">
        <img src="trabajo3.jpg" alt="Trabajo 3">
        <img src="trabajo4.jpg" alt="Trabajo 4">
    </div>
</section>

<!-- Formulario de Contacto -->
<section id="contacto" class="contacto">
    <h2>Ponte en Contacto</h2>
    <form class="formulario">
        <input type="text" placeholder="Tu Nombre" required>
        <input type="email" placeholder="Tu Email" required>
        <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
        <button type="submit" class="boton-enviar">Enviar</button>
    </form>
</section>

<!-- Footer -->
<footer class="footer">
    <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
</footer>

</body>
</html>
```

### Estilos CSS Recomendados

```css
/* Variables y Globales */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
    --spacing: 20px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
}

/* Header */
.header {
    background-color: var(--dark-color);
    color: white;
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.menu {
    display: flex;
    gap: 30px;
}

.menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.menu a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 100px 20px;
    text-align: center;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
    animation: fadeInUp 0.8s ease-out;
}

.hero-content p {
    font-size: 24px;
    margin-bottom: 30px;
    animation: fadeInUp 0.8s ease-out 0.2s both;
}

.cta {
    padding: 15px 40px;
    font-size: 18px;
    background-color: white;
    color: var(--primary-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    animation: fadeInUp 0.8s ease-out 0.4s both;
}

.cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Características */
.caracteristicas {
    padding: 80px 20px;
    background-color: var(--light-color);
}

.caracteristicas h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 50px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* Galería */
.galeria {
    padding: 80px 20px;
}

.galeria h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 50px;
}

.grid-galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.grid-galeria img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.3s;
}

.grid-galeria img:hover {
    transform: scale(1.05);
}

/* Contacto */
.contacto {
    padding: 80px 20px;
    background-color: var(--light-color);
}

.contacto h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 50px;
}

.formulario {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.formulario input,
.formulario textarea {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    font-family: inherit;
}

.boton-enviar {
    padding: 15px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.3s;
}

.boton-enviar:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background-color: var(--dark-color);
    color: white;
    text-align: center;
    padding: 20px;
}

/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .menu { gap: 15px; }
    .hero-content h1 { font-size: 32px; }
    .hero-content p { font-size: 18px; }
    .caracteristicas h2,
    .galeria h2,
    .contacto h2 { font-size: 28px; }
}
```

### Checklist Final del Proyecto

- [ ] Header con navegación funcional
- [ ] Sección hero con llamada a la acción
- [ ] Sección de características con tarjetas
- [ ] Galería de imágenes responsive
- [ ] Formulario de contacto
- [ ] Footer con información
- [ ] Responsive en todos los dispositivos
- [ ] Animaciones suaves
- [ ] Paleta de colores consistente
- [ ] Tipografía clara y profesional
- [ ] Código HTML semántico
- [ ] CSS organizado y mantenible
- [ ] Cargando rápido

---

## 📚 Resumen de Recursos Útiles

### Herramientas Recomendadas
- **VSCode**: Editor de código
- **Live Server**: Ver cambios en tiempo real
- **Prettier**: Formatear código automáticamente
- **Chrome DevTools**: Inspeccionar y depurar

### Referencias Online
- MDN Web Docs: https://developer.mozilla.org/es/
- W3Schools: https://www.w3schools.com/
- CSS-Tricks: https://css-tricks.com/
- CanIUse: https://caniuse.com/

### Próximos Pasos
Después de completar este curso:
1. Aprende **JavaScript** para interactividad
2. Estudia **Frameworks** como React o Vue
3. Practica con **proyectos reales**
4. Contribuye a **proyectos open source**

¡Felicidades por completar este plan de aprendizaje! 🎉