const { Router } = require("express");
const router = Router();
//Controladores
const controller = require("../Controllers/EstanteController");

//Estante
router.get("/", controller.index);
router.get('/create', controller.create);
router.post('/create', controller.store);
router.get('/edit/:stn_id', controller.edit);
router.post('/edit/:stn_id', controller.update);
router.get('/delete/:stn_id', controller.destroy);

module.exports = router;
