//La division entera entre dos numeros
//supongamos que vamos a dividir 13/4, iremos haciendo restas,
//a la manera clasica

function divisionEntera(dividendo, divisor) {
    //Para revisar recursividad necesitamos dos cosas =>
    //un caso base y un caro recursivo, en esta funcion el caso base:
    //es cuando el dividendo es menor estricto que el divisor...

    if (dividendo < divisor) {
        return 0
    }
    //La misma funcion se llama a si misma
    return 1 + divisionEntera(dividendo - divisor, divisor)
}