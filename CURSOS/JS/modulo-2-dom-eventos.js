/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    MÓDULO 2: MANIPULACIÓN DEL DOM                       ║
 * ║                     Y EVENTOS - ARCHIVO JAVASCRIPT                      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

// ============================================================================
// FUNCIONES PARA SELECTORES
// ============================================================================

function demo_getElementById() {
    // getElementById - obtener elemento por ID
    const elemento = document.getElementById('elemento-por-id');
    
    if (elemento) {
        const resultado = document.getElementById('resultado-id');
        resultado.innerHTML = `
            <strong>✓ Elemento encontrado:</strong><br>
            ID: ${elemento.id}<br>
            Contenido: ${elemento.textContent}<br>
            Clase: ${elemento.className || 'Sin clase'}
        `;
        resultado.classList.add('mostrar');
    }
}

function demo_querySelector() {
    // querySelector - obtener el PRIMER elemento que coincida
    const elemento = document.querySelector('.caja');
    
    if (elemento) {
        const resultado = document.getElementById('resultado-query');
        resultado.innerHTML = `
            <strong>✓ Primera caja encontrada:</strong><br>
            Clase: ${elemento.className}<br>
            Contenido: ${elemento.textContent}<br>
            Posición en DOM: Primera
        `;
        resultado.classList.add('mostrar');
        elemento.classList.add('elemento-resaltado');
        
        // Remover resaltado después de 2 segundos
        setTimeout(() => {
            elemento.classList.remove('elemento-resaltado');
        }, 2000);
    }
}

function demo_querySelectorAll() {
    // querySelectorAll - obtener TODOS los elementos que coincidan
    const elementos = document.querySelectorAll('.caja');
    
    const resultado = document.getElementById('resultado-queryall');
    let html = `<strong>✓ Encontradas ${elementos.length} cajas:</strong><br>`;
    
    elementos.forEach((elem, indice) => {
        html += `${indice + 1}. ${elem.textContent}<br>`;
    });
    
    resultado.innerHTML = html;
    resultado.classList.add('mostrar');
}

function demo_getElementsClass() {
    // getElementsByClassName - obtener elementos por clase
    const elementos = document.getElementsByClassName('caja');
    
    const resultado = document.getElementById('resultado-class');
    resultado.innerHTML = `
        <strong>✓ Elementos con clase "caja":</strong><br>
        Total encontrados: ${elementos.length}
    `;
    resultado.classList.add('mostrar');
}

function demo_getElementsTag() {
    // getElementsByTagName - obtener elementos por etiqueta
    const parrafos = document.getElementsByTagName('p');
    
    const resultado = document.getElementById('resultado-tag');
    resultado.innerHTML = `
        <strong>✓ Total de párrafos en la página:</strong><br>
        ${parrafos.length} elementos &lt;p&gt;
    `;
    resultado.classList.add('mostrar');
}


// ============================================================================
// MANIPULACIÓN DEL DOM
// ============================================================================

function cambiarTexto() {
    const elemento = document.getElementById('parrafo-cambiar');
    
    // textContent - solo texto
    elemento.textContent = '¡Texto ha sido cambiado!';
}

function cambiarHTML() {
    const elemento = document.getElementById('parrafo-cambiar');
    
    // innerHTML - puede contener HTML
    elemento.innerHTML = '<strong style="color: red;">¡HTML ha sido cambiado!</strong>';
}

function cambiarAtributos() {
    const imagen = document.getElementById('imagen-demo');
    
    // Cambiar atributos
    imagen.setAttribute('src', 'https://via.placeholder.com/150/667eea/ffffff?text=Cambio');
    imagen.setAttribute('alt', 'Imagen modificada');
    imagen.setAttribute('title', 'Imagen del curso de JS');
}

function cambiarEstilo() {
    const elemento = document.getElementById('elemento-estilo');
    
    // Cambiar estilos CSS directamente
    elemento.style.background = 'red';
    elemento.style.width = '150px';
    elemento.style.height = '150px';
    elemento.style.borderRadius = '50%';
    elemento.style.transition = 'all 0.3s ease';
}

function agregarClase() {
    const elemento = document.getElementById('elemento-clase');
    
    // Agregar clase
    elemento.classList.add('elemento-resaltado');
    elemento.textContent = 'Clase agregada!';
}

function removerClase() {
    const elemento = document.getElementById('elemento-clase');
    
    // Remover clase
    elemento.classList.remove('elemento-resaltado');
    elemento.textContent = 'Sin clase especial';
}

function toggleClase() {
    const elemento = document.getElementById('elemento-clase');
    
    // Toggle - agrega si no existe, elimina si existe
    elemento.classList.toggle('elemento-resaltado');
    
    if (elemento.classList.contains('elemento-resaltado')) {
        elemento.textContent = 'Clase activada (toggle)';
    } else {
        elemento.textContent = 'Clase desactivada (toggle)';
    }
}

