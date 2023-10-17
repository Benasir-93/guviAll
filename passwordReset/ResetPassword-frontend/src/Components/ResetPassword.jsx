import React, { useState } from "react";
import axiosInstance from "../axios.Config.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./User.css";


const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token = window.location.pathname.split("/").pop();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        `/user/reset-password/${token}`,
        {
          newPassword: password, 
        }
      );
console.log("newPassword",password);
      if (response.status === 200) {
        setMessage("Password reset successful");
        setError("");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data.message : error.message
      );
      setError("Password reset failed. Please try again.");
      setMessage(""); 
    }
  };

  return (
    <div className="resetpage">
      <Container>
        <Row>
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <Col>
              {" "}
              <label htmlFor="resetPassword">New Password:</label>
              <input
                type="password"
                id="resetPassword"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
            <Col>
              {" "}
              <button type="submit" className="success">
                Reset Password
              </button>
            </Col>
          </form>
          <Col>
            {" "}
            <p className="success-message">{message}</p>{" "}
          </Col>
          <Col>
            {" "}
            <p className="error-message">{error}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;