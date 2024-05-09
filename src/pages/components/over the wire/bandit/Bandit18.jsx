import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit18.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit18 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 18 to 19</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit17">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit19">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit19.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions nous connecter en SSH, mais le fichier
            .bashrc (le Shell par défaut) avait été modifié pour nous
            déconnecter automatiquement.
            <br />
            Donc, il fallait forcer SSH à exécuter le shell '/bin/sh' plutôt que
            le shell par défaut.
            <br />
            Ainsi, le fichier modifié n'était pas chargé et donc pas de
            déconnexion automatique.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            Avec la commande <strong>"-t "/bin/sh""</strong>, nous avons pu
            contourner le problème du fichier .bashrc.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit18;
