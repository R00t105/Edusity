import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import logo from "../../assests/logo.png";
import MenuIcon from '../../assests/menu-icon.png';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false)

  const ToggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={sticky ? "DarkNav" : ""}>
      <img src={logo} alt="Logo" />
      <ul className={mobileMenu ? '' : 'HideMobileMenu'}>
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-280} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="AboutUs" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="Campus" smooth={true} offset={-230} duration={500}>
            Compus
          </Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="Contact" smooth={true} offset={-260} duration={500}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
      <img src={MenuIcon} alt="Toggle" className="MenuIcon" onClick={ToggleMenu}/>
    </nav>
  );
};

export default NavBar;
