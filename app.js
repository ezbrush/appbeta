"use strict";
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const session= require('express-session');
const cookieParser= require('cookie-parser');
const passport = require('./src/config/passport.js');
const routes = require("./src/routes/routes.js");
require('dotenv').config();
//crear el servidor
const app = express();
//DB
const db = require('./src/utils/database.js');
db.sync().then(() => console.log('DB Conectada')).catch((error) => console.log(error));
//settings
app.set("port", process.env.PORT );

    // view engine setup

// Ubicaciones - Vistas
app.set("views", path.join(__dirname, "./src/views"));
app.engine(".hbs",exphbs({ defaultLayout: "main",extname: ".hbs"}) );
app.set("view engine", ".hbs");
app.use(cookieParser());


// // inicializar passport
// app.use(passport.initialize());
// app.use(passport.session());

// habilitar cookie parser
// crear la session
app.use(session({
    //store: sessionStore,
    secret: 'palabrasecreta',
    key: 'supersecreta',
    resave : false,
    saveUninitialized : false,
    //cookie: { maxAge: 60000 },

}));

// middlewares
app.use(morgan("dev"));
app.use(
    express.urlencoded({
        extended: false,
    })
);
//routes(rutas) de la app
app.use(routes);
//static files
app.use(express.static(path.join(__dirname, "public")));
process.env.TZ = "America/La_Paz";

//Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
module.exports = app;