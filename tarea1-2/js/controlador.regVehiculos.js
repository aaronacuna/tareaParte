document.querySelector('#btnRegistrarVehiculo').addEventListener('click', regVehiculo)

function regVehiculo(){

    let cedula = localStorage.getItem('cedulaSeleccionadaLS');

    let matricula = document.querySelector('#txtMatricula').value;
    let marca = document.querySelector('#txtMarca').value;
    let modelo = document.querySelector('#txtModelo').value;
    let anno = document.querySelector('#txtAnno').value;
    let capacidad = document.querySelector('#txtCapacidad').value;
    let kilometraje = document.querySelector('#txtKilometraje').value;


    let objVehiculo = new Vehiculo(matricula, marca, modelo, anno, capacidad, kilometraje);
    let objCliente = buscarClientePorCedula(cedula);

    objCliente.agregarVehiculo(objVehiculo);
    actualizarCliente(objCliente);


}
