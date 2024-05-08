import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit10.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit10 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 10 to 11</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit11.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce challenge, nous devons trouver le "flag" dans un fichier
            texte encodé en Base64. <br />
            <strong>Base64:</strong> Codage qui représente les données binaire
            sous forme de texte ASCII.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            La commande "base64 -d" permet de décodé la data en input
            "data.txt".
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit10;
