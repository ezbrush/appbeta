"use strict";
const Almacen = require('../Models/almacenModel.js');

const controlador = {};

controlador.index =async (req, res) => {
    const items = await Almacen.findAll();
    // var text = [
    //     {alm_id: 0, alm_nomb: "Almacen 1", alm_ubic: "ubicacion de almacen 1", alm_desc: "Descripcion almacen 1"},
    //     {alm_id: 1, alm_nomb: "Almacen 2", alm_ubic: "ubicacion de almacen 2", alm_desc: "Descripcion almacen 2"}
    // ];
    //res.json(text);
    //res.render("Almacen/index", {almacenes: text});
    res.render("Almacen/index", {almacenes: items});

};

controlador.listar = async (req, res) => {


};

controlador.create = (req, res) => {
    return res.render("Almacen/create");

};

controlador.store = async (req, res) => {
    //const {alm_nomb, alm_ubic, alm_desc} = req.body;
    const obj= req.body;
    await Almacen.create(obj);
    //console.log(req.body);
    return res.redirect('/almacenes');

};

controlador.edit = async (req, res) => {

    const {alm_id} = req.params;
    const item = await Almacen.findOne({where:{
        alm_id:alm_id
    }});
    //var almacen = {alm_id: 0, alm_nomb: "Almacen 1", alm_ubic: "Ubicacion del almacen 1", alm_desc: "descripcion almacen 1"};
    //return res.render("Almacen/edit", {almacen: almacen});
    return res.render("Almacen/edit", {almacen: item.dataValues});
};


controlador.update = async (req, res) => {
    const {alm_id} = req.params;
    const {alm_nomb, alm_ubic, alm_desc} = req.body;
    const item = await Almacen.findOne({where:{
        alm_id:alm_id
    }});
    item.alm_desc=alm_desc;
    item.alm_nomb=alm_nomb;
    item.alm_ubic=alm_ubic;
    await item.save();

    return res.redirect('/almacenes');
};

controlador.destroy = async (req, res) => {
    const {alm_id} = req.params;
    await Almacen.destroy({
        where:{
            alm_id:alm_id
        }
    });
    res.redirect('/almacenes');

};


module.exports = controlador;