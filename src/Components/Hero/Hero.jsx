import React from "react";
import './Hero.css';
import profile_img from '../../assets/i1.png';

function Hero() {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Vipin Bhati,</span> Software Developer</h1>
      <p>Passionate about solving real-world problems through clean code, strong DSA skills, and impactful web development.</p>
      
      <a
        className="hero-connect"
        href="https://www.linkedin.com/in/vipin-bhati-955a98y"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect with Me
      </a>

      <a
        className="hero-resume"
        href="/Vipin_Bhati_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Resume
      </a>
    </div>
  );
}

export default Hero;
