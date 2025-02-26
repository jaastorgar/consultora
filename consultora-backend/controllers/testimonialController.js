const testimonials = require("../models/testimonial");

// Obtener todos los testimonios
const getTestimonials = async (req, res) => {
  try {
    const data = await testimonials.getTestimonials();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los testimonios." });
  }
};

// Agregar un nuevo testimonio
const addTestimonial = async (req, res) => {
  const { nombre, mensaje } = req.body;

  if (!nombre || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const newTestimonial = await testimonials.addTestimonial(nombre, mensaje);
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el testimonio." });
  }
};

module.exports = { getTestimonials, addTestimonial };