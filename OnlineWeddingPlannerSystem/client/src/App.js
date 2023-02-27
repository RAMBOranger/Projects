import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import About from "./pages/About";

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./pages/Contact";
import Forgot from "./pages/Forgot";
import Resetpassword from "./pages/Resetpassword";
import AdminHome from "./pages/admin/AdminHome";
import Vendors from "./pages/vendors/Vendors";
import Services from "./pages/services/Services";


function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
    role: ""
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, [ ]);


  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <div className="links">
              <Link to="/"> Home </Link>
              <Link to="/about"> About</Link>

              <Link to="/contact"> Contact</Link>
             

              {!authState.status && (
                <>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
                </>
              )}

              {authState.role==='admin' && (
                <>
                  <Link to="/admin"> Admin</Link>
                  <Link to="/services"> Services</Link>
                  <Link to="/vendors"> Vendors</Link>

                </>
              )}


            </div>
            <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button>}
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vendors" element={<Vendors />} />



          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
