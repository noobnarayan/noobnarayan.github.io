import React from "react";

function TechStack({ bg, color, skills }) {
  const bgColorClass = `bg-gray-${bg} shadow`;
  const textColorClass = color === "light" ? "text-white" : "text-gray-800";

  return (
    <div className="absolute top-[5.5rem] left-9 right-0 p-3 flex flex-wrap justify-center z-20 project-tech-stack">
      <div
        className={`flex gap-3 ${textColorClass} font-semibold justify-center items-center text-xs bounce-hover`}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className={`py-px rounded-md ${bgColorClass} bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-center items-center px-3 bounce-hover `}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
