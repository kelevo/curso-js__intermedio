//Pensemos que las promesas como valores que aun no conocemos
//Las promesas tienen 3 estados en los que pueden estar

//El primero de los estados y en el cual toda promesa se inicializa es pending
//cuando creamos una promesa, estara en estado pending, si se resuelve
//exitosamente pasara al estado de fulfilled pero si ocurre algun error
//en la accion assincrona que esta resolviendo pasara al estado de rejected

//Las promesas no siempre se resuelven de manera asincrona, tambien pueden resolverse
//de manera sincrona

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
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    }) 
    //id es el id de fail
    .catch(onError)