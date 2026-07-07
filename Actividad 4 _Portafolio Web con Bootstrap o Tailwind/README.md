# Actividad 4.  Portafolio Web con Bootstrap o Tailwind.

**Estudiante:** Briseida Márquez Agustín  
**Curso:** Programación Web 2026  
---

## Descripción del Proyecto.
Este proyecto consiste en el desarrollo y personalización de un portafolio web. Tome como base la plantilla profesional **DevFolio**, adaptando por completo su estructura y estilos para reflejar mi perfil académico y habilidades.
Elframework CSS que use fue el Bootstrap.
---

##  Descripción de cada sección.
## Sobre mi.
Estudiante de la materia de Programacion Web, me gusta aprender nuevas formas del uso de tecnologia y como aplicarlas.
Aprendo como funcionan las paginas web y me gusta ir practicando poco a poco
con HTML, CSS y JavaScript.
---
## 🛠️ Tecnologías.
* **HTML5** 
* **CSS3** 
* **JavaScript**  
* **Git & GitHub** 
---
## Link de la Plantilla. 
https://bootstraptaste-com.translate.goog/devfolio-free-portfolio-bootstrap-html-template/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc 

## Proceso de Creación.

### Paso 1: Selección y Descarga de la Plantilla.
Busque una plantilla profesional de Bootstrap a mi gusto, despues de descargar el paquete de archivos, se analizaron los estilos y los scripts incluidos para comprender la arquitectura inicial del sitio.

### Paso 2: Limpieza y Depuración del Código HTML.
Para adaptar el sitio a los requerimientos específicos de la entrega, abrí el archivo `index.html` y empece a remover las secciones innecesarias:
* Elimine el bloque completo de la sección de proyectos (Portfolio) y contadores numéricos.
* Se simplificó la sección de testimonios (carrusel), eliminando dos de los tres elementos originales para conservar únicamente una tarjeta fija con el testimonio de **"Briseida Márquez Agustín, Curso de Verano 2026"**.

### Paso 3: Corrección de Errores en Consola (JavaScript y CDNs).
Al eliminar elementos del HTML, la consola del navegador comenzó a arrojar errores de tipo `Uncaught TypeError` debido a que los scripts seguían intentando inicializar componentes inexistentes. Para solucionarlo:
* Abrí el archivo `js/portafolio.js` y elimine la línea de código `new PureCounter();` que controlaba los contadores borrados.

### Paso 4: Ajuste de Parámetros en el Carrusel (Swiper.js).
Como la sección de testimonios ahora solo cuenta con un solo elemento, se modificó el bloque de configuración JSON embebido en el componente Swiper del HTML. Se cambiaron las propiedades a `"loop": false` y `"autoplay": false` para evitar animaciones infinitas.

### Paso 5: Personalización de Estilos y Contenido
* Actualizace todos los textos informativos por datos reales, incluyendo el nombre, descripción del perfil de estudiante y detalles de las habilidades técnicas.
* En la sección **"Tecnologías"**, se removío los iconos en forma de círculo flotante de las tarjetas mediante modificaciones en el CSS y HTML, aplicando la clase `text-center` de Bootstrap para alinear el contenido de forma más estética.

### Paso 6: Implementación del Formulario de Contacto
Se configuró un script personalizado de JavaScript al final del documento para escuchar el evento `submit` del formulario de contacto. Este proceso captura los valores de los campos de texto y construye una URL con el protocolo `mailto:` para automatizar el envío del correo de forma nativa desde el navegador.

## Capturas de pantalla.
