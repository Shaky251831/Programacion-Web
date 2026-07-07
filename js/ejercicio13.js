const inputEdad = document.getElementById("edad");
const inputResultado = document.getElementById("resultado");
const btnVerificar = document.getElementById("btnVerificar");
const errorEdad = document.getElementById("errorEdad");

function verificarVotacion() {
    const valor = inputEdad.value.trim();

    if (valor === "") {
        mostrarError("Ingresa un valor antes de verificar.");
        return;
    }

    if (isNaN(valor)) {
        mostrarError("El valor debe ser numérico.");
        return;
    }

const edad = parseInt(valor, 10);

    if (edad < 0) {
        mostrarError("La edad debe ser un número positivo.");
        return;
    }
    limpiarError();

    if (edad >= 18) {
        inputResultado.value = "Puedes votar";
    } else {
        inputResultado.value = "No puedes votar";
    }
}
function mostrarError(mensaje) {
    errorEdad.textContent = mensaje;
    inputEdad.classList.add("invalido");
    inputResultado.value = "";
}
function limpiarError() {
    errorEdad.textContent = "";
    inputEdad.classList.remove("invalido");
}
btnVerificar.addEventListener("click", verificarVotacion);