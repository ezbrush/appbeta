"use strict";
const Marca = require('../Models/marcaModel');


const controlador = {};

controlador.index = (req, res) => {
    var text = [
        {mrc_id: 0, mrc_nomb: "Tramontina", mrc_desc: "Herramientas de todo tipo"},
        {mrc_id: 1, mrc_nomb: "Monopol", mrc_desc: "Pinturas de todo tipo"}
    ];
    //res.json(text);
    res.render("Marca/index", {marcas: text});

};

controlador.listar = async (req, res) => {

    try {
        let listaDeMarcas = await Marca.findAll();
        return res.json({
            message: "Se realizo la consulta satisfactoriamente",
            data: listaDeMarcas,
            tipoRespuesta: 200
        });
    }catch (error) {
        res.status(500).json({
            message: "Algo salio mal",
            data: {},
            tipoRespuesta: 500
        });
    }

};

controlador.create = (req, res) => {
    return res.render("Marca/create");

};

controlador.store = async (req, res) => {
    const {mrc_nomb, mrc_desc, mrc_furl} = req.body;
    console.log(req.body);
    return res.redirect('/marcas');
    /*try {
        let nuevaMarca = await  Marca.create({
            mrc_nomb,
            mrc_desc
        });
        if(nuevaMarca){
            return res.json({
                message: "Se creo la marca satisfactoriamente",
                data: nuevaMarca,
                tipoRespuesta: 200
            });
        }

    }catch (error) {
        res.status(500).json({
            message: "Algo salio mal",
            data: {},
            tipoRespuesta: 500
        });
    }*/
};

controlador.edit = (req, res) => {
    const {mrc_id} = req.params;
    var marca = {mrc_id: 0, mrc_nomb: "Tramontina", mrc_desc: "Herramientas de todo tipo"};
    return res.render("Marca/edit", {marca: marca});
};


controlador.update = async (req, res) => {
    const {mrc_id} = req.params;
    const {mrc_nomb, mrc_desc} = req.body;
    return res.redirect('/marcas');
    /*try {

        const marca = await Marca.findByPk(id);
        if(marca != null){
            await marca.update({
                mrc_nomb,
                mrc_desc
            });
            return res.json({
                message: "Se realizo la actualizacion satisfactoriamente",
                data: marca,
                tipoRespuesta: 200
            });
        }
        return res.json({
            message: "No se encontro el elemento para actualizar",
            data: marca,
            tipoRespuesta: 500
        });
    }catch (e) {
        res.status(500).json({
            message: "Algo salio mal",
            data: {},
            tipoRespuesta: 500
        });
    }*/
};

controlador.destroy = async (req, res) => {
    const {mrc_id} = req.params;
    res.redirect('/marcas');
    /*try {
        //El metodo destroy retorna la cantidad de elementos eliminado
        const cantidadEliminada = await Marca.destroy({
            where: { mrc_id }
        });
        res.json({
            message: "Se elimino satisfactoriamente",
            data: cantidadEliminada,
            tipoRespuesta: 200
        });
    }catch (e) {
        res.status(500).json({
            message: "Algo salio mal",
            data: {},
            tipoRespuesta: 500
        });
    }*/
};


module.exports = controlador;