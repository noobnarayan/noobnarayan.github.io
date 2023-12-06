import React from "react";
import profilePicture from "../../assets/media/images/Narayan_Das.png";
function Hero() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 py-3">
        <div className="md:w-[65%] bg-transparent overflow-hidden rounded-3xl relative group h-[36rem] md:h-[30rem] order-2 md:order-1 ">
          <img
            src="https://www.aboghanbari.com/static/defaultcard-hover-5eef4f0957217910c705b56db7539e0f.jpg"
            className="transition duration-700 ease-in-out group-hover:rotate-[25deg] group-hover:scale-[1.6] rounded-3xl object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex p-10 md:p-10 z-10 flex-col">
            <div>
              <div className="bg-[#30f55b34] w-5/6 md:w-[31%] flex justify-center items-center rounded-3xl gap-2.5 py-px mb-3.5 hover:cursor-pointer">
                <div className="bg-green-600 h-2 w-2 rounded-full shadow-glow animate-slow-shine"></div>
                <div className="text-sm font-medium text-green-600">
                  AVAILABLE FOR WORK
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-medium text-4xl">Hello, I’m Narayan,</h1>
              <h2 className="font-medium text-3xl py-3">
                a passionate Full-Stack Developer
              </h2>

              <p className="py-5 md:py-10 text-[17px] md:pr-12">
                Enthusiastic programmer with a zest for software innovation and
                complex challenges. 🚀
              </p>
            </div>

            <div className="md:w-4/6 flex flex-col md:flex-row items-center justify-center md:justify-start md:pt-20 gap-5">
              <div>
                <button className="bg-[#1D1D1D] py-3 px-20 md:px-8 rounded-3xl text-white font-medium">
                  Resume
                </button>
              </div>
              <div className="flex justify-between gap-3">
                <a
                  href="https://www.linkedin.com/in/noobnarayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#0A66C2] hover:cursor-pointer hover:text-white p-4 rounded-full inline-flex items-center justify-center"
                >
                  <i className="fa-brands fa-linkedin text-[20px]"></i>
                </a>
                <a
                  href="https://github.com/noobnarayan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#080808] hover:cursor-pointer hover:text-white p-4 rounded-full inline-flex items-center justify-center"
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
        </div>

        <div className="md:w-[35%] rounded-3xl overflow-hidden relative order-1 md:order-2">
          <img
            src={profilePicture}
            className="rounded-2xl object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
