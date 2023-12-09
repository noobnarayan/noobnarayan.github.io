import React, { useState, useEffect, useRef } from "react";
import aboutBg from "../../assets/media/images/aboutBg.jpeg";
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const heroSection = document.getElementById("home");
    const handleScroll = debounce(() => {
      const heroBottom =
        heroSection.getBoundingClientRect().bottom + window.scrollY;
      const aboutTop = aboutRef.current.offsetTop;
      if (window.scrollY + window.innerHeight > aboutTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`about section bg-gray-100 rounded-3xl transition-all duration-700 ease-in-out transform py-16 mb-10 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 invisible"
      }`}
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-center py-2 md:py-5 px-6 md:px-14 gap-5">
        <div className="md:w-[30%] flex items-center justify-center">
          <h2 className="text-5xl font-semibold text-white hover:border-b-4  transition-all duration-200 ease-in transform ">
            About Me
          </h2>
        </div>
        <div className="md:w-[70%] flex flex-col items-center gap-4 text-white justify-center">
          <p>
            I am a dedicated Full Stack Web Developer specializing in the MERN
            stack. I have completed a comprehensive Full Stack Web Development
            Course at Masai, which equipped me with a robust understanding of
            web development through an intensive curriculum.
          </p>
          <p>
            Additionally, I leverage my 2+ years of experience as a freelance
            WordPress developer and blogger to further enhance my skillset.
          </p>
          <p id="user-detail-intro">
            Combining my MERN expertise (MongoDB, Express.js, React, Node.js)
            with over 2 years of freelance WordPress development and blogging
            experience, I create dynamic, responsive web applications. My design
            and user experience intuition, honed through WordPress, merges with
            SEO expertise and content understanding from blogging. This unique
            skillset ensures your projects are technically sound and optimized
            for maximum online visibility and engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
