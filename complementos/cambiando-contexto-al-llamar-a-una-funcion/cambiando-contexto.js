const patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez'
}

function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

const saludarPatrick = saludar.bind(patrick)

//Ejecutan la funcion en su momento call
saludar.call(patrick)
//Pasamos parametros a call
saludar.call(patrick, 'Hola')

//Ejecutan la funcion en su momento apply
saludar.apply(patrick, ['Hola sr.'])