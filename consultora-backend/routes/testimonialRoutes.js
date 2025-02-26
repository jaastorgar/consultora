const express = require("express");
const { getTestimonials, addTestimonial } = require("../controllers/testimonialController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta protegida: Obtener todos los testimonios
router.get("/", authMiddleware, getTestimonials);

// Ruta pública: Agregar un testimonio
router.post("/", addTestimonial);

module.exports = router;