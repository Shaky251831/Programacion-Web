// js/componente.js

class CarruselReutilizable {
    constructor(contenedorId, listaImagenes) {
        this.contenedor = document.getElementById(contenedorId);
        this.imagenes = listaImagenes;
        this.indiceActual = 0;
        this.trackElement = null;
        
        if (this.contenedor && this.imagenes.length > 0) {
            this.init();
        }
    }
    init() {
        this.contenedor.classList.add('custom-carrusel-container');

        // Crear el "track" (riel deslizante) que moverá las imágenes
        this.trackElement = document.createElement('div');
        this.trackElement.className = 'custom-carrusel-track';

        this.imagenes.forEach(url => {
            const slide = document.createElement('div');
            slide.className = 'custom-carrusel-slide';
            slide.innerHTML = `<img src="${url}" alt="Imagen de carrusel">`;
            this.trackElement.appendChild(slide);
        });

        const btnPrev = document.createElement('button');
        btnPrev.className = 'carrusel-btn btn-prev';
        btnPrev.innerHTML = '&#10094;'; 

        const btnNext = document.createElement('button');
        btnNext.className = 'carrusel-btn btn-next';
        btnNext.innerHTML = '&#10095;'; 

        this.contenedor.appendChild(this.trackElement);
        this.contenedor.appendChild(btnPrev);
        this.contenedor.appendChild(btnNext);

        btnPrev.addEventListener('click', () => this.mostrarAnterior());
        btnNext.addEventListener('click', () => this.mostrarSiguiente());
        console.log(`Carrusel inicializado correctamente con ${this.imagenes.length} imágenes.`);

        this.actualizarPosicion();
    }
    actualizarPosicion() {
        const desplazamiento = this.indiceActual * -100;
        this.trackElement.style.transform = `translateX(${desplazamiento}%)`;
        console.log(`Carrusel movido al slide índice: ${this.indiceActual}`);
    }
    mostrarSiguiente() {
        if (this.indiceActual < this.imagenes.length - 1) {
            this.indiceActual++;
        } else {
            this.indiceActual = 0;
        }
        this.actualizarPosicion();
    }
    mostrarAnterior() {
        if (this.indiceActual > 0) {
            this.indiceActual--;
        } else {
            this.indiceActual = this.imagenes.length - 1;
        }
        this.actualizarPosicion();
    }
}