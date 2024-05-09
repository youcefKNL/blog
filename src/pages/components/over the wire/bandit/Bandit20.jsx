import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit20.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit20 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 20 to 21</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit19">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit21">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit21.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions utiliser le{" "}
            <strong>binaire setuid</strong> qui établi une connexion au port
            spécifié en argument . Il lit ce qu'il se passe sur ce port et la
            compare aux mot de passe du flag bandit20 et nous donne le nouveau
            Flag si ok.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            Dans un 1er temps on met en écoute sur le port voulût le flag de
            bandit20 avec <strong>"netcat /nc"</strong>. <br />
            <strong>"&"</strong>: permet de faire tourner le process en
            arrière-plan. <br />
            <strong>"jobs"</strong>: permet de vérifier les process en cours.{" "}
            <br />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit20;
