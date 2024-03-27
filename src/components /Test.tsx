import React from 'react'
import Link from "next/link";
const Test = () => {
  return (
    <section className="bg-black text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <video width="400" height="300" controls preload="none" autoPlay loop >
        <source src="/boxingvideo2.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className=" flex flex-col text-left ">
        <h1 className="text-3xl font-bold mb-10">
          
          Ready For Your First Punch ?
        </h1>
        <p className="text-base lg:text-lg">
          At Max Boxing, we welcome boxers of all fitness levels and are in
          your corner to make your first boxing class an easy and fun
          experience. Our boxing gym has excellent coaches to help you
          through your first encounter with our strength training, boxing
          combos, and heavy bag workouts. From the upper body workout to the
          interval training, we are ready to help
          you on your journey to hitting that first punching bag.
        </p>
        <div className=" flex justify-center items-center ">
      <Link href={'/programs'}> <button className=" rounded-full bg-red-500 hover:bg-red-700 p-3 m-3">Find a Class</button></Link>  
        </div>

      </div>
  
    </div>
  </section>
  )
}

export default Test