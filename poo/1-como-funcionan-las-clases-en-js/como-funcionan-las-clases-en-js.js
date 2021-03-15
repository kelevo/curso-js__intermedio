//En las nuevas versiones de JS existen las "clases", en realidad no
//son clases como tal, como en otros lenguajes, no existe la herencia como tal
//pero si existen prototipos, esas  "clases" de js terminnan siendo prototipos

//la palabra new, hace que se cree un nuevo objeto y a ese objeto se le
//asigna como prototipo, lo que le indiquemos despues

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.altura = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y mi altura es ${this.altura} mts.`)
}

var patrick = new Persona('Patrick', 'Hernandez', 1.8)
var erika = new Persona('Erika', 'Luna', 1.6)
var arturo = new Persona('Arturo', 'Martinez', 1.7)

patrick.saludar();