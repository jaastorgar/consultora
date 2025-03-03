import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// Animación de entrada suave
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Contenedor principal con colores ecológicos
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  background: #f0fff0; /* Verde claro ecológico */
  color: #333;
`;

// Hero Section con transformación digital
const HeroSection = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 102, 51, 0.9), rgba(0, 204, 102, 0.8)), url('/ruta-de-tu-imagen.jpg') center/cover no-repeat;
  text-align: center;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  color: #f1f1f1;
  max-width: 700px;
  margin-top: 1rem;
`;

// Sección "Sobre Nosotros"
const AboutSection = styled.section`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const TeamMember = styled.div`
  width: 30%;
  padding: 1.5rem;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
`;

const MemberDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

// Sección de Misión y Visión
const VisionMissionSection = styled.section`
  max-width: 1000px;
  margin: 3rem auto;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const VisionMissionGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const VisionMissionCard = styled.div`
  width: 45%;
  padding: 2rem;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #006400;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Sección de testimonios dinámicos
const TestimonialsSection = styled.section`
  background: #e0ffe0;
  padding: 3rem;
  text-align: center;
  animation: ${fadeIn} 1.4s ease-in-out;
  border-radius: 10px;
  width: 80%;
  margin: 2rem auto;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #333;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

const CTASection = styled.section`
  text-align: center;
  margin: 3rem 0;
`;

const CTAButton = styled.button`
  background: #008000;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #004d00;
  }
`;

const Home = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  // Cargar testimonios aprobados
  useEffect(() => {
    fetch("http://localhost:5000/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonios(data.filter((t) => t.aprobado)))
      .catch((err) => console.error("Error cargando testimonios:", err));
  }, []);

  // Rotación de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
        setVisible(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonios]);

  return (
    <Container>
      <HeroSection>
        <HeroTitle>Transforma tu Negocio con Innovación</HeroTitle>
        <HeroSubtitle>Soluciones estratégicas para un futuro sostenible y digital.</HeroSubtitle>
      </HeroSection>

      <AboutSection>
        <h2>Sobre Nosotros</h2>
        <p>Somos una consultora comprometida con la sostenibilidad y la transformación digital.</p>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="/ruta-imagen-socio1.jpg" alt="Socio 1" />
            <MemberName>Juan Pérez</MemberName>
            <MemberRole>CEO & Estratega</MemberRole>
          </TeamMember>
        </TeamGrid>
      </AboutSection>

      <VisionMissionSection>
        <VisionMissionGrid>
          <VisionMissionCard>
            <CardTitle>Nuestra Visión</CardTitle>
            <CardText>Ser líderes en innovación y sostenibilidad empresarial.</CardText>
          </VisionMissionCard>
        </VisionMissionGrid>
      </VisionMissionSection>

      <TestimonialsSection>
        <h2>Testimonios</h2>
        {testimonios.length > 0 && <TestimonialText visible={visible}>{testimonios[index].mensaje}</TestimonialText>}
      </TestimonialsSection>

      <CTASection>
        <CTAButton onClick={() => navigate("/dejar-testimonio")}>Dejar un Testimonio</CTAButton>
      </CTASection>
    </Container>
  );
};

export default Home;