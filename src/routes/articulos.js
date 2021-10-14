const { Router } = require("express");
const router = Router();

const {
  getArticulos,
  createArticulo,
  getArticulo,
  updateArticulo,
  deleteArticulo,
} = require("../controllers/articulos.controllers");


router.route("/").get(getArticulos).post(createArticulo);

router.route("/:id").get(getArticulo).put(updateArticulo).delete(deleteArticulo);

module.exports = router;
