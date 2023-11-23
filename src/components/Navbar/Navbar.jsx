import React, { useState } from "react";

function Navbar() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
      className: "nav-link home",
    },
    {
      title: "About Jobs",
      path: "/",
      className: "about section",
    },
    {
      title: "Skills",
      path: "/",
      className: "nav-link skills",
    },
    {
      title: "Projects",
      path: "/",
      className: "nav-link projects",
    },
    {
      title: "Contact",
      path: "/",
      className: "nav-link contact",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div
      id="nav-menu"
      className="shadow-sm w-full fixed top-0 left-0 font-Poppins"
    >
      <div className="md:flex items-center justify-between bg-white py-2.5 md:px-10 px-7">
        <div className=" font-semibold text-xl cursor-pointer flex items-center text-gray-800">
          <span className="flex items-center font-Poppins">./narayan</span>
        </div>
        <div
          onClick={() => setOpen((pre) => !pre)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
        >
          <i
            className={open ? "fa-solid fa-x" : "fa-solid fa-bars"}
            style={{ color: "#EA580C" }}
          ></i>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="md:ml-8 text-base font-medium md:my-0 my-7"
              >
                <a
                  to={link.path}
                  className="text-gray-500 hover:text-orange-600 hover:pb-4 md:hover:border-b-2 hover:border-orange-600 "
                >
                  {link.title}
                </a>
              </li>
            );
          })}

          <div className="md:flex block">
            <button className="nav-link resume border border-gray-300 text-black font-bold py-1.5 px-5 rounded-md lg:ml-32 md:ml-7 md:shadow xl:ml-12 hover:bg-orange-300 hover:border-orange-500 duration-500 mr-5 md:hover:scale-105">
              Resume
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
