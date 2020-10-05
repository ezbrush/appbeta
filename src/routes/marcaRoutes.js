const { Router } = require("express");
const router = Router();
//Controladores
const marcaController = require("../Controllers/MarcaController");

//Marca
router.get("/", marcaController.index);
router.get('/create', marcaController.create);
router.post('/create', marcaController.store);
router.get('/edit/:mrc_id', marcaController.edit);
router.post('/edit/:mrc_id', marcaController.update);
router.get('/delete/:mrc_id', marcaController.destroy);

module.exports = router;
