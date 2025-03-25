import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import TabSwitcher from "./components/ProfileTabs/TabSwitch";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <About/>
      <Portfolio/>
      <TabSwitcher/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
