//////////////////////////EJERCICIOS ARRAY////////////////////

//1 Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos. Ejemplo:

/*const obtenerMenor = (numeros) => {

  let numeroMenor = numeros[0]

  for (let index = 0; index < numeros.length; index++) {
    if (numeroMenor > numeros[index]) {
      numeroMenor = numeros[index];
    }
  }
  return numeroMenor;
};

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]));*/

//2 Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

/*const sumar = (numeros) => {

  let acc = 0

  for (let index = 0; index < numeros.length; index++) {
    acc = acc + numeros[index]
  }

  return acc
}
 console.log(sumar([5, 7, 10, 12, 24]))*/

//3 Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.

/*const contiene = (numero, array) => { 

return array.includes(numero)

}

console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]))
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]))*/

// 4 Definí una función invertirCaso que tome por parámetro un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

/*const invertirCaso = (string) => {
  let stringInvertido = [
 ] 
  for (let i = 0; i < string.length; i++) {
     if(string[i] === string[i].toLowerCase()){
       stringInvertido.push(string[i].toUpperCase())
     }
    else if (string[i] === string[i].toUpperCase()) {
       stringInvertido.push(string[i].toLowerCase());
     }
     
     
   }
    
return stringInvertido.join("")}
 console.log(invertirCaso('Ada Lovelace'))
 //'aDA lOVELACE'
  console.log(invertirCaso('feliz cumple'))
 //'FELIZ CUMPLE'
  console.log(invertirCaso('jAvAsCrIpT'))
 //'JaVaScRiPt'*/

//5 Definí una función gano que reciba como argumento un array tragamonedas  con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

/*const gano = (array) => {

let resultado = true

 for (let index = 0; index < 5; index++) {
   if(array[0] === array[index]){resultado = true}
   else {resultado = false}
    
 }
 return resultado
 
}

console.log(gano(["⭐", "⭐️", "⭐️", "💫", "✨"]));

console.log(gano(["💫", "💫", "💫", "💫", "💫"]));

console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"]));*/

//6 Definí una función estanJuntos que reciba como argumento un array de strings personajes, y devuelva si Sam se encuentra al lado de Frodo, puede encontrarse antes o después.//

/*const estanJuntos = (personajes) => {

  let resultado = false;
  for (let index = 0; index < personajes.length; index++) {
   

    if (personajes[index] === "Sam" && personajes[index + 1] === "Frodo") {
      resultado = true;
    }

    if (personajes[index] === "Sam" && personajes[index - 1] === "Frodo") {
      resultado = true;
    }
  }

  return resultado;
};


console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
//true
console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))
//true
console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))
//false*/

//7 Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

/*const separar = (str) => {

  let animalesOrdenados = [];
  let array = str.split("");

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "p") {
      animalesOrdenados.push(array[index]);
    } else if (array[index] === "g") {
      animalesOrdenados.unshift(array[index]);
    }
  }

  return animalesOrdenados.join("");
};

console.log(separar("pgpggpp"));*/

/*8 Definí una función obtenerChatStatus que reciba como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas*/

/*const obtenerChatStatus = (usuarias) => {

  for (let i = 0; i < usuarias.length; i++) {
    if(usuarias.length === 1){
      return usuarias[0] + " está conectada"
    }

    if(usuarias.length === 2){
      return usuarias[0] + " y " + usuarias[1] + " están conectadas"
    }

    else if(usuarias.length > 2){
      return usuarias[0] + ", " + usuarias[1] + " y " + (usuarias.length - 2) + " persona(s) más están conectadas" 
    }
    
  }
}

 console.log(obtenerChatStatus(['Ada']))
//'Ada está conectada'
 console.log(obtenerChatStatus(['Ada', 'Grace']))
//'Ada y Grace están conectadas'
 console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie']))
//'Ada, Grace y 1 persona(s) más están conectadas'*/

//10 Definí una función comer que reciba como argumento un string que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// funciona si cambiamos a letras.
/*const comer = (str) => {
    
  let posiciones = []
  let arrayCortado = []

  for (let i = 0; i < str.length; i++) {
      if(str[i] === "C"){posiciones.push(i)
      }
      if(str[i] === "P"){posiciones.push(i)}
  }

  arrayCortado.push(str.slice(0,posiciones[0]))
  arrayCortado.push(str.slice(posiciones[1]+1, str.length))


  return arrayCortado.join("")
}

console.log(comer('CZZZP'))
''
 comer('ZZCZZZP')
'ZZ'
 comer('CZZZPZ') 
'Z'
 comer('ZZZCZZZZPZ')
'ZZZZ'*/

