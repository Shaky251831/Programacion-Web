const inputPesos = document.getElementById("pesos");
const inputDolares = document.getElementById("dolares");
const btnConvertir = document.getElementById("btnConvertir");
const errorPesos = document.getElementById("errorPesos");

function convertirPesosADolares() {
    const valor = inputPesos.value.trim();

    if (valor === "") {
        mostrarError("Ingresa un valor antes de convertir.");
        return;
    }

    if (isNaN(valor)) {
        mostrarError("El valor debe ser numérico.");
        return;
    }

    limpiarError();
    const pesos = parseFloat(valor);
    const dolares = pesos / 18.5; 

    inputDolares.value = dolares.toFixed(2) + " USD";
}
function mostrarError(mensaje) { 
    errorPesos.textContent = mensaje;
    inputPesos.classList.add("invalido");
    inputDolares.value = "";
}
function limpiarError() {
    errorPesos.textContent = "";
    inputPesos.classList.remove("invalido");
}

btnConvertir.addEventListener("click", convertirPesosADolares);

