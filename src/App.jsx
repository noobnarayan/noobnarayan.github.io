import AboutSection from "./components/AboutSection/AboutSection";
import Hero from "./components/HomeSection/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="md:px-28 px-7">
        <Hero />
        {/* <AboutSection />   */}
      </div>
    </div>
  );
}

export default App;
