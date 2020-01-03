import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        href="#home"
        style={{ color: "#17a2b8", fontWeight: "bold" }}
      >
        BuyIt
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Col md={3}></Col>
      <Col md={6}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-12"
                style={{
                  width: "400px",
                  borderRadius: "50px"
                }}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Col>
      <Col md={{ span: 3, offset: 1 }}>
        <Button
          variant="info"
          style={{
            borderRadius: "50px",
            paddingLeft: "16px",
            paddingRight: "16px"
          }}
        >
          Join
        </Button>
        <Button
          variant="light"
          style={{ marginLeft: "10px", borderRadius: "50px" }}
        >
          Login
        </Button>
      </Col>
    </Navbar>
  );
};

export default NavBar;
