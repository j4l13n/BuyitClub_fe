import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1C6E8C",
          paddingTop: "10px",
          marginTop: "5px",
          paddingBottom: "5px"
        }}
      >
        <ul style={{ marginTop: "5px" }}>
          <li style={{ listStyleType: "none" }}>
            <Link to="/" style={{ color: "#FBFCFF" }}>
              Privacy
            </Link>{" "}
            <Link to="/" style={{ color: "#FBFCFF" }}>
              Policies
            </Link>{" "}
            <Link to="/business" style={{ color: "#FBFCFF" }}>
              Become a seller
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
