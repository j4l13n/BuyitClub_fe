import React, { Component } from "react";
import Navbar from "../components/Navbar/BusinessNavbar";
import CategoryForm from "../components/CategoryForm/CategoryForm";

class BusinessCategory extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CategoryForm />
      </>
    );
  }
}

export default BusinessCategory;
