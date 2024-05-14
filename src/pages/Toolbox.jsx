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
            <li
              className={selectedCategory === "commands" ? "active" : ""}
              onClick={() => handleCategoryClick("commands")}
            >
              Terminal Commands
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

        {/* ******************************TERMINAL COMMANDS*********************************** */}

        <TerminalCommands />
        {/* ENUMERATION RESEAUX *************************/}

        {/* <div class="commands">
          <h2>Énumération du réseau</h2>
          <div class="category">
            <h3>Découverte active</h3>
            <ul>
              <li>
                <h4>ARP</h4>
                <p>
                  Description : Protocole de communication pour déterminer
                  l'adresse IP d'une machine à partir de son adresse MAC.
                </p>
                <p>Outil : Netdiscover</p>
                <p>Commande : sudo netdiscover -r $IP/24</p>
              </li>
              <li>
                <h4>Ping</h4>
                <p>
                  Description : Méthode de découverte de réseau via l'envoi de
                  requêtes ICMP.
                </p>
                <p>Outil : fping</p>
                <p>Commande : fping -g 10.10.3.0/24</p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>Analyse des ports</h3>
            <ul>
              <li>
                <h4>Nmap</h4>
                <p>
                  Description : Scanner de ports pour identifier les services
                  exécutés sur chaque machine.
                </p>
                <p>Outil : nmap</p>
                <p>Commande : nmap $IP</p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>Capture de bannières</h3>
            <ul>
              <li>
                <h4>Netcat</h4>
                <p>
                  Description : Outil polyvalent pour récupérer les bannières de
                  divers services.
                </p>
                <p>Outil : nc</p>
              </li>
              <li>
                <h4>Nmap</h4>
                <p>
                  Description : Scanner réseau pouvant également extraire des
                  bannières.
                </p>
                <p>Outil : nmap</p>
              </li>
              <li>
                <h4>Telnet</h4>
                <p>
                  Description : Utilisé pour des tâches simples de capture de
                  bannières.
                </p>
                <p>Outil : telnet</p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>DNS inverse</h3>
            <ul>
              <li>
                <h4>Dig</h4>
                <p>
                  Description : Outil pour résoudre les adresses IP en noms de
                  domaine associés.
                </p>
                <p>Outil : dig</p>
                <p>Commande : dig -x 93.184.216.34</p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>TTL</h3>
            <ul>
              <li>
                <h4>Ping</h4>
                <p>
                  Description : Envoi de requêtes ICMP pour identifier la valeur
                  TTL renvoyée.
                </p>
                <p>Outil : ping</p>
                <p>Commande : $ ping -c 1 example.com</p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>Essentiels</h3>
            <ul>
              <li>
                <h4>NetBIOS</h4>
                <p>
                  Description : Utilisé pour le partage de fichiers et
                  d'imprimantes ainsi que la résolution de noms.
                </p>
                <p>Outil : nbtstat</p>
                <p>Commande : nbtstat -A &lt;Target_IP_Address&gt;</p>
              </li>
              <li>
                <h4>SNMP</h4>
                <p>
                  Description : Protocole utilisé pour surveiller et gérer les
                  appareils sur un réseau.
                </p>
                <p>Outil : snmpwalk</p>
                <p>
                  Commande : snmpwalk -c public -v1 &lt;Target_IP_Address&gt;
                </p>
              </li>
              <li>
                <h4>LDAP</h4>
                <p>
                  Description : Utilisé pour les services d'annuaire, stockant
                  des objets comme des utilisateurs et des groupes.
                </p>
                <p>Outil : ldapsearch</p>
                <p>
                  Commande : ldapsearch -x -h &lt;Target_LDAP_Server&gt; -b
                  "dc=example,dc=com" "(objectclass=*)"
                </p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>Horloge et courrier</h3>
            <ul>
              <li>
                <h4>NTP</h4>
                <p>
                  Description : Protocole pour synchroniser les horloges sur un
                  réseau.
                </p>
                <p>Outil : ntpq</p>
                <p>Commande : ntpq -p &lt;Target_IP_Address&gt;</p>
              </li>
              <li>
                <h4>SMTP</h4>
                <p>
                  Description : Protocole pour envoyer et recevoir des e-mails.
                </p>
                <p>Outil : telnet</p>
                <p>Commande : telnet &lt;SMTP_Server_Address&gt; 25</p>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>Énumération avancée</h3>
            <ul>
              <li>
                <h4>DNS</h4>
                <p>
                  Description : Extraction des noms de domaine, sous-domaines et
                  informations associées.
                </p>
                <p>Outil : dnsrecon</p>
                <p>Commande : dnsrecon -d &lt;Target_Domain_Name&gt;</p>
              </li>
              <li>
                <h4>IPSEC</h4>
                <p>
                  Description : Sécurisation des communications sur les réseaux
                  IP.
                </p>
                <p>Outil : ike-scan</p>
                <p>Commande : ike-scan &lt;Target_IP_Address&gt;</p>
              </li>
              <li>
                <h4>VOIP</h4>
                <p>Description : Système de communication vocale sur IP.</p>
                <p>Outil : svwar</p>
                <p>
                  Commande : svwar -m INVITE -e100-200 &lt;Target_IP_Address&gt;
                </p>
              </li>
              <li>
                <h4>RPC</h4>
                <p>
                  Description : Appel de procédure à distance pour exécuter des
                  procédures sur un autre espace d'adressage.
                </p>
                <p>Outil : rpcinfo</p>
                <p>Commande : rpcinfo -p &lt;Target_IP_Address&gt;</p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <Footer />
    </section>
  );
};

export default Toolbox;
