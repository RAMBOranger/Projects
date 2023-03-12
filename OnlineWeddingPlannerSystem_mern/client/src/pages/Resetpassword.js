import React, { useState } from "react";

import axios from "axios";
import { Button } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:3006/auth/reset/${token}`,
        {
          password,
        }
      );
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="resetpasswordContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br></br>
        <br></br>
        <Button variant="primary" type="submit">
          Update Password
        </Button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UpdatePassword;