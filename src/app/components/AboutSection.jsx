"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-center items-center">
        <table className="w-3/5 font-lg">
          <tbody>
            <tr>
              <td>ReactJS</td>
              <td>NextJS</td>
              <td>NodeJS</td>
              <td>PHP</td>
              </tr>
              <tr>
              <td>MySQL</td>
              <td>Nginx</td>
              <td>JavaScript</td>
              <td>Google Cloud</td>
            </tr>
            <tr>
              <td>MongoDB</td>
              <td>Typescript</td>
              <td>Material UI</td>
              <td>Daisy UI</td> 
            </tr>
            <tr>
              <td>HTML5</td>
              <td>CSS</td>
              <td>Git</td>
              <td>Kotlin</td> 
            </tr>
            <tr>
              <td>Bootstrap</td>
              <td>React Native</td>
              <td>Express</td>
              <td>Mongoose</td> 
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex justify-center items-center">
        <ul className="w-3/5">
          <li>Dunwoody College of Technology</li>
          <li>A.A.S 2011</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex justify-center items-center">
        <ul className="w-3/5">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      </div>
    ),
  },
];



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-20 sm:py-12 xl:px-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
          <p className="text-base lg:text-lg">
            As a specialized web developer focused on rapid application
            development, I leverage Next.js and TypeScript to streamline the
            creation process. My toolkit
            includes mastery of JavaScript/TypeScript, React, Redux, Express,
            MongoDB, PostgreSQL, Sequelize, HTML, CSS, and Git.
            </p>
            <br />
            <p>
            Driven by a passion for learning and mastering emerging
            technologies, I eagerly tackle new challenges. With a knack for
            quickly grasping concepts, I thrive in collaborative environments.
            I am committed to delivering exceptional results by working closely
            with diverse teams, pooling our talents to bring innovative ideas
            to life. Whether it be crafting engaging web experiences or driving
            innovation, I am dedicated to pushing boundaries and delivering
            excellence.
          </p>
        </div>
        <div className="md:col-span-1">
  <div className="flex flex-col md:flex-row justify-center text-3x text-white items-center md:items-start font-bold w-full space-y-4 md:space-y-0 md:space-x-4">
    <TabButton
      selectTab={() => handleTabChange("skills")}
      active={tab === "skills"}
    >
      Skills
    </TabButton>
    <TabButton
      selectTab={() => handleTabChange("education")}
      active={tab === "education"}
      
    >
      Education
    </TabButton>
    <TabButton
      selectTab={() => handleTabChange("certifications")}
      active={tab === "certifications"}
    >
      Certifications
    </TabButton>
  </div>
  <div className="mt-8">
    {TAB_DATA.find((t) => t.id === tab).content}
  </div>
</div>
      </div>
    </section>
  ); 
};

export default AboutSection;
