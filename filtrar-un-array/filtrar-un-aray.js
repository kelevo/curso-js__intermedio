var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//Creacion de un array
var personas = [sacha, alan, martin, dario, vicky, paula];

//Filtrar a las peronas altas

//const esAlta = (persona) => {
//    return persona.altura > 1.8;
//}
//Funcion de arriba reescrita
//const esAlta = persona => persona.altura > 1.8;
//Desglosar aun mas
const esAlta = ({ altura }) => altura > 1.8;

//Reto -> funcion que muestre las personas menores
const esBaja = ({ altura }) => altura < 1.8;

//filter va a pasar cada uno de los elementos a la funcion esAlta (filter devuelve un array nuevo)
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
//Variable anterior de una manera distinta (con una funcion anonima)
//var personasAltas = personas.filter(function(persona) {
//    return persona.altura > 1.8
//})

console.log(personasAltas);
console.log(personasBajas)