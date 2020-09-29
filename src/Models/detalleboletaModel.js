'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Boleta = require("./boletamovimientoModel.js");
const Producto= require("./productoModel.js");
const DetalleBoletaMovimiento = db.define(
  "detalleboleta",
  {
    dtb_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dtb_cant:{
        type:Sequelize.DECIMAL
    }
    
  },
  {
    freezeTableName: true,
  }
);
DetalleBoletaMovimiento.belongsTo(Boleta, {foreignKey: 'dtb_bol'});
DetalleBoletaMovimiento.belongsTo(Producto,{foreignKey: "dtb_pro"});

module.exports = DetalleBoletaMovimiento;
