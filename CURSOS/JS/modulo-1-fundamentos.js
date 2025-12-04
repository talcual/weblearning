/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                 MÓDULO 1: FUNDAMENTOS DE JAVASCRIPT                     ║
 * ║                          Nivel: Básico                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

// ============================================================================
// 1. ¿QUÉ ES JAVASCRIPT Y CÓMO FUNCIONA EN EL NAVEGADOR?
// ============================================================================

/*
JavaScript es un lenguaje de programación interpretado que se ejecuta en el
navegador. Funciona en el contexto del DOM (Document Object Model) para
interactuar con elementos HTML.

En el navegador, el flujo es:
1. El HTML se carga
2. Se ejecuta el JavaScript
3. El JavaScript puede modificar el DOM
4. El navegador renderiza los cambios
*/

console.log("¡JavaScript funciona en el navegador!");


// ============================================================================
// 2. VARIABLES: var, let, const
// ============================================================================

// VAR (antiguo, evita usar si es posible)
var nombre = "Juan";
console.log(nombre); // "Juan"

// Problema con var: scope de función, no de bloque
if (true) {
    var apellido = "Pérez";
}
console.log(apellido); // "Pérez" (accesible fuera del bloque)


// LET (moderno, recomendado para variables que cambian)
let edad = 25;
console.log(edad); // 25

// Problema con var solucionado con let
if (true) {
    let ciudad = "Madrid";
}
// console.log(ciudad); // ERROR: ciudad no está definida

// Let puede reasignarse
edad = 26;
console.log(edad); // 26


// CONST (moderno, recomendado por defecto)
const pais = "España";
console.log(pais); // "España"

// No se puede reasignar
// pais = "Francia"; // ERROR: Assignment to constant variable

// PERO los objetos y arrays pueden ser modificados
const persona = { nombre: "Carlos" };
persona.nombre = "Ana"; // ✓ Funciona
console.log(persona); // { nombre: "Ana" }

const numeros = [1, 2, 3];
numeros.push(4); // ✓ Funciona
console.log(numeros); // [1, 2, 3, 4]

// RESUMEN DE SCOPES
console.log("\n=== RESUMEN DE SCOPES ===");
function ejemploScopes() {
    var x = 1; // scope: función
    let y = 2; // scope: bloque
    const z = 3; // scope: bloque
    
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log(x, y, z); // 10, 20, 30 (variables del bloque if)
    }
    console.log(x, y, z); // 10, 2, 3 (x cambió porque var es de función)
}
ejemploScopes();


// ============================================================================
// 3. TIPOS DE DATOS
// ============================================================================

console.log("\n=== TIPOS DE DATOS ===");

// STRING: cadena de texto
const texto = "Hola";
const texto2 = 'Mundo';
const texto3 = `Template literal - ${texto} ${texto2}`; // Interpolación
console.log(texto3); // "Template literal - Hola Mundo"

// NUMBER: números (enteros y decimales)
const entero = 42;
const decimal = 3.14;
const notacion = 1e3; // 1000
console.log(entero, decimal, notacion);

// BOOLEAN: verdadero o falso
const esVerdad = true;
const esfalso = false;
console.log(esVerdad, esfalso);

// NULL: ausencia intencional de valor
const nada = null;
console.log(nada); // null

// UNDEFINED: variable declarada pero sin valor asignado
let sinValor;
console.log(sinValor); // undefined

// SYMBOL: identificador único (avanzado)
const simbolo = Symbol('identificador');
console.log(simbolo); // Symbol(identificador)

// OBJECT: estructura de datos (lo veremos más adelante)
const objeto = {
    nombre: "Pedro",
    edad: 30
};
console.log(objeto);

// Verificar tipo de dato
console.log(typeof texto); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (error histórico de JS)
console.log(typeof objeto); // "object"


// ============================================================================
// 4. OPERADORES
// ============================================================================

console.log("\n=== OPERADORES MATEMÁTICOS ===");

const a = 10;
const b = 3;

console.log(a + b); // 13 - Suma
console.log(a - b); // 7 - Resta
console.log(a * b); // 30 - Multiplicación
console.log(a / b); // 3.333... - División
console.log(a % b); // 1 - Módulo (residuo)
console.log(a ** b); // 1000 - Exponencia (10^3)

