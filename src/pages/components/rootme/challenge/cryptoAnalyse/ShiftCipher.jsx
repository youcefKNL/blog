import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Crypto Analayse/ShiftCipher/1.png";
import photo2 from "../../../../../assets/rootme/Crypto Analayse/ShiftCipher/2.png";
import photo3 from "../../../../../assets/rootme/Crypto Analayse/ShiftCipher/3.png";
import photo4 from "../../../../../assets/rootme/Crypto Analayse/ShiftCipher/4.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const shiftCipher = () => {
  return (
    <div className="shiftCipher blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>SHIFT Cipher</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Cryptanalyse/Chiffrement-par-decalage"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous avons comme indices SHIFT Cipher dans le
            titre ainsi que le nombre de points :
            <img
              src={photo1}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Shift cipher Root ME"
            />
            Pour décoder, il suffit de décaler (CIPHER) chaque lettre du message
            chiffré de 10 (indice) positions dans l'alphabet pour retrouver le
            message original. Pour cela nous créeons un script Javascript pour
            ma part que voici avec les explications en commentaires:
            <img src={photo2} alt="Capture d'écran Shift cipher Root ME" />
            On peut tester ce code dans cette environnement Javascript en ligne
            : &nbsp;
            <Link to="https://playcode.io/empty_javascript" target="_blank">
              www.Playcode.io
            </Link>{" "}
            <br />
            Et voici le résultat :
            <img src={photo3} alt="Capture d'écran Shift cipher Root ME" />
            Bingo, on récupere le résultat.
            <img
              src={photo4}
              alt="Capture d'écran Shift cipher Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default shiftCipher;
