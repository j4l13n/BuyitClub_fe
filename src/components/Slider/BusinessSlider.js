import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import image from "../../assets/images/dayne-topkin-OT1D53cUbnI-unsplash.jpg";
import image1 from "../../assets/images/hermes-rivera-OX_en7CXMj4-unsplash.jpg";

const BusinessSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
          style={{ height: "450px" }}
        />
        <Carousel.Caption>
          <h3>Get Free account</h3>
          <p>
            <Button variant="primary" style={{ borderRadius: "50px" }}>
              Free account
            </Button>{" "}
            <Button variant="light" style={{ borderRadius: "50px" }}>
              Get started
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
          style={{ height: "450px" }}
        />

        <Carousel.Caption>
          <h3>Get Standard account</h3>
          <p>
            <Button variant="primary" style={{ borderRadius: "50px" }}>
              Standard account
            </Button>{" "}
            <Button variant="light" style={{ borderRadius: "50px" }}>
              Get started
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Third slide"
          style={{ height: "450px" }}
        />

        <Carousel.Caption>
          <h3>Get Premium account</h3>
          <p>
            <Button variant="primary" style={{ borderRadius: "50px" }}>
              Premium account
            </Button>{" "}
            <Button variant="light" style={{ borderRadius: "50px" }}>
              Get started
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BusinessSlider;
