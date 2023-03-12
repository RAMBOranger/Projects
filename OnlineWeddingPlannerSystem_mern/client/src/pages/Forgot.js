import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

//import { Form, Formik, Field } from "formik";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3006/auth/forgot", {
        email,
      });
      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="forgetcontainer">
      <Container>
        <center>
          <h1>Reset Password</h1>
        </center>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /></Form.Group>
            <br></br>
            <center>
              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </center>
          </Form>
          <br></br>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </Container>
      </div>
    );
  };
  
  export default Forgot;