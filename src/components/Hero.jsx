import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoMention } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";
function Hero() {
  return (
    <div id="home" className="flex items-center h-dvh justify-between bg-white">
      <div className="flex w-full justify-center md:bg-[url('')] bg-[url('/Background.png')] h-full items-center clippathl md:w-1/3 flex-col space-y-4">
        <div className="flex flex-col items-center md:items-start text-white  md:text-black md:px-0">
          <h2 className="md:text-3xl text-xl md-5 md:mb-10 font-semibold">Hi, I am</h2>
          <h1 className="md:text-6xl text-4xl font-bold">Tomasz Gajda</h1>
          <p className="md:text-lg text-white  md:text-gray-600">
            Front-end Developer / UI Designer
          </p>
          <div className="flex space-x-4 mt-10 text-gray-600">
            <div className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200">
              <GoMention />
            </div>
            <div className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200">
              <AiFillGithub />
            </div>
            <div className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black md:flex items-end  justify-center hidden clippathr h-full w-2/3">
        <img className="h-10/12" src="/image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
