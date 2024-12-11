import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../pictures/logo/Logo.png';

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme', !darkTheme); // Toggle dark theme on body
  };

  return (
    <header>
      <nav className={`navbar ${darkTheme ? 'dark' : 'light'}`}> {/* Theme-based class */}
        <div className="logo">
          <img src={logo} alt="Meta Blog" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>  {/* Replace <a> with <Link> */}
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/single-post">Single Post</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/SignUp">Sign-up</Link></li>

        </ul>
        <div className="search-theme">
          <div className="search-container">
            <input type="text" className="search" placeholder="Search" />
          </div>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="theme-toggle" 
              className="checkbox" 
              checked={darkTheme}
              onChange={handleThemeToggle}
            />
            <label htmlFor="theme-toggle" className="switch">
              <span className="switch-icon"></span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
