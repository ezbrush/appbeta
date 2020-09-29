'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Proveedor = require("./proveedorModel.js");
const Mercaderia = db.define(
  "mercaderia",
  {
    mrc_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mrc_fech: {
      type: Sequelize.DATE,
    },
    mrc_desc: {
      type: Sequelize.STRING,
    },
    mrc_total: {
        type: Sequelize.DECIMAL,
      },
      
    
  },
  {
    freezeTableName: true,
  }
);
Mercaderia.belongsTo(Proveedor, {foreignKey: 'mrc_prov'});
module.exports = Mercaderia;
