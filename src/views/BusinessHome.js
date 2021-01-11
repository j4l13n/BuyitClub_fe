import React, { Component } from "react";
import NavBar from "../components/Navbar/BusinessNavbar";
import Slider from "../components/Slider/BusinessSlider";
import PricingCard from "../components/PricingCard/PricingCard";

class BusinessHome extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Slider />
        <PricingCard />
      </>
    );
  }
}

export default BusinessHome;
