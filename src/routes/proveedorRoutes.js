const { Router } = require("express");
const router = Router();
//Controladores
const controller = require("../Controllers/ProveedorController.js");

//Proveedor
router.get("/", controller.index);
router.get('/create', controller.create);
router.post('/create', controller.store);
router.get('/edit/:prv_id', controller.edit);
router.post('/edit/:prv_id', controller.update);
router.get('/delete/:prv_id', controller.destroy);

module.exports = router;
