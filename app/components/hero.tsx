"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/Textgenerate";
import Buttonmagic from "./ui/Buttonmagic";
import { FaLocationArrow, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <div
      id="Home"
      className="relative pt-0 pb-20 md:-mt-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-36 bg-gradient-to-b from-[#04071D] to-[#0A0F2C]"
    >
      {/* Spotlight Effect */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Spotlight
          className="absolute -top-10 left-0 w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen"
          fill="white"
        />
      </div>

      {/* Radial Mask */}
      <div className="relative z-20 bg-[#04071D] flex h-auto min-h-[40rem] w-full items-center justify-center ">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>

        {/* Content */}
        <div className="relative z-30 px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-0">
            
            {/* Profile Picture */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <Image
                  className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/20 shadow-lg"
                  src="https://avatars.githubusercontent.com/u/132159855?s=400&u=0901b4fc467f3238f1487f5f0ac73dc1ae401665&v=4"
                  alt="Abhishek Yadav Profile"
                  width={320}
                  height={320}
                  priority
                />
              </div>
            </div>

            {/* Intro & Buttons */}
            <div className="  w-full flex justify-center items-center">
            <div className="w-full  text-center   lg:text-left animate-fade-in">
              <h2 className="uppercase tracking-widest text-sm lg:-ml-44 sm:text-base md:text-lg md:text-center text-white/70">
                Fullstack Developer
              </h2>
              <TextGenerateEffect
                duration={2}
                className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl mt-4 lg:-ml-36 sm:mt-6 md:mt-8"
                words="Hi, I'm Abhishek Yadav"
              />
              <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-center capitalize md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                I&apos;m a passionate Fullstack Developer dedicated to transforming concepts into seamless user experiences. With expertise in both frontend and backend technologies, I craft innovative solutions that drive impact.
              </p>

              {/* Buttons */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex   lg:ml-36 text-center  flex-col sm:flex-row gap-4  ">
                <div>
                <a href="#Projects">
                  <Buttonmagic
                    title="Show My Work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                </div>
                <div>
                <a
                  href="https://drive.google.com/file/d/1-dOMB8BN5LwAI8IkDqKr3bDx24RedjFO/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Buttonmagic
                    title="Download Resume"
                    icon={<FaDownload />}
                    position="right"
                  />
                </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
