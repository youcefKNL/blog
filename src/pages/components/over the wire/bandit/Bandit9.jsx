import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit9.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit9 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 9 to 10</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit10.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce challenge, nous devons trouver le "flag" dans un fichier
            texte qui est volontairement innondé de texte.Le flag est une string
            uniquement lisible par l'homme précédé de "="
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            La commande "string" extrait la data lisible par l'homme. <br />
            Et on filtre avec "grep" en spécifiant des ligne qui commence{" "}
            <strong>("^")</strong>
            par 1 ou plusieurs <strong> ("*")</strong> "=" au début de la ligne
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit9;
