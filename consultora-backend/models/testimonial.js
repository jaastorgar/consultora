"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {}

  Testimonial.init(
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
      mensaje: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Testimonial",
      tableName: "testimonials",
      timestamps: false,
    }
  );

  return Testimonial;
};