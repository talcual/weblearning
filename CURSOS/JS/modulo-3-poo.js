/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║          MÓDULO 3: PROGRAMACIÓN ORIENTADA A OBJETOS (POO)               ║
 * ║                          Nivel: Intermedio                              ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

console.log("\n" + "=".repeat(70));
console.log("MÓDULO 3: PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT");
console.log("=".repeat(70));

// ============================================================================
// 1. OBJETOS LITERALES
// ============================================================================

console.log("\n=== 1. OBJETOS LITERALES ===");

const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Madrid",
    
    // Métodos (funciones dentro del objeto)
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}`;
    },
    
    // Método abreviado (ES6)
    obtenerEdad() {
        return this.edad;
    },
    
    // Propiedad getter
    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
};

console.log(persona.nombre); // "Juan"
console.log(persona.saludar()); // "Hola, mi nombre es Juan Pérez"
console.log(persona.obtenerEdad()); // 30
console.log(persona.nombreCompleto()); // "Juan Pérez"

// Acceder a propiedades
console.log("Propiedades del objeto:");
for (let propiedad in persona) {
    if (typeof persona[propiedad] !== 'function') {
        console.log(`  ${propiedad}: ${persona[propiedad]}`);
    }
}

// Agregar propiedades dinámicamente
persona.profesion = "Ingeniero";
console.log(persona.profesion); // "Ingeniero"

// Eliminar propiedades
delete persona.ciudad;
console.log(persona.ciudad); // undefined


// ============================================================================
// 2. THIS Y BINDING
// ============================================================================

console.log("\n=== 2. THIS Y BINDING ===");

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    
    obtenerInfo: function() {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
};

coche.obtenerInfo(); // Correcto - this se refiere a coche

// Problema: si asignamos el método a una variable
const metodo = coche.obtenerInfo;
// metodo(); // ERROR - this es undefined (o window en navegador)

// Solución 1: bind
const metodoConBind = coche.obtenerInfo.bind(coche);
metodoConBind(); // ✓ Funciona

// Solución 2: call
coche.obtenerInfo.call(coche); // ✓ Funciona

// Solución 3: apply
coche.obtenerInfo.apply(coche); // ✓ Funciona

// Diferencia entre call y apply
function presentar(ciudad, pais) {
    console.log(`${this.nombre} vive en ${ciudad}, ${pais}`);
}

const usuario = { nombre: "María" };

// call - argumentos separados
presentar.call(usuario, "Barcelona", "España");

// apply - argumentos como array
presentar.apply(usuario, ["Madrid", "España"]);

// bind - devuelve nueva función
const presentarMaria = presentar.bind(usuario);
presentarMaria("Valencia", "España");


// ============================================================================
// 3. PROTOTIPOS Y HERENCIA PROTOTÍPICA
// ============================================================================

console.log("\n=== 3. PROTOTIPOS Y HERENCIA PROTOTÍPICA ===");

// Crear un constructor (función que crea objetos)
function Animal(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
}

// Agregar métodos al prototipo
Animal.prototype.hacer_sonido = function() {
    return `${this.nombre} hace un sonido`;
};

Animal.prototype.obtenerInfo = function() {
    return `${this.nombre} es un ${this.especie}`;
};

// Crear instancias
const perro = new Animal("Max", "Perro");
const gato = new Animal("Miau", "Gato");

console.log(perro.nombre); // "Max"
console.log(perro.hacer_sonido()); // "Max hace un sonido"
console.log(gato.obtenerInfo()); // "Miau es un Gato"

// Verificar herencia
console.log(perro instanceof Animal); // true
console.log(Object.getPrototypeOf(perro) === Animal.prototype); // true

// Cadena de prototipos
console.log("Cadena de prototipos de perro:");
let obj = perro;
while (obj) {
    console.log("  ", obj);
    obj = Object.getPrototypeOf(obj);
}


// ============================================================================
// 4. CLASES ES6
// ============================================================================

console.log("\n=== 4. CLASES ES6 ===");

class Vehiculo {
    // Constructor
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    
    // Método
    acelerar() {
        this.velocidad += 10;
        return `Acelerando... Velocidad: ${this.velocidad} km/h`;
    }
    
    frenar() {
        this.velocidad = Math.max(0, this.velocidad - 10);
        return `Frenando... Velocidad: ${this.velocidad} km/h`;
    }
    
    obtenerInfo() {
        return `${this.marca} ${this.modelo} - Velocidad: ${this.velocidad} km/h`;
    }
}

// Crear instancia
const auto = new Vehiculo("Ford", "Focus");
console.log(auto.acelerar()); // "Acelerando... Velocidad: 10 km/h"
console.log(auto.acelerar()); // "Acelerando... Velocidad: 20 km/h"
console.log(auto.frenar()); // "Frenando... Velocidad: 10 km/h"
console.log(auto.obtenerInfo()); // "Ford Focus - Velocidad: 10 km/h"


// ============================================================================
// 5. HERENCIA CON EXTENDS
// ============================================================================

console.log("\n=== 5. HERENCIA CON EXTENDS ===");

class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    
    obtenerInfo() {
        return `Empleado: ${this.nombre}`;
    }
    
    calcularBono() {
        return this.salario * 0.1;
    }
}

// Herencia - Gerente hereda de Empleado
class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        // Llamar al constructor padre
        super(nombre, salario);
        this.departamento = departamento;
    }
    
    // Sobrescribir método del padre
    obtenerInfo() {
        return `Gerente de ${this.departamento}: ${this.nombre}`;
    }
    
    // Método adicional
    organizarReunion() {
        return `${this.nombre} organizó una reunión`;
    }
    
    // Sobrescribir bono
    calcularBono() {
        return this.salario * 0.2; // Los gerentes tienen más bono
    }
}

const empleado = new Empleado("Carlos", 2000);
const gerente = new Gerente("Ana", 4000, "Tecnología");

console.log(empleado.obtenerInfo()); // "Empleado: Carlos"
console.log(empleado.calcularBono()); // 200

console.log(gerente.obtenerInfo()); // "Gerente de Tecnología: Ana"
console.log(gerente.calcularBono()); // 800
console.log(gerente.organizarReunion()); // "Ana organizó una reunión"


// ============================================================================
// 6. MÉTODOS ESTÁTICOS
// ============================================================================

console.log("\n=== 6. MÉTODOS ESTÁTICOS ===");

class Matematicas {
    // Método estático - pertenece a la clase, no a las instancias
    static sumar(a, b) {
        return a + b;
    }
    
    static multiplicar(a, b) {
        return a * b;
    }
    
    // Método normal
    constructor(valor) {
        this.valor = valor;
    }
    
    duplicar() {
        return this.valor * 2;
    }
}

// Los métodos estáticos se llaman en la clase
console.log(Matematicas.sumar(5, 3)); // 8
console.log(Matematicas.multiplicar(4, 7)); // 28

// Los métodos normales se llaman en la instancia
const mat = new Matematicas(10);
console.log(mat.duplicar()); // 20

// console.log(mat.sumar(5, 3)); // ERROR - sumar no existe en instancias


// ============================================================================
// 7. PROPIEDADES PRIVADAS
// ============================================================================

console.log("\n=== 7. PROPIEDADES PRIVADAS ===");

class CuentaBancaria {
    // Propiedad privada (con #)
    #saldo = 0;
    
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    
    // Método para depositar (acceder a privada)
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            return `✓ Depositado: $${cantidad}. Saldo: $${this.#saldo}`;
        }
        return "✗ Cantidad inválida";
    }
    
    // Método para retirar
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            return `✓ Retirado: $${cantidad}. Saldo: $${this.#saldo}`;
        }
        return "✗ Saldo insuficiente";
    }
    
    // Getter para obtener saldo
    get saldo() {
        return this.#saldo;
    }
    
    // Obtener info
    obtenerInfo() {
        return `Cuenta de ${this.titular}: $${this.#saldo}`;
    }
}

