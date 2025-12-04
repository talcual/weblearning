# 🎯 Resumen Rápido - Conceptos Clave de JavaScript

## MÓDULO 1: FUNDAMENTOS

### Variables
```javascript
var nombre;      // ❌ No usar (scope de función)
let edad = 25;   // ✓ Para valores que cambian (scope de bloque)
const ciudad = "Madrid"; // ✓ Para valores inmutables (recomendado)
```

### Tipos de Datos
```javascript
string    // "Hola"
number    // 42 o 3.14
boolean   // true o false
null      // ausencia intencional
undefined // no inicializado
symbol    // único
object    // {}
array     // []
```

### Operadores
```javascript
// Matemáticos: +, -, *, /, %, **
// Comparación: ==, ===, !=, !==, >, <, >=, <=
// Lógicos: &&, ||, !
// Asignación: =, +=, -=, *=, /=
```

### Estructuras de Control
```javascript
if (condición) { } else if () { } else { }
switch (valor) { case: break; default: }
for (let i = 0; i < n; i++) { }
while (condición) { }
do { } while (condición)
```

### Funciones
```javascript
// Declaración
function sumar(a, b) { return a + b; }

// Expresión
const restar = function(a, b) { return a - b; };

// Arrow
const multiplicar = (a, b) => a * b;

// Con parámetros por defecto
function saludar(nombre = "Amigo") { }

// Con spread operator
function sumarTodos(...numeros) { }
```

---

## MÓDULO 2: DOM Y EVENTOS

### Selectores
```javascript
document.getElementById('id');
document.querySelector('.clase');
document.querySelectorAll('.clase');
document.getElementsByClassName('clase');
document.getElementsByTagName('div');
```

### Manipulación
```javascript
elemento.textContent = "texto";
elemento.innerHTML = "<strong>HTML</strong>";
elemento.setAttribute('src', 'imagen.jpg');
elemento.classList.add('activo');
elemento.style.color = 'red';
```

### Crear y Eliminar
```javascript
const nuevoEl = document.createElement('div');
contenedor.appendChild(nuevoEl);
elemento.remove();
```

### Eventos
```javascript
elemento.addEventListener('click', function(evento) {
    console.log(evento);
});

// Eventos comunes: click, change, input, keyup, submit, mouseover
```

### Formularios
```javascript
const valor = input.value;
const datos = new FormData(formulario);
evento.preventDefault(); // Evitar envío
```

---

## MÓDULO 3: PROGRAMACIÓN ORIENTADA A OBJETOS

### Objetos Literales
```javascript
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};
```

### Clases ES6
```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacer_sonido() {
        return `${this.nombre} hace sonido`;
    }
}

const perro = new Animal("Rex");
```

### Herencia
```javascript
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}
```

### Propiedades Privadas
```javascript
class Cuenta {
    #saldo = 0;
    
    depositar(cantidad) {
        this.#saldo += cantidad;
    }
}
```

### This
```javascript
persona.saludar();        // this = persona
const f = persona.saludar;
f.call(persona);          // this = persona explícito
const f2 = f.bind(persona); // this = persona permanente
```

---

## MÓDULO 4: FUNCIONES AVANZADAS

### Closures
```javascript
function crear_contador() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const contador = crear_contador();
contador(); // 1
contador(); // 2
```

### Currying
```javascript
const sumar = a => b => a + b;
sumar(1)(2); // 3
```

### Funciones de Orden Superior
```javascript
// map, filter, reduce
arr.map(x => x * 2);
arr.filter(x => x > 5);
arr.reduce((acc, x) => acc + x, 0);
```

### Inmutabilidad
```javascript
const obj = { a: 1 };
const nuevoObj = { ...obj, a: 2 }; // Copia
const arr = [1, 2];
const nuevoArr = [...arr, 3];
```

### Callbacks
```javascript
function descargar(callback) {
    setTimeout(() => {
        callback(null, datos);
    }, 1000);
}
```

### Promesas
```javascript
const promesa = new Promise((resolve, reject) => {
    if (exito) resolve(datos);
    else reject(error);
});

promesa
    .then(datos => console.log(datos))
    .catch(error => console.error(error))
    .finally(() => console.log("Fin"));
```

### Async/Await
```javascript
async function obtenerDatos() {
    try {
        const datos = await fetch(url).then(r => r.json());
        return datos;
    } catch (error) {
        console.error(error);
    }
}
```

### Event Loop
```javascript
console.log("1"); // Síncrono
setTimeout(() => console.log("2"), 0); // Macrotarea
Promise.resolve().then(() => console.log("3")); // Microtarea
// Orden: 1, 3, 2
```

---

## MÓDULO 5: DATOS Y APIS

### JSON
```javascript
const obj = { nombre: "Juan", edad: 30 };
const json = JSON.stringify(obj);
const obj2 = JSON.parse(json);
```

