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

var personas = [sacha, alan, martin, dario, vicky, paula];

//const pasarAlturaCms = persona => {
    //persona.altura = persona.altura * 100;
    //persona.altura *= 100;
    //return persona;
    //Para no alterar el array original, retornamos un nuevo objeto
    //con la persona desglozada
    //como se muestra abajo
//}

//Estructura de arrow - function retornando un objeto
const pasarAlturaCms = persona => ({
    //Para no alterar el array original, retornamos un nuevo objeto
    //con la persona desglozada - asi retorna un objeto
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaCms);

console.log(personasCms);