//La manera mas antigua de declarar variables es var
//Cuando declaramos variables con var es como si nosotros escribieramos el codigo
//hoisting, declaramos la variable y despues le asignamos valor

var patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23
}

function esMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        var mensajevar = 'Es mayor de edad'
    } else {
        var mensajevar = 'Es menor de edad'
    }
    console.log(`mensaje con variable var ${mensajevar}`)
}

esMayorDeEdad(patrick)

//Si usamos let, el alcance de la variable se va a reducir al bloque donde
//esa variable es declarada e inicializada

function esMayorDeEdadLet(persona) {
    let mensajelet
    if (persona.edad >= 18) {
        mensajelet = 'Es mayor de edad'
    } else {
        mensajelet = 'Es menor de edad'
    }
    console.log(`Mensaje con variable let ${mensajelet}`)
}

esMayorDeEdadLet(patrick)

//const se comporta parecido a let salvo que no se puede re asignar la variable
//conserva su valor constante... si definimos un array con const
//no podremos re asignar otro valor pero podemos modificarlo
//por ejemplo agregando elementos con .push()

//Otro aspecto a tomar en cuenta es cuando usamos un ciclo for
for (var i = 0; i < 10; i++) {
    console.log(i)
}
//Si declaramos la variable con var, podemos acceder a ella fuera del ciclo

//Lo mejor seria usar let si es que tenemos que re asignar la variable
//y si no se tiene que re asignar es mejor usar const