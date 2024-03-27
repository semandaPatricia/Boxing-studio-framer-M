"use client"
import React from 'react'
import Styles from "@/styles/herosection.module.css";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className= 'flex flex-col justify-center items-center min-h-screen' style={{
        backgroundImage: "url('boxing1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    <div className={Styles.herocontainer}>
      <h1 className='text-xl' >Welcome to <span className={Styles.colourchange}>Max Boxing</span></h1>
      <div className='scroll'>
      <motion.p
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
      className={Styles. RightToLeft}
      
      >TRAIN HARD. HAVE FUN.TRAIN HARD. HAVE FUN.TRAIN HARD. HAVE FUN.
      </motion.p>
      </div>
     
    </div>
  </div>
  )
}

export default HeroSection