function crearElemento() {
    // Crear un nuevo elemento
    const contenedor = document.getElementById('contenedor-items');
    const nuevoElemento = document.createElement('p');
    
    const cantidad = contenedor.children.length + 1;
    nuevoElemento.textContent = `Item ${cantidad}`;
    nuevoElemento.style.color = '#667eea';
    
    // Agregar el elemento al contenedor
    contenedor.appendChild(nuevoElemento);
}

function eliminarElemento() {
    const contenedor = document.getElementById('contenedor-items');
    
    // Verificar que hay elementos
    if (contenedor.children.length > 0) {
        // Remover el último hijo
        const ultimoElemento = contenedor.lastElementChild;
        ultimoElemento.remove();
    }
}

function limpiarContenedor() {
    const contenedor = document.getElementById('contenedor-items');
    
    // Eliminar TODO el contenido
    contenedor.innerHTML = '';
}


// ============================================================================
// MANEJO DE EVENTOS
// ============================================================================

function evento_click() {
    const resultado = document.getElementById('resultado-click');
    resultado.innerHTML = '✓ ¡Evento click ejecutado!';
    resultado.classList.add('mostrar');
    
    setTimeout(() => {
        resultado.classList.remove('mostrar');
    }, 2000);
}

// Event Listener para el botón
document.addEventListener('DOMContentLoaded', function() {
    const btnClickListener = document.getElementById('btn-click-listener');
    
    if (btnClickListener) {
        btnClickListener.addEventListener('click', function() {
            alert('Evento click capturado con addEventListener');
        });
    }
});

// ============================================================================
// EVENTO CHANGE
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const selector = document.getElementById('selector-opciones');
    
    if (selector) {
        selector.addEventListener('change', function(evento) {
            const valor = evento.target.value;
            const resultado = document.getElementById('resultado-change');
            
            if (valor) {
                resultado.innerHTML = `<strong>✓ Seleccionaste:</strong> ${valor}`;
                resultado.classList.add('mostrar');
            } else {
                resultado.classList.remove('mostrar');
            }
        });
    }
});

// ============================================================================
// EVENTO INPUT (mientras escribes)
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const entrada = document.getElementById('entrada-texto');
    
    if (entrada) {
        entrada.addEventListener('input', function(evento) {
            const texto = evento.target.value;
            const resultado = document.getElementById('resultado-input');
            
            resultado.innerHTML = `
                <strong>Texto capturado:</strong> "${texto}"<br>
                <strong>Longitud:</strong> ${texto.length} caracteres
            `;
            resultado.classList.add('mostrar');
        });
    }
});

// ============================================================================
// EVENTO KEYUP
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const entrada = document.getElementById('entrada-keyup');
    
    if (entrada) {
        entrada.addEventListener('keyup', function(evento) {
            const codigo = evento.key;
            const resultado = document.getElementById('resultado-keyup');
            
            resultado.innerHTML = `
                <strong>Última tecla presionada:</strong> ${codigo}<br>
                <strong>Código:</strong> ${evento.code}
            `;
            resultado.classList.add('mostrar');
        });
    }
});

// ============================================================================
// EVENTOS MOUSEOVER Y MOUSEOUT
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const elemento = document.getElementById('elemento-hover');
    const resultado = document.getElementById('resultado-hover');
    
    if (elemento) {
        elemento.addEventListener('mouseover', function() {
            elemento.style.background = '#ff9800';
            elemento.textContent = '¡El ratón está sobre mí!';
            resultado.innerHTML = '<strong>Evento:</strong> mouseover';
            resultado.classList.add('mostrar');
        });
        
        elemento.addEventListener('mouseout', function() {
            elemento.style.background = 'lightblue';
            elemento.textContent = 'Pasa el ratón sobre mí';
            resultado.innerHTML = '<strong>Evento:</strong> mouseout';
        });
    }
});

// ============================================================================
// EVENTOS FOCUS Y BLUR
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const entrada = document.getElementById('entrada-focus');
    const resultado = document.getElementById('resultado-focus');
    
    if (entrada) {
        entrada.addEventListener('focus', function() {
            resultado.innerHTML = '✓ El input tiene el foco';
            resultado.classList.add('mostrar');
            entrada.style.borderColor = '#667eea';
        });
        
        entrada.addEventListener('blur', function() {
            resultado.innerHTML = '✗ El input perdió el foco';
            entrada.style.borderColor = '#ddd';
        });
    }
});

// ============================================================================
// MANEJO DE FORMULARIOS
// ============================================================================

