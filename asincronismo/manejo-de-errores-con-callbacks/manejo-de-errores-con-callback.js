const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (persona) {
        console.log(`Hola yo soy, ${persona.name}`)

        if (callback) {
            callback()
        }
    }).fail(function () {
        console.log(`Sucedio un error no se pudo obtener el personaje ${id}`)
    })
}

console.log('A continuacion veremos el Asincronismo')
console.log('El orden deberia ser -Luke -C-3PO -R2-D2 -Darth')
//obtenerPersonaje(1) //Luke
//obtenerPersonaje(2)//C-3PO
//obtenerPersonaje(3)//R2-D2
//obtenerPersonaje(4)//Darth

for (var i = 1; i <= 10; i++) {
    obtenerPersonaje(i, function () {
        obtenerPersonaje(i + 1)
    })
}
