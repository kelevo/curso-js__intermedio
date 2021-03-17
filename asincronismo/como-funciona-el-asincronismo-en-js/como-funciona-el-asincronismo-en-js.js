//JS solo puede hacer una cosa a la vez
//Aunque JS no es multitarea puede delegar la ejecucion de ciertas funciones
//a otros procesos, este modelo de concurrencia se llama Event Loop

//Callback -> una funcion que JS realizara cuando regrese la respuesta del navegador
//Mientras esa respuesta JS sigue con la ejecucion del programa principal
//Cuando llegue la respuesta, la funcion a ejecutar ira a parar a 
//la cola de tareas (aqui las tareas se encolan segun el orden en el que van
//llegando) -- que tareas van a parar a esta cola? -> las peticiones a servers,
//las interacciones visuales... solo hasta que programa se quede sin funciones
//en la pila de ejecucion es que ira a ejecutar lo que se encuentr en la cola
//de tareas, por eso hay que tener cuidado de no generar un cuello de botella
//en la pila de ejecucion, si JS se queda ejecutando tareas muy pesadas, las
//funciones de la cola de tareas tardaran mucho tiempo en ejecutarse

//Por eso recuerda estas palabras y repitelas todas las noches antes de irte a dormir
//NO VOY A BLOQUEAR EL EVENT LOOP
