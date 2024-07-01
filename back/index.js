const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const savingRoutes = require("./src/routes/saving.routes");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(morgan("dev"))

app.use("/", savingRoutes);

// Inicia el servidor
app.listen(4000, () => {
  console.log('Servidor backend iniciado en el puerto 4000');
});