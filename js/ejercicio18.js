// 1. Seleccionar los elementos indispensables del DOM según tu guía técnica
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// 2. Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    const texto = input.value.trim(); // Obtiene el valor eliminando espacios inútiles

    // Validación de campo vacío usando SweetAlert2
    if (texto === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor, escribe algo antes de intentar agregarlo a la lista.',
            confirmButtonColor: '#927bc0'
        });
        return;
    }

    // 3. Crear el nuevo elemento 'li' dinámicamente
    const li = document.createElement('li');
    
    // Le asignamos clases de Bootstrap para que sea un elemento de lista flexible y estético
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2', 'rounded-3', 'border');

    // Crear el nodo de texto y meterlo al 'li'
    const textoNodo = document.createTextNode(texto);
    li.appendChild(textoNodo);

    // 4. Crear el botón de eliminar dinámico
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    
    // Agregamos clases de Bootstrap al botón (btn-danger = rojo, btn-sm = pequeño)
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'fw-semibold', 'px-3');

    // Evento de escucha para eliminar este 'li' específico al hacer clic
    botonEliminar.addEventListener('click', function() {
        // Alerta SweetAlert2 antes de proceder con el borrado del DOM
        Swal.fire({
            title: '¿Eliminar elemento?',
            text: `Vas a remover "${texto}" de la lista actual.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444', // Rojo de peligro
            cancelButtonColor: '#cbd5e1',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                li.remove(); // Remueve el nodo li completo del documento HTML
            }
        });
    });

    // Añadir el botón recién creado dentro del contenedor 'li'
    li.appendChild(botonEliminar);

    // Agregar el 'li' completo a nuestro contenedor principal 'ul'
    lista.appendChild(li);

    // Limpiar el input y devolverle el foco para seguir escribiendo rápidamente
    input.value = '';
    input.focus();
}

// 5. Asignar los respectivos listeners de eventos
botonAgregar.addEventListener('click', agregarElemento);

// Soporte opcional para añadir elementos presionando la tecla "Enter"
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});