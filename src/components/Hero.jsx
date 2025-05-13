import React from "react";

export default function Hero() {
  
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        
        {/* Information Section */}
        <div className="flex-1 space-y-5">
          <h5 className="text-green-400 text-lg font-semibold">Hey, I am</h5>
          <h1 className="text-4xl md:text-5xl font-bold">Dhammadip Mendhe</h1>
          {/*  */}
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate Full Stack Software Developer who enjoys building modern, scalable web applications.
            With a strong foundation in both front-end and back-end technologies like React, Node.js, and MongoDB, 
            I focus on crafting responsive user interfaces, solving complex problems, and delivering clean, maintainable code.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="py-3 px-6 border border-white rounded hover:bg-green-400 hover:text-black transition duration-150">
              Contact Me
            </button>
            <button className="py-3 px-6 border border-white rounded hover:bg-green-400 hover:text-black transition duration-150">
              Check Portfolio
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            className="rounded-xl w-full max-w-md object-cover shadow-lg hover:scale-105 duration-200"
            src="https://media.istockphoto.com/id/1434947698/photo/working-computer-email-and-business-man-from-china-serious-about-fixing-a-laptop-glitch.webp?a=1&b=1&s=612x612&w=0&k=20&c=y_BkHb25sVUYVK7Eo5QTfxTsUmV7x-1BiO8-BzFV1wo="
            alt="Developer at work"
          />
        </div>
      </div>
    </section>
  );
}
