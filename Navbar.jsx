import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar">
      <h1 className="title">Unlimited Developer</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li className="theme-dropdown">
            <button onClick={toggleDropdown}>Theme</button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>Light</li>
                <li>Dark</li>
                <li>Classic</li>
                <li>Color</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
