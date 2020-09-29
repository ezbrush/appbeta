"use strict";
const { Router } = require("express");
const router = Router();
//const productoController = require("../controllers/productoController.js");
const dialogflowController = require("../Controllers/DialogflowController.js");
const bodyParser = require("body-parser");
// support encoded bodies
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));

router.get("/",dialogflowController.index );
router.get("/home",);
router.post("/api/transcripcion",dialogflowController.transcriReceta);
router.post("/api/intent",dialogflowController.DetectIntent);


//router.post("/api/chatbot", dialogflowController.sendTwilio);
//router.post("/producto", productoController.productosHome);
//router.get("/demo",productoController.validar);
module.exports = router;
