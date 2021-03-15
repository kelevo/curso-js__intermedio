//Las funciones sirven para reutilizar codigo
var nombre = 'Patrick', edad = 23;
//Definicion de una funcion
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} anios`);
};
//Llamar a la funcion
imprimirEdad();


//Funcion que acepte parametros
function imprimirMes(a, m) {
    console.log(`${a} nacio en el mes: ${m}`)
};
imprimirMes('Elizabeth', 'Marzo');
imprimirMes('Patrick', "Enero");
imprimirMes('Bruno', 'Diciembre');