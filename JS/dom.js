

let blog = document.getElementById("blog");
blog.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Navegando al blog");
});


let ff = document.getElementById("fprueba");
ff.addEventListener("submit", (event) => {
  event.preventDefault();
  let entrada = document.getElementById("entrada").value;
  let salida = document.getElementById("salida");
  salida.style.backgroundColor = entrada;
  salida.style.color = "#ffffff";

});