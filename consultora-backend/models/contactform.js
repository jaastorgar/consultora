'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContactForm.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    mensaje: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ContactForm',
  });
  return ContactForm;
};