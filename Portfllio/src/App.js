import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <Navbar /> {/* Yeh upar hamesha rahega */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Services" element={<Services />} /> 
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
      <Footer /> {/* Yeh sab pages ke nichay show hoga */}
    </Router>
  );
}

export default App;
