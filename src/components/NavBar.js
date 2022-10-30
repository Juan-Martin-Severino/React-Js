import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="NavBar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Estudio Color
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              INICIO
            </Nav.Link>
            <Nav.Link as={Link} to="/category/productos">
              PRODUCTOS
            </Nav.Link>
            <Nav.Link as={Link} to="/category/servicios">
              SERVICIOS
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
