import { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../utils/images";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Logo and burger */}
      <div className="left-section">
        <div className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="logo">HealthCare+</h1>
      </div>

      {/* Navbar links */}
      <nav className={`navbar ${open ? "show" : ""}`}>
        <ul>
          <li><Link to="/home" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/doctor" onClick={() => setOpen(false)}>Find Doctors</Link></li>
          <li><Link to="/appointments" onClick={() => setOpen(false)}>My Appointment</Link></li>
          <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
        </ul>
      </nav>

      {/* Right: User profile */}
      <div className="user-profile">
        <img src={Images.ManImage} alt="User Profile" />
      </div>

      {/* Overlay for mobile menu */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
}

export default Navbar;
