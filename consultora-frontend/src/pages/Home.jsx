import React from "react";
import styled, { keyframes } from "styled-components";

// Animación de entrada
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

// Contenedor principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  background: #f9f9f9;
  color: #333;
`;

// Hero Section
const HeroSection = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.9), rgba(0, 102, 204, 0.8)), url('/ruta-de-tu-imagen.jpg') center/cover no-repeat;
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
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
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
  text-align: center;
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
  background: #ffffff;
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
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #0056b3;
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

// Testimonios
const TestimonialsSection = styled.section`
  background: #eef1f6;
  padding: 3rem;
  text-align: center;
  animation: ${fadeIn} 1.4s ease-in-out;
`;

// Call To Action
const CTASection = styled.section`
  text-align: center;
  margin: 3rem 0;
  animation: ${fadeIn} 1.6s ease-in-out;
`;

const CTAButton = styled.button`
  background: #ff6600;
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e65c00;
  }
`;

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroTitle>Transforma tu Negocio con Nosotros</HeroTitle>
        <HeroSubtitle>Soluciones estratégicas para maximizar tu crecimiento y éxito.</HeroSubtitle>
      </HeroSection>

      <AboutSection>
        <h2>Sobre Nosotros</h2>
        <p>Somos una consultora comprometida con el éxito de nuestros clientes.</p>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="/ruta-imagen-socio1.jpg" alt="Socio 1" />
            <MemberName>Juan Pérez</MemberName>
            <MemberRole>CEO & Estratega</MemberRole>
            <MemberDescription>Especialista en planificación empresarial y liderazgo estratégico.</MemberDescription>
          </TeamMember>
          <TeamMember>
            <MemberImage src="/ruta-imagen-socio2.jpg" alt="Socio 2" />
            <MemberName>Ana Gómez</MemberName>
            <MemberRole>COO & Finanzas</MemberRole>
            <MemberDescription>Encargada de la optimización financiera y toma de decisiones clave.</MemberDescription>
          </TeamMember>
          <TeamMember>
            <MemberImage src="/ruta-imagen-socio3.jpg" alt="Socio 3" />
            <MemberName>Carlos Ramírez</MemberName>
            <MemberRole>CTO & Tecnología</MemberRole>
            <MemberDescription>Experto en digitalización y desarrollo de soluciones innovadoras.</MemberDescription>
          </TeamMember>
        </TeamGrid>
      </AboutSection>

      <VisionMissionSection>
        <VisionMissionGrid>
          <VisionMissionCard>
            <CardIcon>🌎</CardIcon>
            <CardTitle>Nuestra Visión</CardTitle>
            <CardText>Ser referentes en innovación y crecimiento empresarial, ofreciendo soluciones estratégicas que impulsen el éxito de nuestros clientes.</CardText>
          </VisionMissionCard>
          <VisionMissionCard>
            <CardIcon>🚀</CardIcon>
            <CardTitle>Nuestra Misión</CardTitle>
            <CardText>Ayudar a las empresas a crecer a través de estrategias innovadoras, optimización de procesos y digitalización.</CardText>
          </VisionMissionCard>
        </VisionMissionGrid>
      </VisionMissionSection>

      <TestimonialsSection>
        <h2>Testimonios</h2>
        <p>"Gracias a esta consultora, mi empresa creció un 40%."</p>
      </TestimonialsSection>

      <CTASection>
        <CTAButton>Contáctanos</CTAButton>
      </CTASection>
    </Container>
  );
};

export default Home;