

const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

btn.addEventListener("click", () => {
  salida.textContent = "¡Botón presionado!";
});