//11 Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

/*const multiplicar = (multiplicador, numeros) => {

  let numerosMultiplicados = []

  for (let index = 0; index < numeros.length; index++) {

    numerosMultiplicados.push(numeros[index]*multiplicador)
    
  }
  return numerosMultiplicados
}

 console.log(multiplicar(2, [5, 7, 15, 22, 40]))
//[10, 14, 30, 44, 80]
 console.log(multiplicar(10, [2, 5, 77]))
//[20, 50, 770]*/

//12 Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

/*const filtrarPorLongitudMayorA = (longitud, palabras) => {

    let acc = []

    for (let index = 0; index < palabras.length; index++) {
       
        if(palabras[index].length > longitud){
            acc.push(palabras[index])
        }
    }
    return acc
}


console.log(filtrarPorLongitudMayorA(4,['dia','remolacha',
 'azul','sorpresa','te','verde']))*/

//13 Definí una función recortar que reciba como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

/*const recortar = (cantidadLetras, palabras) =>{
 let palabrasRecortadas = []

  for (let i = 0; i < palabras.length; i++) {
   palabrasRecortadas.push(palabras[i].slice(0,cantidadLetras))
  }

  return palabrasRecortadas
}


console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
//['elef', 'dino' 'choc', 'avio', 'amer']
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))
//['a', 'b', 'c']*/

//14 Definí una función sonIguales(a, b) que reciba como argumentos dos arrays a y b y devuelva si ambos arrays tienen los mismos valores en la misma posición.

/*const sonIguales = (a, b) => {
  let resultado = true;

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      resultado = false;
    }
    
  }

  return resultado;
};

console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]));
//true
console.log(sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]));
//false
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]));
//false*/

//Definí una función obtenerResultado que tome por parámetros dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

/*const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B*/

/*const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {
  let acumuladorajugadorA = 0;
  let acumuladoraJugadoraB = 0;
  let empate = 0;

  for (let i = 0; i < puntajesA.length; i++) {
    if (puntajesA[i] > puntajesB[i]) {
      acumuladorajugadorA++;
    } else if (puntajesB[i] > puntajesA[i]) {
      acumuladoraJugadoraB++;
    } else if (puntajesA[i] === puntajesB[i]) {
      empate++;
    }
  }

  if (acumuladorajugadorA > acumuladoraJugadoraB) {
    return jugadoraA;
  } else if (acumuladorajugadorA < acumuladoraJugadoraB) {
    return jugadoraB;
  } else if (acumuladorajugadorA === acumuladoraJugadoraB) {
    return "Empate";
  }
};

console.log(obtenerResultado("Ada", "Grace", [4, 4, 4], [1, 2, 3]));
//Ada
console.log(obtenerResultado("Ada", "Grace", [3, 5, 5, 7], [4, 1, 2, 9]));
//Empate
console.log(obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]));
//Grace*/

//Definí una función jugarPiedraPapelTijeras que reciba como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

/*const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate*/

/*const jugarPiedraPapelTijeras = (jugadoraA, juegadoraB, jugadasA, jugadasB) => {
  let puntajeJugadoraA = 0;
  let puntajeJugadoraB = 0;
  let empate = 0;

  for (let i = 0; i < jugadasA.length; i++) {
    if (jugadasA[i] === "tijera" && jugadasB[i] === "piedra") {
      puntajeJugadoraB++;
    } else if (jugadasA[i] === "piedra" && jugadasB[i] === "tijera") {
      puntajeJugadoraA++;
    } else if (jugadasA[i] === "papel" && jugadasB[i] === "piedra") {
      puntajeJugadoraA++;
    } else if (jugadasA[i] === "piedra" && jugadasB[i] === "papel") {
      puntajeJugadoraB++;
    } else if (jugadasA[i] === "papel" && jugadasB[i] === "tijera") {
      puntajeJugadoraB++;
    } else if (jugadasA[i] === "tijera" && jugadasB[i] === "papel") {
      puntajeJugadoraA++;
    } else if (jugadasA[i] === "piedra" && jugadasB[i] === "piedra") {
      empate++;
    } else if (jugadasA[i] === "papel" && jugadasB[i] === "papel") {
      empate++;
    } else if (jugadasA[i] === "tijera" && jugadasB[i] === "tijera") {
      empate++;
    }
  }

  if (puntajeJugadoraA > puntajeJugadoraB) {
    return jugadoraA;
  } else if (puntajeJugadoraA < puntajeJugadoraB) {
    return juegadoraB;
  } else if (puntajeJugadoraA === puntajeJugadoraB) {
    return "Empate";
  }
};

console.log(jugarPiedraPapelTijeras("Ada", "Grace", ["tijera"], ["piedra"]));
//Grace

console.log(jugarPiedraPapelTijeras("Ada", "Grace", ["papel"], ["papel"]));
// Empate

console.log(
  jugarPiedraPapelTijeras(
    "Ada",
    "Grace",
    ["piedra", "papel", "papel", "piedra", "tijera"],
    ["papel", "piedra", "tijera", "tijera", "papel"]
  )
);
//Ada*/

