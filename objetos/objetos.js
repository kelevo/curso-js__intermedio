//Creacion de un objeto
//Se definen con clave y valor
var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23
}

var elizabeth = {
    nombre: 'Elizabeth',
    apellido: 'Montalvo',
    edad: 22
}

function imprimirNombreMayus(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre);
}

imprimirNombreMayus(patrick);
imprimirNombreMayus(elizabeth);

//----------------------------------------------------------
//Otra forma de pedir un parametro especifico de un objeto
function imprimirApellidoMayus({ apellido }) {
    console.log(apellido.toUpperCase());
}

imprimirApellidoMayus(patrick);

//Tambien podemos definir un objeto como parametro en la
//llamada de la funcion
imprimirApellidoMayus({ apellido: 'Montalvo' });