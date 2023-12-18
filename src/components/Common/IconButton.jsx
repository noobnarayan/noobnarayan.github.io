import React from "react";

const IconButton = ({ iconClass, onClick, testClass, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`bg-white h-11 w-11 rounded-full flex justify-center items-center hover:cursor-pointer flex-col z-10 transform transition duration-500 hover:scale-105 ${testClass} `}
        onClick={onClick}
      >
        <i className={`${iconClass}`}></i>
      </div>
    </a>
  );
};

export default IconButton;
