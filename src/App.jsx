import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import ScrollWatcher from "./components/ScrollWatcher";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { useEffect, useRef } from "react";
import Skills from "./components/Skills";

  
function App() {
   useEffect(() => {
    AOS.init();
  }, []);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      {/* <Router>
        <Navbar />
        <button className="border">down</button>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </Router> */}
      <Navbar
        contactRef={contactRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
      />
      <Hero />
      <Skills />
      <div ref={projectsRef}>
        <Projects  />
      </div>{" "}
      <About />
      <div ref={contactRef}>
        <Contact />
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;
