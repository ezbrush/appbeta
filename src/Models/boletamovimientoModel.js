'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Usuario = require("./usuarioModel.js");
const BoletaMovimiento = db.define(
  "boletamovimiento",
  {
    bmo_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bmo_hora: {
      type: Sequelize.STRING(50),
    },
    bmo_fecha: {
        type: Sequelize.STRING,
    },
    bmo_desc: {
      type: Sequelize.STRING,
    },
    bmo_tipo: {
        type: Sequelize.STRING,
    },
    
  },
  {
    freezeTableName: true,
  }
);
BoletaMovimiento.belongsTo(Usuario, { foreignKey: "bmo_usu" });
module.exports = BoletaMovimiento;