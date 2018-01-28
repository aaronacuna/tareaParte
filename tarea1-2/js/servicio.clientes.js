

function registrarCliente(pobjCliente){
    let listaClientes = getClientes();

    listaClientes.push(pobjCliente);
    localStorage.setItem('listaClientesLS', JSON.stringify(listaClientes));
}



function getClientes(){
    let listaClientes = JSON.parse(localStorage.getItem('listaClientesLS'));
    let clientes = [];

    if (listaClientes == null) {
        clientes = [];
    } else{
        listaClientes.forEach(obj =>{

            let objCliente = new Cliente(obj.nombre, obj.apellido1, obj.apellido2, obj.cedula, obj.telefono, obj.email);

            obj.listaVehiculos.forEach(objVehiculoTemp => {
              let objVehiculo = new Vehiculo(objVehiculoTemp.matricula,objVehiculoTemp.marca,objVehiculoTemp.modelo,objVehiculoTemp.anno,objVehiculoTemp.capacidad,objVehiculoTemp.kilometraje);

              objCliente.agregarVehiculo(objVehiculo);

            });

            clientes.push(objCliente);
        })
    }

    return clientes;
}

function buscarClientePorCedula(pcedula){
  let listaClientes = getClientes();
  let clienteEncontrado;

  listaClientes.forEach(objClienteTemp => {
    if(pcedula == objClienteTemp.cedula){
      clienteEncontrado = objClienteTemp;
    }
  });

  return clienteEncontrado;
}

function actualizarCliente(pobjCliente){
  let listaClientes = getClientes();

  for(let i = 0; i<listaClientes.length; i++) {
    if (listaClientes[i].cedula == pobjCliente.cedula) {
      listaClientes[i] = pobjCliente;

      localStorage.setItem('listaClientesLS', JSON.stringify(listaClientes));
    }
  }
}
