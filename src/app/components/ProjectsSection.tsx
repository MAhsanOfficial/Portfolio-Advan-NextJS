

"use client";
import React, { useState,useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This is my Portfolio Website which has enough Functionality but no JavaScript in it but it lets you See My Website with the Latest Project Option😍 In this, I have shown my Skills base things, and I have also shown my Skills Base from my latest Project It has quite good Responsiveness which you will like very Much and in this section, I have shown my Skills and also told about my Services.I have my Email address, my Phone number, my Social Media Accounts, all my minutes, if anyone wants to give me a Project...So Contact me on these social media acounts and this Email, I will definitely complete your related Project.❤️ Check this My-Portfolio Website and Judge my Creativity.",
    image: "/images/projects/one.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MAhsanOfficial/My-Portfolio.git",
    previewUrl: "https://ahsanmyselfportfolio.netlify.app/",
  },
  {
    id: 2,
    title: "React Todo APP",
    description: "This Todo List is made up of very Good Features of React.JS with a lot of Functionality in React. These Todo Lists are very good Concepts that you can Learn to broaden your horizons. In this, the Function of all is started, in which all the words will be Written and In this we Add by List and List by deleting tasks in All Delete Option and Lots Of Function use...This project is based on React.JS 💖 Check this Advanced Todo-App and Judge my Creativity.",
    image: "/images/projects/two.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MAhsanOfficial/React-Todo-List.git",
    previewUrl: "https://reactbasetodolists.netlify.app/",
  },
  {
    id: 3,
    title: "Crypto Web Application",
    description: "The Purpose of Creating this Website is to give People the knowledge of Crypto Currency This Website has a lot of Animations that you will Enjoy.This website has a Gsap JavaScript Framework that has Animations on it. Gsap is a library of Animations is no Responsive .You Should Definitely check out this Website 💌 Check this Crypto Web Application and Judge my Creativity.",
    image: "/images/projects/three.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MAhsanOfficial/Crypto-Webpage---.git",
    previewUrl: "https://ahsanbitscryptocurrency.netlify.app/",
  },
  {
    id: 4,
    title: "E-commerce Web Application",
    description: "It is an e-commerce website with very good styling combined with very good functionality that makes this web application unique.In this, I have created a separate page which is for Show Now, and after logging in, your name will be Show on the Front of screen.Check this E-Commerce Website and Judge my Creativity.",
    image: "/images/projects/four.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MAhsanOfficial/Grocery-Store",
    previewUrl: "https://techtitansgrocerystore.netlify.app/",
  },
  {
    id: 5,
    title: "React Password-Generator",
    description: "This is a Password Generator Machine made from  React JS  && Tailwind CSS  that Generates Random Passwords from its users It Calculates a new Password for you and tells you the length of the Password.This app also learns by Counting numbers and Alphabetic Passwords, and there is a button that lets the app also count Specific keyword !@#$% Passwords Generate. 🤑 Check this PassWord Generator Machince and Judge my Creativity.",
    image: "/images/projects/fivee.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MAhsanOfficial/Password-Generator-ReactJS",
    previewUrl: "https://password-generator-react-base.netlify.app/",
  },
  {
    id: 6,
    title: "Currency-Converter",
    description: "🚀**CURRENCY CONVERTER**>>>...This is an app that reduces the cost of converting your currency to another currency at the current exchange rate. You must check out my Npm Cammand...🌟#typescript ! 🔥Cammand Of NPM is : npx mahsan01_currency_converter. This is only NPM Inquirer base Project so its not live link Check this Currency Converter Inquirer Base Projecy and Judge my Creativity.",
    image: "/images/projects/six.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MAhsanOfficial/Currency-Converter",
    previewUrl: "https://github.com/MAhsanOfficial/Currency-Converter",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const handleTabChange = (newTab: string) => {
    setTag(newTab);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );



  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };



  return (
    <section id='projects'>
      <h2 className='text-6xl justify-center font-semibold text-yellow-500 text-center font-mono'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={() => handleTabChange("All")}
          name="All" 
          isSelected={tag === "All"}
        />
        <ProjectTag 
          onClick={() => handleTabChange("Web")}
          name="Web" 
          isSelected={tag === "Web"}
        />
        <ProjectTag 
          onClick={() => handleTabChange("Mobile")}
          name="Mobile" 
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="projects-grid">
        {filteredProjects.map((project,index) => (
            <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag} 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;




