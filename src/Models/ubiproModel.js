'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Estante = require("./estanteModel.js");
const Producto= require("./productoModel.js");
const DetalleUbipro = db.define(
  "detalleubipro",
  {
    ubp_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ubp_stn:{
      type: Sequelize.INTEGER,
    },
    ubp_pro:{
      type: Sequelize.INTEGER,
    }
    
  },
  {
    freezeTableName: true,
  }
);
DetalleUbipro.belongsTo(Estante, {foreignKey: 'stn_id'});
DetalleUbipro.belongsTo(Producto,{foreignKey: "pro_id"});

module.exports = DetalleUbipro;
