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
    pro_nomb: {
      type: Sequelize.STRING(30),
    },
    pro_desc: {
      type: Sequelize.STRING,
    },
    pro_prec:{
        type: Sequelize.DECIMAL,
    },
    pro_furl: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
Producto.hasOne(Marca,{foreignKey:'pro_marc'});
Producto.hasOne(Categoria,{foreignKey:'pro_cate'});

module.exports = Categoria;