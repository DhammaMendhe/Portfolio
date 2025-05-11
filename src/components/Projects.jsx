import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          My <span className="text-green-500">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              E-commerce Website <FaArrowRight className="text-green-400" />
            </h2>
            <p className="text-gray-300 mb-3">
              A full-featured shopping site with React, Node.js, MongoDB.
            </p>
            <a
              href="https://github.com/yourusername/ecommerce-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors"
            >
              <FaGithub /> View Code
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Portfolio Website <FaArrowRight className="text-green-400" />
            </h2>
            <p className="text-gray-300 mb-3">
              A portfolio site built with React and Framer Motion.
            </p>
            <a
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors"
            >
              <FaGithub /> View Code
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Weather App <FaArrowRight className="text-green-400" />
            </h2>
            <p className="text-gray-300 mb-3">
              React app showing real-time weather from OpenWeather API.
            </p>
            <a
              href="https://github.com/yourusername/weather-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
