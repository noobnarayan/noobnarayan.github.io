import React from "react";
import profilePicture from "../../assets/media/images/Narayan_Das.png";
import heroBg from "../../assets/media/images/hero-bg.jpg";
import ButtonAndSocial from "../Common/ButtonAndSocial";

function Hero() {
  return (
    <div id="home">
      <div className="flex flex-col md:flex-row gap-5 py-3 pb-10 mt-16">
        <div className="md:w-[65%] bg-transparent overflow-hidden rounded-3xl relative group h-[33rem] md:h-[30rem] order-2 md:order-1 animate-fadeIn   ">
          <img
            src={heroBg}
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
              <h1
                className="font-semibold md:font-medium text-4xl"
                id="user-detail-name"
              >
                Hello, I’m Narayan,
              </h1>
              <h2 className="font-medium text-2xl md:text-3xl py-3">
                a passionate Full-Stack Developer
              </h2>

              <p className="py-5 md:py-10 text-[17px] md:pr-12">
                Enthusiastic programmer with a zest for software innovation and
                complex challenges. 🚀
              </p>
            </div>

            <ButtonAndSocial id={"resume-button-2"} />
          </div>
        </div>

        <div className="md:w-[35%] rounded-3xl overflow-hidden relative order-1 md:order-2">
          <img
            src={profilePicture}
            className="rounded-2xl object-cover object-center w-full h-full home-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
