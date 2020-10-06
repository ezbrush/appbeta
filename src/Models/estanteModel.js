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
      type: Sequelize.STRING,
    },
    stn_tipo: {
        type: Sequelize.STRING,
      },
    stn_mdlo: {
      type: Sequelize.STRING,
    },
    stn_alid:{
      type: Sequelize.INTEGER,
    }
    
  },
  {
    freezeTableName: true,
  }

);
Estante.hasOne(Almacen, { foreignKey: "alm_id" });
module.exports = Estante;
