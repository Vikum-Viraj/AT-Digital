import React from 'react'
import computer from "../assets/computer.png"
import search from "../assets/search.png"
import './home.css'

const Home = () => {
  return (
    <div className='sec-1'>

     <div className='sub-sec-1'>
     <img className='computer' src={computer} alt='computer' />
      <div className='head'>
      <h2 className='title'>Web & Mobile App Development</h2>
      <p>Your web and mobile Apps are pieces of the puzzle to grow your<br/> 
      business. We use frameworks which tailor content and engagement <br/> 
      methods to respond to different intents shown by your potential<br/>
       customers who interact with your business online</p>
        <button className='learn'>LEARN MORE</button>
      </div>
     </div>

     <div className='sub-sec-2'>
      <div className='head2'>
      <h2 className='title'>Digital Strategy Consulting</h2>
      <p>Your digital strategy should complement the overall marketing <br/>
      strategy of the company. In online marketing, each component will<br/>
      never work in isolation and every business needs a different mix. We<br/> 
      provide a clear concept and strategic overview to find the most <br/>
      efficient model for your business.</p>
      </div>
      <img className='search' src={search} alt='search' />
     </div>

    </div>
  )
}

export default Home
