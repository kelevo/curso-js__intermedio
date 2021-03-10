var patrick = {
    nombre: "Patrick",
    apellido: "Hernandez",
    edad: 23
}

const MAYORIA_DE_EDAD = 18;

//Podemos asignar una funcion a una variable de la siguiente manera
//la funcion asignada sera ahora una funcion anonima
//var esMayorDeEdad = function (persona) {
//    return persona.edad >= MAYORIA_DE_EDAD;
//}

//Otra forma de declararla y ahora es una arrow function
//const esMayorDeEdad = (persona) => {
//    return persona.edad >= MAYORIA_DE_EDAD;
//}

//JS nos permite ahorrar mas caracteres, cuando solo va a retornar
//un valor podemos eliminar la palabra reservada return
//tambien cuando solo se pide un parametro podemos eliminar los
//parentesis del mismo quedando al final de la siguiente manera
//const ES_MAYOR_DE_EDAD = persona => persona.edad >= MAYORIA_DE_EDAD

//Tambien podemos destructurar la funcion quedando asi
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

//function imprimirMayorDeEdad(persona) {
//    if (esMayorDeEdad(persona)) {
//        console.log(`${persona.nombre} es mayor de edad`);
//    } else {
//        console.log(`${persona.nombre} es menor de edad`);
//    }
//}

//Funcion que llama a ES_MAYOR_DE_EDAD para permitir o denegar acceso
//function permitirAcceso(persona) {
//    if (!esMayorDeEdad(persona)) {
//        console.log('Acceso denegado');
//    }
//}

//Funcion permitirAcceso convertida a arrow function
const permitirAcceso = persona => !esMayorDeEdad(persona) ? console.log('Acceso denegado') : console.log('Acceso permitido')

permitirAcceso(patrick)
