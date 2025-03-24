import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-10 flex flex-col justify-center items-center gap-5">
      <span 
        className="text-white cursor-pointer hover:text-gray-400 transition"
        onClick={scrollToTop}
      >
        BACK ON THE TOP
      </span>
      <div className="flex gap-4 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook className="hover:text-gray-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="hover:text-gray-400 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <CiInstagram className="hover:text-gray-400 transition" />
        </a>
        <a href="mailto:tomasz@example.com">
          <MdOutlineEmail className="hover:text-gray-400 transition" />
        </a>
      </div>
      <div>
        © 2020 Tomasz Gajda. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
