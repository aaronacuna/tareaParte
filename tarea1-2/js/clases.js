class Cliente {

  constructor(pnombre,papellido1,papellido2,pcedula,ptelefono,pemail){

    this.nombre = pnombre;
    this.apellido1 = papellido1;
    this.apellido2 = papellido2;
    this.cedula = pcedula;
    this.telefono = ptelefono;
    this.email = pemail;
    this.listaVehiculos = [];
  }
    agregarVehiculo(pObjVehiculo){
    this.listaVehiculos.push(pObjVehiculo);
  }
}

class Vehiculo {

  constructor(pmatricula,pmarca,pmodelo,panno,pcapacidad,pkilometraje){

    this.matricula = pmatricula;
    this.marca = pmarca;
    this.modelo = pmodelo;
    this.anno = panno;
    this.capacidad = pcapacidad;
    this.kilometraje = pkilometraje;
    this.listaTrabajos = [];
  }
}

class Trabajo {

  constructor(ptipo,pdescripcion,pfecha,pestado,pcosto){

    this.tipo = ptipo;
    this.descripcion = pdescripcion;
    this.fecha = pfecha;
    this.estado = pestado;
    this.costo = pcosto;
  }
}
