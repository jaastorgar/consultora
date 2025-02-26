const express = require("express");
const { getContacts, addContact } = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta protegida: Obtener todos los contactos
router.get("/", authMiddleware, getContacts);

// Ruta pública: Agregar un contacto
router.post("/", addContact);

module.exports = router;