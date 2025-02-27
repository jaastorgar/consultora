import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({ success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: false });

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus({ success: false, error: "Todos los campos son obligatorios." });
      return;
    }

    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      setStatus({ success: "Mensaje enviado con éxito.", error: false });
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (error) {
      setStatus({ success: false, error: "Error al enviar el mensaje." });
    }
  };

  return (
    <Container>
      <Section>
        <h1>Contacto</h1>
        <p>Envíanos un mensaje y te responderemos pronto.</p>
      </Section>

      <FormSection>
        <h2>Formulario de Contacto</h2>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
            />
          </InputWrapper>
          <Input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <Textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
          <Button type="submit">Enviar</Button>
        </Form>

        {status.success && <SuccessMessage>{status.success}</SuccessMessage>}
        {status.error && <ErrorMessage>{status.error}</ErrorMessage>}
      </FormSection>

      <InfoSection>
        <h2>Información de Contacto</h2>
        <p>📍 Dirección: Calle Ficticia 123, Ciudad</p>
        <p>📞 Teléfono: +56 9 1234 5678</p>
      </InfoSection>
    </Container>
  );
};

export default Contacto;

// Estilos con Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #f9f9f9;
  font-family: "Poppins", sans-serif;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    color: #0056b3;
  }
  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const FormSection = styled.section`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 120px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background: #0056b3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #003d82;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;

const InfoSection = styled.section`
  margin-top: 2rem;
  text-align: center;
  p {
    font-size: 1.2rem;
    color: #444;
  }
`;