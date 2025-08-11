

// utils.js
export const saludar = (nombre) => `Hola ${nombre}`;


// app.js
import { saludar } from './utils.js';
console.log(saludar("Luis"));