///////////////////////////////////// EJERCICIOS BUCLES////////////////////////////////////

//1 Definí una función obtenerIndice que reciba como argumento un valor cualquiera valor y un array cualquiera array y ce del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

/*const obtenerIndice = (valor, array) => {

  for (let index = 0; index < array.length; index++) {
    if (array[index] === valor) {
      return  index;
    }
  }

  return -1;
};

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]));
//2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]));
//-1*/

//2  Definí una función repetir que tome un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

/*const repetir = (valor, cantidad) =>{
  let retornoArray = []

  for (let index = 0; index < cantidad; index++) {
   
    retornoArray.push(valor)
  }
  return retornoArray
} 


 console.log(repetir('lovelace', 3))

 console.log(repetir('a', 5))

 console.log(repetir('html', 0))*/

//3 Definí una función sumarImparesHasta que reciba como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

/*const sumarImparesHasta = (num) => {
  let resultado = 0
 
  for (let i=0; i <= num; i++) {
    if(i % 2 !== 0){
      resultado = resultado + i
    }

  }
  
  return resultado
};

 console.log(sumarImparesHasta(5) // (1 + 3 + 5 = 9))
//9 
 console.log(sumarImparesHasta(13))
//49
 console.log(sumarImparesHasta(47))
//576*/

//4 Definí una función crearCuentaRegresiva que reciba como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

/*const crearCuentaRegresiva = (numeroInicial) =>{

  let arrayDescendiente = []

  for (let i = 0; i <= numeroInicial; i++) {

    arrayDescendiente.unshift(i) 
  }

  return arrayDescendiente

}


 console.log(crearCuentaRegresiva(3))
//[3, 2, 1, 0]
 console.log(crearCuentaRegresiva(5))
//[5, 4, 3, 2, 1, 0]*/

//5 Definí una función invertir que tome por parámetro un array array y que devuelva un array con los mismos valores pero en orden invertido.

/*const invertir = (array) => {
  let nuevoArray = [];

  for (let index = 0; index < array.length; index++) {
    nuevoArray.unshift(array[index]);
  }
  return nuevoArray;
};
console.log(invertir([1, 2, 3]));

console.log(invertir([5, 7, 99, 34, 54, 2, 12]));*/

//6 Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

/*const removerDuplicados = (array) => {

  let arraySinDuplicados = [];
  let eliminarElementos = []

for (let index = 0; index < array.length; index++) {

  if (arraySinDuplicados.includes(array[index])){
    eliminarElementos.push(array[index])
  }
  else {arraySinDuplicados.push(array[index])}
}
  
 return arraySinDuplicados;

};
console.log(removerDuplicados([1, 1, 1]))
//[1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3]))
//[1, 2 ,3]
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23]))
//[5, 23 ,8, 44]*/

// 7 Definí una función repetirLetras que reciba como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.
//////NO FUNCIONA////
/*const repetirLetras = (palabra, cantidad) => {
  let array = palabra.split("");

  let arrayRepetido = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < cantidad; j++) {
      arrayRepetido.push(array[i]);
    }
  }

  return arrayRepetido.join("");
};

console.log(repetirLetras("hola", 2));
//'hhoollaa'
console.log(repetirLetras("ada", 3));
//'aaadddaaa'
console.log(repetirLetras("ah!", 5));
//aaaaahhhhh!!!!!'
console.log(repetirLetras("basta", 1));
//'basta'*/

//8 Definí una función capitalizarPalabras tome un string y devuelva un string donde cada palabra está capitalizada (con la primera letra mayúscula). Dejá las demás letras como están.
//REVISAR!

