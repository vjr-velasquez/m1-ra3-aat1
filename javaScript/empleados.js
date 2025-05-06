// Arreglo para almacenar los datos de los usuarios
const usuarios = [];

function mostrarDatos() {
    // Capturar los valores de los campos del formulario
    const nombre = document.getElementById("nombreEmpleado").value;
    const fecha = document.getElementById("fechaIngreso").value;
    const puesto = document.getElementById("puestoEmpleado").value;
    const salario = document.getElementById("salarioEmpleado").value;

    // Validar que todos los campos estén llenos
    if (!nombre || !fecha || !puesto || !salario) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Agregar los datos al arreglo de usuarios
    usuarios.push({ nombre, fecha, puesto, salario });

    // Actualizar la tabla con los datos almacenados
    generarTabla();

    // Limpiar los campos del formulario
    document.getElementById("nombreEmpleado").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("puestoEmpleado").value = "";
    document.getElementById("salarioEmpleado").value = "";
}

function generarTabla() {
    // Generar la tabla con todos los datos almacenados
    let tablaHTML = `
        <h3 style="text-align: center;">Lista de empleados</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha de Ingreso</th>
                    <th>Puesto</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Recorrer el arreglo de usuarios para llenar la tabla
    usuarios.forEach(usuario => {
        tablaHTML += `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.fecha}</td>
                <td>${usuario.puesto}</td>
                <td>${usuario.salario}</td>
            </tr>
        `;
    });

    tablaHTML += `
            </tbody>
        </table>
        <div style="text-align: center; margin-top: 10px;">
            <button class="btn btn-danger mx-2" onclick="eliminarPrimero()">Eliminar primero</button>
            <button class="btn btn-danger mx-2" onclick="eliminarUltimo()">Eliminar último</button>
        </div>
    `;

    // Insertar la tabla en el div5
    document.querySelector(".div5").innerHTML = tablaHTML;
}

// Función para eliminar el primer empleado de la lista
function eliminarPrimero() {
    if (usuarios.length > 0) {
        usuarios.shift(); // Elimina el primer elemento del arreglo
        generarTabla(); // Actualiza la tabla
    } else {
        alert("No hay empleados para eliminar.");
    }
}

// Función para eliminar el último empleado de la lista
function eliminarUltimo() {
    if (usuarios.length > 0) {
        usuarios.pop(); // Elimina el último elemento del arreglo
        generarTabla(); // Actualiza la tabla
    } else {
        alert("No hay empleados para eliminar.");
    }
}