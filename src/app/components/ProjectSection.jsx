"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Awwards Gaming Animations",
    description: "React Vite TailwindCSS",
    image: "/images/awwards.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greenhat100/awwards",
    previewUrl: "https://awwards.kodenest.com",
  },
  {
    id: 2,
    title: "Nike Clone",
    description: "React + Vite",
    image: "/images/nike.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greenhat100/nike-clone",
    previewUrl: "https://nike.kodenest.com",
  },
  {
    id: 3,
    title: "React Finance Software Site",
    description: "React, TailwindCSS",
    image: "/images/finance.png",
    tag: ["All", "Web", "React", "TailwindCSS"],
    gitUrl: "https://github.com/greenhat100/Finance",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MERN Stack Contact Book",
    description: "NextJS, MongoDB, TailwindCSS",
    image: "/images/contact.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "World History Events Map",
    description: "NextJS, Typescript, SAAS, TailwindCSS",
    image: "/images/ev.png",
    tag: ["All", "React", "NextJS", "Typescript", "Tailwind"],
    gitUrl: "https://github.com/greenhat100/events-app",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AI Image Maker",
    description: "React + Vite TailwindCSS OpenAI",
    image: "/images/imai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greenhat100/ai-image",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Covid 19 Tracker",
    description: "ReactJS Axios API Call",
    image: "/images/covid.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greenhat100/covid19",
    previewUrl: "",
  },
  {
    id: 7,
    title: "GreatMoods.com",
    description: "PHP MySQL All Hand Coded",
    image: "/images/greatmood.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://greatmoods.com",
  }
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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