import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ზედა ნაწილი */}
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              NOVA<span className="gold-text">ARCH</span>
            </Link>
            <p className="footer-tagline">
              Defining the future of architectural excellence.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>Tbilisi, Georgia</p>
              <p>info@novaarch.ge</p>
            </div>
          </div>
        </div>

        {/* ქვედა ნაწილი */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} NOVAARCH. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;