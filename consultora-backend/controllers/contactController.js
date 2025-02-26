const contactForm = require("../models/contactForm");

// Obtener todos los contactos
const getContacts = async (req, res) => {
  try {
    const contacts = await contactForm.getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los contactos." });
  }
};

// Agregar un nuevo contacto
const addContact = async (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const newContact = await contactForm.addContact(nombre, email, telefono, mensaje);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el contacto." });
  }
};

module.exports = { getContacts, addContact };