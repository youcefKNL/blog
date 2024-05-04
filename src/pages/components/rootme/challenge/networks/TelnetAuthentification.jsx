import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 172629.png";
import photo2 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 175939-LOGIN.png";
import photo3 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 180357.png";
import photo4 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 180042-F.png";
import photo5 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 180054-A.png";
import photo6 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 180111-K.png";
import photo7 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 180125-E.png";
import photo8 from "../../../../../assets/rootme/network/Telnet-Authentification/Capture d'écran 2024-04-25 180224-PSWD.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const EthernetFrame = () => {
  return (
    <div className="telnetAuthentification blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>Authentification TELNET</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Network/TELNET-authentication"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, on tombe sur ce fichier à télécharger :
            <img src={photo1} alt="Capture d'écran du challenge" />
            Un fichier .pcap est un enregistrement de données de trafic réseau,
            souvent créé par des outils comme Wireshark, pour l'analyse et le
            dépannage réseau. On l'ouvre donc avec Wireshark.
            <img src={photo2} alt="Capture d'écran" />
            *Telnet est un protocole de communication utilisé pour accéder à
            distance à un serveur. <br /> Lorsque Telnet est utilisé, les
            données, y compris les identifiants et les mots de passe, sont
            transmises en texte clair, ce qui les rend vulnérables à
            l'interception et à l'écoute. <br /> On filtre avec Wireshark les
            paquets Telnet. <br /> Après cette ligne, une demande de login est
            initiée, et l'utilisateur commence à taper son identifiant. Chaque
            lettre est récupérée une par une, comme illustré dans les paquets
            suivants.
            <img src={photo4} alt="Capture d'écran" />
            <img src={photo5} alt="Capture d'écran" />
            <img src={photo6} alt="Capture d'écran" />
            <img src={photo7} alt="Capture d'écran" />
            Le Login est donc <strong>"fake"</strong> .<br />
            À cette ligne, le password est demandé.
            <img src={photo8} alt="Capture d'écran" />
            Faites de même pour récupérer le password. <br /> Une fois le
            password récupéré, on l'entre pour voir s'il correspond au Flag
            attendu.
            <img
              src={photo3}
              alt="Capture d'écran"
              style={{ maxWidth: "450px", important: "true" }}
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default EthernetFrame;
