import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/boxing5.jpg" // Specify the image path
          alt="Boxing" // Provide an alt attribute for accessibility
          width={400} // Set the width of the image
          height={200} // Set the height of the image
        />
        <div className=" flex flex-col text-left ">
          <h1 className="text-3xl font-bold mb-4"> Real Boxing Since 2015.</h1>
          <p className="text-base lg:text-lg">
            At Max Club, we pride ourselves on catering to our students’
            personal goals, while still teaching the boxing fundamentals that
            have been passed down through a Central American lineage.
          </p>
          <p>
            Whether you want to lose weight, improve your fitness, or train like
            a boxer, we have the classes you need. Contact us via e-mail or
            phone (or just drop by!) for more details, and we’ll answer any
            questions you have.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Images/boxing7.jpg" // Specify the image path
          alt="Boxing" // Provide an alt attribute for accessibility
          width={500} // Set the width of the image
          height={200} // Set the height of the image
        />
        <div className=" flex flex-col text-left ">
          <h1 className="text-3xl font-bold mb-4"> The History of Max Boxing </h1>
          <p className="text-base lg:text-lg">
          max boxing was founded in 2015 by varga Armin, a professional boxer
            and Canadian Middleweight Champion. Formerly a member of both the
            Canadian National Boxing team and the Hungarian National Boxing team,
            Armin had a relatively late start in boxing at age 25, but was
            able to achieve what he did through the coaching of Michaelson Jr.
          </p>
          <p className="text-base lg:text-lg">
             As of March 2024, max boxing is officially open in its new location at York ,
            and hopes to be the premiere spot for boxing and fitness in Midtown
            London!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
