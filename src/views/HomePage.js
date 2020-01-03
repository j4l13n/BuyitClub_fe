import React, { Component } from "react";
import NavBar from "../components/Navbar/NavBar";
import Slider from "../components/Slider/Slider";
import ProductCards from "../components/ProductCards/ProductCards";

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Slider />
        <ProductCards />
        <ProductCards />
      </>
    );
  }
}

export default HomePage;