const cuenta = new CuentaBancaria("Juan", 1000);
console.log(cuenta.depositar(500)); // "✓ Depositado: $500. Saldo: $1500"
console.log(cuenta.retirar(200)); // "✓ Retirado: $200. Saldo: $1300"
console.log(cuenta.saldo); // 1300
console.log(cuenta.obtenerInfo()); // "Cuenta de Juan: $1300"

// No se puede acceder a #saldo directamente
// console.log(cuenta.#saldo); // ERROR


// ============================================================================
// 8. MÉTODOS PRIVADOS
// ============================================================================

console.log("\n=== 8. MÉTODOS PRIVADOS ===");

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Método privado
    #validarEdad(edad) {
        return edad >= 0 && edad <= 150;
    }
    
    // Método público que usa el privado
    establecerEdad(nuevaEdad) {
        if (this.#validarEdad(nuevaEdad)) {
            this.edad = nuevaEdad;
            return true;
        }
        return false;
    }
    
    obtenerInfo() {
        return `${this.nombre}, ${this.edad} años`;
    }
}

const persona2 = new Persona("María", 25);
console.log(persona2.establecerEdad(30)); // true
console.log(persona2.establecerEdad(200)); // false (inválido)
console.log(persona2.obtenerInfo()); // "María, 30 años"

// No se puede llamar al método privado
// persona2.#validarEdad(40); // ERROR


// ============================================================================
// 9. GETTERS Y SETTERS
// ============================================================================

console.log("\n=== 9. GETTERS Y SETTERS ===");

class Rectangulo {
    constructor(ancho, alto) {
        this._ancho = ancho;
        this._alto = alto;
    }
    
    // Getter - acceder como propiedad
    get area() {
        return this._ancho * this._alto;
    }
    
    get perimetro() {
        return 2 * (this._ancho + this._alto);
    }
    
    // Setter - asignar como propiedad
    set ancho(valor) {
        if (valor > 0) {
            this._ancho = valor;
        }
    }
    
    set alto(valor) {
        if (valor > 0) {
            this._alto = valor;
        }
    }
}

const rect = new Rectangulo(5, 10);
console.log(rect.area); // 50 (getter)
console.log(rect.perimetro); // 30 (getter)

