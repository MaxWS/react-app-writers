import React from 'react';
import "./navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link  active">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about me
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

