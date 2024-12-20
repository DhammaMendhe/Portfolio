import React from "react";

function Projects() {
  const projectList = [
    {
      name: "E-commerce App",
      description: "A full-stack React application for online shopping.",
      github: "https://github.com/your-repo",
      demo: "https://live-demo-link.com"
    },
    {
      name: "Weather App",
      description: "A React app using Vite to fetch real-time weather data.",
      github: "https://github.com/your-repo",
      demo: "https://live-demo-link.com"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Projects</h1>
      {projectList.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href={project.demo} target="_blank" rel="noopener noreferrer"> Live Demo</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
