'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Almacen = db.define(
  "almacen",
  {
    alm_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alm_nomb: {
      type: Sequelize.STRING,
    },
    alm_ubic: {
        type: Sequelize.STRING,
      },
    alm_desc: {
      type: Sequelize.STRING,
    },
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = Almacen;