console.log("\n=== OPERADORES DE COMPARACIÓN ===");

const x = 5;
const y = "5";

console.log(x == y); // true (comparación de valor)
console.log(x === y); // false (comparación de valor y tipo)
console.log(x != y); // false
console.log(x !== y); // true
console.log(x > 3); // true
console.log(x < 8); // true
console.log(x >= 5); // true
console.log(x <= 5); // true

console.log("\n=== OPERADORES LÓGICOS ===");

const condicion1 = true;
const condicion2 = false;

console.log(condicion1 && condicion2); // false - AND (ambas deben ser verdaderas)
console.log(condicion1 || condicion2); // true - OR (al menos una debe ser verdadera)
console.log(!condicion1); // false - NOT (negación)

// Cortocircuito (importante)
console.log(true || false); // true (no evalúa el segundo)
console.log(false && true); // false (no evalúa el segundo)

console.log("\n=== OPERADORES DE ASIGNACIÓN ===");

let valor = 10;
valor += 5; // valor = valor + 5 = 15
console.log(valor); // 15

valor -= 3; // valor = valor - 3 = 12
console.log(valor); // 12

valor *= 2; // valor = valor * 2 = 24
console.log(valor); // 24

valor /= 4; // valor = valor / 4 = 6
console.log(valor); // 6


// ============================================================================
// 5. ESTRUCTURAS DE CONTROL
// ============================================================================

console.log("\n=== IF / ELSE ===");

const edad1 = 18;

if (edad1 >= 18) {
    console.log("Eres mayor de edad");
} else if (edad1 >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres menor");
}

// Operador ternario (if/else compacto)
const mensaje = edad1 >= 18 ? "Adulto" : "Menor";
console.log(mensaje);

console.log("\n=== SWITCH ===");

const dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
    case 7:
        console.log("Fin de semana");
        break;
    default:
        console.log("Día inválido");
}

console.log("\n=== BUCLE FOR ===");

// For clásico
for (let i = 0; i < 3; i++) {
    console.log(`Iteración ${i}`);
}

// For in (itera sobre índices o keys)
const colores = ["rojo", "verde", "azul"];
for (let indice in colores) {
    console.log(`Posición ${indice}: ${colores[indice]}`);
}

// For of (itera sobre valores)
for (let color of colores) {
    console.log(`Color: ${color}`);
}

console.log("\n=== BUCLE WHILE ===");

let contador = 0;
while (contador < 3) {
    console.log(`While: ${contador}`);
    contador++;
}

console.log("\n=== BUCLE DO...WHILE ===");

let numero = 0;
do {
    console.log(`Do-While: ${numero}`);
    numero++;
} while (numero < 3);

console.log("\n=== CONTROL DE BUCLES ===");

// break: salir del bucle
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(`Break: ${i}`); // 0, 1, 2
}

// continue: ir a la siguiente iteración
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(`Continue: ${i}`); // 0, 1, 3, 4
}


// ============================================================================
// 6. FUNCIONES
// ============================================================================

console.log("\n=== DECLARACIÓN DE FUNCIÓN ===");

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("María")); // "Hola, María!"

console.log("\n=== EXPRESIÓN DE FUNCIÓN ===");

const sumar = function(a, b) {
    return a + b;
};

console.log(sumar(3, 5)); // 8

console.log("\n=== ARROW FUNCTIONS (=>)===");

// Arrow function compacta
const multiplicar = (x, y) => x * y;
console.log(multiplicar(4, 5)); // 20

// Arrow function con más líneas
const descripcion = (persona) => {
    const info = `${persona.nombre}, ${persona.edad} años`;
    return info;
};

console.log(descripcion({ nombre: "Ana", edad: 28 })); // "Ana, 28 años"

// Sin parámetros
const obtenerPi = () => 3.14159;
console.log(obtenerPi()); // 3.14159

// Un solo parámetro (paréntesis opcionales)
const doblar = x => x * 2;
console.log(doblar(5)); // 10

console.log("\n=== PARÁMETROS Y RETORNO ===");

