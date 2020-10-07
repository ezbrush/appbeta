"use strict";

const Categoria = require('../Models/categoriaModel.js');



const controlador = {};

controlador.index = async (req, res) => {
    const items = await Categoria.findAll();
    res.render("Categoria/index", {categorias: items});
};

controlador.create = (req, res) => {
    return res.render("Categoria/create");
};

controlador.store = async (req, res) => {
    const {cat_nomb, cat_desc} = req.body;
    console.log(req.body);
    return res.redirect('/categorias');

};

controlador.edit = async (req, res) => {
    const {cat_id} = req.params;
    const item =  await Categoria.findOne({where: {
        cat_id:cat_id
    }});

    // var categoria = {cat_id: 1, cat_nombre: "Llaves de tubo", cat_desc: "Llaves con forma de tubo"};
    // return res.render("Categoria/edit", {categoria: categoria});
    //var categoria = {cat_id: 1, cat_nombre: "Llaves de tubo", cat_desc: "Llaves con forma de tubo"};
    return res.render("Categoria/edit", {categoria: item.dataValues});
};


controlador.update = async (req, res) => {
    const {cat_id} = req.params;
    const item = await Categoria.findOne({
        where:{
            cat_id:cat_id
        }
    });
    const {cat_nombre, cat_desc} = req.body;
    item.cat_nombre=cat_nombre;
    item.cat_desc=cat_desc;
    await item.save();
    return res.redirect('/categorias');

};

controlador.destroy = async (req, res) => {
    const {cat_id} = req.params;
    const item = await Categoria.findOne({
        where:{
            cat_id:cat_id
        }
    });
    await item.destroy();
    res.redirect('/categorias');

};


module.exports = controlador;