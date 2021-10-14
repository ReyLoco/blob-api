const articulosCtrl = {};

const Articulo = require("../models/Articulo.model");

// GET ALL
articulosCtrl.getArticulos = async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos);
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

// CREATE
articulosCtrl.createArticulo = async (req, res) => {
  try {
    const { title, texto } = req.body;
    const newArticulo = new Articulo({ title, texto });
    await newArticulo.save();
    res.json({ message: "Articulo saved" });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

// GET BY ID
articulosCtrl.getArticulo = async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    res.json(articulo);
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

// UPDATE
articulosCtrl.updateArticulo = async (req, res) => {
  try {
    const { title, texto } = req.body;
    await Articulo.findOneAndUpdate({ _id: req.params.id }, { title, texto });
    res.json({ message: "Articulo updated" });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

// DELETE
articulosCtrl.deleteArticulo = async (req, res) => {
  try {
    await Articulo.findByIdAndDelete(req.params.id);
    res.json({ message: "Articulo Deleted" });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = articulosCtrl;
