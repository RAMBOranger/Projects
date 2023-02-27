//import React, { Component } from "react";

import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Forgot() {
  const { setAuthState } = useContext(AuthContext);

  const initialValues = {
    email: "",
  };

  let navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/forgot", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate("/resetpassword");
      }
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <h3>
            <center>Forgot Password</center>
          </h3>
          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="email"
            placeholder="(Ex. abc@gmail.com)"
          />

          <button type="submit"> Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Forgot;

/*
class Forgot extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Forgot Password</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="abc@gmail.com"
            onChange={(e) => (this.email = e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
export default Forgot;
*/
