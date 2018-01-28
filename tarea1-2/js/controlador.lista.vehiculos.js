mostrarDatosVehiculos();
function mostrarDatosVehiculos(){
  let clientes = getClientes();
  let cedula = localStorage.getItem('cedulaSeleccionadaLS');

  for (var i = 0; i < clientes.length; i++) {
    if (clientes[i].cedula == cedula) {
      let vehiculos = clientes[i].listaVehiculos;

      let tbody = document.querySelector('#tblVehiculos tbody');
      tbody.innerHTML = '';

      vehiculos.forEach(objVehiculo => {
        let fila = tbody.insertRow();

        fila.insertCell().innerHTML = objVehiculo.matricula;
        fila.insertCell().innerHTML = objVehiculo.marca;
        fila.insertCell().innerHTML = objVehiculo.modelo;
        fila.insertCell().innerHTML = objVehiculo.anno;
        fila.insertCell().innerHTML = objVehiculo.capacidad;
        fila.insertCell().innerHTML = objVehiculo.kilometraje;

        let celdaAgregarTrabajo = fila.insertCell();
        let botonRegTrabajo = document.createElement('button');
        botonRegTrabajo.type = 'button';
        botonRegTrabajo.innerHTML = 'Registrar Trabajo';
        botonRegTrabajo.dataset.matriculaVehiculo = objVehiculo.matricula;

        celdaAgregarTrabajo.appendChild(botonRegTrabajo);

        botonRegTrabajo.addEventListener('click',asignarTrabajoVehiculo);

      });
    }
  }
}

function asignarTrabajoVehiculo(){
  let matricula = this.dataset.matriculaVehiculo;
  localStorage.setItem('matriculaSeleccionadaLS', matricula);
  window.location.href = 'registrarTrabajo.html';
}
