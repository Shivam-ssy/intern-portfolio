import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);
  return (
    <div id='portfolio' data-aos="fade-down">
      <div className="bg-[url('/image12.png')] flex items-center w-full h-48 bg-cover bg-center">
      <h1 className="md:text-4xl text-2xl mx-auto text-black border-3 py-1 px-12 w-fit text-center font-bold" data-aos="zoom-in">
              PORTFOLIO
            </h1>
      </div>
    </div>
  )
}

export default Portfolio
