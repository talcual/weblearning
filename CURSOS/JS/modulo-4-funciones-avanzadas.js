/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║         MÓDULO 4: FUNCIONES AVANZADAS Y PARADIGMAS FUNCIONALES           ║
 * ║                          Nivel: Avanzado                                ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

console.log("\n" + "=".repeat(70));
console.log("MÓDULO 4: FUNCIONES AVANZADAS Y PARADIGMAS");
console.log("=".repeat(70));

// ============================================================================
// 1. CLOSURES (Cierres)
// ============================================================================

console.log("\n=== 1. CLOSURES ===");

// Un closure es una función que tiene acceso a variables de su función padre
// incluso después de que la función padre haya terminado

function crearContador() {
    let contador = 0; // Variable privada
    
    return function() {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

console.log(contador2()); // 1 (contador independiente)
console.log(contador2()); // 2

// Ejemplo práctico: Crear un multiplicador
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const multiplicarPor2 = crearMultiplicador(2);
const multiplicarPor5 = crearMultiplicador(5);

console.log(multiplicarPor2(10)); // 20
console.log(multiplicarPor5(10)); // 50

// Closure con objeto
function crearCaja() {
    let contenido = null;
    
    return {
        guardar: function(valor) {
            contenido = valor;
            console.log(`Guardado: ${valor}`);
        },
        obtener: function() {
            return contenido;
        },
        limpiar: function() {
            contenido = null;
            console.log("Caja limpiada");
        }
    };
}

const miCaja = crearCaja();
miCaja.guardar("mi secreto");
console.log(miCaja.obtener()); // "mi secreto"
miCaja.limpiar();
console.log(miCaja.obtener()); // null


// ============================================================================
// 2. SCOPE CHAIN Y HOISTING
// ============================================================================

console.log("\n=== 2. SCOPE CHAIN Y HOISTING ===");

// SCOPE CHAIN: búsqueda de variables desde el scope más interno al más externo

const variableGlobal = "Soy global";

function funcion1() {
    const variable1 = "Soy de funcion1";
    
    function funcion2() {
        const variable2 = "Soy de funcion2";
        
        console.log("Dentro de funcion2:");
        console.log(variable2); // Scope local
        console.log(variable1); // Scope padre (closure)
        console.log(variableGlobal); // Scope global
    }
    
    funcion2();
}

funcion1();

// HOISTING: las declaraciones se mueven al inicio del scope

console.log("\n--- Hoisting de variables ---");

// var se hoisteen con valor undefined
console.log(typeof x); // "undefined" (no error)
var x = 5;
console.log(x); // 5

// let y const se hoistean pero no se inicializan (zona muerta temporal)
// console.log(y); // ERROR: Cannot access 'y' before initialization
let y = 10;

// HOISTING DE FUNCIONES: funciones completas se mueven
console.log(sumaNumeros(3, 4)); // 7 (funciona aunque está "abajo")

function sumaNumeros(a, b) {
    return a + b;
}

// Expresiones de función NO se hoisteen
// console.log(restaNumeros(5, 2)); // ERROR
const restaNumeros = (a, b) => a - b;
console.log(restaNumeros(5, 2)); // 3


// ============================================================================
// 3. CURRYING (Currificación)
// ============================================================================

console.log("\n=== 3. CURRYING ===");

// Currying: convertir una función que toma múltiples argumentos
// en una serie de funciones que toman un argumento

// Función normal
function sumar(a, b, c) {
    return a + b + c;
}

console.log(sumar(1, 2, 3)); // 6

// Versión con currying
function sumarCurry(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sumarCurry(1)(2)(3)); // 6

// Con arrow functions (más compacto)
const sumarArrow = a => b => c => a + b + c;
console.log(sumarArrow(1)(2)(3)); // 6

// Aplicación parcial (partial application)
const suma1 = sumarCurry(1);
const suma1_2 = suma1(2);
const resultado = suma1_2(3);
console.log(resultado); // 6

// Caso práctico: crear un generador de URLs
const crearURL = (protocolo) => (dominio) => (ruta) => {
    return `${protocolo}://${dominio}/${ruta}`;
};

const https = crearURL("https");
const github = https("github.com");
const usuario = github("usuario/repo");

console.log(usuario); // "https://github.com/usuario/repo"


// ============================================================================
// 4. FUNCIONES DE ORDEN SUPERIOR
// ============================================================================

console.log("\n=== 4. FUNCIONES DE ORDEN SUPERIOR ===");

// Una función de orden superior es una función que:
// - Recibe otra función como parámetro, o
// - Retorna una función

// Ejemplo 1: Recibir función como parámetro
function aplicarOperacion(a, b, operacion) {
    return operacion(a, b);
}

const sumarFunc = (x, y) => x + y;
const multiplicarFunc = (x, y) => x * y;

console.log(aplicarOperacion(5, 3, sumarFunc)); // 8
console.log(aplicarOperacion(5, 3, multiplicarFunc)); // 15

// Ejemplo 2: Retornar función
function crearOperacion(tipo) {
    if (tipo === "sumar") {
        return (a, b) => a + b;
    } else if (tipo === "restar") {
        return (a, b) => a - b;
    }
}

const suma = crearOperacion("sumar");
const resta = crearOperacion("restar");

console.log(suma(10, 4)); // 14
console.log(resta(10, 4)); // 6

// Ejemplo 3: Map - transformar array
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// Ejemplo 4: Filter - filtrar array
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

// Ejemplo 5: Reduce - reducir a un valor
const suma_todos = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma_todos); // 15

// Ejemplo 6: Encadenamiento
const resultado_encadenado = numeros
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log(resultado_encadenado); // (3+4+5)*2 = 12+8+10 = 30


// ============================================================================
// 5. INMUTABILIDAD Y PROGRAMACIÓN FUNCIONAL
// ============================================================================

console.log("\n=== 5. INMUTABILIDAD ===");

// MUTABILIDAD (cambiar estado)
let persona = { nombre: "Juan", edad: 30 };
persona.edad = 31; // ❌ Muta el objeto
console.log(persona);

// INMUTABILIDAD (no cambiar, crear nuevo)
const persona2 = { nombre: "María", edad: 28 };
// const persona2_actualizada = persona2; // ❌ Referencia al mismo objeto
const persona2_actualizada = { ...persona2, edad: 29 }; // ✓ Nuevo objeto
console.log(persona2); // 28 (sin cambios)
console.log(persona2_actualizada); // 29 (nuevo objeto)

// Con arrays
const arr = [1, 2, 3];

// ❌ Mutación
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// ✓ Inmutabilidad
const arr2 = [1, 2, 3];
const arr2_nuevo = [...arr2, 4]; // Copia + elemento nuevo
console.log(arr2); // [1, 2, 3] (sin cambios)
console.log(arr2_nuevo); // [1, 2, 3, 4]

// Beneficios de inmutabilidad:
// - Debugging más fácil
// - Efectos secundarios predecibles
// - Mejor rendimiento con detección de cambios


// ============================================================================
// 6. CALLBACKS
// ============================================================================

console.log("\n=== 6. CALLBACKS ===");

// Callback: una función que se pasa a otra función para ejecutarse después

function descargarDatos(url, callback) {
    console.log(`Descargando desde ${url}...`);
    
    // Simular descarga asíncrona
    setTimeout(() => {
        const datos = { id: 1, nombre: "Producto" };
        callback(null, datos); // callback(error, datos)
    }, 1000);
}

descargarDatos("https://api.ejemplo.com/productos", function(error, datos) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Datos descargados:", datos);
    }
});

