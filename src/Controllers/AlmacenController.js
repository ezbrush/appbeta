"use strict";
const Almacen = require('../Models/almacenModel');

const controlador = {};

controlador.index = (req, res) => {
    var text = [
        {alm_id: 0, alm_nomb: "Almacen 1", alm_ubic: "ubicacion de almacen 1", alm_desc: "Descripcion almacen 1"},
        {alm_id: 1, alm_nomb: "Almacen 2", alm_ubic: "ubicacion de almacen 2", alm_desc: "Descripcion almacen 2"}
    ];
    //res.json(text);
    res.render("Almacen/index", {almacenes: text});

};

controlador.listar = async (req, res) => {


};

controlador.create = (req, res) => {
    return res.render("Almacen/create");

};

controlador.store = async (req, res) => {
    const {alm_nomb, alm_ubic, alm_desc} = req.body;
    console.log(req.body);
    return res.redirect('/almacenes');

};

controlador.edit = (req, res) => {
    const {alm_id} = req.params;
    var almacen = {alm_id: 0, alm_nomb: "Almacen 1", alm_ubic: "Ubicacion del almacen 1", alm_desc: "descripcion almacen 1"};
    return res.render("Almacen/edit", {almacen: almacen});
};


controlador.update = async (req, res) => {
    const {alm_id} = req.params;
    const {alm_nomb, alm_ubic, alm_desc} = req.body;
    return res.redirect('/almacenes');
};

controlador.destroy = async (req, res) => {
    const {alm_id} = req.params;
    res.redirect('/almacenes');

};


module.exports = controlador;