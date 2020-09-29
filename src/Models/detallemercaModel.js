'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Mercaderia = require("./estanteModel.js");
const Producto= require("./productoModel.js");
const DetalleMercaderia = db.define(
  "detallemerca",
  {
    dtm_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dtm_cant:{
        type: Sequelize.DECIMAL
    },
  },
  {
    freezeTableName: true,
  }
);
DetalleMercaderia.belongsTo(Mercaderia, {foreignKey: 'dtm_merc'});
DetalleMercaderia.belongsTo(Producto,{foreignKey: "dtm_pro"});

module.exports = DetalleMercaderia;
