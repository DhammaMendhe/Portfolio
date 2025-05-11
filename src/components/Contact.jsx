import React from 'react';

export default function Contact() {
  return (
    <section className="bg-black text-white py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-green-400">Contact Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm open to freelance projects, collaboration, or full-time opportunities. 
            Feel free to reach out if you have any questions or just want to say hello!
          </p>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-gray-900 p-8 rounded-lg shadow-lg w-full">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-black font-semibold px-6 py-3 rounded hover:bg-green-400 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
