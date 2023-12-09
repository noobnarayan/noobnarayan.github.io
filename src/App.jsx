import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/ContactSection/Contact";
import Hero from "./components/HomeSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/ProjectsSection/Projects";
import Skills from "./components/SkillsSection/Skills";
function App() {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="md:px-28 px-7">
        <Hero /> {/* Assign id to Hero section */}
        <AboutSection /> {/* Assign id to AboutSection */}
        <Skills /> {/* Assign id to Skills section */}
        <Projects /> {/* Assign id to Projects section */}
        <Contact /> {/* Assign id to Contact section */}
      </div>
    </div>
  );
}

export default App;
