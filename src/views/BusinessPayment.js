import React, { Component } from "react";
import Navbar from "../components/Navbar/BusinessNavbar";
import PaymentForm from "../components/PaymentForm/PaymentForm";

class BusinessCategory extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PaymentForm />
      </>
    );
  }
}

export default BusinessCategory;
