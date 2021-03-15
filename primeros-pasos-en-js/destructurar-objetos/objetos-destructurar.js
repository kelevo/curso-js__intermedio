var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23
}

var elizabeth = {
    nombre: 'Elizabeth',
    apellido: 'Montalvo',
    edad: 23
}

function imprimirNombreMayus(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreMayus(patrick);

//RETO
function imprimirNombreEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} anios`);
}

imprimirNombreEdad(patrick);
imprimirNombreEdad(elizabeth);