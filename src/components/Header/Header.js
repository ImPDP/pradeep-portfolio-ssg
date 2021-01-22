import React from "react"
import "./header.css"

const Header = () => {
  return (
    <header className="pdp-header">
      <nav className="pdp-nav">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="resume-btn-holder">
          <button id="resume-btn">Resume</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
