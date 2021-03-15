var edad = 23;
//Incrementar en 1 edad
edad = edad + 1;
console.log(edad);
//Otra manera de incrementar en 1
edad += 1;
console.log(edad);

var peso = 75;
//Decrementar variable peso
peso = peso - 2;
console.log(peso);
//Otra manera de decrementar
peso -= 2;
console.log(peso);

var sandwich = 1;
//Suma de numeros
peso = peso + sandwich;
console.log(peso);

var jugarFut = 3;
peso -= jugarFut;
console.log(peso);

var precioVino = 200.3;
console.log(precioVino);
var total = precioVino * 3;
console.log(total);
//recortar los decimales, forma 1
var totalRecDec = precioVino * 100 * 3 / 100;
console.log(totalRecDec);
//recortar decimales, forma 2
var totalMat = Math.round(precioVino * 100 * 3) / 100;
console.log(totalMat);
//definir el numero de decimales que mostramos
var totalStr = total.toFixed(2);
console.log(totalStr);
//Lo anterior nos devolvera un String, para convertirlo a numero
var total2 = parseFloat(totalStr);
console.log(total2);

//Divisiones
var pizza = 8;
var persona = 2;
var cantidadPorcion = pizza / persona;
console.log(cantidadPorcion);