import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 2/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 2/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 2/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 2/4.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsObfuscation2 = () => {
  return (
    <div className="jsObfuscation2 blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Obfuscation 2</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Client/Javascript-Obfuscation-2"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un mot
            de passe dans la pop-up. <br />
            En inspectant la console, nous trouvons un code qui compare un mot
            de passe écrit en clair mais encodé :
            <img
              src={photo1}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            Ce code est encodé avec une méthode de JavaScript "escape" que nous
            allons décoder avec la méthode "unescape" et qui va nous donner une
            suite de nombres Unicode qui vont être associés à des caractères
            avec la méthode JavaScript "String.fromCharCode()".
            <img
              src={photo4}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            <img
              src={photo2}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo3}
              style={{ maxWidth: "450px", important: "true" }}
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

export default JsObfuscation2;
