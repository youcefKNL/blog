import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit27.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit27 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 27 to 28</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit26">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit28">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit28.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, il suffisait de cloner le dépôt Git grâce à la
            commande <strong>"git clone"</strong> suivie de l'adresse HTTP du
            dépôt. N'oubliez pas de spécifier le port après "localhost". <br />
            Vous pouvez le faire sur le serveur bandit dans le dossier{" "}
            <strong>/tmp</strong> où nous pouvons écrire.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit27;
