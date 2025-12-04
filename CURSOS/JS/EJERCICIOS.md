# 📝 Ejercicios Prácticos - JavaScript Completo

## Cómo usar este archivo

1. Lee el ejercicio
2. Intenta resolverlo sin mirar la solución
3. Compara tu solución con la propuesta
4. Si tienes dificultades, revisa el módulo correspondiente

---

## MÓDULO 1: Fundamentos de JavaScript

### Ejercicio 1.1: Sistema de Calificaciones
**Objetivo:** Crear un programa que calcule el promedio de estudiantes

```javascript
// Datos de ejemplo
const estudiantes = [
    { nombre: "Juan", calificaciones: [8, 9, 7] },
    { nombre: "María", calificaciones: [10, 9, 10] },
    { nombre: "Pedro", calificaciones: [6, 7, 5] }
];

// Tu código aquí
// - Calcular promedio de cada estudiante
// - Mostrar estudiante con mejor promedio
// - Mostrar estudiante con peor promedio
```

**Solución:**
```javascript
function procesarEstudiantes(estudiantes) {
    const resultados = estudiantes.map(est => ({
        ...est,
        promedio: (est.calificaciones.reduce((a, b) => a + b, 0) / 
                  est.calificaciones.length).toFixed(2)
    }));
    
    const mejor = resultados.reduce((a, b) => 
        parseFloat(a.promedio) > parseFloat(b.promedio) ? a : b);
    
    const peor = resultados.reduce((a, b) => 
        parseFloat(a.promedio) < parseFloat(b.promedio) ? a : b);
    
    return {
        resultados,
        mejorEstudiante: mejor,
        peorEstudiante: peor
    };
}

console.log(procesarEstudiantes(estudiantes));
```

---

### Ejercicio 1.2: Validador de Email
**Objetivo:** Crear función que valide emails

```javascript
// Requisitos:
// - Debe contener @
// - Debe tener dominio válido
// - Debe tener extensión válida (.com, .es, .org, etc.)

function validarEmail(email) {
    // Tu código aquí
}

// Pruebas
console.log(validarEmail("usuario@ejemplo.com")); // true
console.log(validarEmail("usuario@.com")); // false
console.log(validarEmail("usuarioejemplo.com")); // false
```

**Solución:**
```javascript
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```

---

## MÓDULO 2: Manipulación del DOM y Eventos

### Ejercicio 2.1: Lista de Compras Interactiva
**Objetivo:** Crear una lista de compras con agregar/eliminar items

```html
<!-- HTML -->
<div id="app">
    <h2>Lista de Compras</h2>
    <input type="text" id="producto-input" placeholder="Producto...">
    <button id="agregar-btn">Agregar</button>
    
    <ul id="lista-compras"></ul>
    
    <p>Total items: <span id="total">0</span></p>
    <p>Total gastado: <span id="gasto-total">$0</span></p>
</div>
```

**Requisitos:**
- Agregar productos con precio
- Eliminar productos
- Actualizar total automáticamente
- Persiste en localStorage

---

### Ejercicio 2.2: Validador de Formulario en Tiempo Real
**Objetivo:** Validar formulario mientras se escribe

```html
<form id="formulario">
    <input type="text" id="nombre" placeholder="Nombre (3-20 caracteres)">
    <input type="email" id="email" placeholder="Email válido">
    <input type="password" id="password" placeholder="Password (mínimo 8)">
    <button type="submit">Enviar</button>
</form>

<div id="errores"></div>
```

**Requisitos:**
- Validar mientras se escribe
- Mostrar errores en rojo
- Mostrar validaciones en verde
- Solo habilitar botón si todo es válido

---

## MÓDULO 3: Programación Orientada a Objetos

### Ejercicio 3.1: Banco Simulado
**Objetivo:** Crear sistema de banco con cuentas, transacciones

```javascript
class Banco {
    // Tu código aquí
    // - Crear cuentas
    // - Depósitos
    // - Retiros
    // - Transferencias
    // - Historial
}

// Uso
const banco = new Banco();
const cuenta1 = banco.crearCuenta("Juan");
const cuenta2 = banco.crearCuenta("María");

cuenta1.depositar(1000);
cuenta1.transferir(cuenta2, 200);
```

---

