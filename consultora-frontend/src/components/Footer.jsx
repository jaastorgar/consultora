import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #0a0a1f;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

const SocialLinks = styled.div`
  margin-top: 0.5rem;
  
  a {
    color: #00ffff;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      color: #ff9900;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Consultora. Todos los derechos reservados.</p>
      <p>Aviso legal | Política de privacidad | Términos de uso</p>
      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;