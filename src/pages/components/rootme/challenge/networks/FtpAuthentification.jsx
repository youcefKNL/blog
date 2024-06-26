import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/network/Ftp-Authentification/Capture décran 2024-04-25 165504.webp";
import photo2 from "../../../../../assets/rootme/network/Ftp-Authentification/Capture décran 2024-04-25 170235.webp";
import photo3 from "../../../../../assets/rootme/network/Ftp-Authentification/Capture décran 2024-04-25 170323.webp";
import photo4 from "../../../../../assets/rootme/network/Ftp-Authentification/Capture décran 2024-04-25 171613.webp";
import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const EthernetFrame = () => {
  return (
    <div className="ftpAuthentification blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>Authentification FTP</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Network/FTP-authentication"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous tombons sur ce fichier à télécharger :
            <img src={photo1} alt="Capture d'écran du challenge" />
            Un fichier .pcap est un enregistrement de données de trafic réseau,
            souvent créé par des outils comme Wireshark, pour l'analyse et le
            dépannage réseau. Nous l'ouvrons donc avec Wireshark.
            <img src={photo2} alt="Capture d'écran" />
            Lors de l'analyse des paquets réseau qui identifie et affiche les
            différents types de trafic, cette ligne de capture Wireshark montre
            une requête FTP où un utilisateur essaie de se connecter au serveur
            FTP en utilisant l'identifiant "********" avec la commande "USER".
            Mot de passe transmis en clair.
            <img src={photo3} alt="Capture d'écran" />
            Une fois le Flag décodé, nous l'entrons pour voir s'il correspond au
            Flag attendu.
            <img
              src={photo4}
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
