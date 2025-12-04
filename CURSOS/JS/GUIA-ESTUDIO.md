# 🎓 Guía de Estudio - JavaScript Completo

## 📚 Mapa de Aprendizaje

```
PRINCIPIANTE
├── Módulo 1: Fundamentos
│   ├── Variables y tipos de datos
│   ├── Operadores
│   ├── Estructuras de control
│   ├── Funciones
│   └── Manejo de errores
│
INTERMEDIO
├── Módulo 2: Manipulación del DOM
│   ├── Selectores
│   ├── Modificación de elementos
│   ├── Eventos
│   ├── Formularios
│   └── Delegación de eventos
│
├── Módulo 3: Programación Orientada a Objetos
│   ├── Objetos literales
│   ├── Prototipos
│   ├── Clases ES6
│   ├── Herencia
│   ├── Encapsulamiento
│   └── Composición
│
AVANZADO
├── Módulo 4: Funciones Avanzadas
│   ├── Closures
│   ├── Scope chain
│   ├── Currying
│   ├── Funciones de orden superior
│   ├── Inmutabilidad
│   ├── Callbacks
│   ├── Promesas
│   ├── Async/Await
│   └── Event Loop
│
└── Módulo 5: Manejo de Datos y APIs
    ├── JSON
    ├── Fetch API
    ├── Métodos REST
    ├── Manejo de errores
    ├── Subida de datos
    └── WebSockets
```

## 🎯 Tiempo de Dedicación Sugerido

| Módulo | Tiempo | Esfuerzo |
|--------|--------|----------|
| Módulo 1 | 15-20 horas | Bajo |
| Módulo 2 | 12-15 horas | Medio |
| Módulo 3 | 15-20 horas | Medio-Alto |
| Módulo 4 | 20-25 horas | Alto |
| Módulo 5 | 15-20 horas | Medio-Alto |
| **Total** | **77-100 horas** | **Intenso** |

---

## 📖 Cómo Usar Este Curso

### Fase 1: Aprendizaje (40-50%)
1. Lee el módulo completo
2. Ejecuta los ejemplos en tu navegador
3. Modifica los ejemplos para experimentar
4. Toma notas de conceptos clave

### Fase 2: Práctica (30-40%)
1. Realiza los ejercicios prácticos
2. Busca problemas similares en internet
3. Practica en plataformas como:
   - HackerRank
   - LeetCode
   - CodeWars

### Fase 3: Proyecto (10-20%)
1. Elige un proyecto que te interese
2. Aplica todos los conceptos aprendidos
3. Solicita retroalimentación
4. Itera y mejora

---

## ✅ Checklist por Módulo

### Módulo 1: Fundamentos ✓
- [ ] Entiendo qué es JavaScript y cómo funciona en el navegador
- [ ] Sé usar var, let y const correctamente
- [ ] Conozco todos los tipos de datos
- [ ] Manejo todos los operadores
- [ ] Puedo escribir estructuras de control (if, switch, bucles)
- [ ] Entiendo declaración vs expresión de funciones
- [ ] Conozco las arrow functions
- [ ] Puedo manejar errores con try...catch

**Desafío del módulo:**
- [ ] Crea un programa que pida números y calcule su media, desv. estándar
- [ ] Crea un validador de contraseña completo
- [ ] Crea un juego de "adivina el número"

---

### Módulo 2: DOM y Eventos ✓
- [ ] Entiendo qué es el DOM
- [ ] Sé usar todos los selectores
- [ ] Puedo modificar contenido, atributos y estilos
- [ ] Manejo correctamente los eventos
- [ ] Puedo validar formularios
- [ ] Entiendo la delegación de eventos

**Desafío del módulo:**
- [ ] Crea una todo list interactiva con localStorage
- [ ] Crea una galería de fotos con filtros
- [ ] Crea un contador visual con animaciones

---

