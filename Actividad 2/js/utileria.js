// js/utileria.js

function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}
function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return 0;
    const hoy = new Date();
    const cumpleanos = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}
function validarPassword(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[\W_]/.test(password);
    const largoCorrecto = password.length >= 8;

    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && largoCorrecto;
}
function limpiarEspacios(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}
function capitalizarTexto(texto) {
    return texto.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
}