'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Inventario = db.define(
  "inventario",
  {
    inv_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inv_fecha: {
      type: Sequelize.DATE,
    },
    inv_desc: {
      type: Sequelize.STRING,
    },
    inv_total:{
        type: Sequelize.DECIMAL,
    }
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = Inventario;
