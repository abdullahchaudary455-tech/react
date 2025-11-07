import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./Aboutus";
import ContactUs from "./Contactus"

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
