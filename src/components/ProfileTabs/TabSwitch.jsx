import { useState } from "react";
import TabContent from "./TabContent";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", content: <TabContent /> },
    { name: "Coded", content: <TabContent /> },
    { name: "Design", content: <TabContent /> },
  ];

  return (
    <div className="w-full h-auto mx-auto">
      <div className="flex justify-center  items-center bg-black pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-white transition-all duration-200 ${
              activeTab === tab.name ? "border-b" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className=" bg-gray-100 rounded-b-lg">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabSwitcher;
