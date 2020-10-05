"use strict";
const Proveedor = require('../Models/proveedorModel');

const controlador = {};

controlador.index = (req, res) => {
    var text = [
        {prv_id: 0, prv_nomb: "Proveedor 1", prv_ubic: "ubicacion del proveedor 1", prv_esta: 1, prv_fono: "7877777"},
        {prv_id: 1, prv_nomb: "Proveedor 2", prv_ubic: "ubicacion del proveedor 2", prv_esta: 1, prv_fono: "8888888"}
    ];
    //res.json(text);
    res.render("Proveedor/index", {proveedores: text});

};

controlador.listar = async (req, res) => {


};

controlador.create = (req, res) => {
    return res.render("Proveedor/create");

};

controlador.store = async (req, res) => {
    const {prv_nomb, prv_ubic, prv_esta, prv_fono} = req.body;
    console.log(req.body);
    return res.redirect('/proveedores');

};

controlador.edit = (req, res) => {
    const {prv_id} = req.params;
    var proveedor = {prv_id: 0, prv_nomb: "Proveedor 1", prv_ubic: "ubicacion del proveedor 1", prv_esta: 0, prv_fono: "7877777"};
    return res.render("Proveedor/edit", {proveedor: proveedor});
};


controlador.update = async (req, res) => {
    const {prv_id} = req.params;
    const {prv_nomb, prv_ubic, prv_esta, prv_fono} = req.body;
    return res.redirect('/proveedores');
};

controlador.destroy = async (req, res) => {
    const {prv_id} = req.params;
    res.redirect('/proveedores');

};


module.exports = controlador;