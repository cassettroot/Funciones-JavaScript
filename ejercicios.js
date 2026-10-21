
// some()
// Verifica si algún elemento del arreglo cumple la condicion escrita
const numeros = [3, 7, 10, 18, 21];
// Verifica si hay algún número mayor que 15
const hayMayorQue15 = numeros.some(n => n > 15);
console.log(hayMayorQue15);


// every()
// Comprueba si todos los elementos cumplen una condición.
const edades = [18, 22, 30, 25, 19];
//Verifica si todos son mayores o iguales a 17
const todosMayores18 = edades.every(edad => edad >= 18);
console.log(todosMayores18);



// fill
// Rellena partes de un arreglo con un valor específico
let letras = ['a', 'b', 'c', 'd', 'e'];
//Rellena las tres primeras posiciones con 'x', este se modifica segun la condicion
letras.fill('x', 0, 3);
console.log(letras);



// filter()
// Crea un nuevo arreglo con los elementos que cumplen una condición
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];
//aqui filtra los productos que cuesten más de 100 pesos
const productosMayor100 = productos.filter(p => p.precio > 100);
console.log(productosMayor100);



// find()
// Devuelve el primer elemento que cumpla la condición
const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carmen', edad: 19 }
];
//aqui encuentra al primer alumno mayor de 18 años
const primerMayor18 = alumnos.find(a => a.edad > 18);
console.log(primerMayor18);



// findIndex()
// Devuelve el índice del primer elemento que cumpla la condición.
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];
//aqui encuentra el índice de 'pera'
const indicePera = frutas.findIndex(f => f === 'pera');
console.log(indicePera);



// Set
// Estructura de datos que no permite valores duplicados.
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
//crea un Set para eliminar los duplicados
const setNumeros = new Set(numerosDuplicados);
console.log(setNumeros);



//Actividad 
//crea un arreglo de objetos llamado personas con propiedades nombre, edad, y ciudad.
const personas = [
    { nombre: "Carlos", edad: 23, ciudad: "Merida" },
    { nombre: "Daniel", edad: 27, ciudad: "Madrid" },
    { nombre: "Ana", edad: 17, ciudad: "México" },
    { nombre: "Jonathan", edad: 34, ciudad: "Guadalajara" }
];

// filtramos a los mayores de 18 años
const personasMayores = personas.filter(p => p.edad > 18);
console.log(personasMayores);

//usamos ""some()" para saber si hay alguien de "Madrid"
const hayDeMadrid = personas.some(p => p.ciudad === "Madrid");
console.log(hayDeMadrid);

//ahora con "every()" lo usamos para verificar si todos son mayores de edad.
const todosSonMayores = personas.every(p => p.edad >= 18);
console.log(todosSonMayores);

//usamo "find()" para obtener la primera persona de "México"
const primeraPersonaMexico = personas.find(p => p.ciudad === "México");
console.log(primeraPersonaMexico);

//para terminar usamos "findIndex()" para obtener la posición de alguien llamado "Ana"
const posicionAna = personas.findIndex(p => p.nombre === "Ana");
console.log(posicionAna);
