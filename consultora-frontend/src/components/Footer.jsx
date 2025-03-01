import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #004d40, #00bfa5); /* Tonos ecológicos con digitalización */
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.8rem;

  a {
    color: #ffcc00;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #ffffff;
      transform: scale(1.1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Consultora. Todos los derechos reservados.</p>
      <FooterLinks>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;