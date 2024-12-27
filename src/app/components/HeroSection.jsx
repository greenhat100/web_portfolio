"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="lg:py-2">
     

      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-center" // Adjusted alignment to center
        >
          <div className="mb-4 lg:hidden">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative mx-auto">
              <Image
                src="/images/meblue.png"
                alt="Me Image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                priority={true}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              Hello, I am{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Cleo J',
                2600,
                'Web Developer',
                2600,
                'ReactJS',
                2600,
                'NextJS',
                2800,
                'Mern Stack',
                2600
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Full Stack Web Developer</p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block  hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div
          className="hidden lg:block col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/meblue.png"
              alt="Me Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              priority={true}
              height={300}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



