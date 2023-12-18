import React from 'react'
import Logo from "../assets/Logo.png"
import "./nav.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar-bg">
      <div className="container-fluid">

        <div className="container">
            <img src={Logo} alt="Bootstrap" width="150" height="25" />
        </div>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav" style={{marginRight:'20px'}}>

            <li className="nav-item">
              <a className="nav-link"href="#" style={{ color: 'white',fontSize:'15px' }}>SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white',fontSize:'15px' }}>ABOUTUS </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white',fontSize:'15px' }}>CONTACTUS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white',fontSize:'15px'}}>CAREERS</a>
            </li>
          </ul>

        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
