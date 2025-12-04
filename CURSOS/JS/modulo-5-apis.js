/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                MÓDULO 5: MANEJO DE DATOS Y APIs                          ║
 * ║                          Nivel: Avanzado                                ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

console.log("\n" + "=".repeat(70));
console.log("MÓDULO 5: MANEJO DE DATOS Y APIS REST");
console.log("=".repeat(70));

// ============================================================================
// 1. JSON Y SU ESTRUCTURA
// ============================================================================

console.log("\n=== 1. JSON (JavaScript Object Notation) ===");

// JSON es un formato de intercambio de datos basado en texto

// Estructura básica de JSON
const jsonTexto = `{
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid",
    "hobbies": ["leer", "programar", "viajar"],
    "activo": true,
    "direcci": null
}`;

console.log("JSON como texto:");
console.log(jsonTexto);

// Convertir JSON a objeto JavaScript (Parse)
const objeto = JSON.parse(jsonTexto);
console.log("\nObjeto JavaScript:");
console.log(objeto);
console.log(objeto.nombre); // "Juan"
console.log(objeto.hobbies[1]); // "programar"

// Convertir objeto JavaScript a JSON (Stringify)
const usuario = {
    nombre: "María",
    edad: 28,
    email: "maria@ejemplo.com",
    conectado: true
};

const jsonUsuario = JSON.stringify(usuario);
console.log("\nJSON generado:");
console.log(jsonUsuario);

// stringify con formato (indentación)
const jsonFormateado = JSON.stringify(usuario, null, 2);
console.log("\nJSON formateado:");
console.log(jsonFormateado);

// Tipos de datos válidos en JSON
const tiposJSON = {
    cadena: "texto",
    numero: 42,
    decimal: 3.14,
    booleano: true,
    nulo: null,
    array: [1, 2, 3],
    objeto: { propiedad: "valor" }
};

console.log("\nTipos válidos en JSON:");
console.log(JSON.stringify(tiposJSON, null, 2));

// Tipos NO válidos en JSON
const usuarioConFuncion = {
    nombre: "Carlos",
    saludar: function() { // Las funciones NO van en JSON
        return "Hola";
    }
};

console.log("\nJSON sin función:");
console.log(JSON.stringify(usuarioConFuncion)); // { "nombre": "Carlos" }


// ============================================================================
// 2. FETCH() Y PROMESAS
// ============================================================================

console.log("\n=== 2. FETCH() Y PROMESAS ===");

/*
Fetch es la API moderna para hacer peticiones HTTP.
Devuelve una Promesa que se resuelve con la respuesta.

Sintaxis:
fetch(url, options)
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))
*/

// Ejemplo 1: GET request simple
console.log("\nEjemplo: Obtener usuarios desde JSONPlaceholder");

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        
        // Verificar si la respuesta fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        // Convertir respuesta a JSON
        const usuarios = await respuesta.json();
        
        console.log("Usuarios obtenidos:");
        usuarios.forEach(usuario => {
            console.log(`- ${usuario.name} (${usuario.email})`);
        });
        
        return usuarios;
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
    }
}

// Ejecutar (descomentar para hacer la petición real)
// obtenerUsuarios();


// ============================================================================
// 3. CONSUMO DE APIS REST
// ============================================================================

console.log("\n=== 3. CONSUMO DE APIS REST ===");

/*
REST (Representational State Transfer) es un estilo arquitectónico
para crear APIs usando HTTP.

Métodos HTTP:
- GET: Obtener datos
- POST: Crear datos
- PUT: Actualizar datos completos
- PATCH: Actualizar datos parciales
- DELETE: Eliminar datos
*/

// Ejemplo 1: GET - Obtener un post
async function obtenerPost(postId) {
    try {
        const respuesta = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status}`);
        }
        
        const post = await respuesta.json();
        console.log("Post obtenido:");
        console.log(`ID: ${post.id}`);
        console.log(`Título: ${post.title}`);
        console.log(`Body: ${post.body}`);
        
        return post;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// obtenerPost(1);

// Ejemplo 2: GET - Obtener con parámetros
async function buscarPosts(usuarioId, limite = 5) {
    try {
        const params = new URLSearchParams({
            userId: usuarioId,
            _limit: limite
        });
        
        const respuesta = await fetch(
            `https://jsonplaceholder.typicode.com/posts?${params}`
        );
        
        if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);
        
        const posts = await respuesta.json();
        console.log(`Posts del usuario ${usuarioId}:`);
        posts.forEach(post => {
            console.log(`- ${post.title}`);
        });
        
        return posts;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Clase para gestionar una API
