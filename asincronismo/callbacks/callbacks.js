const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Para hacer un request requerimos de $.get() que recibe varios parametros
//1- url a la cual queremos acceder
//2 - indecarle a jquery que este request se hara en otra pagina
//3 - callback (un callback es una funcion que se va a ejecutar en un futuro,
//no sabemos cuando se va a ejecutar pero que $.get va a ser el encargado de llamarlo
//al terminar el request)
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true}
$.get(lukeUrl, opts, function (luke) {
    console.log(`Hola yo soy, ${luke.name}`)
})