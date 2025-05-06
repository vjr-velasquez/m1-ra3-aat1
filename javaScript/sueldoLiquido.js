// Variables globales para almacenar los datos
let salario = 0, bonificacion = 0, comisiones = 0;
let ahorros = 0, iggs = 0, prestamos = 0;

function obtenerDatos() {
    // Capturar los valores de los campos del formulario
    salario = parseFloat(document.getElementById("salario").value) || 0;
    bonificacion = parseFloat(document.getElementById("bonificacion").value) || 0;
    comisiones = parseFloat(document.getElementById("comisiones").value) || 0;
    ahorros = parseFloat(document.getElementById("ahorro").value) || 0;
    iggs = parseFloat(document.getElementById("iggs").value) || 0;
    prestamos = parseFloat(document.getElementById("prestamos").value) || 0;
}

function totalGanado() {
    // Calcular el total ganado
    return salario + bonificacion + comisiones;
}

function totalDescuentos() {
    // Calcular el total de descuentos
    return ahorros + iggs + prestamos;
}

function sueldoLiquido() {
    // Calcular el sueldo líquido
    return totalGanado() - totalDescuentos();
}

function calcular() {
    // Obtener los datos del formulario
    obtenerDatos();

    // Calcular los valores
    const totalGanadoValue = totalGanado();
    const totalDescuentosValue = totalDescuentos();
    const sueldoLiquidoValue = sueldoLiquido();

    // Mostrar los resultados en las cajas de texto correspondientes
    document.getElementById("totalGanado1").value = totalGanadoValue.toFixed(2);
    document.getElementById("totalGanado2").value = totalDescuentosValue.toFixed(2);
    document.getElementById("sueldoLiquido").value = sueldoLiquidoValue.toFixed(2);
}