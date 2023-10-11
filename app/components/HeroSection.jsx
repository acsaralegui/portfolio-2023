'use client';
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


function HeroSection() {
  return (
    <section className="lg:py-12">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-300"> 
              Hello, I'm{" "} 
            </span>
            <br></br>
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Aaron',
              700, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'Full Stack Developer',
              1000,
              'UI/UX designer',
              1000
            ]}
            wrapper="span"
            speed={30}
            
            repeat={Infinity}
          />
           
          </h1>
          <p className=" text-[#ADB1BE] text-base sm:text-lg mb-6 lg:text-xl">
          With my expertise, I guarantee to propel your company forward by developing cutting-edge technologies that will revolutionize the market and captivate users.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-sky-300 to-indigo-500 from-primary-500 to-secondary-500 hover:bg-slate-200 text-white" >
              Hire Me
            </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-blue-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] h[400px] relative'>
            <Image src="/images/hero-image.png" alt="hero image" className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300}/>
          </div>
        </div>
      </div >
    </section>
  
  )
}

export default HeroSection;
