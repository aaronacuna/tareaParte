mostrarDatosClientes();
function mostrarDatosClientes(){
  let clientes = getClientes();
  let tbody = document.querySelector('#tblClientes tbody');
  tbody.innerHTML = '';

  clientes.forEach(objCliente => {
    let fila = tbody.insertRow();



    fila.insertCell().innerHTML = objCliente.nombre;
    fila.insertCell().innerHTML = objCliente.apellido1;
    fila.insertCell().innerHTML = objCliente.apellido2;
    fila.insertCell().innerHTML = objCliente.cedula;
    fila.insertCell().innerHTML = objCliente.telefono;
    fila.insertCell().innerHTML = objCliente.email;

    let celdaAgregarVehiculo = fila.insertCell();
    let botonRegVehiculo = document.createElement('button');
    botonRegVehiculo.type = 'button';
    botonRegVehiculo.innerHTML = 'Registrar Vehículo';
    botonRegVehiculo.dataset.cedulaCliente = objCliente.cedula;

    celdaAgregarVehiculo.appendChild(botonRegVehiculo);

    botonRegVehiculo.addEventListener('click',asignarVehiculoCliente);
  });
}

function asignarVehiculoCliente(){
  let cedula = this.dataset.cedulaCliente;
  localStorage.setItem('cedulaSeleccionadaLS', cedula);
  window.location.href = 'registrarVehiculo.html';
}
