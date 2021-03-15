var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    diseniador: true
}

var bruno = {
    nombre: 'Bruno',
    apellido: 'Neftali',
    edad: 17,
}

//function imprimirMayorEdad(persona) {
//    if (persona.edad >= 18) {
//        console.log(`${persona.nombre} es mayor de edad`);
//    } else {
//        console.log(`${persona.nombre} es menor de edad`);
//    }
//}

//Codigo mas legible
//Definicion de uns constante usando "const" y en mayus con _
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}