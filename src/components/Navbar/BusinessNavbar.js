import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const BusinessNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        href="#home"
        style={{ color: "#1C6E8C", fontWeight: "bold" }}
      >
        BuyIt
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BusinessNavbar;
