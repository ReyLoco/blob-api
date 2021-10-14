const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();

/****************** Settings **********************/
// Establecemos el puerto, 3000 si no existe en archivo env
app.set("port", process.env.PORT || 3000);
// Permite añadir espacios en JSON devueltos por el servidor.
app.set("json spaces", 2);

/****************** Middlewares *******************/
// Morgan es una función que procesa datos antes de ser recibidos por el servidor
// Permite ver en consola las peticiones y resultados al servidor
// El parámetro 'combined'  mostraría info más detallada
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: false })); // Permite entender los datos que llegan desde los formularios
app.use(express.json()); // Permite al servidor recibir y entender formatos JSON
app.use(cors()); // Permite comunicación entre servidores

/****************** Routes **********************/
app.use("/api/articulos", require("./routes/articulos"));

module.exports = app;