// Parámetros por defecto
function crear_email(usuario, dominio = "gmail.com") {
    return `${usuario}@${dominio}`;
}

console.log(crear_email("juan")); // "juan@gmail.com"
console.log(crear_email("maria", "outlook.com")); // "maria@outlook.com"

// Rest parameters (...args)
function sumarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarTodos(1, 2, 3)); // 6
console.log(sumarTodos(5, 10, 15, 20)); // 50

// Desestructuración en parámetros
function mostrarUsuario({ nombre, edad }) {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarUsuario({ nombre: "Carlos", edad: 35 });

console.log("\n=== SCOPE Y HOISTING ===");

// Hoisting con funciones (se mueven al inicio del scope)
console.log(obtenerSaludo()); // Funciona porque las funciones se hoisteen

function obtenerSaludo() {
    return "¡Hola desde hoisting!";
}

// Hoisting con variables (var se hoisteen pero con undefined)
console.log(typeof variable_hoisted); // undefined
var variable_hoisted = "valor";
console.log(variable_hoisted); // "valor"

// let y const NO se hoistean
// console.log(variable_let); // ERROR: Cannot access 'variable_let' before initialization
let variable_let = "valor";


// ============================================================================
// 7. MANEJO BÁSICO DE ERRORES CON TRY...CATCH
// ============================================================================

console.log("\n=== TRY...CATCH...FINALLY ===");

try {
    // Código que podría generar error
    const resultado = JSON.parse("{ JSON inválido }");
} catch (error) {
    // Se ejecuta si hay error
    console.log("Error capturado:", error.message);
}

console.log("El programa continúa después del error");

try {
    const archivo = "test.txt";
    // Simular lectura de archivo
    if (!archivo) throw new Error("El archivo no existe");
    console.log("Archivo encontrado");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    // Se ejecuta siempre, haya error o no
    console.log("Bloque finally siempre se ejecuta");
}

console.log("\n=== LANZAR ERRORES PERSONALIZADOS ===");

function verificarEdad(edad) {
    if (typeof edad !== "number") {
        throw new Error("La edad debe ser un número");
    }
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
    }
    return `Tienes ${edad} años`;
}

try {
    console.log(verificarEdad(25)); // ✓
    console.log(verificarEdad(-5)); // ✗
} catch (error) {
    console.log("Error capturado:", error.message);
}


// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================

console.log("\n=== EJERCICIOS PRÁCTICOS ===");

// EJERCICIO 1: Crear una función que determine si un número es par o impar
function esPar(num) {
    return num % 2 === 0;
}

console.log("Ejercicio 1 - ¿Es par?");
console.log(esPar(4)); // true
console.log(esPar(7)); // false

// EJERCICIO 2: Validar una contraseña (mínimo 8 caracteres, 1 mayúscula, 1 número)
function validarPassword(password) {
    const tieneLongitud = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    
    return tieneLongitud && tieneMayuscula && tieneNumero;
}

console.log("\nEjercicio 2 - Validar contraseña");
console.log(validarPassword("Abc123")); // false (muy corta)
console.log(validarPassword("Abc12345")); // true
console.log(validarPassword("abc12345")); // false (sin mayúscula)

// EJERCICIO 3: Función que calcula factorial
function factorial(n) {
    if (n < 0) throw new Error("El factorial no existe para números negativos");
    if (n === 0 || n === 1) return 1;
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("\nEjercicio 3 - Factorial");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// EJERCICIO 4: Función que invierte una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("\nEjercicio 4 - Invertir cadena");
console.log(invertirCadena("Hola")); // "aloH"
console.log(invertirCadena("JavaScript")); // "tpircSavaJ"

// EJERCICIO 5: Función que cuenta vocales
function contarVocales(texto) {
    const vocales = texto.toLowerCase().match(/[aeiou]/g);
    return vocales ? vocales.length : 0;
}

console.log("\nEjercicio 5 - Contar vocales");
console.log(contarVocales("Hola Mundo")); // 3
console.log(contarVocales("JavaScript")); // 2

console.log("\n" + "=".repeat(70));
console.log("✓ MÓDULO 1 - FUNDAMENTOS COMPLETADO");
console.log("=".repeat(70));
