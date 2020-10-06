const { Router } = require("express");
const router = Router();
//Controladores
const controller = require("../Controllers/ProductoController.js");

//Producto
router.get("/", controller.index);
router.get('/create', controller.create);
router.post('/create', controller.store);
router.get('/edit/:cat_id', controller.edit);
router.post('/edit/:cat_id', controller.update);
router.get('/delete/:cat_id', controller.destroy);

module.exports = router;
