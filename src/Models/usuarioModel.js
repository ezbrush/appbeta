'use strict';
const Sequelize = require("sequelize");
const db = require("../utils/database.js");
const bcrypt = require('bcrypt-nodejs');

const Usuario = db.define(
  "usuario",
  {
    usu_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    usu_mail: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:{msg:'Agrega un correo valido'}
        },
        unique:{
            args:true,
            msg: 'usuario ya registrado'
        }
      },
    usu_pswd: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                msg:'El password no puede ser vacio'
            }
            
        },
    },
    usu_nomb: {
      type: Sequelize.STRING(50),
    },
    
    usu_apel: {
      type: Sequelize.STRING(50),
    },
    usu_ci:{
      type: Sequelize.STRING(20),
    },
    usu_domi: {
        type: Sequelize.STRING,
    },
    usu_fono: {
      type: Sequelize.STRING(50),
    },
    usu_stdo: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate(usuario) { 
          usuario.usu_pswd = Usuario.prototype.hashPassword(usuario.usu_pswd);
          }
      }
  },

);
// Método para comparar los password
Usuario.prototype.validarPassword = function(password) {
    return bcrypt.compareSync(password, this.usu_pswd);
};
Usuario.prototype.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null );
};


module.exports = Usuario;