class APIManager {
    constructor(urlBase) {
        this.urlBase = urlBase;
    }
    
    // GET request
    async get(endpoint) {
        try {
            const respuesta = await fetch(`${this.urlBase}${endpoint}`);
            if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
            return await respuesta.json();
        } catch (error) {
            console.error(`Error GET ${endpoint}:`, error);
            throw error;
        }
    }
    
    // POST request
    async post(endpoint, datos) {
        try {
            const respuesta = await fetch(`${this.urlBase}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
            
            if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
            return await respuesta.json();
        } catch (error) {
            console.error(`Error POST ${endpoint}:`, error);
            throw error;
        }
    }
    
    // PUT request
    async put(endpoint, datos) {
        try {
            const respuesta = await fetch(`${this.urlBase}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
            
            if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
            return await respuesta.json();
        } catch (error) {
            console.error(`Error PUT ${endpoint}:`, error);
            throw error;
        }
    }
    
    // DELETE request
    async delete(endpoint) {
        try {
            const respuesta = await fetch(`${this.urlBase}${endpoint}`, {
                method: 'DELETE'
            });
            
            if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
            return await respuesta.json();
        } catch (error) {
            console.error(`Error DELETE ${endpoint}:`, error);
            throw error;
        }
    }
}

// Usar la clase
const api = new APIManager('https://jsonplaceholder.typicode.com');

// Obtener usuarios
async function demoBuscador() {
    try {
        console.log("--- Demostración de APIManager ---");
        
        // GET
        const usuarios = await api.get('/users?_limit=2');
        console.log("Usuarios:", usuarios.length);
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// demoBuscador();


// ============================================================================
// 4. MANEJO DE ERRORES EN PETICIONES
// ============================================================================

console.log("\n=== 4. MANEJO DE ERRORES EN PETICIONES ===");

async function conManejoDeBuenError(url) {
    try {
        console.log(`Descargando: ${url}`);
        
        const respuesta = await fetch(url);
        
        // Errores HTTP
        if (!respuesta.ok) {
            throw new Error(
                `Error HTTP ${respuesta.status}: ${respuesta.statusText}`
            );
        }
        
        // Error JSON inválido
        const datos = await respuesta.json();
        
        // Validar datos
        if (!datos || Object.keys(datos).length === 0) {
            throw new Error("Datos vacíos recibidos");
        }
        
        console.log("✓ Datos válidos:", Object.keys(datos).length, "propiedades");
        return datos;
        
    } catch (error) {
        // Diferenciar tipos de error
        if (error instanceof TypeError) {
            console.error("Error de conexión:", error.message);
        } else if (error instanceof SyntaxError) {
            console.error("Error al parsear JSON:", error.message);
        } else {
            console.error("Error general:", error.message);
        }
        
        return null;
    }
}

// conManejoDeBuenError("https://jsonplaceholder.typicode.com/users/1");
// conManejoDeBuenError("https://jsonplaceholder.typicode.com/invalid");


// ============================================================================
// 5. SUBIDA DE DATOS (POST, PUT, DELETE)
// ============================================================================

console.log("\n=== 5. SUBIDA DE DATOS ===");

// Ejemplo: Crear un nuevo post
async function crearPost() {
    const nuevoPost = {
        title: "Mi nuevo post",
        body: "Este es el contenido de mi post",
        userId: 1
    };
    
    try {
        const respuesta = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoPost)
            }
        );
        
        if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);
        
        const postCreado = await respuesta.json();
        console.log("Post creado:");
        console.log(postCreado);
        return postCreado;
    } catch (error) {
        console.error("Error al crear post:", error);
    }
}

// crearPost();

// Ejemplo: Actualizar un post
async function actualizarPost(postId) {
    const actualizacion = {
        title: "Título actualizado",
        body: "Cuerpo actualizado"
    };
    
    try {
        const respuesta = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(actualizacion)
            }
        );
        
        if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);
        
        const postActualizado = await respuesta.json();
        console.log("Post actualizado:");
        console.log(postActualizado);
        return postActualizado;
    } catch (error) {
        console.error("Error al actualizar post:", error);
    }
}

