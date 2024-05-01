import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-Source/1.png";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-Source/2.png";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-Source/3.png";
import photo4 from "../../../../../assets/rootme/Web-Client/Js-Source/4.png";
import photo5 from "../../../../../assets/rootme/Web-Client/Js-Source/5.png";
import photo6 from "../../../../../assets/rootme/Web-Client/Js-Source/6.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsSource = () => {
  return (
    <div className="shiftCipher blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Source</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Client/Javascript-Source"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un mot
            de passe dans la pop-up.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Javascript source Root ME"
            />
            <img
              src={photo2}
              alt="Capture d'écran du challenge Javascript source Root ME"
            />
            En inspectant la console, nous trouvons un code "login()" qui est
            chargé au lancement de la page "onLoad()" :
            <img
              src={photo3}
              alt="Capture d'écran du challenge Javascript source Root ME"
            />
            En inspectant le script, nous apercevons que le code compare
            l'entrée de l'input avec une variable qui est écrite en clair et non
            codée :
            <img
              src={photo4}
              alt="Capture d'écran du challenge Javascript source Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo5}
              alt="Capture d'écran du challenge Javascript source Root ME"
            />{" "}
            <img
              src={photo6}
              alt="Capture d'écran du challenge Javascript source Root ME"
            />{" "}
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default JsSource;
