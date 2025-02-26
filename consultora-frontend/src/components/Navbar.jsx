import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0a0a1f;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #00ffff;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Consultora</h1>
      <NavLinks>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;