/*const capitalizarPalabras = (str) =>{
   let array = str.split(" ")
  let acc = []

  for (let i = 0; i < array.length; i++) {
    

     acc = acc + array[i].charAt(0).toUpperCase() + array[i].slice(1) + " "
    
  }

   let retornoString = "'" + acc + acc.splice(1, 1,"'")
    return retornoString

}

console.log(capitalizarPalabras('Esto es un título'))
//'Esto Es Un Título'
 console.log(capitalizarPalabras('había una vez'))
//'Había Una Vez'
 console.log(capitalizarPalabras('OMG'))
//'OMG'
*/
//OTRA SOCLUCION
/*const capitalizarPalabras = (str) => {
  const vacio = " ";
  let arrayCapitalizado = [];

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      arrayCapitalizado.push(str[0].toUpperCase());
    } else if (str[i - 1] === vacio) {
      arrayCapitalizado.push(str[i].toUpperCase());
    } else {
      arrayCapitalizado.push(str[i]);
    }
  }

  return arrayCapitalizado.join("");
};
console.log(capitalizarPalabras("Esto es un título"));
//'Esto Es Un Título'
console.log(capitalizarPalabras("había una vez"));
//'Había Una Vez'
console.log(capitalizarPalabras("OMG"));
//'OMG'*/

//9 Definí una función sumarSeccion que reciba como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.
/*const sumarSeccion = (array, comienzo, cantidad)=> {
  let nuevoArray = array.slice(comienzo,comienzo+cantidad)
  let suma = 0
  
  for (let i = 0; i < nuevoArray.length; i++) {
    
    suma = suma + nuevoArray[i]
    
  }
  
  return suma
}
 console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3))
//8 //(2 + 2 + 4 = 8)
 console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4))
//37 //(4 + 3 + 10 + 20 = 37)
 console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1))
//10*/

//9 Definí una función germinar que tome por parámetro un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:
// FUNCIONA SOLO CON LAS LETRAS!

/*const germinar = (plantines) => {
  let array = plantines.split(" ");

  let arrayGerminado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "HOJA") {
      arrayGerminado.push(array[i]);
    } else if (array[i] === "HOJA") {
      arrayGerminado.push(arrayGerminado[arrayGerminado.length - 1]);
    }
  }

  return arrayGerminado.join(" ");
};

console.log(
  germinar("ROSA HOJA GIRASOL HOJA FLOR HOJA ROSA HOJA GIRASOL HOJA FLOR HOJA")
);

console.log(
  germinar("ROSA HOJA HOJA HOJA GIRASOL HOJA HOJA FLOR HOJA HOJA HOJA HOJA")
);

console.log(
  germinar("GIRASOL FLOR HOJA ROSA GIRASOL HOJA HOJA ROSA ROSA HOJA HOJA HOJA")
);


//10 Definí una función esSubconjunto que tome por parámetro dos arrays, subconjunto y conjunto, y devuelva si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.
/*const esSubconjunto = (subconjunto, conjunto) => {

  let resultado = false  
   for (let i = 0; i < subconjunto.length; i++) {
     
    if(conjunto.includes(subconjunto[i])){
      resultado = true
    }
     
     else{
      resultado = false
    }
    
   }
  return resultado

  
}
 console.log(esSubconjunto([1], [1, 2, 3]))
//true
 console.log(esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]))
//true
 console.log(esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]))
//true
 console.log(esSubconjunto([1, 2, 3], [1, 2]))
//false
 console.log(esSubconjunto([1], [2, 3, 4]))
//false*/

//11 Definí una función tieneBloque que tome por parámetro un array array y devuelva si dicho array tiene un bloque de 3 o más ítems consecutivos idénticos.

/*const tieneBloque = (array) => {
  let resultado = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1] && array[i] === array[i + 2]) {
      resultado = true
      return resultado
    } else {
      resultado = false;
    }
  }

  return resultado;
};


console.log(tieneBloque([1, 2, 3]));
//false
console.log(tieneBloque([1, 1, 1, 2, 3]));
//true
console.log(tieneBloque([1, 2, 3, 3, 3]));
//true
console.log(tieneBloque([1, 2, 3, 3, 3, 8]));
//true
console.log(tieneBloque([1, 2, 2, 3, 3, 4]));
//false*/

//12 Definí una función esPalindromo que tome una palabra y devuelva si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha  que de derecha a izquierda .
/*const esPalindromo = (str) => {
    
  let  array = str.split("")
 
  let nuevoStr = array.reverse().join("")

    if(str === nuevoStr){
        return true
    }else{
        return false
    }
}

 console.log(esPalindromo('ada'))
//true
 console.log(esPalindromo('reconocer'))
//true
 console.log(esPalindromo('mama'))
//false
 console.log(esPalindromo('javascript'))
//false*/
