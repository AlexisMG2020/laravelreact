import React from "react";
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container } from "react-bootstrap";

export default function Menu(props){
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">UTVT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>          
            <NavDropdown title="Catalogos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/direcciones">Direcciones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Carreras</NavDropdown.Item>
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