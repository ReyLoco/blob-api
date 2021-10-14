const { Schema, model } = require("mongoose");

const { ER_TITLE, ER_TEXTO } = require('../constants')


const articuloSchema = new Schema({
  title: { type: String, required: [true, ER_TITLE] },
  texto: { type: String, required: [true, ER_TEXTO] },
  date: { type: Date, default: Date.now },
  author: { type: String, required: false },
});

module.exports = model("Articulo", articuloSchema);
