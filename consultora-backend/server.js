require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db"); // 👈 Importamos la conexión

const contactRoutes = require("./routes/contactRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Servidor de la consultora funcionando...");
});

// Verificar conexión a PostgreSQL antes de iniciar el servidor
pool.query("SELECT NOW()")
  .then(() => {
    console.log("✅ Base de datos sincronizada y lista.");
  })
  .catch((err) => {
    console.error("❌ Error en la base de datos:", err);
  });

// Rutas
app.use("/api/contact", contactRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});