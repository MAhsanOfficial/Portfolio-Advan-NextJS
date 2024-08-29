

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5 className='text-yellow-500 text-3xl font-bold my-2 font-mono'>"Let's Connect ME"</h5>
        <p className='text-[#ffff] m-4 text-xl font-mono'>
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to DM on my Linkdin. I'll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/MAhsanOfficial" target='_blank'>
            <FaGithub className='w-9 h-9 hover:text-orange-500 m-5 ml-4' />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-ahsan-b26317296/" target='_blank'>
            <FaLinkedin className='w-9 h-9 m-5 hover:text-blue-500' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your @Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder="ahsan@gmail.com"
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block text-sm mb-2 font-medium'>Subject</label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              placeholder="Saying Topic"
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="How Can I Help You"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-400 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className='text-primary-500 text-sm mt-2'>
              Email Sent Successfully!
            </p>
          )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
