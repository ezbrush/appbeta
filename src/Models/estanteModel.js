'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Almacen = require("./almacenModel.js");
const Estante = db.define(
  "estante",
  {
    stn_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
     
    stn_nomb: {
      type: Sequelize.STRING(50),
    },
    stn_tipo: {
        type: Sequelize.STRING(30),
      },
    stn_mdlo: {
      type: Sequelize.STRING(50),
    },
    
  },
  {
    freezeTableName: true,
  }

);
Estante.hasOne(Almacen, { foreignKey: "stn_alid" });
module.exports = Estante;
