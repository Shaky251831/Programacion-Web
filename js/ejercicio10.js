// Elementos del DOM que vamos a usar.
const inputCelsius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const btnConvertir = document.getElementById("btnConvertir");
const errorCelsius = document.getElementById("errorCelsius");
// Función principal de conversión.
function convertirCelsiusAFahrenheit() {
    const valor = inputCelsius.value.trim();
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

    // 6. Fórmula de conversión: F = (C x 9/5) + 32
    const celsius = parseFloat(valor);
    const fahrenheit = (celsius * 9 / 5) + 32;

// Mostramos el resultado en la caja readonly (redondeado a 2 decimales).
    inputFahrenheit.value = fahrenheit.toFixed(2) + " °F";
}

// Función auxiliar para mostrar mensajes de error.
function mostrarError(mensaje) {
    errorCelsius.textContent = mensaje;
    inputCelsius.classList.add("invalido");
    inputFahrenheit.value = "";
}

// Función auxiliar para limpiar el estado de error
function limpiarError() {
    errorCelsius.textContent = "";
    inputCelsius.classList.remove("invalido");
}

//Evento: clic en el botón "Convertir"
btnConvertir.addEventListener("click", convertirCelsiusAFahrenheit);

