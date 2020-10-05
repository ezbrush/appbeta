"use strict";
const Estante = require('../Models/estanteModel');

const controlador = {};

controlador.index = (req, res) => {
    var text = [
        {stn_id: 0, stn_nomb: "Estante A", stn_tipo: "tipo A", stn_mdlo: "asd"},
        {stn_id: 1, stn_nomb: "Estante B", stn_tipo: "tipo B", stn_mdlo: "paskankl"}
    ];
    //res.json(text);
    res.render("Estante/index", {estantes: text});

};

controlador.listar = async (req, res) => {


};

controlador.create = (req, res) => {
    return res.render("Estante/create");

};

controlador.store = async (req, res) => {
    const {stn_nomb, stn_tipo, stn_mdlo} = req.body;
    console.log(req.body);
    return res.redirect('/estantes');

};

controlador.edit = (req, res) => {
    const {stn_id} = req.params;
    var estante = {stn_id: 1, stn_nomb: "Estante B", stn_tipo: "tipo B", stn_mdlo: "paskankl"};
    return res.render("Estante/edit", {estante: estante});
};


controlador.update = async (req, res) => {
    const {stn_id} = req.params;
    const {stn_nomb, stn_tipo, stn_mdlo} = req.body;
    return res.redirect('/estantes');
};

controlador.destroy = async (req, res) => {
    const {stn_id} = req.params;
    res.redirect('/estantes');

};


module.exports = controlador;