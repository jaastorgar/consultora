import React from "react";
import styled from "styled-components";

const Servicios = () => {
  return (
    <Container>
      <Header>
        <h1>Nuestros Servicios</h1>
        <p>Descubre cómo podemos ayudarte a crecer.</p>
      </Header>

      <ServicesSection>
        <ServiceCard>
          <h2>Consultoría Estratégica</h2>
          <p>Asesoramiento experto para mejorar la planificación y ejecución de tu negocio.</p>
        </ServiceCard>

        <ServiceCard>
          <h2>Desarrollo de Software</h2>
          <p>Soluciones digitales a medida para optimizar y automatizar procesos.</p>
        </ServiceCard>

        <ServiceCard>
          <h2>Optimización de Procesos</h2>
          <p>Mejoramos la eficiencia operativa de tu empresa con metodologías ágiles.</p>
        </ServiceCard>
      </ServicesSection>
    </Container>
  );
};

export default Servicios;

// Estilos con Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background: #f9f9f9;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.section`
  text-align: center;
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

const ServicesSection = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  h2 {
    color: #003d82;
  }

  p {
    color: #444;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;