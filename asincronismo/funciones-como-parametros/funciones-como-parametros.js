class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        //var nombre = this.nombre
        //var apellido = this.altura
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador@`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`A mira no sabia que eras desarrollador/a`)
    }
}

var patrick = new Persona('Patrick', 'Hernandez', 1.8)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.7)

patrick.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)