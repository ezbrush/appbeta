"use strict";
const Producto = require('../Models/productoModel');


const controlador = {};

controlador.index = (req, res) => {
    var variable = [
        {pro_id: 0, pro_nomb: "Alicate", pro_desc: "Alicate de corte", pro_prec: 18, pro_mrc: "Tramontina" , pro_cat: "Herramientas de mano" },
        {pro_id: 1, pro_nomb: "Desarmador estrella", pro_desc: "Desarmador con punta estrella", pro_prec: 12, pro_mrc: "Tramontina" , pro_cat: "Herramientas de mano"}
    ];
    //res.json(text);
    res.render("Producto/index", {productos: variable});

};

controlador.listar = async (req, res) => {


};

controlador.create = (req, res) => {
    var marcas = [
        {mrc_id: 0, mrc_nomb: "Tramontina"},
        {mrc_id: 1, mrc_nomb: "Monopol"}
    ];
    var categorias = [
        {cat_id: 0, cat_nombre: "Herramientas de mano"},
        {cat_id: 1, cat_nombre: "Llaves de tubo"}
    ];
    return res.render("Producto/create", {marcas: marcas, categorias: categorias});

};

controlador.store = async (req, res) => {
    const {pro_nomb, pro_desc, pro_prec, mrc_id, cat_id} = req.body;
    console.log(req.body);
    return res.redirect('/productos');

};

controlador.edit = (req, res) => {
    var marcas = [
        {mrc_id: 0, mrc_nomb: "Tramontina"},
        {mrc_id: 1, mrc_nomb: "Monopol"}
    ];
    var categorias = [
        {cat_id: 0, cat_nombre: "Herramientas de mano"},
        {cat_id: 1, cat_nombre: "Llaves de tubo"}
    ];
    const {pro_id} = req.params;
    var variable = {pro_id: 0, pro_nomb: "Alicate", pro_desc: "Alicate de corte", pro_prec: 18, pro_mrc_id: 0, pro_mrc: "Tramontina" , pro_cat_id: 0, pro_cat: "Herramientas de mano" };
    return res.render("Producto/edit", {producto: variable, marcas: marcas, categorias: categorias});
};


controlador.update = async (req, res) => {
    const {pro_id} = req.params;
    const {pro_nomb, pro_desc, pro_prec} = req.body;
    console.log(req.body);
    return res.redirect('/productos');

};

controlador.destroy = async (req, res) => {
    const {pro_id} = req.params;
    res.redirect('/productos');

};


module.exports = controlador;