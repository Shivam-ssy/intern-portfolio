import React from 'react'
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TabContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);
    const projectImages= [
        "/Project.png",
        "/Project2.png",
        "/Project3.png",
        "/Project2.png",
        "/Project.png",
        "/Project2.png",
      ];
  return (
    <div className='grid grid-cols-1 place-items-center md:grid-cols-3'>
      {
        projectImages.map((image,i)=>(
          <div 
          key={i} 
          data-aos="zoom-in" 
          data-aos-delay={i * 100}
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <img 
            src={image} 
            alt={`Project ${i + 1}`} 
            className="w-full h-auto object-cover"
          />
        </div>
        ))
      }
    </div>
  )
}

export default TabContent
