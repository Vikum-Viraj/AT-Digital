import React from 'react'
import Navbar from './componets/Navbar';
import Hero from './pages/Hero';
import Footer from "./componets/Footer"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
