import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Obtener todos los testimonios
export const getTestimonials = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/testimonials`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los testimonios:", error);
    throw error;
  }
};

// Enviar un nuevo testimonio
export const addTestimonial = async (nombre, mensaje) => {
  try {
    const response = await axios.post(`${API_URL}/api/testimonials`, {
      nombre,
      mensaje,
    });
    return response.data;
  } catch (error) {
    console.error("Error enviando el testimonio:", error);
    throw error;
  }
};