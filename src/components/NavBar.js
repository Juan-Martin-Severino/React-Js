import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>Estudio Color</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>INICIO</Nav.Link>
            <Nav.Link as={Link} to='/category/productos'>PRODUCTOS</Nav.Link>
            <Nav.Link as={Link} to='/category/servicios'>SERVICIOS</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>

  );
};

export default NavBar;
