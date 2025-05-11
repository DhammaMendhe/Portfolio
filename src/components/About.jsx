import React from "react";

export default function About() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-400">About Me</h2>
        <p className="text-lg leading-8 text-gray-300 mb-6 text-center">
          I'm <span className="text-white font-semibold">Dhammadip Mendhe</span>, a passionate and dedicated
          Full Stack Developer with experience in building modern, responsive web
          applications. I specialize in using technologies like React, Node.js, and MongoDB.
        </p>
        <p className="text-lg leading-8 text-gray-300 text-center">
          I love solving real-world problems with clean and scalable code. I'm also constantly learning and expanding my tech stack to build better user experiences.
        </p>
      </div>
    </section>
  );
}
