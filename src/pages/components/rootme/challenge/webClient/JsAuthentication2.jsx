import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-Authentication 2/1.png";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-Authentication 2/2.png";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-Authentication 2/3.png";
import photo4 from "../../../../../assets/rootme/Web-Client/Js-Authentication 2/4.png";
import photo5 from "../../../../../assets/rootme/Web-Client/Js-Authentication 2/5.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsAuthentication2 = () => {
  return (
    <div className="shiftCipher blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Authentication 2 </h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Client/Javascript-Authentication-2"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un mot
            de passe dans la pop-up. <br />
            En inspectant l'élément, nous constatons qu'au clic il se joue une
            fonction "connexion()" :
            <img
              src={photo1}
              alt="Capture d'écran du challenge Javascript authentication Root ME"
            />
            <img
              src={photo2}
              alt="Capture d'écran du challenge Javascript authentication Root ME"
            />
            Nous allons inspecter de plus près cette fonction dans le code
            JavaScript. <br /> Dans la console du développeur, onglet source,
            nous trouvons le fichier login.js :
            <img
              src={photo3}
              alt="Capture d'écran du challenge Javascript authentication Root ME"
            />
            Nous constatons que la fonction compare des données qui sont dans
            l'index 0 et 1 dans le tableau "TheLists" <br /> Nous avons donc une
            usernanme et un password en clair.
            <img
              src={photo4}
              alt="Capture d'écran du challenge Javascript authentication Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo5}
              alt="Capture d'écran du challenge Javascript authentication Root ME"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default JsAuthentication2;
