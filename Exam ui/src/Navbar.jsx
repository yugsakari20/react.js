import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/product/1" className="nav-link">Details</Link>
    </nav>
  );
};

export default Navbar;
