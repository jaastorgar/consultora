import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: linear-gradient(to right, #006400, #00a86b); /* Verde ecológico con toque digital */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 2px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;

    &:hover {
      color: #ffcc00;
      transform: scale(1.1);
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Consultora</Logo>
      <NavLinks>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;