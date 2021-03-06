const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        
        //cundo esta funcion se ejecute, resolveremos la promesa
        //resolve() no se ejecutara hasta que get sea exitoso
        $.get(url, opts, function(data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]
//var promesas = ids.map(function(id) {
//    returnobtenerPersonaje(id)
//})

var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

//obtenerPersonaje(1)
    //personaje es el data de .get
//    .then(personaje => {
//        console.log(`El personaje 1 es ${personaje.name}`)
//        //Retornamos otra promesa
//        return obtenerPersonaje(2)
//    }) 
//    .then(personaje => {
//        console.log(`El personaje 2 es ${personaje.name}`)
        //Retornamos otra promesa
        //return obtenerPersonaje(2)
//    })
//    .catch(onError)