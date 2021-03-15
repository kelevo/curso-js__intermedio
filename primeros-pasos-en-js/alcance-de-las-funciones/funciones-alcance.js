//Variables globales: fuera de las funciones, se pude acceder
//desde cualquier funcion
//Variables locales: solo son alcanzables dentro de la funcion

var nombre = 'Patrick';

function nombreMayus() {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

nombreMayus();

//Mejorar el ejemplo anterior
//Pueden existir variables locales y globales con el mismo nombre
var apellido = 'Hernandez';

function apellidoMayus(a) {
    a = a.toUpperCase();
    console.log(a);
}

apellidoMayus(apellido);
