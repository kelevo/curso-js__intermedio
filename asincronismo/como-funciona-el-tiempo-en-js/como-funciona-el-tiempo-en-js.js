console.log('a')
//Si queremos ejecutar un console.log() en un segundo usamos setTimeout()
//recibe dos parametros:
//El primer parametro es una funcion y el segundo es un delay (expresado en 
//milisegundos -> 2000 milisegundos son 2 segundos)
//Esto significa que ejecutara la funcion parametro en el tiempo del delay

//setTimeout(function () {
//    console.log('b')
//}, 2000)
setTimeout(() => console.log('b'), 2000)
//setTimeout() pasa a la cola de tareas, es por eso que siempre sera
//al final del programa
console.log('c')

setTimeout(() => console.log('d'), 2000)
for (var i = 0; i < 10000000000; i++) {
    
}