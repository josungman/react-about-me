import React from "react";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio site built with React & Tailwind.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=Portfolio",
  },
  {
    title: "Todo App",
    description: "A simple Todo app using React & localStorage.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=Todo+App",
  },
  {
    title: "E-commerce Mockup",
    description: "Mock shopping site with Redux + Tailwind.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=E-commerce",
  },
  {
    title: "Chat App",
    description: "Real-time chat app using Socket.io & Node.js.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=Chat+App",
  },
  {
    title: "Blog Platform",
    description: "Minimal blog platform using Next.js + Tailwind.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=Blog+Platform",
  },
  {
    title: "Weather App",
    description: "Weather app fetching real-time API data.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=Weather+App",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <PageTitle>My Projects</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
