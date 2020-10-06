'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const Categoria = require("./categoriaModel.js");
const Marca = require("./marcaModel.js");
const Producto = db.define(
  "producto",
  {
    pro_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pro_marc:{
      type: Sequelize.INTEGER,
    },
    pro_cate:{
      type: Sequelize.INTEGER
    },
    pro_nomb: {
      type: Sequelize.STRING,
    },
    pro_desc: {
      type: Sequelize.STRING,
    },
    pro_prec:{
        type: Sequelize.DECIMAL,
    },
    pro_furl: {
      type: Sequelize.STRING,
    }
  },
  {
    freezeTableName: true,
  }
);
Producto.hasOne(Marca,{foreignKey:'mrc_id'});
Producto.hasOne(Categoria,{foreignKey:'cat_id'});

module.exports = Producto;