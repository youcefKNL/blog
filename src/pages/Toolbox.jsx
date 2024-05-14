import React, { useState } from "react";
import HeaderChallenge from "./components/HeaderChallenge";
import Footer from "./components/Footer";
import onlineTools from "../assets/Data Tools links/OSINT data/online-tools.json";
import terminalTools from "../assets/Data Tools links/OSINT data/terminal-tools.json";
import osint from "../assets/Data Tools links/OSINT data/OSINT.png";
import ParticlesContainer2 from "./components/background Effect/Particles2";

const Toolbox = () => {
  //onclick
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const [selectedCategory, setSelectedCategory] = useState("online");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="toolboxPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="toolboxPage-contain">
        <div className="banner"></div>
        <div className="toolboxPageHeader">
          <img src={osint} alt="osint" />
          <h2> Tool Box</h2>
          <img src={osint} alt="osint" />
        </div>

        <div className="toolboxNavigation">
          <ul className="toolboxNavbar">
            <li
              className={selectedCategory === "online" ? "active" : ""}
              onClick={() => handleCategoryClick("online")}
            >
              Online Tools
            </li>
            <li
              className={selectedCategory === "terminal" ? "active" : ""}
              onClick={() => handleCategoryClick("terminal")}
            >
              Terminal Tools
            </li>
          </ul>
        </div>
        <div
          className={selectedCategory === "online" ? "onlineTools" : "hidden"}
        >
          {onlineTools.map((tool, index) => (
            <div
              key={index}
              className="onlineTool-item"
              onClick={() => handleClick(tool.url)}
            >
              <h3>
                <img src={tool.logo} alt="" /> {tool.title}
              </h3>
              <caption>
                <img src={tool.photo} alt="" />
              </caption>
              <p className="description">{tool.description}</p>
              <p className="price">{tool.price}</p>
            </div>
          ))}
        </div>
        <div
          className={
            selectedCategory === "terminal" ? "terminalTools" : "hidden"
          }
        >
          {terminalTools.map((tool, index) => (
            <div
              key={index}
              className="terminalTool-item"
              onClick={() => handleClick(tool.url)}
            >
              <h3>{tool.title}</h3>
              <caption>
                <img src={tool.photo} alt="" />
              </caption>
              <p className="description">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Toolbox;
