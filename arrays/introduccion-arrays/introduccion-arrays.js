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

//Acceder a un objeto en especifico
personas[0];

//Acceder a un atributo del objeto
personas[1].altura;
//Otra forma de hacerlo es
personas[2]['altura'];

//Recorrer el array e ir imprimiendo la altura de cada uno de ellos
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts.`);
}