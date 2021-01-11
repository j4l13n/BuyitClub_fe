import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

const CategoryForm = () => {
  return (
    <>
      <Row style={{ marginTop: "50px", marginLeft: "-20px" }}>
        <Col md={3}></Col>
        <Col md={6} style={{ textAlign: "center" }}>
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
        </Col>
      </Row>
      <Row style={{ marginTop: "40px", textAlign: "center" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Card style={{ backgroundColor: "#1C6E8C" }}>
            <Card.Header>
              <h5 style={{ color: "#8CCAE2" }}>
                Add Categories to your Business
              </h5>
            </Card.Header>
            <Card.Body>
              <Form>
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
                      <Link
                        to="/business/add/payment"
                        style={{ color: "gray" }}
                      >
                        Skip
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
                        to="/business/add/payment"
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

export default CategoryForm;
