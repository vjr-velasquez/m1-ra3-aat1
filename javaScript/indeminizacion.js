// Variables globales
let sueldo = 0;
let cantidadMeses = 0;
let pendiente = 0;
let cobros = 0;

function obtenerDatos() {
    // Capturar los valores de los campos del formulario
    sueldo = parseFloat(document.getElementById("sueldo").value) || 0;
    cantidadMeses = parseFloat(document.getElementById("cantidadMeses").value) || 0;
    pendiente = parseFloat(document.getElementById("pendiente").value) || 0;
    cobros = parseFloat(document.getElementById("cobros").value) || 0;
}

function bono14() {
    // Calcular el bono 14
    return (sueldo / 12) * cantidadMeses;
}

function aguinaldo() {
    // Calcular el aguinaldo
    return (sueldo / 12) * cantidadMeses;
}

function totalIndemnizacion() {
    // Calcular la indemnización total
    return (sueldo * cantidadMeses) + bono14() + aguinaldo() - pendiente - cobros;
}

function calcular() {
    // Obtener los datos del formulario
    obtenerDatos();

    // Calcular los valores
    const bono14Value = bono14();
    const aguinaldoValue = aguinaldo();
    const totalIndemnizacionValue = totalIndemnizacion();

    // Mostrar los resultados en las cajas de texto correspondientes
    document.getElementById("bono14").value = bono14Value.toFixed(2);
    document.getElementById("aguinaldo").value = aguinaldoValue.toFixed(2);
    document.getElementById("totalIndemnizacion").value = totalIndemnizacionValue.toFixed(2);
}