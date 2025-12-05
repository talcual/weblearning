

// Función normal
function saludar(nombre) {
  return `Hola ${nombre}`;
}

var otraFn = function(nombre) {
  return `Hola ${nombre}`;
};

console.log(saludar("Luis"));
console.log(otraFn("Luis"));


var apellido = function() {
  console.log(arguments)
  return "Pérez";
}

apellido("Hola", 1, true);



// Arrow function
const saludarArrow = (nombre) => `Hola ${nombre}`;


console.log(saludarArrow("Luis"));


const apellidoArrow = () => {
  console.log(arguments)
  return "Pérez";
};

apellidoArrow("Hola", 1, true);