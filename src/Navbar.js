import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Heading">PORTFOLIO</h1>
      <a className="each" href="/">
        <span>About Me</span>
      </a>
      <a className="each" href="/Projects">
        <span>Projects</span>
      </a>
      <a className="each" href="/Contact">
        <span>Contact Me</span>
      </a>
    </div>
  );
}

export default Navbar;
