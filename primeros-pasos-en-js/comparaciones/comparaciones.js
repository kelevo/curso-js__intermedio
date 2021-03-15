var x = 4, y = '4';
 //== toma los dos valores, los lleva a un mismo tipo de dato
 //los compara y por eso da como resultado que son iguales
 x == y;

 //Para comparar si tienen el mismo valor y el mismo tipo
 //de dato entonces usamod el operador === (devuelve false)
 x === y;

 //SIEMPRE QUE PODAMOS HAY QUE USAR EL === PARA EXACTITUD

 var patrick = {
     nombre: 'Patrick'
 }

 var elizabeth = {
     nombre: 'Elizabeth'
 }

 patrick == elizabeth; //dara como resultado false
 //por que al comparar objetos funciona de manera distinta 

 //Objeto literal
 var otraPersona = {
     ...patrick
 }