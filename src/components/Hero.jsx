import React, {useEffect} from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoMention } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div id="home" className="flex items-center h-dvh justify-between bg-white">
      <div data-aos="fade-right" className="flex w-full bg-no-repeat bg-cover justify-center md:bg-[url('')] bg-[url('/Background.png')] h-full items-center clippathl md:w-1/3 flex-col space-y-4">
        <div className="flex flex-col items-center md:items-start text-white  md:text-black md:px-5">
          <h2 className="md:text-3xl text-xl md-5 md:mb-10 font-semibold"  data-aos="fade-up" data-aos-delay="200">Hi, I am</h2>
          <h1 className="md:text-6xl text-4xl font-bold"  data-aos="fade-up" data-aos-delay="400">Tomasz Gajda</h1>
          <p className="md:text-lg text-white  md:text-gray-600" data-aos="fade-up" data-aos-delay="600">
            Front-end Developer / UI Designer
          </p>
          {/* <div data-aos="zoom-in" className="flex space-x-4 mt-10 text-gray-600">
            <div className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200">
              <GoMention />
            </div>
            <div className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200">
              <AiFillGithub />
            </div>
            <div className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200">
              <FaLinkedin />
            </div>
          </div> */}
          <div 
            className="flex space-x-4 mt-10 text-gray-600"
            data-aos="zoom-in"
          >
            {[
              { icon: GoMention },
              { icon: AiFillGithub },
              { icon: FaLinkedin }
            ].map((Item, index) => (
              <div 
                key={index}
                className="p-2 hover:bg-black transition-colors ease-in-out duration-300 hover:text-white bg-gray-200"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <Item.icon />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="bg-black md:flex items-end  justify-center hidden clippathr h-full w-2/3">
        <img className="h-10/12" data-aos="zoom-in" src="/image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
