"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio 2023",
    description: "React Portfolio Website",
    image: "/images/projects/1.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/acsaralegui/portfolio-2023",
    previewUrl: "https://aaronsaralegui.com",
  },
  {
    id: 2,
    title: "ProjectAlpha",
    description: "Bloggers Aplication",
    image: "/images/projects/2.png",
    tag: ["All", "RoR"],
    gitUrl: "https://github.com/acsaralegui/project_april",
    previewUrl: "https://projectapril.herokuapp.com",
  },
  {
    id: 3,
    title: "Social media Application",
    description: "An Instagram clone",
    image: "/images/projects/3.png",
    tag: ["All", "RoR"],
    gitUrl: "https://github.com/acsaralegui/grammable",
    previewUrl: "https://grammable-eb70b4970752.herokuapp.com",
  },
  {
    id: 4,
    title: "Foodiess Application",
    description: "Yelp Clone",
    image: "/images/projects/4.png",
    tag: ["All", "RoR"],
    gitUrl: "https://github.com/acsaralegui/foodiess",
    previewUrl: "https://foodies-2023-d8fcdc282358.herokuapp.com",
  },
  {
    id: 5,
    title: "Flashback",
    description: "An interactive flash cards app.",
    image: "/images/projects/5.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/acsaralegui/Flashback",
    previewUrl: "https://acsaralegui.github.io/Flashback/",
  },
  {
    id: 6,
    title: "ROBOFRIENDS",
    description: "A friendly social media card app that uses https://robohash.org/ to gather images of robots",
    image: "/images/projects/6.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/acsaralegui/robofriends",
    previewUrl: "https://acsaralegui.github.io/robofriends/",
  },
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
          name="RoR"
          isSelected={tag === "RoR"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
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