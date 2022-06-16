import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Estudio Color</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#features">PRODUCTOS</Nav.Link>
            <Nav.Link href="#pricing">SERVICIOS</Nav.Link>
            <Nav.Link href="#pricing">UBICACION</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
