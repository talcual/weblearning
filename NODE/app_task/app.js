
const express = require("express");
const app = express();

const taskRouter = require("./routes/task.route")(express);

app.use("/tasks", taskRouter);

// Puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});