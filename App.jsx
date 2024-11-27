import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import TetrisAnimation from "./TetrisAnimation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* Tetris Animation for all themes except Classic */}
      {/* <TetrisAnimation /> */}
      <main>
        {/* Add page sections */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
