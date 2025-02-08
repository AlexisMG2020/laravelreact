import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Asegúrate de importar Link desde react-router-dom

export default function Menu(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">UTVT</Navbar.Brand> {/* Usa Link aquí para evitar la recarga de página */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Inicio</Nav.Link> {/* Usa Link en lugar de href */}
            <NavDropdown title="Catalogos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/direcciones">Direcciones</NavDropdown.Item> {/* Usa Link aquí también */}
              <NavDropdown.Item href="/carreras">Carreras</NavDropdown.Item>
              <NavDropdown.Item href="/asignaturas">Asignaturas</NavDropdown.Item>

              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
