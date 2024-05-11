import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit32.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit32 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 32 to 33</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit31">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link
              to="/overthewire/bandit/bandit33"
              style={{
                pointerEvents: "none",
                cursor: "not-allowed",
                opacity: "0.3",
              }}
            >
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit33.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, on tombe sur un shell personnalisé qui nous bloque les
            commandes et transforme ce que l'on écrit en majuscule. <br />
            Pour récupérer le shell d'origine, on peut taper la commande{" "}
            <strong>"$0"</strong> et récupérer le flag à l'endroit habituel
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

export default Bandit32;
