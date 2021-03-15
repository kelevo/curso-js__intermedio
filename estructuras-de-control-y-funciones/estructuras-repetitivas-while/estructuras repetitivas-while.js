//REPETIRA EL CODIGO HASTA QUE SE CUMPLE LA CONDICION
var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23,
    peso: 90
}

console.log(`Al inicio del anio ${patrick.nombre} pesa ${patrick.peso} kg.`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = patrick.peso - 3;
var dias = 0;

while (patrick.peso > META) {
    //debugger
    if (comeMucho()) {
        aumentarDePeso(patrick)
    }
    if (realizaDeporte()) {
        adelgazar(patrick)
    }
    dias += 1
}

//Esta linea no se va a ejecutar hasta que no se cumpla la condicion
console.log(`pasaron ${dias} dias hasta que ${patrick.nombre} adelgazo 3 kg.`);
