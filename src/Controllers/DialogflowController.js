"use strict";
const uuid = require("uuid");
const Dialogbot = require("../utils/dialogflowService.js");
const report = require("../utils/report.js");
const utils = require("../utils/utils.js");
const fs = require('fs');
const util = require('util');
const https = require('https');
const path = require('path');
const Producto = require("../Models/productoModel.js");
const Marca = require("../Models/marcaModel.js");
const Inventario=require("../Models/inventarioModel.js");
const DetalleInventario = require("../Models/detalleinventarioModel.js");
const Categoria = require("../Models/categoriaModel.js");
const Almacenes = require("../Models/almacenModel.js");
const Estante = require("../Models/estanteModel.js");
const sessionIds = new Map();
var sender,text,tipo,url,titular;
function setSessionAndUser(senderID) {
    if (!sessionIds.has(senderID)) {
        sessionIds.set(senderID, uuid.v1());
    }
}

module.exports.transcriReceta=async(req,res,next)=>{
    try {
        sender = req.body.From; // CELULAR
        text = req.body.mensaje;
        tipo = req.body.tipo;
        titular=sender; //sender.substr(9);
        setSessionAndUser(sender);
        const response = await Dialogbot.sendTextQuery(
            sessionIds,
            sender,
            text
        );
        const parametros = response[0].queryResult.parameters;
        if(tipo=='certificado'){
           url= await report.generatePdf('certificado',{
               "nombre":parametros.fields.nombre.stringValue,
               "apellido":parametros.fields.apellido.stringValue,
               "edad": parametros.fields.edad.structValue.fields.number.numberValue,
               "enfermedad":parametros.fields.enfermedad.stringValue,
               "grado":parametros.fields.grado.stringValue,
               "descripcion":parametros.fields.descripcion.stringValue
            }
           ,titular);

        }
       // console.log();
            res.json({
                mensaje:'se envio bien',
                ok:true,
                url:url,
            });
    } catch (error) {
        console.log(error);
        next();
    }


};

module.exports.DetectIntent=async(req,res,next)=>{
    try {
        sender = req.body.From; // Celular
        text = req.body.mensaje;
        titular=sender; 
        setSessionAndUser(sender);
        const response = await Dialogbot.sendTextQuery(
            sessionIds,
            sender,
            text
        );
        const resp = response[0].queryResult.fulfillmentText;
            res.json({
                mensaje:resp,
                ok:true,
                
            });
    } catch (error) {
        console.log(error);
        next();
    }

}; 
exports.index=async (req,res,next) => {
    try {    
        // const mensaje = {
        //     type: 'error',
        //     message: 'This is a flash message using custom middleware 00000and express-session.'
        // };
        res.render('index');
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.home= async (req,res,next)=>{
    try {
        res.render('home');
    } catch (error) {
        console.log(error);
        next();
    }
};




module.exports.getProductByNameAPI=async(req,res,next)=>{
    try {
        var producto = req.query.producto;
        const obj = await Producto.findOne({where:{
            pro_nomb: producto
        }});
        return res.json({
            ok:true,
            data: obj
        });
    } catch (error) {
        console.log(error);
        next();
    }

};

module.exports.getMarcaByNameAPI=async(req,res,next)=>{
    try {
        var marca = req.query.marca;
        const obj = await Marca.findOne({where:{
            mrc_nomb: marca
            }});
        return res.json({
            ok:true,
            data: obj
        });

    } catch (error) {
        console.log(error);
        next();
    }
};


module.exports.terminarInventarioAPI=async(req,res,next)=>{
    try {
        var total=0;
        const fecha = utils.fecha(); 
        const obj= await Inventario.create({
            inv_fecha:fecha,
            inv_desc: req.body.descripcion,
            inv_total  :0

        });        
        const datas = req.body.datas;
        for (const key in datas) {
            if (datas.hasOwnProperty(key)) {
                const element = datas[key];
                const cantidad = parseFloat(element.din_cant);
                total += cantidad;
                const objtemp= {
                    din_cant : cantidad,
                    din_inv  : obj.inv_id,
                    din_pro  : element.din_pro
                }
                await DetalleInventario.create(objtemp);
            }
        }
        obj.inv_total = total;
        await obj.save();
        return res.json({
            ok:true,
            data: obj.inv_id
        });        
    } catch (error) {
        console.log(error);
        next();
    }
};

module.exports.catalogoPadre= async(req,res,next)=>{
    try {
      const  obj = await Categoria.findAll({
          where:{
            cat_idpa:null
          }
      });
      res.json({
          ok:true,
          datas:obj
      })
    } catch (error) {
        console.log(error);
        next();
    }
};
module.exports.catalogoNivel= async(req,res,next)=>{
    try {
        const idpadre= parseInt(req.query.idpadre);
      const  obj = await Categoria.findAll({
          where:{
            cat_idpa:idpadre
          }
      });
      res.json({
          ok:true,
          datas:obj
      })
    } catch (error) {
        console.log(error);
        next();
    }
};

module.exports.productoPorCategoria=async (req,res,next)=>{
    try {
      const idcat= parseInt(req.query.idcat);
      const  obj = await Producto.findAll({
          where:{
            pro_cate:idcat
          }
      });
      res.json({
          ok:true,
          datas:obj
      })
    } catch (error) {
        console.log(error);
        next();
    }
};

module.exports.estantes = async (req,res,next)=>{
    try {
    const idal=parseInt(req.query.idal);
    const items = await Estante.findAll({where:{
        stn_alid:idal
    }});
    return res.json({
        ok:true,
        datas:items
    });
    } catch (error) {
        console.log(error);
        next();
    }
};

module.exports.listarAlmacenes = async (req,res,next)=>{
    try {
    const items = await Almacenes.findAll();

    return res.json({
        ok:true,
        datas:items
    });      

    } catch (error) {
        console.log(error);
        next();
    }
    
};