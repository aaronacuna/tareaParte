document.querySelector('#btnRegistrarTrabajo').addEventListener('click', regTrabajo)

function regTrabajo(){

    let matricula = localStorage.getItem('matriculaSeleccionadaLS');

    let tipo = document.querySelector('#txtTipo').value;
    let descripcion = document.querySelector('#txtDescripcion').value;
    let fecha = new Date(document.querySelector('#fecha').value);
    let estado = document.querySelector('#txtEstado').value;
    let costo = document.querySelector('#txtCosto').value;



    let objTrabajo = new Trabajo(tipo, descripcion, fecha, estado, costo);
    let objVehiculo = buscarVehiculoPorMatricula(matricula);

    objVehiculo.agregarTrabajo(objTrabajo);
    actualizarVehiculo(objVehiculo);
}