### Módulo 3: POO ✓
- [ ] Entiendo objetos literales y métodos
- [ ] Conozco this y los métodos de binding (call, apply, bind)
- [ ] Entiendo prototipos y herencia prototípica
- [ ] Puedo crear y usar clases ES6
- [ ] Entiendo extends y super
- [ ] Sé usar propiedades privadas
- [ ] Entiendo encapsulamiento

**Desafío del módulo:**
- [ ] Crea un sistema de biblioteca con libros, usuarios, préstamos
- [ ] Crea un juego de cartas con clases
- [ ] Crea un sistema de vehículos con herencia

---

### Módulo 4: Funciones Avanzadas ✓
- [ ] Entiendo closures profundamente
- [ ] Conozco scope chain y hoisting
- [ ] Puedo crear y usar currying
- [ ] Sé qué son funciones de orden superior
- [ ] Entiendo inmutabilidad
- [ ] Sé usar callbacks
- [ ] Entiendo promesas completamente
- [ ] Puedo usar async/await
- [ ] Entiendo el event loop

**Desafío del módulo:**
- [ ] Crea un debounce y throttle personalizados
- [ ] Crea una cadena de promesas compleja
- [ ] Convierte callbacks a promesas

---

### Módulo 5: Datos y APIs ✓
- [ ] Puedo trabajar con JSON
- [ ] Sé usar fetch correctamente
- [ ] Entiendo los métodos REST
- [ ] Manejo errores en peticiones
- [ ] Puedo hacer POST, PUT, DELETE
- [ ] Conozco WebSockets

**Desafío del módulo:**
- [ ] Crea una app de clima que consuma API
- [ ] Crea una galería que cargue fotos de API
- [ ] Crea un buscador de películas

---

## 🔧 Mejores Prácticas

### Código Limpio
```javascript
// ❌ Malo
var x = 5;
let result = x + y;
function calc(a,b,c){return a+b+c;}

// ✓ Bueno
const cantidad = 5;
let resultado = cantidad + otroValor;
function calcularTotal(precio, impuesto, descuento) {
    return precio + impuesto - descuento;
}
```

### Nombrado de Variables
```javascript
// ❌ Malo
const d = new Date();
const u = getUserData();
const a = [];

// ✓ Bueno
const fechaActual = new Date();
const datosUsuario = getUserData();
const usuariosActivos = [];
```

### Funciones
```javascript
// ❌ Malo
function procesar(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}

// ✓ Bueno
function obtenerValoresDuplicados(numeros) {
    return numeros
        .filter(numero => numero > 5)
        .map(numero => numero * 2);
}
```

### Manejo de Errores
```javascript
// ❌ Malo
try {
    const datos = JSON.parse(jsonString);
} catch (e) {
    console.log("Error");
}

// ✓ Bueno
try {
    const datos = JSON.parse(jsonString);
} catch (error) {
    console.error("Error al parsear JSON:", error.message);
    // Manejar apropiadamente
}
```

---

## 🐛 Debugging

### Chrome DevTools
1. **F12** o **Ctrl+Shift+I** - Abre DevTools
2. **Console** - Ver logs y errores
3. **Debugger** - Poner breakpoints
4. **Network** - Ver peticiones HTTP
5. **Application** - Ver localStorage

### Técnicas Comunes
```javascript
// 1. Console.log básico
console.log("Valor:", valor);

// 2. Desestructuración en logs
const { nombre, edad } = usuario;
console.log({ nombre, edad });

// 3. Tabla
console.table([
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
]);

// 4. Grupo
console.group("Usuario");
console.log("Nombre:", usuario.nombre);
console.log("Email:", usuario.email);
console.groupEnd();

// 5. Debugger
debugger; // El código se pausará aquí

// 6. Try-catch con logging
try {
    riesgosoOperacion();
} catch (error) {
    console.error("Error:", error);
    console.error("Stack:", error.stack);
}
```

---

## 📊 Comparación de Métodos

