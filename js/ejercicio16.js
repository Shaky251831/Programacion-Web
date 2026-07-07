// Elementos del DOM extraídos bajo las especificaciones del problema
const inputNum1 = document.getElementById("numero1");
const inputNum2 = document.getElementById("numero2");
const inputResultado = document.getElementById("resultado");

// Parte teórica: Funciones Flecha requeridas por el documento técnico
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// Función principal coordinadora descrita en los requerimientos
function calcularOperacion(operacion) {
    const val1 = inputNum1.value.trim();
    const val2 = inputNum2.value.trim();

    // Limpieza de interfaces previa
    inputResultado.value = "";
    inputNum1.classList.remove("invalido");
    inputNum2.classList.remove("invalido");

    // Validación: Si los valores ingresados están vacíos
    if (val1 === "" || val2 === "") {
        if (val1 === "") inputNum1.classList.add("invalido");
        if (val2 === "") inputNum2.classList.add("invalido");
        
        // Uso obligatorio de SweetAlert2 para errores
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números antes de realizar la operación.',
            confirmButtonColor: '#927bc0'
        });
        return;
    }

    // Validación: Si los valores ingresados no son números
    if (isNaN(val1) || isNaN(val2)) {
        if (isNaN(val1)) inputNum1.classList.add("invalido");
        if (isNaN(val2)) inputNum2.classList.add("invalido");

        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Los valores ingresados deben ser exclusivamente numéricos.',
            confirmButtonColor: '#927bc0'
        });
        return;
    }

    // Conversión a flotantes para operar correctamente
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    let res;

    // Evaluación de la operación matemática
    switch (operacion) {
        case 'suma':
            res = sumar(n1, n2);
            break;
        case 'resta':
            res = restar(n1, n2);
            break;
        case 'multiplicacion':
            res = multiplicar(n1, n2);
            break;
        case 'division':
            res = dividir(n1, n2);
            // Atrapamos la advertencia de división por cero calculada en la función flecha
            if (typeof res === 'string') {
                inputNum2.classList.add("invalido");
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación Inválida',
                    text: res,
                    confirmButtonColor: '#927bc0'
                });
                return;
            }
            break;
    }

    // Asignación final del resultado en la caja de solo lectura sin refrescar la página
    inputResultado.value = Number.isInteger(res) ? res : res.toFixed(2);
}