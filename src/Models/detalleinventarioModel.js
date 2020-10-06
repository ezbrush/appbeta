'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Inventario = require("./inventarioModel.js");
const Producto= require("./productoModel.js");
const DetalleInventario = db.define(
  "detalleinventario",
  {

    din_cant:{
        type:Sequelize.DECIMAL
    },
    din_inv:{
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    din_pro:{
      type: Sequelize.INTEGER,
      primaryKey: true,
    }
    
  },
  {
    freezeTableName: true,
  }
);
DetalleInventario.belongsTo(Inventario, {foreignKey: 'din_inv'});
DetalleInventario.belongsTo(Producto,{foreignKey: "din_pro"});

module.exports = DetalleInventario;
