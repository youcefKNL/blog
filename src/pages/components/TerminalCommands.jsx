import React, { useState } from "react";
import scanNetworkCommandsData from "../../assets/Data Tools links/OSINT data/scanNetwork.json";
import scanoOsCommandsData from "../../assets/Data Tools links/OSINT data/scanSys.json";
import ScanOsCommand from "./toolboxPage/ScanOsCommand";

const TerminalCommands = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="terminal-commands">
      <ul>
        <li onClick={() => handleCategoryClick("scanNetworkCommands")}>
          Scan Network Commands
        </li>
        <li onClick={() => handleCategoryClick("scanoOsCommands")}>
          Scano OS Commands
        </li>
      </ul>

      {selectedCategory === "scanNetworkCommands" && (
        <div>
          {scanNetworkCommandsData.map((category, index) => (
            <div key={index} className="category">
              <h2>{category.title}</h2>
              <ul>
                {category.commands.map((command, index) => (
                  <li key={index}>
                    <h3>{command.tool}</h3>
                    <p>{command.description}</p>
                    <p>{command.command}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {selectedCategory === "scanoOsCommands" && (
        <div>
          <ScanOsCommand />
          {/* {scanoOsCommandsData.map((category, index) => (
            <div key={index} className="category">
              <h2>{category.title}</h2>
              <ul>
                {category.methods.map((method, idx) => (
                  <li key={idx}>
                    <h3>{method.name}</h3>
                    <ul>
                      {method.tools.map((tool, i) => (
                        <li key={i}>
                          <h4>{tool.name}</h4>
                          <p>{tool.description}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default TerminalCommands;
