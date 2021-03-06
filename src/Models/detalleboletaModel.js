'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Boleta = require("./boletamovimientoModel.js");
const Producto= require("./productoModel.js");
const DetalleBoletaMovimiento = db.define(
  "detalleboleta",
  {

    dtb_cant:{
        type:Sequelize.DECIMAL
    },
    dtb_bol:{
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    dtb_pro:{
      type: Sequelize.INTEGER,
      primaryKey: true,
    }
    
  },
  {
    freezeTableName: true,
  }
);
DetalleBoletaMovimiento.belongsTo(Boleta, {foreignKey: 'bmo_id'});
DetalleBoletaMovimiento.belongsTo(Producto,{foreignKey: "pro_id"});

module.exports = DetalleBoletaMovimiento;