### Fetch
```javascript
// GET
const respuesta = await fetch(url);
const datos = await respuesta.json();

// POST
const respuesta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
});
```

### Métodos REST
```javascript
// GET: fetch(url)
// POST: fetch(url, { method: 'POST', body: ... })
// PUT: fetch(url, { method: 'PUT', body: ... })
// PATCH: fetch(url, { method: 'PATCH', body: ... })
// DELETE: fetch(url, { method: 'DELETE' })
```

### Manejo de Errores
```javascript
try {
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    const datos = await respuesta.json();
} catch (error) {
    console.error(error.message);
}
```

### Promise.all
```javascript
const [usuarios, posts] = await Promise.all([
    fetch('/usuarios').then(r => r.json()),
    fetch('/posts').then(r => r.json())
]);
```

### WebSocket
```javascript
const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => console.log("Conectado");
ws.onmessage = (evento) => console.log(evento.data);
ws.send("Mensaje");
```

---

## 📋 Métodos de Array Útiles

```javascript
arr.push(...items);           // Agregar al final
arr.pop();                    // Remover final
arr.shift();                  // Remover inicio
arr.unshift(...items);        // Agregar al inicio
arr.slice(inicio, fin);       // Copia parcial
arr.splice(idx, cantidad);    // Remover y reemplazar
arr.includes(item);           // ¿Contiene?
arr.indexOf(item);            // Posición
arr.find(x => x > 5);         // Primer elemento que cumple
arr.findIndex(x => x > 5);    // Índice del primero
arr.every(x => x > 0);        // ¿Todos cumplen?
arr.some(x => x > 5);         // ¿Alguno cumple?
arr.concat(arr2);             // Unir arrays
arr.join(',');                // Convertir a string
arr.reverse();                // Invertir
arr.sort();                   // Ordenar
```

---

## 📋 Métodos de String Útiles

```javascript
str.length;                   // Longitud
str.charAt(0);                // Carácter en índice
str[0];                       // Carácter en índice (alternativa)
str.toUpperCase();            // A mayúsculas
str.toLowerCase();            // A minúsculas
str.includes('texto');        // ¿Contiene?
str.indexOf('o');             // Posición de primera ocurrencia
str.slice(0, 5);              // Subcadena
str.substring(0, 5);          // Subcadena (similar)
str.split(',');               // Dividir en array
str.trim();                   // Remover espacios
str.replace('a', 'b');        // Reemplazar
str.repeat(3);                // Repetir
str.startsWith('Hello');      // ¿Comienza con?
str.endsWith('!');            // ¿Termina con?
str.padStart(10, '*');        // Rellenar inicio
`Hola ${nombre}`;             // Template literal
```

---

## 🔍 Comparación === vs ==

```javascript
5 == "5"        // true (solo valor)
5 === "5"       // false (valor y tipo)

null == undefined    // true
null === undefined   // false

0 == false      // true
0 === false     // false

// SIEMPRE usar ===
```

---

## ⚠️ Errores Comunes

```javascript
// 1. Olvidar this
const obj = { 
    x: 5, 
    log: () => console.log(this.x) // ❌ undefined (arrow no tiene this)
};

// 2. Modificar durante iteración
arr.forEach(el => arr.remove(el)); // ❌ Problemas

// 3. Comparaciones con ==
if (valor == "") // ❌ Evitar
if (valor === "") // ✓ Mejor

// 4. Olvidad return
const result = arr.map(x => {
    console.log(x); // ❌ undefined si no hay return
});

// 5. No esperar promesas
const datos = fetch(url); // ❌ no espera
const datos = await fetch(url); // ✓ espera

// 6. Scope global involuntario
function test() {
    x = 5; // ❌ x es global
}
```

---

## ✅ Checklist: ¿Estoy Listo?

- [ ] Puedo crear funciones sin ayuda
- [ ] Entiendo cómo funciona el DOM
- [ ] Puedo manejar eventos
- [ ] Conozco cómo crear clases
- [ ] Entiendo this, call, apply, bind
- [ ] Puedo usar async/await
- [ ] Puedo hacer fetch a una API
- [ ] Entiendo closures
- [ ] Puedo debuguear mi código
- [ ] Puedo hacer un pequeño proyecto solo

Si respondiste "sí" a todo, **¡estás listo para trabajar con JavaScript!** 🎉

---

## 🚀 Próximos Pasos

1. **Frameworks**: React, Vue, Angular
2. **Backend**: Node.js, Express
3. **Bases de datos**: MongoDB, PostgreSQL
4. **TypeScript**: JavaScript con tipado
5. **Testing**: Jest, Mocha, Chai

---

**¡Recuerda: La práctica hace al maestro! 💪**
