const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

// Configuración de la conexión a PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // 🔹 Desactiva logs de SQL en consola
});

const ContactForm = require("./contactform")(sequelize, DataTypes);
const Testimonial = require("./testimonial")(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  ContactForm,
  Testimonial,
};

// Sincronización de la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
})();

module.exports = db;