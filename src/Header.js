import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px", // Adjust padding as needed
  };

  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "white", // Text color
    padding: "18px 8px", // Adjust padding as needed
    borderRadius: "5px", // Rounded corners
  };
  const styleLink = {
    backgroundColor: "#071A45",
    width: "24%",
    borderRadius: "999px",
    padding: "18px 12px",
  };
  const buttonStyle = {
    backgroundColor: "White",
    padding: "18px",
    fontSize: "15px",
    borderRadius: "999px",
    margin: "12px",
    cursor: "pointer",
  };

  return (
    <div style={headerStyle}>
      <h1 style={{ fontFamily: "Lato" }}>XYZ INDUSTRIES</h1>
      <div style={styleLink}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/Property" style={linkStyle}>
          Property
        </Link>
        <Link to="/Service" style={linkStyle}>
          Service
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact
        </Link>
      </div>
      <div>
        <button style={buttonStyle} className="button">
          Sign In
        </button>
        <button style={buttonStyle} className="button">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
