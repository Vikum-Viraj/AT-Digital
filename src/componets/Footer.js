import React from 'react'
import Logo from "../assets/Logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-6 col-lg-5 col-12 ft-1'>
            <img src={Logo} alt='Logo' width="180" height="30" />
            <p className='para'>Your goal is our target. Not anything in between. We
              use online marketing platforms and tools to achieve single objective - your business results.</p>
          </div>
         
          <div className='col-md-6 col-lg-3 col-12 ft-2'>
            <h3>Our Technologies</h3>
            <ul>
            <li className="nav-item">
              <p className="nav-link"href="/">React JS</p>
            </li>
            <li className="nav-item">
              <p className="nav-link"href="/">Gatsby</p>
            </li>
            <li className="nav-item">
              <p className="nav-link"href="/">NextJS</p>
            </li>
            <li className="nav-item">
              <p className="nav-link"href="/">NodeJS</p>
            </li>
            <li className="nav-item">
              <p className="nav-link"href="/">GraphQL</p>
            </li>
            <li className="nav-item">
              <p className="nav-link"href="/">Laravel</p>
            </li>
            </ul>
          </div>

          <div className='col-md-6 col-lg-4 col-12 ft-3'>
            <h3>Our Services</h3>
            <p>Social media Marketing</p>
            <p>Web & Mobile App Development</p>
            <p>Data & Analytics</p>
            <p>Google Marketing solutions</p>
            <p>Search Engine Optimization</p>
          </div>

        </div>
      </div>
      <hr />
       <div className='privacy'>
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Terms & Conditions</p>
       </div>
    </div>
  )
}

export default Footer
