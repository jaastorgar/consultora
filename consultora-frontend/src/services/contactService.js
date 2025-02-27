import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Obtener todos los contactos (Requiere autenticación)
export const getContacts = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/contact`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los contactos:", error);
    throw error;
  }
};

// Enviar un nuevo contacto
export const addContact = async (nombre, email, telefono, mensaje) => {
  try {
    const response = await axios.post(`${API_URL}/api/contact`, {
      nombre,
      email,
      telefono,
      mensaje,
    });
    return response.data;
  } catch (error) {
    console.error("Error enviando el contacto:", error);
    throw error;
  }
};