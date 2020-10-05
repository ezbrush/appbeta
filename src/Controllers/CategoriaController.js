"use strict";
const Marca = require('../Models/categoriaModel');


const controlador = {};

controlador.index = (req, res) => {
    var variable = [
        {cat_id: 0, cat_nombre: "Herramientas de mano", cat_desc: "Herramientas de uso manual"},
        {cat_id: 1, cat_nombre: "Llaves de tubo", cat_desc: "Llaves con forma de tubo"}
    ];
    //res.json(text);
    res.render("Categoria/index", {categorias: variable});

};

controlador.listar = async (req, res) => {


};

controlador.create = (req, res) => {
    return res.render("Categoria/create");

};

controlador.store = async (req, res) => {
    const {cat_nomb, cat_desc} = req.body;
    console.log(req.body);
    return res.redirect('/categorias');

};

controlador.edit = (req, res) => {
    const {cat_id} = req.params;
    var categoria = {cat_id: 1, cat_nombre: "Llaves de tubo", cat_desc: "Llaves con forma de tubo"};
    return res.render("Categoria/edit", {categoria: categoria});
};


controlador.update = async (req, res) => {
    const {cat_id} = req.params;
    const {cat_nombre, cat_desc} = req.body;
    return res.redirect('/categorias');

};

controlador.destroy = async (req, res) => {
    const {cat_id} = req.params;
    res.redirect('/categorias');

};


module.exports = controlador;