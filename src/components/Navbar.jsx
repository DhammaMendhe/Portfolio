import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <h2>My Portfolio</h2>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</Link></li>
        <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
