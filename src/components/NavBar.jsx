import React, { useState,useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
function NavBar() {
    const [open,setOpen]=useState(false)
    const [navColor, setNavColor] = useState("md:bg-transparent");

    useEffect(() => {
      if (window.scrollY > 0) {
        setNavColor("md:bg-black");
      }
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setNavColor("md:bg-black");
        } else {
          setNavColor("md:bg-transparent");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <>
      <nav className={`flex z-10 md:fixed relative w-full bg-black justify-center md:flex-row flex-col mt-0  md:bg-transparent md:mt-10 `}>
        <div className={`w-full md:max-w-7xl flex justify-between items-center py-3 px-5 transition-all duration-150 ease-in-out rounded-4xl ${navColor}`}>
        <div>
          <img className="hidden md:block h-10" src={navColor==="md:bg-black"?"/logo2.png":"logo.png"} alt="" />
          <img className="block md:hidden h-7" src="/logo2.png" alt="" />
        </div>
        <div className="space-x-8 z-10 hidden md:block">
          <a href="#about" className="text-white hover:text-gray-400">
            About me
          </a>
          <a href="#skill" className="text-white hover:text-gray-400">
            Skills
          </a>
          <a href="#portfolio" className="text-white hover:text-gray-400">
            Portfolio
          </a>
          <button className="ml-4 px-4 py-2 text-white cursor-pointer transition-colors duration-200 ease-in rounded-full border border-white hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
          <div className="block md:hidden">
            <button onClick={()=>setOpen(!open)}><IoMdMenu color="white" className="text-2xl" /></button>
          </div>

        </div>
      </nav>
          <div className={`space-x-8 ${open?"flex":"hidden"} transition-all duration-200 ease-in-out  flex-col md:hidden text-white items-center space-y-5 bg-black/90`}>
          <a href="#" className="hover:text-gray-400 mt-5">
            About me
          </a>
          <a href="#" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#" className="hover:text-gray-400">
            Portfolio
          </a>
          <button className=" w-full text-black bg-white hover:text-black uppercase py-2" >
            Contact Me
          </button>
        </div>
    </>
  );
}

export default NavBar;
