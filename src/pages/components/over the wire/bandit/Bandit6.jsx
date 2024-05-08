import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit6.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit6 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 6 to 7</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit7.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce challenge, nous devons trouver le "flag" dans le fichier sur
            tous le serveur qui :
            <ul>
              <li>Appartient à l'utilisateur bandit7</li>
              <li>Appartient au groupe bandit6</li>
              <li>taille de 33 bytes (=33 octets)</li>
            </ul>
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            Dans cette commande, on filtre tous le serveur avec nos critères et
            on ignore les erreurs avec {"2>/dev/null"}
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit6;
