var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    diseniador: true
}

//funcion que nos diga que si hacemos
function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    if (persona.cocinero) {
        console.log('Cocinero');
    }
    if (persona.cantante) {
        console.log('Cantante');
    }
    if (persona.dj) {
        console.log('DJ');
    }
    if (persona.guitarrista) {
        console.log('Guitarrista');
    }
    if (persona.diseniador) {
        console.log('Diseniador');
    }
}

imprimirProfesiones(patrick);

//RETO
function imprimirMayorEdad(persona) {
    //multiple linea
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
    //Una sola linea
    //persona.edad >= 18 ? console.log(`${persona.nombre} es mayor de edad`) : console.log(`${persona.nombre} no es mayor de edad`);
}

imprimirMayorEdad(patrick);