// Problema: Callback Hell (anidamiento excesivo)
function obtenerUsuario(id, callback) {
    setTimeout(() => {
        const usuario = { id: id, nombre: "Juan" };
        callback(usuario);
    }, 500);
}

function obtenerPosts(usuarioId, callback) {
    setTimeout(() => {
        const posts = [{ id: 1, titulo: "Post 1" }];
        callback(posts);
    }, 500);
}

function obtenerComentarios(postId, callback) {
    setTimeout(() => {
        const comentarios = [{ id: 1, texto: "Comentario" }];
        callback(comentarios);
    }, 500);
}

// Callback Hell ❌
/*
obtenerUsuario(1, function(usuario) {
    obtenerPosts(usuario.id, function(posts) {
        obtenerComentarios(posts[0].id, function(comentarios) {
            console.log(comentarios); // Tres niveles de anidamiento
        });
    });
});
*/


// ============================================================================
// 7. PROMESAS
// ============================================================================

console.log("\n=== 7. PROMESAS ===");

// Una Promesa representa el resultado de una operación asíncrona
// Estados: Pending -> Fulfilled o Rejected

// Crear promesa
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        
        if (exito) {
            resolve("¡Operación exitosa!");
        } else {
            reject("¡Error en la operación!");
        }
    }, 1000);
});

