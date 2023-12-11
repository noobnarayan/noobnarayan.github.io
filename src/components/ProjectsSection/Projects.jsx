import React from "react";
import JobHunter from "../../assets/media/images/JobHunter.png";
import woodFans from "../../assets/media/images/wood fans.png";
import greenParadise from "../../assets/media/images/Green-Paradise.png";
import SkinStore from "../../assets/media/images/SkinStore.png";
import IconButton from "../Common/IconButton";
import TechStack from "./TechStack";
function Projects() {
  const handleGitHubClick = () => {};
  const handleLiveClick = () => {};
  return (
    <div id="projects">
      <div className="text-center py-8 font-semibold text-4xl text-[#191D26]">
        <h2>Pinned Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 ">
        <div className="project-card">
          <div className="h-[23.5rem] md:h-[27rem] flex justify-between rounded-2xl p-5 relative bg-[#493751] overflow-hidden shadow ">
            <div className="absolute inset-0 z-20 left-5 md:left-7 top-[11rem] md:top-[8rem] w-full transform transition duration-500 hover:scale-105">
              <img src={woodFans} alt="Wood Fans" />
            </div>
            <TechStack
              bg={400}
              color="light"
              skills={[
                "React",
                "Redux",
                "Tailwind CSS",
                "Firebase",
                "RazorPay",
              ]}
            />
            <div className="z-10">
              <h3 className="text-white font-medium text-xl project-title">
                Wood Fans
              </h3>
              <p className="text-gray-300 text-sm project-description">
                An online platform for buying Furnitures.
              </p>
            </div>
            <div className="flex gap-3">
              <IconButton
                iconClass="fa-brands fa-github text-gray-500"
                onClick={handleGitHubClick}
                testClass={"project-github-link"}
              />
              <IconButton
                iconClass="fa-solid fa-arrow-up-right-from-square text-gray-500"
                onClick={handleLiveClick}
                testClass={"project-deployed-link"}
              />
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="h-[23.5rem] md:h-[27rem] flex justify-between rounded-2xl p-5 relative bg-[#E3E4F1] overflow-hidden shadow ">
            <div className="absolute inset-0 z-20 left-5 md:left-7 top-[11rem] md:top-[8rem] w-full transform transition duration-500 hover:scale-105">
              <img src={JobHunter} alt="Wood Fans" />
            </div>

            <TechStack
              bg={700}
              color="dark"
              skills={[
                "React",
                "Redux",
                "Tailwind CSS",
                "Chart.Js",
                "Appwrite",
              ]}
            />

            <div className="z-10">
              <h3 className="text-gray-700 font-medium text-xl project-title">
                Wood Fans
              </h3>
              <p className="text-gray-500 text-sm project-description">
                A job portal connecting candidates with employers.
              </p>
            </div>
            <div className="flex gap-3">
              <IconButton
                iconClass="fa-brands fa-github text-gray-500"
                onClick={handleGitHubClick}
                testClass={"project-github-link"}
              />
              <IconButton
                iconClass="fa-solid fa-arrow-up-right-from-square text-gray-500"
                onClick={handleLiveClick}
                testClass={"project-deployed-link"}
              />
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="h-[23.5rem] md:h-[27rem] flex justify-between rounded-2xl p-5 relative bg-[#303443] overflow-hidden shadow ">
            <div className="absolute inset-0 z-20  top-[10.5rem] md:top-[7rem] w-full transform transition duration-500 hover:scale-105">
              <img src={greenParadise} />
            </div>

            <TechStack
              bg={400}
              color="light"
              skills={["HTML", "CSS", "JavaScript", "JSON Server", "Firebase"]}
            />
            <div className="z-10">
              <h3 className="text-white font-medium text-xl project-title">
                Green Paradise
              </h3>
              <p className="text-gray-300 text-sm project-description">
                Ecommerce for selling plants.
              </p>
            </div>
            <div className="flex gap-3">
              <IconButton
                iconClass="fa-brands fa-github text-gray-500"
                onClick={handleGitHubClick}
                testClass={"project-github-link"}
              />
              <IconButton
                iconClass="fa-solid fa-arrow-up-right-from-square text-gray-500"
                onClick={handleLiveClick}
                testClass={"project-deployed-link"}
              />
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="h-[22rem] md:h-[27rem] flex justify-between rounded-2xl p-5 relative bg-[#6B5CE5] overflow-hidden shadow ">
            <div className="absolute inset-0 z-20 left-5 md:left-7 top-[9.5rem] md:top-[8rem] w-full transform transition duration-500 hover:scale-105">
              <img src={SkinStore} alt="Wood Fans" />
            </div>
            <TechStack
              bg={400}
              color="light"
              skills={["HTML", "CSS", "JavaScript"]}
            />
            <div className="z-10">
              <h3 className="text-white font-medium text-xl project-title">
                Skin Store
              </h3>
              <p className="text-gray-300 text-sm project-description">
                Get beauty products at your doorstep.
              </p>
            </div>
            <div className="flex gap-3">
              <IconButton
                iconClass="fa-brands fa-github text-gray-500"
                onClick={handleGitHubClick}
                testClass={"project-github-link"}
              />
              <IconButton
                iconClass="fa-solid fa-arrow-up-right-from-square text-gray-500"
                onClick={handleLiveClick}
                testClass={"project-deployed-link"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
