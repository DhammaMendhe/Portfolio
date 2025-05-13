import React, { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import resume from '../assets/Dhammadip_S__Mendhe_resume_updated.pdf'
export default function Navbar({ contactRef, projectsRef,aboutRef }) {
  const [contactState, setContactstate] = useState(null);
  // const contactRef = useRef(null);

  // const newOne = contactref.current;
  // setContactstate(newOne);

const hireMe = useNavigate(null);


const handleNavigate = ()=>{

Navigate('/hireme');
}



  const handleCallAction = (ref) => {
    // console.log("nikita");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
 

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
            <button href="/about" className="hover:underline flex items-center gap-1"
             onClick={() => handleCallAction(aboutRef)}>
              <FaUser />
              About
            </button>
            <span>|</span>
            <button href="/contact" className="hover:underline flex items-center gap-1">
              <FaUser /> Contact
            </button>
            <span>|</span>
            {/* <a onClick={()=>handleCallAction(projectRef)}  className="hover:underline">
              Resume
            </a> */}
            <a
            href={resume}
              // onClick={() => handleCallAction(projectsRef)}
              className="hover:underline flex items-center gap-1"
            >
              <FaUser /> Resume
            </a>
          </nav>

          {/* Call to Action Button */}
          <Link
            // onClick={() => handleCallAction(contactRef)}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Call to Action
          </Link>
        </div>
      </nav>
    </header>
  );
}
