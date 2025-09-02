
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const homeRouter = require("./routes/home.route")(express);

app.use("/", homeRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})