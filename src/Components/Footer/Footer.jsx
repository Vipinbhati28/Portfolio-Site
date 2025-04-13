import React from "react";
import './Footer.css';

function App() {
  return (
    <div className="footer">
      <div className="footer-top single-column">
        <div className="footer-top-left">
          <p>
          Designed & developed by Vipin Bhati | Open to opportunities in web development, software engineering, and beyond.
          </p>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Vipin Bhati</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default App;