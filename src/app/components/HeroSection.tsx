"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className="text-[#ffde21] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold font-mono">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hey, I'm{""}</span>
            
            <br></br>
            <TypeAnimation
              sequence={[
                "Ahsan",
                1000,
                "Web-Developer",
                1000,
                "Content Creator",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>
        <p className='text-[#bebbad] text-base sm:text-lg mb-6 lg:text-xl'>I'm Ahsan, a Passionate Front-End-Web Developer Dedicated to Transforming innovative ideas into Digital realities.  Leveraging the power of modern technologies like React.JS, TypeScript, and Tailwind CSS, I strive to create elegant and efficient solutions to complex challenges. Whether it's crafting intuitive user interfaces or optimizing website Performance, I'm committed to delivering top-notch results that exceed Expectations.</p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-primary-500 to-p via-yellow-500 hover:bg-slate-200 text-white'><a href="https://www.instagram.com/notyour__ahsan/" target='blank'>Hire Me</a></button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-primary-500 hover:bg-slate-200 text-white  mt-3'><a href="https://www.linkedin.com/in/muhammad-ahsan-b26317296/" target='blank'><span className='block bg-[#121212] hover:bg-slate-800  rounded-full px-5 py-2 '>DM Me on Linkdin</span></a></button>
            </div>
            </motion.div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >   
            <div className='rounded-full bg-[#ffc320] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative m-9'>
       <Image
       src="/images/me-ahsan.jpg"
       alt='hero image'
       className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
    width={230}
    height={230}
    // className="rounded-full"
    />
    </div>
    </motion.div>
       </div>
    </section>
  )
}

export default HeroSection
