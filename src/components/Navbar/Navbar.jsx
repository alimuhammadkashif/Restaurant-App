import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="navbar-logo">
        <img src="{images.logo}" alt="Old Lemoon Logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="ourstory">Our Story</a>
        </li>
        <li className="navbar-link">
          <a href="menu">Menu</a>
        </li>
        <li className="navbar-link">
          <a href="order">Order</a>
        </li>
        <li className="navbar-link">
          <a href="gallery">Gallery</a>
        </li>
        <li className="navbar-link">
          <a href="find_us">Find Us</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="login">Log in</a>
        <div />
        <a href="book_table">Book Table</a>
      </div>
      <div className="navbar-responsive">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="navbar-responsive-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-responsive-links">
              <li className="navbar-link">
                <a href="our_story">Our Story</a>
              </li>
              <li className="navbar-link">
                <a href="menu">Menu</a>
              </li>
              <li className="navbar-link">
                <a href="order">Order</a>
              </li>
              <li className="navbar-link">
                <a href="gallery">Gallery</a>
              </li>
              <li className="navbar-link">
                <a href="find_us">Find Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
