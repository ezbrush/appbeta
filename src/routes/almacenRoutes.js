const { Router } = require("express");
const router = Router();
//Controladores
const controller = require("../Controllers/AlmacenController.js");

//Almacen
router.get("/", controller.index);
router.get('/create', controller.create);
router.post('/create', controller.store);
router.get('/edit/:alm_id', controller.edit);
router.post('/edit/:alm_id', controller.update);
router.get('/delete/:alm_id', controller.destroy);

module.exports = router;
