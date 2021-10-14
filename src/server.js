require('dotenv').config();   // Permite las variables de entorno

// Inicio del servidor y conexión con DB
const app = require('./app');
require('./dataBase/dbConnect');

async function main(){
  await app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
}

main();

