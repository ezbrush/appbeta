'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Categoria = db.define(
  "categoria",
  {
    cat_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_idpa:{
      type: Sequelize.INTEGER,
    },
    cat_nombre: {
      type: Sequelize.STRING,
    },
    cat_desc: {
      type: Sequelize.STRING,
    },
    cat_furl: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
Categoria.belongsTo(Categoria, {foreignKey: 'cat_idpa'});
module.exports = Categoria;
