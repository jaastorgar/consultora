import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background: #0056b3;
  }
`;

const DejarTestimonio = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, mensaje, aprobado: false }), // Moderación activada
    });

    if (response.ok) {
      alert("Comentario enviado. Será revisado antes de publicarse.");
      navigate("/");
    } else {
      alert("Error al enviar el comentario.");
    }
  };

  return (
    <FormContainer>
      <h2>Deja tu Testimonio</h2>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Tu Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <TextArea rows="4" placeholder="Tu Testimonio..." value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
        <Button type="submit">Enviar</Button>
      </form>
    </FormContainer>
  );
};

export default DejarTestimonio;