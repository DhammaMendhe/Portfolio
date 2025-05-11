import React, { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

export default function Navbar({ contactRef, projectsRef }) {
  const [contactState, setContactstate] = useState(null);
  // const contactRef = useRef(null);

  // const newOne = contactref.current;
  // setContactstate(newOne);

  const handleCallAction = (ref) => {
    console.log("nikita");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  //   const handleProjectaction = () => {
  //       console.log("nikita")
  //       projectRef.current?.scrollIntoView({ behavior: "smooth" });

  // };

  return (
    <header className="bg-black text-white py-6 px-4">
      <nav className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex flex-col items-center font-bold">
          <h1>MY</h1>
          <h1>PORTFOLIO</h1>
        </div>

        {/* Navigation Links and Button */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex items-center gap-4 text-sm font-medium">
            <a href="/about" className={`hover:underline before:`}>
              <FaUser />
              About
            </a>
            <span>|</span>
            <a href="/contact" className="hover:underline">
              <FaUser /> Contact
            </a>
            <span>|</span>
            {/* <a onClick={()=>handleCallAction(projectRef)}  className="hover:underline">
              Resume
            </a> */}
            <button
              onClick={() => handleCallAction(projectsRef)}
              className="hover:underline"
            >
              <FaUser /> Resume
            </button>
          </nav>

          {/* Call to Action Button */}
          <button
            onClick={() => handleCallAction(contactRef)}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Call to Action
          </button>
        </div>
      </nav>
    </header>
  );
}
