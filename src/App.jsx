import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import React from "react";


function App() {

  const projectRef = React.useRef(null); 

  return (
    <div >
      <Navbar />
      <Hero projectRef={projectRef}/>
      <About />
      <Project projectRef={projectRef}/>
      <Contact/>
    </div>
  );
}

export default App;
