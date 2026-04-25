import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ფუნქცია მენიუს დასახურად
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ლოგო */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          NOVA<span className="gold-text">ARCH</span>
        </Link>

        {/* მენიუ და ღილაკი ერთად */}
        <div className={`nav-menu-wrapper ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          
          <div className="nav-action">
            <button className="nav-btn" onClick={closeMenu}>Start a Project</button>
          </div>
        </div>

        {/* ბურგერი */}
        <div 
          className={`burger ${isOpen ? "toggle" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;