# Actividad 3: Componente Visual con JS - Carrusel Dinámico

### 1. Portada 
* **Alumna:** Marquez Agustin Briseida.
* **Curso:** 2026 Verano 7 a 10 - Programación Web.

* **Nombre del Componente:** Carrusel de Imágenes Reutilizable (`CarruselReutilizable`)
* **Problema que resuelve:** Automatiza la creación y el diseño de galerías o controles deslizando imágenes en la interfaz de usuario. Esto evita tener que escribir estructuras repetitivas de HTML y CSS manualmente, lo que permite que cualquier colección de imagenes se pueda hacer con una sola linea de codigo en JavaScript.

---

### 2. Instalación
Para poner este componente en cualquier documento HTML, se debe de arrastrar las carpetas de recursos al espacio de trabajo e incluir en el archivo base:

```html
<link rel="stylesheet" href="css/componente.css">

<script src="js/componente.js"></script>

```

---
### 3. Ejemplos de uso (Código Embebido)

Para integrar y poner en funcionamiento del carrusel de series coreanas, se debe de poner la estructura en el archivo HTML y despues realizar la instancia de la clase desde JavaScript.

Estructura en el archivo HTML (`index.html`):
Se coloca un contenedor vacío con un identificador único (`id`) donde se desea que aparezca el componente visual:

```html
<div id="carrusel-series"></div>

Inicialización del componente en JavaScript:
Dentro de las etiquetas <script>, se crea un arreglo con las rutas de las imágenes locales de los doramas y se pasa como argumento junto al id del contenedor al constructor de la clase CarruselReutilizable:

const fotosSeriesCoreanas = [
    'img/imagen.jpg',
    'img/imagen1.jpg',
    'img/imagen2.jpg',
    'img/imagen3.jpg',
    'img/imagen4.jpg',
    'img/imagen5.jpg',
    'img/imagen6.jpg'
];
new CarruselReutilizable('carrusel-series', fotosSeriesCoreanas);
```
---

## Evidencias

### Capturas del formulario

![Evidencia](img/Captura.png)

### Video de demostración