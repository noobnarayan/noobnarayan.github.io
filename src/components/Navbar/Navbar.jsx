import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { handleResumeDownload } from "../Common/downloadResume";
function Navbar() {
  const navLinks = [
    {
      title: "Home",
      path: "/#home",
      className: "nav-link home",
    },
    {
      title: "About",
      path: "/#about",
      className: "nav-link about",
    },
    {
      title: "Skills",
      path: "/#skills",
      className: "nav-link skills",
    },
    {
      title: "Projects",
      path: "/#projects",
      className: "nav-link projects",
    },
    {
      title: "Contact",
      path: "/#contact",
      className: "nav-link contact",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div id="nav-menu">
      <div className="shadow-sm w-full top-0 left-0 font-Poppins fixed z-50 ">
        <div className="md:flex items-center justify-between bg-white py-3.5 md:px-28 px-7">
          <div className=" font-semibold text-xl cursor-pointer flex items-center text-gray-800">
            <span className="flex items-center font-Poppins">./narayan</span>
          </div>
          <div
            onClick={() => setOpen((pre) => !pre)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
          >
            <i
              className={open ? "fa-solid fa-x" : "fa-solid fa-bars"}
              style={{ color: "#000000" }}
            ></i>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1000] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in border-t md:border-none ${
              open ? "top-14" : "top-[-490px]"
            }`}
          >
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`md:ml-8 text-base font-medium md:my-0 my-7 ${link.className}`}
                >
                  <Link
                    to={link.path} // Use HashLink to navigate
                    smooth // Enable smooth scrolling
                    className="text-gray-500 hover:text-yellow-600 hover:pb-4 md:hover:border-b-2 hover:border-[#FFBD59]"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <div className="md:flex block">
              <button
                className="nav-link resume border border-gray-300 text-black font-bold py-1.5 px-5 rounded-md lg:ml-32 md:ml-7 md:shadow xl:ml-12 hover:bg-[#F3E6C6] hover:border-orange-500 duration-500  md:hover:scale-105"
                id="resume-button-1"
                onClick={handleResumeDownload}
              >
                Resume
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
