import React, { Component } from "react";
import NavBar from "../components/Navbar/NavBar";
import Slider from "../components/Slider/Slider";
import ProductCards from "../components/ProductCards/ProductCards";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Slider />
        <ProductCards />
        <ProductCards />
        <Footer />
      </>
    );
  }
}

export default HomePage;
