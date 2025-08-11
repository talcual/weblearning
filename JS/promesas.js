

const tarea = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Tarea completada"), 2000);
});

tarea.then(msg => console.log(msg));