### Ejercicio 3.2: Tienda en Línea
**Objetivo:** Crear sistema de tienda con productos y carrito

```javascript
class Tienda {
    // Tu código aquí
}

class Producto {
    // Tu código aquí
}

class Carrito {
    // Tu código aquí
    // - Agregar productos
    // - Remover productos
    // - Calcular total
    // - Aplicar descuentos
}

// Uso
const tienda = new Tienda();
const producto1 = new Producto("Laptop", 1000);
const carrito = new Carrito();
carrito.agregar(producto1, 2);
```

---

## MÓDULO 4: Funciones Avanzadas

### Ejercicio 4.1: Debounce para Búsqueda
**Objetivo:** Implementar búsqueda con debounce

```javascript
function debounce(func, delay) {
    // Tu código aquí
}

// Uso
const buscar = debounce((termino) => {
    console.log(`Buscando: ${termino}`);
}, 1000);

// Simular escritura rápida
buscar("j");
buscar("ja");
buscar("jav");
buscar("javascript");
// Solo debería imprimir una vez: "Buscando: javascript"
```

---

### Ejercicio 4.2: Promise Race - Timeout
**Objetivo:** Crear un fetch con timeout

```javascript
async function fetchConTimeout(url, timeout = 5000) {
    // Tu código aquí
    // - Hacer fetch
    // - Si tarda más de timeout, cancelar
    // - Manejar errores
}

// Uso
await fetchConTimeout('https://api.ejemplo.com/datos', 3000);
```

---

## MÓDULO 5: Manejo de Datos y APIs

### Ejercicio 5.1: Gestor de Galería
**Objetivo:** Cargar imágenes desde API y mostrar con filtros

```javascript
class GaleriaFotos {
    constructor(apiUrl) {
        // Tu código aquí
    }
    
    async cargarFotos() {
        // Tu código aquí
    }
    
    filtrar(criterio) {
        // Tu código aquí
    }
    
    mostrar() {
        // Tu código aquí
    }
}
```

---

### Ejercicio 5.2: Monitor de Criptomonedas
**Objetivo:** Obtener precios de criptomonedas en tiempo real

```javascript
class MonitorCripto {
    constructor() {
        // Usar API: https://api.coingecko.com/api/v3/
    }
    
    async obtenerPrecio(cripto) {
        // Tu código aquí
    }
    
    async compararPrecio(cripto1, cripto2) {
        // Tu código aquí
    }
    
    async historial(cripto, dias = 7) {
        // Tu código aquí
    }
}
```

---

## Desafío Final: Proyecto Integrador

### Proyecto: Red Social Simulada

**Requisitos:**
1. **Usuarios**
   - Crear perfil
   - Seguir/dejar de seguir
   - Ver perfil de otros

2. **Posts**
   - Crear posts
   - Ver posts del timeline
   - Dar like/unlike
   - Comentar

3. **Datos**
   - Guardar en localStorage
   - Cargar datos al iniciar
   - Persistencia de cambios

4. **UI/UX**
   - Interfaz intuitiva
   - Validación de formularios
   - Manejo de errores
   - Mensajes de confirmación

**Estructura sugerida:**
```javascript
class RedSocial {
    constructor() {
        this.usuarios = [];
        this.posts = [];
    }
    
    crearUsuario(nombre, email) { }
    crearPost(usuarioId, contenido) { }
    darLike(postId, usuarioId) { }
    seguir(usuarioId, usuarioASeguir) { }
}

// Archivo HTML con interfaz
// Archivo CSS con estilos
// Archivo JS principal con interacción
```

---

## Recursos Adicionales

### Documentación
- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://es.javascript.info/)
- [W3Schools](https://www.w3schools.com/js/)

### APIs Útiles
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API fake para testing
- [OpenWeather](https://openweathermap.org/api) - Datos de clima
- [CoinGecko](https://www.coingecko.com/es/api) - Criptomonedas
- [Dog CEO](https://dog.ceo/dog-api/) - Imágenes de perros

### Herramientas
- [CodePen](https://codepen.io/) - Editor online
- [JSFiddle](https://jsfiddle.net/) - Sandbox para JavaScript
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debug

---

**¡Mucho éxito en tu aprendizaje de JavaScript! 🚀**