### Formas de Crear Funciones
```javascript
// 1. Declaración
function sumar(a, b) {
    return a + b;
}

// 2. Expresión
const restar = function(a, b) {
    return a - b;
};

// 3. Arrow function
const multiplicar = (a, b) => a * b;

// ¿Cuándo usar cada una?
// - Declaración: funciones principales, reutilizables
// - Expresión: callbacks, funciones complejas
// - Arrow: funciones cortas, no necesitan 'this'
```

### Formas de Iterar
```javascript
const arr = [1, 2, 3];

// 1. for clásico
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. forEach
arr.forEach(elemento => {
    console.log(elemento);
});

// 3. map (cuando quieres transformar)
const duplicados = arr.map(x => x * 2);

// 4. filter (cuando quieres seleccionar)
const pares = arr.filter(x => x % 2 === 0);

// 5. reduce (cuando quieres acumular)
const suma = arr.reduce((acc, x) => acc + x, 0);

// ¿Cuándo usar cada una?
// - for: cuando necesitas control total
// - forEach: cuando necesitas efectos secundarios
// - map: cuando quieres nuevo array transformado
// - filter: cuando quieres subconjunto
// - reduce: cuando quieres un valor acumulado
```

---

## 🚀 Proyectos Recomendados por Nivel

### Nivel Principiante
1. Calculadora simple
2. Juego de adivinanza
3. Generador de contraseñas
4. Lista de tareas básica
5. Convertidor de unidades

### Nivel Intermedio
1. App del clima con API
2. Buscador de películas
3. Galería de fotos interactiva
4. E-commerce simple
5. Blog con comentarios

### Nivel Avanzado
1. Red social simulada
2. Chat en tiempo real (WebSocket)
3. Gestor de proyectos (Kanban)
4. Plataforma de e-learning
5. Aplicación de finanzas personales

---

## 📚 Lecturas Recomendadas

### Libros
- "Eloquent JavaScript" - Marijn Haverbeke
- "JavaScript: The Definitive Guide" - David Flanagan
- "You Don't Know JS" - Kyle Simpson

### Artículos
- [Event Loop in JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)
- [Closures en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
- [Prototypal Inheritance](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)

### Comunidades
- [Dev.to](https://dev.to/) - Artículos de comunidad
- [JavaScript Subreddit](https://www.reddit.com/r/javascript/)
- [Stack Overflow](https://stackoverflow.com/) - Preguntas y respuestas

---

## 🎬 Flujo Típico de Aprendizaje

```
Día 1-2: Leer Módulo 1
   ↓
Día 2-3: Practicar Módulo 1
   ↓
Día 4: Pequeño proyecto con Módulo 1
   ↓
Día 5-6: Leer Módulo 2
   ↓
Día 6-7: Practicar Módulo 2
   ↓
Día 8: Combinar Módulo 1 + 2
   ↓
... (repetir)
   ↓
Semana 3-4: Proyecto integrador
```

---

## 🏆 Hitos de Aprendizaje

- ✅ **Semana 1**: Dominas Módulo 1 completamente
- ✅ **Semana 2**: Puedes manipular el DOM sin ayuda
- ✅ **Semana 3**: Entiendes POO y crear clases
- ✅ **Semana 4**: Dominas async/await y APIs
- ✅ **Semana 5**: Puedes hacer un proyecto completo

---

## 💡 Consejos Finales

1. **Practica diariamente** - Aunque sea 30 minutos
2. **Lee código de otros** - GitHub es tu amigo
3. **Entiende, no memorices** - El conocimiento viene del entendimiento
4. **Resuelve problemas reales** - No solo ejercicios de libro
5. **Enseña a otros** - Explicar solidifica el conocimiento
6. **No temas los errores** - Son tu mejor herramienta de aprendizaje
7. **Mantente actualizado** - JavaScript evoluciona constantemente

---

**¡Bienvenido a tu viaje por JavaScript! 🚀**
