// Skills.js
import React from "react";
import SkillsCard from "./SkillsCard";
import background from "../../assets/media/images/bg.jpg";
// Array of objects representing skills
// Development skills
const developmentSkills = [
  { name: "HTML", icon: "skill-icons:html" },
  { name: "CSS", icon: "skill-icons:css" },
  { name: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
  { name: "JavaScript", icon: "skill-icons:javascript" },

  { name: "React", icon: "skill-icons:react-dark" },
  { name: "Redux", icon: "skill-icons:redux" },

  { name: "Node.js", icon: "skill-icons:nodejs-dark" },
  { name: "Express.js", icon: "skill-icons:expressjs-dark" },
  { name: "MongoDB", icon: "skill-icons:mongodb" },

  { name: "Java", icon: "skill-icons:java-dark" },

  { name: "Bootstrap", icon: "skill-icons:bootstrap" },
  { name: "Material-UI", icon: "skill-icons:materialui-dark" },
];

// Other skills
const otherSkills = [
  { name: "Firebase", icon: "logos:firebase" },
  { name: "WordPress", icon: "skill-icons:wordpress" },
  { name: "Appwrite", icon: "skill-icons:appwrite" },
  { name: "Cloudflare", icon: "skill-icons:cloudflare-dark" },
  { name: "Git", icon: "skill-icons:git" },
  { name: "GitHub", icon: "skill-icons:github-dark" },
  { name: "Postman", icon: "skill-icons:postman" },
  { name: "Figma", icon: "skill-icons:figma-dark" },
];

function Skills() {
  return (
    <div
      className="rounded-3xl bg-cover bg-center px-10 py-12 justify-center items-center mb-10"
      style={{
        backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9a5e4c18784705.562cf3eff3324.jpg)`,
      }}
      id="skills"
    >
      <h2 className="text-white text-3xl font-semibold text-center mb-5">
        Devlopment Skills
      </h2>

      <div className="grid grid-cols-4 gap-5 ">
        {developmentSkills.map((skill) => (
          <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
      <h2 className="text-white text-3xl font-semibold text-center my-5">
        Other Skills
      </h2>
      <div className="grid grid-cols-4 gap-5 ">
        {otherSkills.map((skill) => (
          <SkillsCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
