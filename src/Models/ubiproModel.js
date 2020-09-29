'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Estante = require("./estanteModel.js");
const Producto= require("./productoModel.js");
const Ubipro = db.define(
  "ubipro",
  {
    ubp_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
  },
  {
    freezeTableName: true,
  }
);
Ubipro.belongsTo(Estante, {foreignKey: 'ubp_stn'});
Ubipro.belongsTo(Producto,{foreignKey: "ubp_pro"});

module.exports = Categoria;