rect.ancho = 8; // setter
console.log(rect.area); // 80


// ============================================================================
// 10. ENCAPSULAMIENTO Y ABSTRACCIÓN
// ============================================================================

console.log("\n=== 10. ENCAPSULAMIENTO Y ABSTRACCIÓN ===");

class Carrito {
    #items = [];
    #impuesto = 0.21; // 21% de IVA
    
    constructor() {
        this.#items = [];
    }
    
    // Agregar producto
    agregarProducto(nombre, precio, cantidad = 1) {
        this.#items.push({
            nombre,
            precio,
            cantidad
        });
        return `✓ ${nombre} agregado al carrito`;
    }
    
    // Calcular subtotal (privado)
    #calcularSubtotal() {
        return this.#items.reduce((total, item) => {
            return total + (item.precio * item.cantidad);
        }, 0);
    }
    
    // Obtener total (público - usa método privado)
    obtenerTotal() {
        const subtotal = this.#calcularSubtotal();
        const impuestos = subtotal * this.#impuesto;
        return {
            subtotal: subtotal.toFixed(2),
            impuestos: impuestos.toFixed(2),
            total: (subtotal + impuestos).toFixed(2)
        };
    }
    
    // Obtener items
    get items() {
        return this.#items.map(item => ({...item})); // Copia para evitar cambios
    }
    
    get cantidadArticulos() {
        return this.#items.length;
    }
}

const carrito = new Carrito();
console.log(carrito.agregarProducto("Laptop", 1000, 1));
console.log(carrito.agregarProducto("Mouse", 50, 2));
console.log(carrito.agregarProducto("Teclado", 100, 1));

console.log("Items:", carrito.items);
console.log("Cantidad de artículos:", carrito.cantidadArticulos);
console.log("Total:", carrito.obtenerTotal());


// ============================================================================
// 11. COMPOSICIÓN (Alternativa a herencia)
// ============================================================================

console.log("\n=== 11. COMPOSICIÓN ===");

// En lugar de heredar, composición usa objetos dentro de objetos

class Motor {
    constructor(potencia) {
        this.potencia = potencia;
    }
    
    obtenerInfo() {
        return `Motor: ${this.potencia} CV`;
    }
}

class Auto {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor; // Composición - el auto TIENE un motor
    }
    
    obtenerInfo() {
        return `${this.marca} con ${this.motor.obtenerInfo()}`;
    }
}

const motorV8 = new Motor(400);
const ferrariAuto = new Auto("Ferrari", motorV8);
console.log(ferrariAuto.obtenerInfo()); // "Ferrari con Motor: 400 CV"


// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================

console.log("\n=== EJERCICIOS PRÁCTICOS ===");

// EJERCICIO 1: Crear una clase Estudiante con privacidad
console.log("\nEjercicio 1 - Clase Estudiante");

class Estudiante {
    #calificaciones = [];
    
    constructor(nombre, matricula) {
        this.nombre = nombre;
        this.matricula = matricula;
    }
    
    agregarCalificacion(calificacion) {
        if (calificacion >= 0 && calificacion <= 10) {
            this.#calificaciones.push(calificacion);
            return true;
        }
        return false;
    }
    
    get promedio() {
        if (this.#calificaciones.length === 0) return 0;
        const suma = this.#calificaciones.reduce((a, b) => a + b, 0);
        return (suma / this.#calificaciones.length).toFixed(2);
    }
    
    get estado() {
        const prom = parseFloat(this.promedio);
        if (prom >= 7) return "Aprobado";
        if (prom >= 5) return "En riesgo";
        return "Reprobado";
    }
}

const estudiante = new Estudiante("Pedro", "2024001");
estudiante.agregarCalificacion(8);
estudiante.agregarCalificacion(9);
estudiante.agregarCalificacion(7);

console.log(`Estudiante: ${estudiante.nombre}`);
console.log(`Promedio: ${estudiante.promedio}`);
console.log(`Estado: ${estudiante.estado}`);

// EJERCICIO 2: Herencia multinivel
console.log("\nEjercicio 2 - Herencia multinivel");

class SerVivo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    moverse() {
        return `${this.nombre} se está moviendo`;
    }
}

class Animal extends SerVivo {
    constructor(nombre, especie) {
        super(nombre);
        this.especie = especie;
    }
    
    hacerSonido() {
        return `${this.nombre} hace un sonido`;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, "Perro");
        this.raza = raza;
    }
    
    hacerSonido() {
        return `${this.nombre} ladra: ¡Guau guau!`;
    }
    
    traerObjeto(objeto) {
        return `${this.nombre} trae ${objeto}`;
    }
}

const miPerro = new Perro("Bobby", "Labrador");
console.log(miPerro.moverse()); // Hereda de SerVivo
console.log(miPerro.hacerSonido()); // Sobrescribe de Animal
console.log(miPerro.traerObjeto("la pelota")); // Método propio

console.log("\n" + "=".repeat(70));
console.log("✓ MÓDULO 3 - POO COMPLETADO");
console.log("=".repeat(70));
