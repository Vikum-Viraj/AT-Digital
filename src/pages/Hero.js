import React from 'react'
import hero from "../assets/hero.png"
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero-image'>
      <img className='img' src={hero} alt='hero'/>

      <div className='img-section'>
      <h1>
        We Crush Your <br />
        Competitors,Goals, And  <br />
        Sales Records Without<br/>
        The B.S.
      </h1>
      <button className='hero-btn'>GET FREE CONSULTATION</button>
      </div>

    </div>
  )
}

export default Hero
