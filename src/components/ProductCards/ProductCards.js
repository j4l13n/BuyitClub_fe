import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import image from "../../assets/images/dayne-topkin-OT1D53cUbnI-unsplash.jpg";
import image1 from "../../assets/images/hermes-rivera-OX_en7CXMj4-unsplash.jpg";

const ProductCards = () => {
  return (
    <div style={{ margin: "20px" }}>
      <CardDeck>
        <Card style={{ border: "none" }}>
          <Card.Img
            variant="top"
            src={image1}
            style={{ borderRadius: "5px" }}
          />
          <small
            style={{
              textAlign: "center",
              paddingTop: "10px"
            }}
          >
            12, 000 Rwf
          </small>
          <Button
            variant="primary"
            style={{ marginTop: "10px", borderRadius: "50px" }}
          >
            Add to cart
          </Button>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={image} style={{ borderRadius: "5px" }} />
          <small
            style={{
              textAlign: "center",
              paddingTop: "10px"
            }}
          >
            12, 000 Rwf
          </small>
          <Button
            variant="primary"
            style={{ marginTop: "10px", borderRadius: "50px" }}
          >
            Add to cart
          </Button>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Img
            variant="top"
            src={image1}
            style={{ borderRadius: "5px" }}
          />
          <small
            style={{
              textAlign: "center",
              paddingTop: "10px"
            }}
          >
            12, 000 Rwf
          </small>
          <Button
            variant="primary"
            style={{ marginTop: "10px", borderRadius: "50px" }}
          >
            Add to cart
          </Button>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={image} style={{ borderRadius: "5px" }} />
          <small
            style={{
              textAlign: "center",
              paddingTop: "10px"
            }}
          >
            12, 000 Rwf
          </small>
          <Button
            variant="primary"
            style={{ marginTop: "10px", borderRadius: "50px" }}
          >
            Add to cart
          </Button>
        </Card>
        <Card style={{ border: "none" }}>
          <Card.Img
            variant="top"
            src={image1}
            style={{ borderRadius: "5px" }}
          />
          <small
            style={{
              textAlign: "center",
              paddingTop: "10px"
            }}
          >
            12, 000 Rwf
          </small>
          <Button
            variant="primary"
            style={{ marginTop: "10px", borderRadius: "50px" }}
          >
            Add to cart
          </Button>
        </Card>
        {/* <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={image} style={{ borderRadius: "5px" }} />
          <small
            style={{
              textAlign: "center",
              paddingTop: "10px"
            }}
          >
            12, 000 Rwf
          </small>
          <Button
            variant="primary"
            style={{ marginTop: "10px", borderRadius: "50px" }}
          >
            Add to cart
          </Button>
        </Card> */}
      </CardDeck>
    </div>
  );
};

export default ProductCards;
