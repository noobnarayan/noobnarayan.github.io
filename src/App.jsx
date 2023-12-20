import GitHubSection from "./GithubSection/GitHubSection";
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
      <div className=" xl:px-28 px-5">
        <Hero />
        <AboutSection />
        <Skills />
        <Projects />
        <GitHubSection />
        <Contact />
      </div>
    </div>
  );
}

export default App;
