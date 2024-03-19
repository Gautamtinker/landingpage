import React, { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  const [email, setemail] = useState("");
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "white", // Text color
    padding: "18px 8px", // Adjust padding as needed
    borderRadius: "5px",
    maxWidth: "20px", // Rounded corners
  };
  const buttonStyle = {
    backgroundColor: "#071A45",
    padding: "18px",
    fontSize: "15px",
    borderRadius: "999px",
    margin: "12px",
    cursor: "pointer",
    textAlign: "left",
    color: "white",
  };

  const handleSubmit = () => {
    if (!email) {
      return;
    }
    try {
      fetch("http://localhost:5000", {
        method: "POST", // or 'GET', 'PUT', etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email, // Assuming 'name' is a variable holding your data
          // Add other data fields as needed
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          alert("email subsrcibe");
          // Handle success response here
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error here
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "400px",
        backgroundColor: "#071A45",
        color: "white",
      }}
    >
      <div style={{ width: "350px", height: "100px", padding: "20px" }}>
        <h1 style={{ textAlign: "left" }}>XYZ INDUSTRIES</h1>
        <p style={{ textAlign: "left" }}>
          YZ Industries: Where real estate dreams meet seamless transactions,
          transforming aspirations into achievements.
        </p>
        <button style={buttonStyle}>EXPLORE →</button>
        <div style={{ marginTop: "80px", textAlign: "left" }}>
          <img
            alt="icon"
            src="https://tse3.mm.bing.net/th?id=OIP.aWc2R-Q91KhvnaSKrQumSgHaHa&pid=Api&P=0&h=180"
            width="20px"
            height="20px"
            style={{ borderRadius: "20px", marginRight: "10px" }} // Add marginRight for space
          />
          <img
            alt="icon"
            src="https://tse1.mm.bing.net/th?id=OIP.0ZzsExBLkRl3AduCcB-irgHaEK&pid=Api"
            width="20px"
            height="20px"
            style={{ borderRadius: "10px", marginRight: "10px" }} // Add marginRight for space
          />
          <img
            alt="icon"
            src="https://tse1.mm.bing.net/th?id=OIP.nRPqr2VmuL33Fb04wRCuwAHaHa&pid=Api&P=0&h=180"
            width="20px"
            height="20px"
            style={{ borderRadius: "10px", marginRight: "10px" }} // No marginRight for the last image
          />
          <img
            alt="icon"
            src="https://tse1.mm.bing.net/th?id=OIP.V-PgdqPuuytmfTJbQl5xegHaEK&pid=Api"
            width="20px"
            height="20px"
            style={{ borderRadius: "10px" }} // No marginRight for the last image
          />
        </div>
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1>Quick Link</h1>
        <div>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </div>
        <div>
          <Link to="/Property" style={linkStyle}>
            Property
          </Link>
        </div>
        <div>
          <Link to="/Service" style={linkStyle}>
            Service
          </Link>
        </div>
        <div>
          <Link to="/Contact" style={linkStyle}>
            Contact
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "350px",
          height: "100px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1>Customer Support</h1>
        <div>FeedBack</div>
        <div>Report a Problem</div>
        <div>Request a call Back</div>
      </div>
      <div
        style={{
          width: "350px",
          height: "100px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1>Subscribe Us</h1>
        <div style={{ paddingBottom: "20px" }}>
          Subscribe to our weekly Newsletter
        </div>
        <div>
          <input
            style={{
              width: "240px",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Email Id"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#3A7DFF",
              width: "240px",
              padding: "10px",
              fontSize: "20px",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Subscribe
          </button>
          <div style={{ marginTop: "80px", textAlign: "right" }}>
            <p>Terms | Privacy © 2024 XYZ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
