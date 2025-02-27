"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ContactForm extends Model {}

  ContactForm.init(
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      telefono: { type: DataTypes.STRING, allowNull: true },
      mensaje: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "ContactForm",
      tableName: "contact_form",
      timestamps: false,
    }
  );

  return ContactForm;
};