const inputNumeros = document.getElementById("numerosInput");
const inputMayor = document.getElementById("numMayor");
const inputMenor = document.getElementById("numMenor");
const inputPromedio = document.getElementById("promedio");
const btnCalcular = document.getElementById("btnCalcular");
const errorNumeros = document.getElementById("errorNumeros");


function procesarNumeros() {
    const valor = inputNumeros.value.trim();

    if (valor === "") {
        mostrarError("Ingresa una lista de números antes de calcular.");
        return;
    }
// Separar la cadena por comas y limpiar espacios individuales
    const partes = valor.split(",");
    
// Convertir a un arreglo de números usando map()
    const arregloNumeros = partes.map(num => Number(num.trim()));

// Validación: Verificar que todos los elementos mapeados sean números válidos
// some(isNaN) comprueba si al menos uno falló al convertirse
    if (arregloNumeros.some(isNaN) || arregloNumeros.length === 0) {
        mostrarError("Asegúrate de ingresar únicamente números válidos separados por comas.");
        return;
    }
// Si pasa las validaciones, limpiamos cualquier estado de error previo
    limpiarError();
// Operaciones matemáticas utilizando los métodos del documento técnico
    const maximo = Math.max(...arregloNumeros); 
    const minimo = Math.min(...arregloNumeros); 
    
// Cálculo del promedio mediante reduce()
    const suma = arregloNumeros.reduce((acc, num) => acc + num, 0);
    const prom = suma / arregloNumeros.length;

// Mostrar resultados en las cajas readonly (promedio redondeado a 2 decimales)
    inputMayor.value = maximo;
    inputMenor.value = minimo;
    inputPromedio.value = prom.toFixed(2);
}

// Función auxiliar para mostrar mensajes de error estandarizados
function mostrarError(mensaje) {
    errorNumeros.textContent = mensaje;
    inputNumeros.classList.add("invalido");
    
    inputMayor.value = "";
    inputMenor.value = "";
    inputPromedio.value = "";
}
// Función auxiliar para limpiar el estado de error
function limpiarError() {
    errorNumeros.textContent = "";
    inputNumeros.classList.remove("invalido");
}
// Evento: Clic en el botón "Calcular"
btnCalcular.addEventListener("click", procesarNumeros);