'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Proveedor = require("./proveedorModel.js");
const Mercaderia = db.define(
  "mercaderia",
  {
    mer_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mer_fech: {
      type: Sequelize.DATE,
    },
    mer_desc: {
      type: Sequelize.STRING,
    },
    mer_total: {
        type: Sequelize.DECIMAL,
      },
      mer_prov:{
        type: Sequelize.INTEGER,
      }
    
  },
  {
    freezeTableName: true,
  }
);
Mercaderia.belongsTo(Proveedor, {foreignKey: 'prv_id'});
module.exports = Mercaderia;
