import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <>
      <Row style={{ marginTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <h3 style={{ color: "" }}>Pricing Guide</h3>
          <p style={{ color: "gray" }}>
            Get your preferred account and get your clients ready to buy
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Col md={12}>
            <Container>
              <Card
                style={{
                  color: "white",
                  backgroundColor: "#473077",
                  textAlign: "center",
                  borderRadius: "10px"
                }}
              >
                <Card.Header
                  style={{
                    border: "none",
                    borderBottom: "1px solid white"
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>Free</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ marginTop: "20px" }}>
                    <h1>0 Rwf</h1>
                  </Card.Title>
                  <Card.Text style={{ margin: "30px" }}>
                    <p>
                      Become a seller of your Shop now Become a seller of your
                      Shop
                    </p>
                    <p>
                      <Link to="/business" style={{ color: "white" }}>
                        Details
                      </Link>
                    </p>
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#685395",
                      paddingLeft: "80px",
                      paddingRight: "80px",
                      fontWeight: "bold",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      borderRadius: "50px",
                      border: "none"
                    }}
                  >
                    <Link to="/business/create" style={{ color: "#F0F6F8" }}>
                      Get Free
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Col>
        <Col md={4}>
          <Col md={12}>
            <Container>
              <Card
                style={{
                  color: "white",
                  backgroundColor: "#1E9067",
                  textAlign: "center",
                  borderRadius: "10px"
                }}
              >
                <Card.Header
                  style={{
                    border: "none",
                    borderBottom: "1px solid white"
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>Standard</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ marginTop: "20px" }}>
                    <h1>200,000 Rwf</h1>
                  </Card.Title>
                  <Card.Text style={{ margin: "30px" }}>
                    <p>
                      Become a seller of your Shop now Become a seller of your
                      Shop
                    </p>
                    <p>
                      <Link to="/business" style={{ color: "white" }}>
                        Details
                      </Link>
                    </p>
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#3B8168",
                      paddingLeft: "80px",
                      paddingRight: "80px",
                      fontWeight: "bold",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      borderRadius: "50px",
                      border: "none"
                    }}
                  >
                    Comming Soon
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Col>
        <Col md={4}>
          <Col md={12}>
            <Container>
              <Card
                style={{
                  color: "white",
                  backgroundColor: "#D57C25",
                  textAlign: "center",
                  borderRadius: "10px"
                }}
              >
                <Card.Header
                  style={{
                    border: "none",
                    borderBottom: "1px solid white"
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>Premium</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ marginTop: "20px" }}>
                    <h1>1,200,000 Rwf</h1>
                  </Card.Title>
                  <Card.Text style={{ margin: "30px" }}>
                    <p>
                      Become a seller of your Shop now Become a seller of your
                      Shop
                    </p>
                    <p>
                      <Link to="/business" style={{ color: "white" }}>
                        Details
                      </Link>
                    </p>
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#F5AA5E",
                      paddingLeft: "80px",
                      paddingRight: "80px",
                      fontWeight: "bold",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      borderRadius: "50px",
                      border: "none"
                    }}
                  >
                    Comming Soon
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default PricingCard;