function validarFormulario(evento) {
    // Prevenir el envío del formulario
    evento.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.querySelector('input[name="terminos"]').checked;
    
    // Validar campos
    const resultado = document.getElementById('resultado-form');
    
    if (!nombre || !email || !edad || !pais) {
        resultado.innerHTML = '<strong class="error">Error: Completa todos los campos</strong>';
        resultado.classList.add('mostrar', 'error');
        return;
    }
    
    if (edad < 18) {
        resultado.innerHTML = '<strong class="error">Error: Debes ser mayor de 18 años</strong>';
        resultado.classList.add('mostrar', 'error');
        return;
    }
    
    if (!terminos) {
        resultado.innerHTML = '<strong class="error">Error: Debes aceptar los términos</strong>';
        resultado.classList.add('mostrar', 'error');
        return;
    }
    
    // Si todo es válido
    resultado.classList.remove('error');
    resultado.innerHTML = `
        <strong style="color: #4caf50;">✓ Formulario válido!</strong><br>
        <strong>Datos capturados:</strong><br>
        Nombre: ${nombre}<br>
        Email: ${email}<br>
        Edad: ${edad}<br>
        País: ${pais}<br>
        Términos: Aceptados ✓
    `;
    resultado.classList.add('mostrar');
}

// ============================================================================
// DELEGACIÓN DE EVENTOS
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const listaTareas = document.getElementById('lista-tareas');
    
    if (listaTareas) {
        // Un solo listener en el padre (delegación)
        listaTareas.addEventListener('click', function(evento) {
            // Verificar si el click fue en un botón
            if (evento.target.tagName === 'BUTTON') {
                // Remover el item (elemento padre del botón)
                const item = evento.target.parentElement;
                item.style.opacity = '0';
                item.style.transition = 'opacity 0.3s ease';
                
                // Eliminar después de la animación
                setTimeout(() => {
                    item.remove();
                }, 300);
            }
        });
    }
});

function agregarTarea() {
    const entrada = document.getElementById('nueva-tarea');
    const texto = entrada.value.trim();
    
    if (!texto) {
        alert('Por favor escribe una tarea');
        return;
    }
    
    const listaTareas = document.getElementById('lista-tareas');
    
    // Crear nuevo elemento li
    const nuevoItem = document.createElement('li');
    nuevoItem.innerHTML = `
        ${texto}
        <button>Eliminar</button>
    `;
    
    // Agregar a la lista
    listaTareas.appendChild(nuevoItem);
    
    // Limpiar entrada
    entrada.value = '';
    entrada.focus();
}

// ============================================================================
// EJEMPLOS COMPLETOS
// ============================================================================

// Contador
let contador = 0;

function incrementarContador() {
    contador++;
    document.getElementById('contador').textContent = contador;
}

function decrementarContador() {
    contador--;
    document.getElementById('contador').textContent = contador;
}

function resetContador() {
    contador = 0;
    document.getElementById('contador').textContent = contador;
}

// Tema oscuro/claro
let temaOscuro = false;

function toggleTema() {
    const body = document.body;
    const btnTema = document.querySelector('button[onclick="toggleTema()"]');
    const estadoTema = document.getElementById('estado-tema');
    
    temaOscuro = !temaOscuro;
    
    if (temaOscuro) {
        body.style.background = '#1a1a1a';
        body.style.color = 'white';
        document.querySelector('.contenedor').style.background = '#2a2a2a';
        document.querySelector('.contenedor').style.color = 'white';
        btnTema.textContent = '☀️ Cambiar a Tema Claro';
        estadoTema.textContent = 'Tema actual: Oscuro';
    } else {
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        body.style.color = 'black';
        document.querySelector('.contenedor').style.background = 'white';
        document.querySelector('.contenedor').style.color = 'black';
        btnTema.textContent = '🌙 Cambiar a Tema Oscuro';
        estadoTema.textContent = 'Tema actual: Claro';
    }
}

// Editor de texto en vivo
document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor-texto');
    const stats = document.getElementById('stats-texto');
    
    if (editor) {
        editor.addEventListener('input', function() {
            const texto = editor.value;
            const caracteres = texto.length;
            const palabras = texto.trim().split(/\s+/).filter(p => p).length;
            const lineas = texto.split('\n').length;
            const vocales = (texto.match(/[aeiouáéíóu]/gi) || []).length;
            
            stats.innerHTML = `
                <strong>Caracteres:</strong> ${caracteres}<br>
                <strong>Palabras:</strong> ${palabras}<br>
                <strong>Líneas:</strong> ${lineas}<br>
                <strong>Vocales:</strong> ${vocales}
            `;
        });
    }
});

console.log("✓ Módulo 2 - Funciones de eventos cargadas correctamente");
