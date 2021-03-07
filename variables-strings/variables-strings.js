var nombre = 'Patrick', apellido = 'Hernandez';

//Convertir el nombre a mayusculas
var nombreMayus = nombre.toUpperCase();
console.log(nombreMayus);

//Convertir el apellido en minusculas
var apellidoMinus = apellido.toLowerCase();
console.log(apellidoMinus);

//Saber el primer caracter de un String
//charAt (significa caracter en la posicion - parametro posicion)
var primerCaracter = nombre.charAt(0);
console.log(primerCaracter);

//Preguntar cuantos caracteres tiene un string - atributo length
var cantidadCaracteres = nombre.length;
console.log(cantidadCaracteres);

//Concatenacion de Strings
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

//Nueva forma de concatenar Strings (interpolacion de texto)
//Dentro de las llaves podemos escribir codigo JS
var nombreCompletoNew = `${nombre} ${apellido.toUpperCase()}`;
console.log(nombreCompletoNew);

//Acceder a un sub String
//Forma no especifica para esta funcion
var nombrePeque = nombre.charAt(1) + nombre.charAt(2);
console.log(nombrePeque);
//Forma especifica para esta funcion
var nombrePequeSub = nombre.substr(1, 2);
console.log(nombrePequeSub);

//RETO enseniarle al usuario cual es la ultima letra se su nombre
var nombreUser = 'Elizabeth';
var userUltima = nombreUser.charAt(nombreUser.length - 1);
console.log(userUltima);