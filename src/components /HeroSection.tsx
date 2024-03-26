import React from 'react'
import Styles from "@/styles/herosection.module.css";
const HeroSection = () => {
  return (
    <div className= 'flex flex-col justify-center items-center min-h-screen' style={{
        backgroundImage: "url('boxing1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    <div className={Styles.herocontainer}>
      <h1 className='text-xl' >Welcome to Max Boxing</h1>
      <p>Glad you made it here.</p>
    </div>
  </div>
  )
}

export default HeroSection