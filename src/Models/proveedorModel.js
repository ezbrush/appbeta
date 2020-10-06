'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Proveedor = db.define(
  "proveedor",
  {
    prv_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prv_nomb: {
      type: Sequelize.STRING,
    },
    prv_ubic: {
      type: Sequelize.STRING,
    },
    prv_esta: {
        type: Sequelize.INTEGER,
    },
    prv_fono: {
      type: Sequelize.STRING,
    },
    prv_furl: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Proveedor;