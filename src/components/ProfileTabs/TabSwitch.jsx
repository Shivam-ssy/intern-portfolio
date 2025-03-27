import { useState,useEffect } from "react";
import TabContent from "./TabContent";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);
  const tabs = [
    { name: "All", content: <TabContent /> },
    { name: "Coded", content: <TabContent /> },
    { name: "Design", content: <TabContent /> },
  ];

  return (
    <div className="w-full h-auto mx-auto" data-aos="fade-up">
      <div className="flex justify-center  items-center bg-black pb-2" data-aos="fade-down">
        {tabs.map((tab,index) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-white transition-all duration-200 ${
              activeTab === tab.name ? "border-b" : ""
            }`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className=" bg-gray-100 rounded-b-lg" data-aos="fade-up">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabSwitcher;
