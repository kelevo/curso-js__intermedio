function diasEntreFechas(fecha1, fecha2) {
    //calcular cuantos milisegundos hay en un dia
    //100 milisegundos * 60 segundos * 60 minutos *24 horas
    const unDia = 1000 * 60 * 60 * 24
    //Obtener la diferencia entre fechas en milisegundos
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
//el constructor de newdate recibe anio, mes y dia
const nacimiento = new Date(1998, 0, 20)