
"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
// import { title } from 'process';
// import { Content } from 'next/font/google';



const TAB_DATA = [
  {title:"Skills",
  id:"skills",
  content:(
    <ul className='list-disc pl-2 font-medium font-mono'>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>React JS</li>
      <li>Next JS</li>
      <li>Tailwind CSS</li>
      <li>HTML 5 && CSS 3</li>
      <li>Video Editing</li>
      <li>Front-End-Developer</li>
    </ul>
  )
},
{title:"Education",
  id:"education",
  content:(
    <ul className='list-disc pl-2 font-mono'>
    <li>School: 9TH(2023)</li>
    <li>School: 10TH(2024)</li>
    <li>Bano Qabil IT Academy</li>
    <li>GIAIC IT Academy</li>
    </ul>
  )
},
{
  title:"Hobbies",
  id:"hobbies",
  content:(
    <ul className='list-disc pl-2 font-mono'>
      <li>Cricketer</li>
      <li>Content Creator</li>
      <li>Acting</li>
      <li>Traveling</li>
    </ul>
  )
}
]
const AboutSection: React.FC = () => {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.png" width={500} height={500} alt='about-image' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-yellow-400 font-mono mb-4'>About ME</h2>
                    <p className='text-base lg:text-lg'>
                        I'm Ahsan, a Passionate Front-End-Web Developer Dedicated to Transforming innovative ideas into Digital realities with a passion for creating interactive and responsive Web Applications
                        I have Current Experience
            working with JavaScript, React.JS, Redux, Next.JS, Tailwind,TypeScript,Video Editing,
             HTML, CSS, and Git. I am a quick Learner and I am always
            looking to expand my Knowledge and Skill set. I am a team Player and
            I am Excited to work with others to create amazing Web Applications. have the Expertise in this Current Technology.I have good experience with them And if you want to work on this skills base or any Web Applications base, then let me know I am also Ready with You.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        {/* Pass the proper types to TabButton */}
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
                        <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}> Hobbies </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t)=> t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;






