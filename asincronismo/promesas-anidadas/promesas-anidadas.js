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

obtenerPersonaje(1)
    //personaje es el data de .get
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        //Retornamos otra promesa
        return obtenerPersonaje(2)
    }) 
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        //Retornamos otra promesa
        //return obtenerPersonaje(2)
    })
    .catch(onError)


    console.log('--------------- Probando for ---------------')

    for (var i = 1; i <= 12; i++) {
        obtenerPersonaje(i)
        .then(personaje => {
            console.log(`El personaje ${i} es ${personaje.name}`)
            //Retornamos otra promesa
            return obtenerPersonaje(i + 1)
        }) 
        .catch(onError)
    }
    