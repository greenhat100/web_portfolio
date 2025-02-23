"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="lg:py-2">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Section */}
        <div className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-center">
          {/* Mobile Profile Image */}
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

          {/* Hero Text */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Cleo J",
                2600,
                "Web Developer",
                2600,
                "ReactJS",
                2600,
                "NextJS",
                2800,
                "Mern Stack",
                2600,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Full Stack Web Developer
          </p>

          {/* Buttons */}
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Hire Me
            </button>

            {/* View Resume Button */}
            <button
              onClick={() => setIsVisible(true)}
              className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </button>
          </div>
        </div>

        {/* Right Section (Large Screens) */}
        <div className="hidden lg:block col-span-4 place-self-center mt-4 lg:mt-0">
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
{/* Resume Preview Modal */}
{isVisible && (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.9 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md"
    onClick={() => setIsVisible(false)} // Clicking outside closes modal
  >
    <div
      className="w-[90%] sm:w-[50%] p-6 rounded-xl shadow-2xl relative bg-[rgb(var(--background-start-rgb))] text-white"
      onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside
    >
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
      >
        ✕
      </button>

      {/* Resume Content */}
      <h2 className="text-2xl font-bold mb-4">Cleo Johnson - Resume</h2>
      <iframe
        src="/resume2025.pdf"
        className="w-full h-[400px] border border-gray-700 rounded-lg"
      ></iframe>

      {/* Download Button */}
      <a
        href="/Cleo_Johnson_Resume.pdf"
        download="Cleo_Johnson_Resume.pdf"
        className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </div>
  </motion.div>
)}
    </section>
  );
};

export default HeroSection;
