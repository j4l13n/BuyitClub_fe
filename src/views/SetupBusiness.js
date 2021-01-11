import React, { Component } from "react";
import Navbar from "../components/Navbar/BusinessNavbar";
import SetupBusinessForm from "../components/BusinessForm/BusinessForm";

class SetupBusiness extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SetupBusinessForm />
      </>
    );
  }
}

export default SetupBusiness;
