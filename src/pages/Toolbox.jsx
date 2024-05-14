import React, { useState } from "react";
import HeaderChallenge from "./components/HeaderChallenge";
import Footer from "./components/Footer";
import onlineTools from "../assets/Data Tools links/OSINT data/online-tools.json";
import terminalTools from "../assets/Data Tools links/OSINT data/terminal-tools.json";
import osint from "../assets/Data Tools links/OSINT data/OSINT.png";
import ParticlesContainer2 from "./components/background Effect/Particles2";
import TerminalCommands from "./components/TerminalCommands";

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
            {/* <li
              className={selectedCategory === "commands" ? "active" : ""}
              onClick={() => handleCategoryClick("commands")}
            >
              Terminal Commands
            </li> */}
          </ul>
        </div>

        {/* Afficher les outils en ligne */}
        {selectedCategory === "online" && (
          <div className="onlineTools">
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
        )}

        {/* Afficher les outils terminaux */}
        {selectedCategory === "terminal" && (
          <div className="terminalTools">
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
        )}

        {/* ******************************TERMINAL COMMANDS*********************************** */}
        {/* {selectedCategory === "commands" && <TerminalCommands />} */}
      </div>
      <Footer />
    </section>
  );
};

export default Toolbox;
