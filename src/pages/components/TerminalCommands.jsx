import React from "react";
import scanNetworkCommandsData from "../../assets/Data Tools links/OSINT data/scanNetwork.json";
import scanoOsCommandsData from "../../assets/Data Tools links/OSINT data/scanNetwork.json";

const TerminalCommands = () => {
  return (
    <div className="terminal-commands">
      {/* Affichage des commandes terminales */}
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
      {scanoOsCommandsData[0]["Énumération du système d'exploitation"].map(
        (category, index) => (
          <div key={index} className="category">
            <h2>{Object.keys(category)[0]}</h2>
            <ul>
              {Object.values(category)[0].map((tool, index) => (
                <li key={index}>
                  <h3>{Object.keys(tool)[0]}</h3>
                  <p>{tool[Object.keys(tool)[0]].Manual_Inspection}</p>
                  <ul>
                    {Object.entries(
                      tool[Object.keys(tool)[0]].Built - in_Commands
                    ).map(([name, description], index) => (
                      <li key={index}>
                        <h4>{name}</h4>
                        <p>{description}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default TerminalCommands;
