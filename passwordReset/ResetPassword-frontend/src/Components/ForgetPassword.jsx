import React, { useState } from "react";
import axiosInstance from "../axios.Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./User.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
 const email = e.target.email.value;
    try {
      const response = await axiosInstance.post("/user/forgot-password", {
        email,
      });

         if (response && response.status === 200) {
       
        setMessage("Reset password email sent")
      } 
       else   {
       console.log("Invalid response:", response);
        setMessage("Reset token not found in response");
      }
    } catch (error) {
      
  console.error("Error:", error);
      setMessage('Error: ' + error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="forgotpage">
      <Container>
        <Row>
          <Col>
            {" "}
            <h1>Forgot Password</h1>
          </Col>
          <form onSubmit={handleSubmit}>
            <Col>
              <label htmlFor="forgotEmail">Email:</label>
              <input
                type="email"
                id="forgotEmail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
            <Col>
              {" "}
              <button className="success" type="submit">
                Send Email
              </button>
            </Col>
          </form>
          <Col>
            {" "}
            <p className="success-message">{message}</p>{" "}
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
