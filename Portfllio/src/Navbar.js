import React from "react";
import { Link } from "react-router-dom"; // ✅ Ye line zaroor chahiye
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Me
        <li><Link to="/Projects"></Link></li></Link></li>
        <li><Link to="/Services">Services</Link></li> 
        {/* <li><Link to="/ContactUs">ContactUs</Link></li> */}
        <li>
          <a
            href="https://maps.app.goo.gl/4Yj3T7TqZxSXLwd2A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Location
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">My Portfolio</h2>
//       <ul className="nav-links">
//        
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
