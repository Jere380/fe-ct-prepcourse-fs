/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] + 1);
  }
  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let frase = "";
  for (let i = 0; i < palabras.length; i++) {
    frase += `${palabras[i]}`;
    if (i < palabras.length - 1) frase += " ";
  }
  return frase;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  if (array.includes(elemento)) return true;
  else return false;
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  var promedio = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    promedio += resultadosTest[i];
  }
  promedio = promedio / resultadosTest.length;
  return Math.round(promedio);
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  let bigger = 0;
  arrayOfNums.forEach((number) => {
    if (number > bigger) bigger = number;
  });
  return bigger;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let multi = 1;
  if (arguments.length == 0) return 0;
  else {
    for (let i = 0; i < arguments.length; i++) {
      multi *= arguments[i];
    }
  }
  return multi;
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  let suma = 0;
  array.forEach((number) => {
    if (number > 18) suma += 1;
  });
  return suma;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia < 7 && numeroDeDia > 1) return "Es dia laboral";
  else if (numeroDeDia > 7) return "Numero invalido";
  else return "Es fin de semana";
}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  let primero = num;

  while (primero >= 10) {
    primero = primero / 10;
  }
  if (Math.floor(primero) === 9) return true;
  else return false;
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  let base = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== base) return false;
  }
  return true;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArray = [];
  //   let enero = array.find((element) => element == "Enero");
  //   let marzo = array.find((element) => element == "Marzo");
  //   let noviembre = array.find((element) => element == "Noviembre");
  //   if (enero === undefined || marzo === undefined || noviembre === undefined)
  //     return "No se encontraron los meses pedidos";
  //   else return ["Enero", "Marzo", "Noviembre"];
  if (
    !array.includes("Enero") ||
    !array.includes("Marzo") ||
    !array.includes("Noviembre")
  )
    return "No se encontraron los meses pedidos";
  else
    for (let i = 0; i < array.length; i++) {
      if (
        array[i] === "Enero" ||
        array[i] === "Marzo" ||
        array[i] === "Noviembre"
      ) {
        newArray.push(array[i]);
      }
    }
  return newArray;
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  let multiplicador = -1;
  let newArray = [];
  while (multiplicador < 10) {
    multiplicador += 1;
    newArray.push(multiplicador * 6);
  }
  return newArray;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  let newArray = [];
  array.forEach((number) => {
    if (number > 100) newArray.push(number);
  });
  return newArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  let i = 0;
  let newArray = [num + 2];
  while (i < 9) {
    if (newArray[i] + 2 === i) {
      break;
    }
    newArray.push(newArray[i] + 2);
    i++;
  }
  if (newArray.length < 10) return "Se interrumpió la ejecución";
  else return newArray;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  let i = 0;
  let newArray = [num + 2];
  for (let i = 0; i < 9; i++) {
    if (i === 5) continue;
    else if (i < 5) newArray.push(newArray[i] + 2);
    else if (i > 5) newArray.push(newArray[i - 1] + 2);
  }
  return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
