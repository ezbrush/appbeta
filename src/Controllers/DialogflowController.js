"use strict";
const uuid = require("uuid");
const Dialogbot = require("../utils/dialogflowService.js");
const report = require("../utils/report.js");
const utils = require("../utils/utils.js");
const fs = require('fs');
const util = require('util');
const https = require('https');
const path = require('path');
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
        sender = req.body.From; // CELULAR
        text = req.body.mensaje;
        titular=sender; //sender.substr(9);
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
exports.index=(req,res,next) => {
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

exports.home=(req,res,next)=>{
    try {
        res.render('home');
    } catch (error) {
        console.log(error);
        next();
    }
};