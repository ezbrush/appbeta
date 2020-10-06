"use strict";
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const session= require('express-session');
const cookieParser= require('cookie-parser');
const passport = require('./src/config/passport.js');
const routes = require("./src/routes/routes.js");
const flash = require("connect-flash");
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
app.set("views", path.join(__dirname, "./src/Views"));
//Definienfo helper de handlebars
var handlebars = require("handlebars");
handlebars.registerHelper("setVar", function(varName, varValue, options) {
    options.data.root[varName] = varValue;
});
handlebars.registerHelper("esIgual", function(var1, var2, options) {
    return var1 === var2;
});

app.engine(".hbs",exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"}) );
app.set("view engine", ".hbs");


app.use(cookieParser());


// // inicializar passport
app.use(passport.initialize());
app.use(passport.session());

// habilitar cookie parser
// crear la session
app.use(session({
    //store: sessionStore,
    secret: 'palabrasecreta',
    key: 'supersecreta',
    resave : false,
    saveUninitialized : false,
    cookie: { maxAge: 60000 },

}));

// middlewares
app.use(morgan("dev"));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(flash());

//routes(rutas) de la app
app.use(routes);
app.use('/marcas',require('./src/routes/marcaRoutes.js'));
app.use('/categorias',require('./src/routes/categoriaRoutes.js'));
app.use('/productos',require('./src/routes/productoRoutes.js'));
app.use('/almacenes',require('./src/routes/almacenRoutes.js'));
app.use('/proveedores',require('./src/routes/proveedorRoutes.js'));
app.use('/estantes',require('./src/routes/estanteRoutes.js'));

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