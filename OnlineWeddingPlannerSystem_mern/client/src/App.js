import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import Services from "./pages/Services";

import User_sidenavbar from "./components/User_sidenavbar";
import Weddingform from "./pages/Weddingform";
import Weddingdetails from "./pages/Weddingdetails";
import Galleryreact from "./pages/Galleryreact";
import AdminWedding from "./pages/AdminWedding";
import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";
import UserServices from "./pages/UserServices";
import PaymentDetails from "./pages/Paymentdetails";

function App() {
  // let nav = useNavigate();
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
    role: "",
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
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    sessionStorage.clear();    
    //nav("/");
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          {/* ----------------------------------- */}
          <div className="navbar">
            <div className="links">
              <Link to="/"> Home </Link>
              <Link to="/about"> About</Link>
              <Link to="/contact"> Contact</Link>
              <Link to="/userservices"> Services</Link>

              {!authState.status && (
                <>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
                </>
              )}

              {authState.role === "admin" && (
                <>
                  <Link to="/admin"> Admin</Link>
                  <Link to="/services"> Services</Link>
                  {/* <Link to="/vendors"> Vendors</Link> */}
                </>
              )}

         {/* {authState.role === "user" && (
                <>
                  <Link to="/admin"> Admin</Link>
                  <Link to="/services"> Services</Link>
                  <Link to="/vendors"> Vendors</Link>
                </>
              )} */}


            </div>
            <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button>}
            </div>
          </div>
          {/* --------------------------------------------------- */}
          {authState.role === "admin" && (
            <>
              {/* Sidebar  */}       
              <nav
                id="sidebarMenu"
                class="collapse d-lg-block sidebar collapse bg-white"
              >
                <div class="position-sticky">
                  <div class="list-group list-group-flush mx-3 mt-4">
                    <Link
                      to="/adminwedding"
                      class="list-group-item list-group-item-action py-2 ripple"
                      aria-current="true"
                    >
                      <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                      <span>All Weddings</span>
                    </Link>
                    <Link
                      to="/services"
                      class="list-group-item list-group-item-action py-2 ripple "
                    >
                      <i class="fas fa-chart-area fa-fw me-3"></i>
                      <span>Manage Services</span>
                    </Link>
                    {/* <Link
                      to="/vendors"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-lock fa-fw me-3"></i>
                      <span>Password</span>
                    </Link> */}
                    {/* <Link
                      to="/adminwedding"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-chart-line fa-fw me-3"></i>
                      <span>AllWeddings</span>
                    </Link> */}
                    {/* <Link
                      to="/services"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-chart-pie fa-fw me-3"></i>
                      <span>Manage Services</span>
                    </Link> */}
                    {/* <Link
                      to="/vendors"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-chart-bar fa-fw me-3"></i>
                      <span>Contact</span>
                    </Link> */}
                    <Link
                      to="/about"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-globe fa-fw me-3"></i>
                      <span>About us</span>
                    </Link>
                    <Link
                      to="/invoices"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-building fa-fw me-3"></i>
                      <span>Invoices</span>
                    </Link>
                    {/* <Link
                      to="/vendors" 
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-calendar fa-fw me-3"></i>
                      <span>Payment Status</span>
                    </Link> */}
                    {/* <Link
                      to="/vendors"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-users fa-fw me-3"></i>
                      <span>Manage Gallery</span>
                    </Link> */}
                    {/* <Link
                      to="/vendors"
                      class="list-group-item list-group-item-action py-2 ripple"
                    >
                      <i class="fas fa-money-bill fa-fw me-3"></i>
                      <span>logout</span>
                    </Link> */}
                  </div>
                </div>
              </nav>
              {/* Sidebar  */}
            
            </>
          )}

          {/* --------------------------------------------- */}
          {/* --------side nav bar for user role-------- */}
          {authState.role === "user" && (
            <>
              <User_sidenavbar />
            </>
          )}

          {/* -------------------------routing---------------------- */}
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
            <Route path="/weddingform" element={<Weddingform />} />
            <Route path="/weddingdetails/" element={<Weddingdetails />} />
            <Route path="/gallery" element={<Galleryreact />} />
            <Route path="/adminwedding" element={<AdminWedding />} />
            <Route path="/services" element={<Services />} />
            <Route path="/userservices" element={<UserServices />} />
            <Route path="/invoice" element={<Invoice/>} />
            <Route path="/invoices" element={<Invoices/>} />
            <Route path="/paymentdetail" element={<PaymentDetails/>} />





          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
