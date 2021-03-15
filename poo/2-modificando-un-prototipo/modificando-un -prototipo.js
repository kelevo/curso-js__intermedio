function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//Al convertir en una arrow function this se convierte en window
//y como windows es root entonces jamas va a realizar una comparacion
//veraz o correcta siempre nos va a retornar false
Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

var patrick = new Persona('Patrick', 'Hernandez', 1.8)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martinez', 1.7)