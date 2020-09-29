'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Rol = db.define(
  "rol",
  {
    rol_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_nombre: {
      type: Sequelize.STRING(20),
    },
    rol_nsor: {
      type: Sequelize.STRING(10),
    },
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = Rol;
