const patrick = {
    nombre: 'Patrick',
    apellido: 'Hernandez',
    edad: 23
}

//Cada vez que ejecutamos la funcion modifica cosas por fuera y eso es algo que
//queremos evitar
//const cumpleanios = persona => persona.edad++

//Funcion inmutable
const cumpleaniosInmutable = persona => ({
    //Creamos un nuevo objeto
    ...persona,
    edad: persona.edad + 1
})
//Para guardar el resultado tendremos que construir une nueva variable, ejemplo
const patrick24 = cumpleaniosInmutable(patrick)