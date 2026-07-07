let listaEstudiantes = [];
const inputNombre = document.getElementById("nombre");
const inputCalificacion = document.getElementById("calificacion");
const inputPromedio = document.getElementById("promedio");
const inputMayor = document.getElementById("estudianteMayor");
const inputMenor = document.getElementById("estudianteMenor");

const btnAgregar = document.getElementById("btnAgregar");
const btnCalcular = document.getElementById("btnCalcular");

const errorNombre = document.getElementById("errorNombre");
const errorCalificacion = document.getElementById("errorCalificacion");
const contadorEstudiantes = document.getElementById("contadorEstudiantes");

function agregarEstudiante() {
    const nombreVal = inputNombre.value.trim();
    const calificacionVal = inputCalificacion.value.trim();

    limpiarErrores();

    if (nombreVal === "") {
        mostrarError(errorNombre, inputNombre, "Ingresa el nombre del estudiante.");
        return;
    }
    if (calificacionVal === "") {
        mostrarError(errorCalificacion, inputCalificacion, "Ingresa la calificación.");
        return;
    }

    if (isNaN(calificacionVal)) {
        mostrarError(errorCalificacion, inputCalificacion, "La calificación debe ser un número.");
        return;
    }

    const nota = parseFloat(calificacionVal);
    if (nota < 0 || nota > 100) {
        mostrarError(errorCalificacion, inputCalificacion, "La calificación debe estar entre 0 y 100.");
        return;
    }

    const nuevoEstudiante = {
        nombre: nombreVal,
        calificacion: nota
    };
    listaEstudiantes.push(nuevoEstudiante);

    contadorEstudiantes.textContent = `Estudiantes registrados: ${listaEstudiantes.length}`;
    
    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
}
function calcularEstadisticas() {
    if (listaEstudiantes.length === 0) {
        mostrarError(errorNombre, inputNombre, "Agregar al menos un estudiante antes de calcular.");
        return;
    }
    limpiarErrores();

    const sumaTotal = listaEstudiantes.reduce((total, est) => total + est.calificacion, 0);
    const promedio = sumaTotal / listaEstudiantes.length;

    const notaMaxima = Math.max(...listaEstudiantes.map(est => est.calificacion));
    const notaMinima = Math.min(...listaEstudiantes.map(est => est.calificacion));

    const estudianteMax = listaEstudiantes.find(est => est.calificacion === notaMaxima);
    const estudianteMin = listaEstudiantes.find(est => est.calificacion === notaMinima);

    inputPromedio.value = promedio.toFixed(2);
    inputMayor.value = `${estudianteMax.nombre} (${notaMaxima})`;
    inputMenor.value = `${estudianteMin.nombre} (${notaMinima})`;
}

function mostrarError(elementoError, elementoInput, mensaje) {
    elementoError.textContent = mensaje;
    elementoInput.classList.add("invalido");
}

function limpiarErrores() {
    errorNombre.textContent = "";
    errorCalificacion.textContent = "";
    inputNombre.classList.remove("invalido");
    inputCalificacion.classList.remove("invalido");
}
btnAgregar.addEventListener("click", agregarEstudiante);
btnCalcular.addEventListener("click", calcularEstadisticas);