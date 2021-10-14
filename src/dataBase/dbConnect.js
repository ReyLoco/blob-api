const mongoose = require("mongoose");

// process.env contains system environment variables
const URI = process.env.MONGODB_URI;

// database conection
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false
});

const connection = mongoose.connection;

connection.once('open', () => {
  "Conectado a base de datos 🚀"
});