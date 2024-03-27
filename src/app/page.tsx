import styles from "./page.module.css";
import Navbar from "@/components /navbar/Navbar";
import Test from "@/components /Test"

import HeroSection from "@/components /HeroSection";
import Gallery from "@/components /gallery/Gallery";
import Footer from "@/components /footer/Footer"
export default function Home() {
  return (
    <>
      <main className=' flex flex-col justify-center items-center min-h-screen '>
    <Navbar />
   
     <div>
     <HeroSection/>
     <Test/>
     <Gallery/>
     
      </div> 
      
  </main>
  <Footer/> 
    </>
  
  );
}

