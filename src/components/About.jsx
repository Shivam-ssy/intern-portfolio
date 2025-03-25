import React from "react";
import { GiPencilRuler } from "react-icons/gi";
import { skills } from "../utils/skills.js";
function About() {
  return (
    <div>
      <div className="bg-black h-fit">
        <div
          id="about"
          className="md:px-16 flex text-white py-10 flex-col items-center md:items-start px-5"
        >
          <h3 className="text-2xl font-bold">IT BERRIES</h3>
          <p className="mt-2 text-justify max-w-3xl">
            Nulla laoreet lacus eu neque ultrices, nec bibendum odio pulvinar.
            Etiam non nisi non arcu suscipit suscipit. Vestibulum id magna
            ligula. Curabitur tristique lacinia est, vel aliquet lectus.
          </p>
          <button className="mt-4 px-6 py-2 border border-white border-t-0 border-b-0 text-white">
            <p className="hidden md:block">Read More</p>
            <p className="md:hidden block">More</p>
          </button>
        </div>

        <div className="min-h-screen bg-gray-100  text-center py-16">
          {/* About Me Section */}
          <div className="space-y-8 flex-col flex items-center mb-20">
            <h1 className="md:text-4xl text-2xl text-black border-3 py-1 px-12 w-fit text-center font-bold">
              ABOUT ME
            </h1>
            <p className=" max-w-xl mx-auto">
              Nulla ut velit a metus rhoncus tempor. Nulla congue nulla vel
              varius faucibus. Sed tortor erat, amet lorem sed vehicula, ut urna
              vel fringilla fermentum nec facilisis orci est.
            </p>
            <button className="border-2 border-black px-6 border-t-0 border-b-0 py-2 mt-4 hover:bg-black hover:text-white transition duration-300">
              EXPLORE
            </button>
          </div>

          <div className="flex justify-center my-10">
            <img className="" src="/separatorBlack2.png" alt="" />
          </div>

          <div className="space-y-4 px-8 md:px-0 gap-5 md:gap-14 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 mb-20">
            <div>
              <div className="flex items-center">
                <img
                  className="md:h-14  md:w-14 w-10 h-10"
                  src="/design.png"
                  alt=""
                />
                <h2 className="font-bold -ml-2 text-xl md:text-2xl">Design</h2>
              </div>
              <p className="text-justify ml-2 md:ml-10">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img
                  className="md:w-14  md:h-14 w-10 h-10"
                  src="/maintenance.png"
                  alt=""
                />
                <h2 className="font-bold -ml-2 text-xl md:text-2xl">
                  Development
                </h2>
              </div>
              <p className="text-justify ml-2 md:ml-10">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
            <div className="md:col-span-2 place-self-center">
              <div className="flex items-center">
                <img
                  className="md:w-14  md:h-14 w-10 h-10"
                  src="/setting.png"
                  alt=""
                />
                <h2 className="font-bold -ml-2 text-xl md:text-2xl">
                  Maintenance
                </h2>
              </div>
              <p className="text-justify w-full md:max-w-2xl ml-2 md:ml-10">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
          </div>
          {/* Skills Section */}
          <div id="skill">
            <h1 className="md:text-4xl text-2xl mx-auto text-black border-3 py-1 px-12 w-fit text-center font-bold">
              SKILLS
            </h1>
            <div className="max-w-7xl mx-auto w-full px-10">
              {skills.map((category, index) => (
                <div key={index} className={`mb-6  ${category.category !="using now"?"hidden md:block":"md:block"}`}>
                  <h2 className={`text-xl md:text-start font-semibold my-10 `}>
                    {category.category.toUpperCase()}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, i) => {
                      const IconComponent = skill.icon; // Get the actual icon component
                      return (
                        <div
                          key={i}
                          className={`flex items-center flex-col gap-2 px-4 py-2`}
                        >
                          {IconComponent && 
                            <IconComponent  color={skill.color} className="text-5xl" />
                          }
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
