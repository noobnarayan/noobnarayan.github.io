import React from "react";
import { Icon } from "@iconify/react";

function SkillsCard({ name, icon }) {
  return (
    <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-red-100 flex  justify-center items-center py-3 px-4 gap-3  ">
      <Icon icon={icon} className="text-5xl skills-card-img" />
      <p className="font-semibold text-white skills-card-name">{name}</p>
    </div>
  );
}

export default SkillsCard;
