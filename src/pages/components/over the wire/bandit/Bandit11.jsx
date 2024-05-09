import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit11.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit11 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 11 to 12</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit10">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit12">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit12.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce challenge, nous devons trouver le "flag" dans un fichier
            texte chiffré en César. <br />
            <strong>Cfiffrement César:</strong> chiffrement qui décale les
            lettres de x positions.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            La commande <strong>"tr"</strong> permet deffectuer une rotation.{" "}
            <br />
            <strong>'A-Za-z' 'N-ZA-Mn-za-m'</strong> : permet d'effectuer une
            rotation de 13 positions. <br />
            <strong>'A-Za-z' :</strong>
            Cela spécifie l'ensemble d'entrée des lettres majuscules et
            minuscules de l'alphabet. <br />
            <strong>'N-ZA-Mn-za-m'</strong>: Cela spécifie l'ensemble de sortie
            correspondant à l'ensemble d'entrée, mais avec une rotation de 13
            positions vers l'avant. Les lettres de A à M sont remplacées par les
            lettres de N à Z, et les lettres de N à Z sont remplacées par les
            lettres de A à M.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit11;
