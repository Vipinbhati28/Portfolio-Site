import React, { useRef, useState } from 'react';
import './Navbar.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      
        <img src={menu_open} className="nav-mob-open" onClick={openMenu} />
        <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} className="nav-mob-close" onClick={closeMenu} />
            <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me </AnchorLink></div>

    </div>
  )
}

export default Navbar