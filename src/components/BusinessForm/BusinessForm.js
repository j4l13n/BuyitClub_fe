import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

const BusinessForm = () => {
  return (
    <>
      <Row style={{ marginTop: "50px", marginLeft: "-20px" }}>
        <Col md={3}></Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <span
            style={{
              marginTop: "10px",
              backgroundColor: "#CDE2EA",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderRadius: "50px"
            }}
          >
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#226680" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#226680" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#226680" }}
            ></i>
          </span>
          <span style={{ color: "#767373" }}>------</span>
          <span>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
          </span>
          <span style={{ color: "#767373" }}>------</span>
          <span>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
          </span>
          <span style={{ color: "#767373" }}>------</span>
          <span>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
            <i
              className="fas fa-circle"
              style={{ width: "20px", color: "#767373" }}
            ></i>
          </span>
        </Col>
      </Row>
      <Row style={{ marginTop: "40px", textAlign: "center" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Card style={{ backgroundColor: "#1C6E8C" }}>
            <Card.Header>
              <h5 style={{ color: "#8CCAE2" }}>Setup Seller Business</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Free"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Legal name"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Mobile number"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Trading name"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="City"
                        style={{
                          borderRadius: "50px",
                          border: "none"
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={7}></Col>
                  <Col md={5}>
                    <Button
                      style={{
                        backgroundColor: "#F2F2F2",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontWeight: "bold",
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        borderRadius: "50px",
                        border: "none",
                        marginLeft: "60px"
                      }}
                    >
                      <Link to="/business" style={{ color: "gray" }}>
                        Cancel
                      </Link>
                    </Button>{" "}
                    <Button
                      style={{
                        backgroundColor: "#113A4A",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        fontWeight: "bold",
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        borderRadius: "50px",
                        border: "none"
                      }}
                    >
                      <Link
                        to="/business/add/category"
                        style={{ color: "#F0F6F8" }}
                      >
                        Next
                      </Link>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BusinessForm;
