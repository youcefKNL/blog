import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/network/ethernet-Frame/Capture d’écran du 2024-04-24 20-53-24.png";
import photo2 from "../../../../../assets/rootme/network/ethernet-Frame/Capture d’écran du 2024-04-24 21-29-20.png";
import photo3 from "../../../../../assets/rootme/network/ethernet-Frame/Capture d’écran du 2024-04-24 21-40-45.png";
import photo4 from "../../../../../assets/rootme/network/ethernet-Frame/Capture d’écran du 2024-04-24 21-42-59.png";
import Background from "../../../Background";
import Avatar from "../../../../../assets/profile-pic.png";

const EthernetFrame = () => {
  return (
    <div className="ethernetFrame">
      <HeaderChallenge />
      <Background />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>Solution ETHERNET - frame</h1>
          <div className="solution">
            Vous trouverez l'énoncez et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Reseau/ETHERNET-trame"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous tombons sur cette page internet :
            <img src={photo1} alt="Capture d'écran du challenge" />
            Cela nous fait penser à une séquence de données brutes codées en
            hexadécimal, peut-être un en-tête de paquet ou un fragment de
            protocole réseau. Pour notre première tentative, nous visitons le
            premier site trouvé sur Google qui convertit des hexadécimaux en
            texte, et voici le résultat obtenu :
            <img src={photo2} alt="Capture d'écran" />
            Nous trouvons une demande HTTP avec un en-tête "Authorization"
            contenant une chaîne encodée en Base64. Pour tenter de la déchiffrer
            rapidement, nous utilisons le premier outil de décodage Base64
            trouvé sur Google.
            <img src={photo3} alt="Capture d'écran" />
            Une fois le Flag décodé, nous l'entrons pour voir s'il correspond au
            Flag attendu.
            <img src={photo4} alt="Capture d'écran" />
            {/* <span className="signed">
              <img src={Avatar} alt="photo Avatar" />

              <cite>
                <em>"</em>
                En pratiquant, nous apprenons, alors à toi de jouer !<em>"</em>
              </cite>
            </span> */}
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
    </div>
  );
};

export default EthernetFrame;
