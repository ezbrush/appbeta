"use strict";
const { Router } = require("express");
const router = Router();
//const productoController = require("../controllers/productoController.js");
const dialogflowController = require("../Controllers/DialogflowController.js");
const bodyParser = require("body-parser");
// support encoded bodies
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb", extended: true }));


router.post("/api/transcripcion",dialogflowController.transcriReceta);
router.get("/home",(req,res,next)=>{
try {
    res.render("home");
} catch (error) {
    console.log(error);
}
});
router.get("/", (req,res,next) => {
    try {
       
        const mensaje = {
            type: 'error',
            message: 'This is a flash message using custom middleware 00000and express-session.'
        };
        // Route that incorporates flash messages from either req.flash(type) or res.locals.flash
        res.render('index');
    } catch (error) {
        console.log(error);
        next();
    }
});
//router.post("/api/chatbot", dialogflowController.sendTwilio);
//router.post("/producto", productoController.productosHome);
//router.get("/demo",productoController.validar);
module.exports = router;