// Consumir promesa
promesa
    .then(resultado => console.log(resultado)) // Si resolve
    .catch(error => console.log(error)) // Si reject
    .finally(() => console.log("Promesa finalizada")); // Siempre

// Refactorizar callbacks con promesas
function obtenerUsuarioPromesa(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                const usuario = { id: id, nombre: "Juan" };
                resolve(usuario);
            } else {
                reject("ID inválido");
            }
        }, 500);
    });
}

obtenerUsuarioPromesa(1)
    .then(usuario => {
        console.log("Usuario:", usuario);
        return usuario.id;
    })
    .then(usuarioId => {
        console.log("ID del usuario:", usuarioId);
    })
    .catch(error => console.log("Error:", error));

// Promise.all - ejecutar múltiples promesas
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 100));

Promise.all([p1, p2, p3])
    .then(resultados => console.log("Promise.all:", resultados)); // [1, 2, 3]

// Promise.race - la primera que se resuelva
Promise.race([p1, p2, p3])
    .then(resultado => console.log("Promise.race:", resultado)); // 1


// ============================================================================
// 8. ASYNC/AWAIT
// ============================================================================

console.log("\n=== 8. ASYNC/AWAIT ===");

// async/await es azúcar sintáctico para promesas (más legible)

// Función asíncrona
async function obtenerDatos() {
    try {
        // await pausa hasta que la promesa se resuelva
        const respuesta = await obtenerUsuarioPromesa(1);
        console.log("Datos:", respuesta);
        return respuesta;
    } catch (error) {
        console.log("Error capturado:", error);
    }
}

// Llamar función asíncrona
obtenerDatos();

// Async/await simplifica el código
async function procesarDatos() {
    try {
        const usuario = await obtenerUsuarioPromesa(1);
        console.log("Usuario obtenido:", usuario.nombre);
        
        // Aunque no tenemos función que retorne promesa,
        // el patrón sería igual de limpio
        
        return usuario;
    } catch (error) {
        console.log("Error:", error);
    }
}

// Esperar múltiples operaciones
async function operacionesMultiples() {
    try {
        const resultado1 = await Promise.resolve("Resultado 1");
        const resultado2 = await Promise.resolve("Resultado 2");
        const resultado3 = await Promise.resolve("Resultado 3");
        
        console.log(resultado1, resultado2, resultado3);
    } catch (error) {
        console.log("Error:", error);
    }
}

operacionesMultiples();

// Async en paralelo (más eficiente)
async function operacionesParalelo() {
    try {
        // Esto se ejecuta EN PARALELO, no secuencial
        const resultados = await Promise.all([
            Promise.resolve("Resultado 1"),
            Promise.resolve("Resultado 2"),
            Promise.resolve("Resultado 3")
        ]);
        
        console.log("Resultados paralelos:", resultados);
    } catch (error) {
        console.log("Error:", error);
    }
}

