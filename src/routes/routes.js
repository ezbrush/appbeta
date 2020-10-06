"use strict";
const { Router } = require("express");
const router = Router();
//Controladores
const  marcaC = require("../Controllers/MarcaController.js");
//const productoController = require("../controllers/productoController.js");
const dialogflowController = require("../Controllers/DialogflowController.js");
const authController= require('../Controllers/AuthController.js');
const producto = require("../Controllers/ProductoController.js");
const bodyParser = require("body-parser");
// support encoded bodies
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));


router.get("/",dialogflowController.index );
router.post("/",authController.signin);  
router.get('/register',authController.registerPage);
router.post('/register',authController.registerUser);
router.get("/home",dialogflowController.home);
router.post("/api/transcripcion",dialogflowController.transcriReceta);
router.post("/api/intent",dialogflowController.DetectIntent);
router.post("/api/login",authController.loginAPI);
router.get("/api/producto", dialogflowController.getProductByNameAPI );
router.get("/api/marca", dialogflowController.getMarcaByNameAPI );
router.post("/api/inventario", dialogflowController.terminarInventarioAPI );
router.get("/api/catalogo", dialogflowController.catalogoPadre );
router.get("/api/catalogonivel", dialogflowController.catalogoNivel );
router.get("/api/productobycat", dialogflowController.productoPorCategoria );



//router.post("/api/chatbot", dialogflowController.sendTwilio);
//router.post("/producto", productoController.productosHome);
//router.get("/demo",productoController.validar);
module.exports = router;
