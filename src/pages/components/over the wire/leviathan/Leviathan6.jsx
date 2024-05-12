import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/leviathan/leviathan6.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Leviathan6 = () => {
  return (
    <div className="leviathan blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Léviathan : Level 6 to 7</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/leviathan/leviathan5">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link
              to="/overthewire/leviathan/leviathan7"
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
                to="https://overthewire.org/wargames/leviathan/"
                target="_blank"
              >
                Over The Wire Wargame - Léviathan - <FaCat />
              </Link>
            </span>
            <br />
            Pour les challenges Léviathan, il n'y a pas de consignes pour chaque
            niveau. <br />
            Donc, c'est à nous d'essayer de comprendre où pourrait se trouver le
            FLAG. <br />
            Ici, on a un fichier <strong>SUID</strong> qui s'exécute en tant que
            leviathan7 par leviathan6.
            <br />
            En lançant l'exécutable, il attend un digicode à 4 chiffres en
            paramètre. <br />
            Pour analyser cet exécutable, on peut utiliser la commande{" "}
            <strong>ltrace</strong> qui permet de déboguer en traçant les appels
            aux fonctions. Elle intercepte et affiche les appels aux fonctions.{" "}
            <br />
            Là, le code PIN n'est pas écrit en clair dans le programme. Une
            simple boucle <strong>for</strong> qui teste toutes les combinaisons
            possibles de 0000 à 9999 va être réitérée en paramètre jusqu'à
            obtention du shell de leviathan7, ce qui suffit en une seule ligne
            de commande bash.
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

export default Leviathan6;
