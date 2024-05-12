import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/leviathan/leviathan4.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Leviathan4 = () => {
  return (
    <div className="leviathan blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Léviathan : Level 4 to 5</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/leviathan/leviathan3">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/leviathan/leviathan5">
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
            Donc, c'est à nous d'essayer de comprendre où pourrait être le FLAG.{" "}
            <br />
            Ici, on a un fichier <strong>SUID</strong> qui s'exécute en tant que
            leviathan5 par leviathan4 dans un dossier caché ".trash".
            <br />
            En lançant l'exécutable, il renvoie une série de chiffres binaires
            en retour. <br />
            Pour analyser cet exécutable, on peut utiliser la commande{" "}
            <strong>ltrace</strong> qui permet de déboguer en traçant les appels
            aux fonctions. Elle intercepte et affiche les appels aux fonctions.{" "}
            <br />
            Ici, le programme ouvre le fichier où le flag de leviathan5 se
            trouve <strong>fopen("/etc/leviathan_pass/leviathan5", "r")</strong>
            , sauf qu'il nous ressort des binaires. <br />
            On traduit les binaires en texte ASCII et nous avons notre flag!
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

export default Leviathan4;
