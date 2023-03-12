import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3006/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
          role: response.data.role
        });
        sessionStorage.setItem("id",response.data.id);
        navigate("/");
      }
    });
  };
  return (
    <div className="loginContainer">
      <label>
        <h3>Username:</h3>
      </label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>
        <h3>Password:</h3>
      </label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}> Login </button>
      <p className="forgot-password text-right">
        <Link to="/forgot"> Forgot Password? </Link>
      </p>
    </div>
  );
}

export default Login;
