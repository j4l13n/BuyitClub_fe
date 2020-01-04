import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col,
  Modal,
  Row
} from "react-bootstrap";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseJoin = () => setShow(false);
  const handleShowJoin = () => setShow(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
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
          onClick={handleShowJoin}
        >
          Join
        </Button>
        <Button
          variant="light"
          style={{
            marginLeft: "10px",
            borderRadius: "50px",
            color: "grey"
          }}
          onClick={handleShowLogin}
        >
          Login
        </Button>
      </Col>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleCloseJoin}
        centered
        style={{ border: "none" }}
      >
        <Modal.Header closeButton style={{}}>
          <Modal.Title
            style={{
              color: "#17a2b8",
              fontWeight: "bold",
              marginLeft: "35%"
            }}
          >
            Join BuyIt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="show-grid">
            <Col>
              <FormControl
                type="text"
                placeholder="Email"
                className="mr-sm-12"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  marginLeft: "10%",
                  marginBottom: "3%"
                }}
              />
              <FormControl
                type="text"
                placeholder="Mobile number"
                className="mr-sm-12"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  marginLeft: "10%",
                  marginBottom: "3%"
                }}
              />
              <FormControl
                type="password"
                placeholder="Password"
                className="mr-sm-12"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  marginLeft: "10%"
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                style={{
                  marginTop: "10px",
                  marginLeft: "35%",
                  paddingLeft: "70px",
                  paddingRight: "70px",
                  textAlign: "center",
                  borderRadius: "50px"
                }}
                onClick={handleCloseJoin}
              >
                Join
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                style={{
                  marginLeft: "25%",
                  marginTop: "10px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  borderRadius: "50px",
                  backgroundColor: "#4267B2",
                  border: "none"
                }}
                onClick={handleCloseJoin}
              >
                Facebook
              </Button>
            </Col>
            <Col>
              <Button
                style={{
                  marginTop: "10px",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  borderRadius: "50px",
                  backgroundColor: "#00acee",
                  border: "none"
                }}
                onClick={handleCloseJoin}
              >
                Twitter
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={showLogin}
        onHide={handleCloseLogin}
        centered
        style={{ border: "none" }}
      >
        <Modal.Header closeButton style={{}}>
          <Modal.Title
            style={{
              color: "#17a2b8",
              fontWeight: "bold",
              marginLeft: "35%"
            }}
          >
            Login to BuyIt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="show-grid">
            <Col>
              <FormControl
                type="text"
                placeholder="Email"
                className="mr-sm-12"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  marginLeft: "10%",
                  marginBottom: "3%"
                }}
              />
              <FormControl
                type="password"
                placeholder="Password"
                className="mr-sm-12"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  marginLeft: "10%"
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                style={{
                  marginTop: "10px",
                  marginLeft: "35%",
                  paddingLeft: "70px",
                  paddingRight: "70px",
                  textAlign: "center",
                  borderRadius: "50px"
                }}
                onClick={handleCloseLogin}
              >
                Join
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                style={{
                  marginLeft: "25%",
                  marginTop: "10px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  borderRadius: "50px",
                  backgroundColor: "#4267B2",
                  border: "none"
                }}
                onClick={handleCloseLogin}
              >
                Facebook
              </Button>
            </Col>
            <Col>
              <Button
                style={{
                  marginTop: "10px",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  borderRadius: "50px",
                  backgroundColor: "#00acee",
                  border: "none"
                }}
                onClick={handleCloseLogin}
              >
                Twitter
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default NavBar;
