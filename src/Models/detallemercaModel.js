'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Mercaderia = require("./estanteModel.js");
const Producto= require("./productoModel.js");
const DetalleMercaderia = db.define(
  "detallemerca",
  {
    dtm_cant:{
        type: Sequelize.DECIMAL,
    },
    dtm_merc:{
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    dtm_pro:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      },
  },
  {
    freezeTableName: true,
  }
);
DetalleMercaderia.belongsTo(Mercaderia, {foreignKey: 'mrc_id'});
DetalleMercaderia.belongsTo(Producto,{foreignKey: "pro_id"});

module.exports = DetalleMercaderia;
