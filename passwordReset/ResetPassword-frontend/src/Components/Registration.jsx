import React, { useState } from "react";
 import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axiosInstance from "../axios.Config.js";
import "./User.css";



const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("Data to be sent:", { email, password });
      console.log("Form Submitted");
      console.log("Email:", email);
      console.log("Password:", password);

    try {
      const response = await axiosInstance.post("/user/register", {
        email,
        password,
      });

      if (response.status === 201) {
       setMessage("User registered successfully")
      }
    }  catch (error) {
     
      
      
  setMessage( 
        error.response.data.message);
    
    }
  };

  return (
    <div className="registerpage">
      <Container>
        <Row>
          <Col>
            <h1>User Registration</h1>
          </Col>
          <form onSubmit={handleSubmit}>
            {" "}
            <label htmlFor="email">Email:</label>
            <Col>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />{" "}
            </Col>
            <label htmlFor="password">Password:</label>
            <Col>
              {" "}
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
            <Col>
              <button className="success" type="submit">
                Register
              </button>{" "}
            </Col>
            <Link to="/forgot-password">
              <Col>
                {" "}
                <button className="failure">Forgot password</button>
              </Col>
            </Link>
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

export default Registration;
