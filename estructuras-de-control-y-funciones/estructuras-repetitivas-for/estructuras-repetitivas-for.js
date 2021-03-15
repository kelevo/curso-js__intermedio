var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23,
    peso: 90
}

console.log(`Al inicio del anio ${patrick.nombre} pesa ${patrick.peso} kg.`);

const INCREMENTO_PESO = 0.2;
//function aumentarDePeso (persona) {
//    return persona.peso =+ 200
//}
//Es igual a:
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= 365; i++) {
    var random = Math.random();

    if(random < 0.25) {
        aumentarDePeso(patrick);
    } else if  (random < 0.50) {
        adelgazar(patrick);
    }
}

console.log(`Al final del peso ${patrick.nombre} pesa ${patrick.peso.toFixed(1)} kg.`);
