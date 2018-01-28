let botonRegistrar = document.querySelector('#btnRegistrarCliente');
botonRegistrar.addEventListener('click', regCliente);



function regCliente(){

    let nombre = document.querySelector('#txtNombre').value;
    let apellido1 = document.querySelector('#txtPrimerApellido').value;
    let apellido2 = document.querySelector('#txtSegundoApellido').value;
    let cedula = document.querySelector('#txtCedula').value;
    let telefono = document.querySelector('#txtTelefono').value;
    let email = document.querySelector('#email').value;


    let objCliente = new Cliente(nombre, apellido1, apellido2, cedula, telefono, email);

    registrarCliente(objCliente);
}