// actualizarPost(1);

// Ejemplo: Eliminar un post
async function eliminarPost(postId) {
    try {
        const respuesta = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                method: 'DELETE'
            }
        );
        
        if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);
        
        console.log(`Post ${postId} eliminado correctamente`);
        return true;
    } catch (error) {
        console.error("Error al eliminar post:", error);
    }
}

// eliminarPost(1);

// Subir archivo (FormData)
async function subirArchivo(archivo) {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('usuario_id', 1);
    
    try {
        const respuesta = await fetch('/upload', {
            method: 'POST',
            // NO incluir Content-Type, el navegador lo hace automáticamente
            body: formData
        });
        
        const resultado = await respuesta.json();
        console.log("Archivo subido:", resultado);
        return resultado;
    } catch (error) {
        console.error("Error al subir archivo:", error);
    }
}


// ============================================================================
// 6. INTRODUCCIÓN A WEBSOCKETS
// ============================================================================

console.log("\n=== 6. INTRODUCCIÓN A WEBSOCKETS ===");

/*
WebSocket es un protocolo de comunicación bidireccional en tiempo real
entre cliente y servidor.

Ideal para:
- Chat en tiempo real
- Actualizaciones live
- Notificaciones push
- Juegos multijugador

Diferencia con HTTP:
- HTTP: Cliente solicita, servidor responde (unidireccional)
- WebSocket: Cliente y servidor pueden enviar datos en cualquier momento
*/

class ClienteWebSocket {
    constructor(url) {
        this.url = url;
        this.ws = null;
        this.reconectarIntento = 0;
        this.maxReintentos = 5;
    }
    
    conectar() {
        return new Promise((resolve, reject) => {
            try {
                this.ws = new WebSocket(this.url);
                
                // Evento: conexión abierta
                this.ws.onopen = () => {
                    console.log("✓ WebSocket conectado");
                    this.reconectarIntento = 0;
                    resolve(this);
                };
                
                // Evento: mensaje recibido
                this.ws.onmessage = (evento) => {
                    const datos = JSON.parse(evento.data);
                    console.log("Mensaje recibido:", datos);
                    this.onMensaje(datos);
                };
                
                // Evento: error
                this.ws.onerror = (error) => {
                    console.error("Error WebSocket:", error);
                    reject(error);
                };
                
                // Evento: conexión cerrada
                this.ws.onclose = () => {
                    console.log("WebSocket cerrado");
                    this.intentarReconectar();
                };
                
            } catch (error) {
                reject(error);
            }
        });
    }
    
    enviar(datos) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(datos));
            console.log("Mensaje enviado:", datos);
        } else {
            console.error("WebSocket no está abierto");
        }
    }
    
    cerrar() {
        if (this.ws) {
            this.ws.close();
        }
    }
    
    intentarReconectar() {
        if (this.reconectarIntento < this.maxReintentos) {
            this.reconectarIntento++;
            const delay = Math.pow(2, this.reconectarIntento) * 1000;
            console.log(`Reconectando en ${delay}ms...`);
            
            setTimeout(() => {
                this.conectar().catch(error => {
                    console.error("Fallo al reconectar:", error);
                });
            }, delay);
        }
    }
    
    onMensaje(datos) {
        // Sobrescribir para manejar mensajes
    }
}

// Uso (simulado, requiere servidor WebSocket)
/*
const cliente = new ClienteWebSocket('ws://localhost:8080');

cliente.onMensaje = function(datos) {
    console.log("Nuevo mensaje:", datos.texto);
};

await cliente.conectar();
cliente.enviar({ tipo: 'chat', texto: 'Hola a todos' });
*/


// ============================================================================
// EJERCICIOS PRÁCTICOS
// ============================================================================

console.log("\n=== EJERCICIOS PRÁCTICOS ===");

// EJERCICIO 1: Clase para gestionar TODO list con API
console.log("\nEjercicio 1 - Gestor de TODOs");

class GestorTODOs {
    constructor() {
        this.api = new APIManager('https://jsonplaceholder.typicode.com');
        this.todos = [];
    }
    
    async cargarTODOs(usuarioId) {
        try {
            this.todos = await this.api.get(`/todos?userId=${usuarioId}`);
            console.log(`${this.todos.length} TODOs cargados del usuario ${usuarioId}`);
            return this.todos;
        } catch (error) {
            console.error("Error al cargar TODOs:", error);
        }
    }
    
