import React from "react";
import { FaCat } from "react-icons/fa";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit4.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit4 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 4 to 5</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit5.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce challenge, au début, nous devons trouver le "flag" dans le
            seul fichier qui peut être lu par un humain.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            Dans cette commande, nous vérifions le type de fichier de chaque
            fichier dans le répertoire, pour éviter de les ouvrir un par un
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit4;
