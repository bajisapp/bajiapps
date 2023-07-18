import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Web from "./components/Web";
import Contact from "./components/Contact";
import Mobile from "./components/Mobile";

function App() {
  return (
    <div className="bg-[#000]">
 <Navbar />
 <Home />
 <Skills />
 <Web />
 <Mobile />
 <Contact />
 </div>
  );
}

export default App;
