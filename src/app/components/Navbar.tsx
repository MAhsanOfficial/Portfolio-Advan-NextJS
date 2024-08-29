


"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from './MenuOverlay';


const navLinks = [
  {
    title: "ABOUT",
    path: "#about",
  },
  {
    title: "PROJECTS",
    path: "#projects",
  },
  {
    title: "CONTACT",
    path: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold" >
          Ah 5 an
        </Link>
        <div className='mobile-menu block md:hidden'>
          <button 
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
          >
            {navbarOpen ? (
              <XMarkIcon className='h-5 w-5'/>
            ) : (
              <Bars3Icon className='h-5 w-5'/>
            )}
          </button>
        </div>
        <div className={`${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id='navbar'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      </nav>
  );
};

export default Navbar;

