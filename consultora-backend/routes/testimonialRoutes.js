const express = require("express");
const { getTestimonials, addTestimonial } = require("../controllers/testimonialController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta pública: Obtener todos los testimonios
router.get("/", getTestimonials);

// Ruta pública: Agregar un testimonio
router.post("/", addTestimonial);

module.exports = router;