const { Router } = require("express");
const router = Router();
//Controladores
const categoriaController = require("../Controllers/CategoriaController.js");

//Categoria
router.get("/", categoriaController.index);
router.get('/create', categoriaController.create);
router.post('/create', categoriaController.store);
router.get('/edit/:cat_id', categoriaController.edit);
router.post('/edit/:cat_id', categoriaController.update);
router.get('/delete/:cat_id', categoriaController.destroy);

module.exports = router;
