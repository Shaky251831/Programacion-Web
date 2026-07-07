// Elementos del DOM que vamos a utilizar
const inputTarea = document.getElementById("nuevaTareaInput");
const btnAgregar = document.getElementById("btnAgregarTarea");
const contenedorLista = document.getElementById("listaTareas");
const errorTarea = document.getElementById("errorTarea");

/**
 * 1. CLOSURE PRINCIPAL (manejarTareas)
 * Encapsula la lista de tareas en un scope local privado protegiendo su estado.
 */
const manejarTareas = (() => {
    // Variable privada dentro del closure (Scope local)
    const CLAVE_STORAGE = "tareas_devsolutions";

    // Función privada: Obtiene los elementos y los parsea desde JSON
    const obtenerTareasDelStorage = () => {
        const datos = localStorage.getItem(CLAVE_STORAGE);
        return datos ? JSON.parse(datos) : [];
    };

    // Función privada: Convierte la lista a JSON y la guarda en Local Storage
    const guardarTareasEnStorage = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };

    // Retornamos las funciones públicas que manipulan el entorno léxico cerrado
    return {
        agregar: (textoTarea) => {
            const tareas = obtenerTareasDelStorage();
            tareas.push({
                id: Date.now(), // ID único basado en tiempo
                texto: textoTarea
            });
            guardarTareasEnStorage(tareas);
        },
        obtener: () => {
            return obtenerTareasDelStorage();
        },
        eliminar: (idTarea) => {
            let tareas = obtenerTareasDelStorage();
            // Filtramos el arreglo excluyendo el ID seleccionado
            tareas = tareas.filter(tarea => tarea.id !== idTarea);
            guardarTareasEnStorage(tareas);
        }
    };
})();

/**
 * 2. FUNCIÓN: RENDERIZAR TAREAS
 * Se encarga de pintar dinámicamente las tareas en el HTML.
 */
function renderizarTareas() {
    // Limpiamos el contenedor ul antes de reescribir
    contenedorLista.innerHTML = "";
    
    // Recuperamos las tareas mediante el closure público
    const tareasActuales = manejarTareas.obtain || manejarTareas.obtener();

    if (tareasActuales.length === 0) {
        contenedorLista.innerHTML = `<li class="item-tarea" style="color: #666; justify-content: center;">No hay tareas pendientes.</li>`;
        return;
    }

    // Recorremos el arreglo de objetos para crear los elementos HTML
    tareasActuales.forEach(tarea => {
        const li = document.createElement("li");
        li.className = "item-tarea";
        
        li.innerHTML = `
            <span>${tarea.texto}</span>
            <button class="boton-eliminar" onclick="confirmarEliminacion(${tarea.id})">Eliminar</button>
        `;
        
        contenedorLista.appendChild(li);
    });
}

/**
 * 3. FUNCIÓN: AGREGAR TAREA
 * Captura la entrada del input, valida y delega el guardado.
 */
function procesarAgregarTarea() {
    const texto = inputTarea.value.trim();

    limpiarError();

    // Validación: Campo vacío
    if (texto === "") {
        mostrarError("Por favor, describe la tarea antes de agregarla.");
        return;
    }

    // Guardamos usando el closure
    manejarTareas.agregar(texto);

    // Limpiamos el input y actualizamos la interfaz
    inputTarea.value = "";
    renderizarTareas();
}

/**
 * 4. FUNCIÓN: CONFIRMAR ELIMINACIÓN (Con SweetAlert2)
 * Pide confirmación al usuario mediante un modal moderno antes de borrar del Local Storage.
 */
function confirmarEliminacion(idTarea) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta acción eliminará de forma permanente la tarea pendiente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#927bc0', // Color morado de tu marca
        cancelButtonColor: '#cbd5e1',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Eliminamos la tarea mediante el closure
            manejarTareas.eliminar(idTarea);
            // Volvemos a pintar la lista actualizada
            renderizarTareas();

            // Mensaje de éxito
            Swal.fire({
                title: '¡Eliminado!',
                text: 'La tarea ha sido borrada.',
                icon: 'success',
                confirmButtonColor: '#927bc0'
            });
        }
    });
}

// Funciones auxiliares estandarizadas para el manejo de errores en el formulario
function mostrarError(mensaje) {
    errorTarea.textContent = mensaje;
    inputTarea.classList.add("invalido");
}

function limpiarError() {
    errorTarea.textContent = "";
    inputTarea.classList.remove("invalido");
}

// ASIGNACIÓN DE EVENTOS
btnAgregar.addEventListener("click", procesarAgregarTarea);

// Permitir agregar también presionando la tecla "Enter" en el input
inputTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        procesarAgregarTarea();
    }
});

// EVENTO INICIAL: Ejecutar al cargar la página por primera vez
document.addEventListener("DOMContentLoaded", renderizarTareas);