    obtenerCompletados() {
        return this.todos.filter(todo => todo.completed);
    }
    
    obtenerPendientes() {
        return this.todos.filter(todo => !todo.completed);
    }
    
    obtenerEstadisticas() {
        const total = this.todos.length;
        const completados = this.obtenerCompletados().length;
        const pendientes = this.obtenerPendientes().length;
        const porcentaje = total > 0 ? ((completados / total) * 100).toFixed(2) : 0;
        
        return {
            total,
            completados,
            pendientes,
            porcentaje: `${porcentaje}%`
        };
    }
}

const gestorTODOs = new GestorTODOs();

// Simulación (descomentar para ejecutar)
/*
await gestorTODOs.cargarTODOs(1);
console.log("Completados:", gestorTODOs.obtenerCompletados().length);
console.log("Pendientes:", gestorTODOs.obtenerPendientes().length);
console.log("Estadísticas:", gestorTODOs.obtenerEstadisticas());
*/

// EJERCICIO 2: Procesar datos de API en paralelo
console.log("\nEjercicio 2 - Procesamiento Paralelo");

async function obtenerDatosCombinadosEnParalelo() {
    try {
        // Ejecutar 3 peticiones en paralelo
        const [usuarios, posts, comentarios] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
                .then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
                .then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
                .then(r => r.json())
        ]);
        
        console.log("Datos obtenidos en paralelo:");
        console.log(`- ${usuarios.length} usuarios`);
        console.log(`- ${posts.length} posts`);
        console.log(`- ${comentarios.length} comentarios`);
        
        return { usuarios, posts, comentarios };
    } catch (error) {
        console.error("Error:", error);
    }
}

// obtenerDatosCombinadosEnParalelo();

// EJERCICIO 3: Reintentos automáticos
console.log("\nEjercicio 3 - Reintentos Automáticos");

async function fetchConReintentos(url, maxReintentos = 3) {
    let ultimoError;
    
    for (let intento = 1; intento <= maxReintentos; intento++) {
        try {
            console.log(`Intento ${intento} de ${maxReintentos}`);
            const respuesta = await fetch(url);
            
            if (!respuesta.ok) {
                throw new Error(`HTTP ${respuesta.status}`);
            }
            
            console.log("✓ Éxito");
            return await respuesta.json();
            
        } catch (error) {
            ultimoError = error;
            console.log(`✗ Error: ${error.message}`);
            
            if (intento < maxReintentos) {
                const delay = Math.pow(2, intento) * 100;
                console.log(`Reintentando en ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw ultimoError;
}

// Usar con URL válida
// await fetchConReintentos('https://jsonplaceholder.typicode.com/users/1');

// EJERCICIO 4: Cache de peticiones
console.log("\nEjercicio 4 - Cache de Peticiones");

class FetchConCache {
    constructor() {
        this.cache = new Map();
    }
    
    async obtener(url, opciones = {}) {
        // Verificar cache
        if (this.cache.has(url) && !opciones.forzarActualizar) {
            console.log(`✓ Desde cache: ${url}`);
            return this.cache.get(url);
        }
        
        try {
            console.log(`Descargando: ${url}`);
            const respuesta = await fetch(url);
            
            if (!respuesta.ok) {
                throw new Error(`HTTP ${respuesta.status}`);
            }
            
            const datos = await respuesta.json();
            this.cache.set(url, datos);
            
            return datos;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
    
    limpiar(url) {
        if (url) {
            this.cache.delete(url);
        } else {
            this.cache.clear();
        }
    }
}

const fetchCache = new FetchConCache();

// Uso
/*
await fetchCache.obtener('https://jsonplaceholder.typicode.com/users/1');
await fetchCache.obtener('https://jsonplaceholder.typicode.com/users/1'); // Desde cache
*/

console.log("\n" + "=".repeat(70));
console.log("✓ MÓDULO 5 - MANEJO DE DATOS Y APIS COMPLETADO");
console.log("=".repeat(70));

console.log("\n" + "=".repeat(70));
console.log("✓✓✓ CURSO COMPLETO DE JAVASCRIPT FINALIZADO ✓✓✓");
console.log("=".repeat(70));
