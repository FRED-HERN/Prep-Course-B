// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma = 0
    for (var i = 0; i <= 10; i++) {
      suma = suma + i
    }
return suma 
     
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
var pares = 0

for (var i = 0 ; i < array.length % 2 === 0; i ++ ) {

  pares = array[i].length
}
return pares
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

//  var cuadrado = 0

//for (var i = 0 ; array[i].length <= array ; i++) {
//  cuadrado = array[i].length**2
//}
//return cuadrado
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
