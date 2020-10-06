'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Marca = db.define(
  "marca",
  {
    mrc_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mrc_nomb: {
      type: Sequelize.STRING,
    },
    mrc_desc: {
      type: Sequelize.STRING,
    },
    mrc_furl: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Marca;
