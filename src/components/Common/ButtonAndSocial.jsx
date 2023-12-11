import React from "react";
import { handleResumeDownload } from "./downloadResume";

function ButtonAndSocial({ id }) {
  return (
    <div>
      <div className="md:w-4/6 flex flex-col md:flex-row items-center justify-center md:justify-start md:pt-20 gap-5">
        <div>
          <button
            className="bg-[#1D1D1D] py-3 px-20 md:px-12 rounded-3xl text-white font-medium"
            id={id}
            onClick={handleResumeDownload}
          >
            Resume
          </button>
        </div>
        <div className="flex justify-between gap-3">
          <a
            href="https://www.linkedin.com/in/noobnarayan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#0A66C2] hover:cursor-pointer hover:text-white p-4 rounded-full inline-flex items-center justify-center"
            id="contact-linkedin"
          >
            <i className="fa-brands fa-linkedin text-[20px]"></i>
          </a>
          <a
            href="https://github.com/noobnarayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#080808] hover:cursor-pointer hover:text-white p-4 rounded-full inline-flex items-center justify-center"
            id="contact-github"
          >
            <i className="fa-brands fa-github text-[20px]"></i>
          </a>
          <a
            href="https://twitter.com/inoobnarayan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#1DA1F2] hover:cursor-pointer hover:text-white p-4 rounded-full inline-flex items-center justify-center"
          >
            <i className="fa-brands fa-twitter text-[20px]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ButtonAndSocial;