operacionesParalelo();


// ============================================================================
// 9. EVENT LOOP, CALL STACK Y WEB APIs
// ============================================================================

console.log("\n=== 9. EVENT LOOP ===");

console.log("Inicio");

setTimeout(() => {
    console.log("Timeout (Macrotarea)");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise (Microtarea)");
    });

console.log("Fin");

/*
Salida:
1. "Inicio" - Código síncrono
2. "Fin" - Código síncrono
3. "Promise (Microtarea)" - Microtareas (primero)
4. "Timeout (Macrotarea)" - Macrotareas (después)

Explicación:
- Call Stack: ejecuta código síncrono
- Web APIs: manejan async (setTimeout, fetch, etc.)
- Microtask Queue: promesas, queueMicrotask
- Task Queue: callbacks de setTimeout, setInterval
- Event Loop: gestiona qué se ejecuta y cuándo
*/

// Ejemplo con orden de ejecución
console.log("\n--- Orden de ejecución ---");

console.log("1. Síncrono");

Promise.resolve()
    .then(() => console.log("2. Microtarea 1 (Promise)"))
    .then(() => console.log("3. Microtarea 2 (Promise)"));

setTimeout(() => console.log("4. Macrotarea 1 (setTimeout)"), 0);
setTimeout(() => console.log("5. Macrotarea 2 (setTimeout)"), 0);

queueMicrotask(() => console.log("6. Microtarea 3 (queueMicrotask)"));

console.log("7. Síncrono final");


// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================

console.log("\n=== EJERCICIOS PRÁCTICOS ===");

// EJERCICIO 1: Cache con closure
console.log("\nEjercicio 1 - Cache con Closure");

function crearCache() {
    const cache = {};
    
    return function calcularFibonacci(n) {
        if (n in cache) {
            console.log(`${n} obtenido del cache`);
            return cache[n];
        }
        
        console.log(`${n} calculado`);
        
        if (n <= 1) return n;
        const resultado = calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
        cache[n] = resultado;
        return resultado;
    };
}

const fibonacci = crearCache();
console.log(fibonacci(5)); // 5
console.log(fibonacci(5)); // obtenido del cache

// EJERCICIO 2: Función de debounce (anti-spam)
console.log("\nEjercicio 2 - Debounce");

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const buscar = debounce((termino) => {
    console.log(`Buscando: ${termino}`);
}, 1000);

buscar("java");
buscar("javascript"); // La búsqueda anterior se cancela

// EJERCICIO 3: Composición de funciones
console.log("\nEjercicio 3 - Composición");

const compose = (...funciones) => valor => 
    funciones.reduceRight((acc, func) => func(acc), valor);

const duplicar = n => n * 2;
const sumarDiez = n => n + 10;
const al_cuadrado = n => n ** 2;

const operacion = compose(al_cuadrado, sumarDiez, duplicar);
console.log(operacion(5)); // ((5*2+10)^2) = 20^2 = 400

// EJERCICIO 4: Función que se ejecuta una sola vez
console.log("\nEjercicio 4 - Una sola vez");

function once(func) {
    let llamado = false;
    let resultado;
    
    return function(...args) {
        if (!llamado) {
            resultado = func(...args);
            llamado = true;
        }
        return resultado;
    };
}

const inicializar = once(() => {
    console.log("Inicializando...");
    return "Inicializado";
});

console.log(inicializar()); // "Inicializando..."
console.log(inicializar()); // (no hace nada)
console.log(inicializar()); // (no hace nada)

console.log("\n" + "=".repeat(70));
console.log("✓ MÓDULO 4 - FUNCIONES AVANZADAS COMPLETADO");
console.log("=".repeat(70));
