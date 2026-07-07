// Elementos del DOM que vamos a usar.
const inputKilometros = document.getElementById("kilometros");
const inputMillas = document.getElementById("millas");
const btnConvertir = document.getElementById("btnConvertir");
const errorKilometros = document.getElementById("errorKilometros");
// Función principal de conversión.
function convertirKilimetrosAMillas() {
    const valor = inputKilometros.value.trim();
// Validación: campo vacío.
    if (valor === "") {
        mostrarError("Ingresa un valor antes de convertir.");
        return;
    }
// Validación: valor numérico.
// Usamos isNaN() para asegurarnos de que lo ingresado sea un número.
    if (isNaN(valor)) {
        mostrarError("El valor debe ser numérico.");
        return;
    }

// Si pasa las validaciones, limpiamos el error.
    limpiarError();

//Fórmula de conversión: M = K x 0.621371
    const kilometros = parseFloat(valor);
    const millas = kilometros * 0.621371;

// Mostramos el resultado en la caja readonly (redondeado a 2 decimales).
    inputMillas.value = millas.toFixed(2) + " mi";
}

// Función auxiliar para mostrar mensajes de error.
function mostrarError(mensaje) {
    errorKilometros.textContent = mensaje;
    inputKilometros.classList.add("invalido");
    inputMillas.value = "";
}

// Función auxiliar para limpiar el estado de error
function limpiarError() {
    errorKilometros.textContent = "";
    inputKilometros.classList.remove("invalido");
}

//Evento: clic en el botón "Convertir"
btnConvertir.addEventListener("click", convertirKilimetrosAMillas);

