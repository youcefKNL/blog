import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 1/1.png";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 1/2.png";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 1/3.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsObfuscation = () => {
  return (
    <div className="shiftCipher blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Obfuscation</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-1"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un mot
            de passe dans la pop-up. <br />
            En inspectant l'élément, nous constatons qu'au clic il se joue une
            fonction :
            <img
              src={photo1}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            Nous allons inspecter de plus près cette fonction dans le code
            JavaScript. <br /> Dans la console du développeur, onglet source,
            nous trouvons le fichier ch4.html.
            <br />
            Nous constatons que la fonction compare avec un mot de passe qui est
            écrit en clair mais encodé. <br />
            Encodé en quoi ? URL encoded avec les "%" <br />
            Nous devons donc décoder ce code.
            <img
              src={photo2}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo3}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default JsObfuscation;
