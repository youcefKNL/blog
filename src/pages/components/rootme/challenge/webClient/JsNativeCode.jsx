import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-NativeCode/2.webp";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-NativeCode/3.webp";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-NativeCode/4.webp";
import photo4 from "../../../../../assets/rootme/Web-Client/Js-NativeCode/5.webp";
import photo5 from "../../../../../assets/rootme/Web-Client/Js-NativeCode/6.webp";
import photo6 from "../../../../../assets/rootme/Web-Client/Js-NativeCode/7.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsNativeCode = () => {
  return (
    <div className="jsNativeCode blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Native Code</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/en/Challenges/Web-Client/Javascript-Native-code"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un mot
            de passe :
            <img
              src={photo1}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge d'authentification Javascript de Root ME"
            />
            En inspectant l'élément, nous constatons qu'il y a un script dans le
            HTML qui est illisible, "Obfusqué" :
            <img
              src={photo2}
              alt="Capture d'écran du challenge d'authentification Javascript de Root ME"
            />
            Nous copions/colons le code dans la console.
            <br />
            Et nous remplaçons les dernières "()" qui permettent de lancer le
            script par la méthode JavaScript `.toString()`, qui va nous
            permettre de convertir un objet en chaîne de caractères lisible par
            l'homme.
            <br /> Pour info, cette méthode n'a fonctionné que dans la console
            de mon navigateur.
            <img
              src={photo3}
              alt="Capture d'écran du challenge d'authentification Javascript de Root ME"
            />
            <img
              src={photo4}
              alt="Capture d'écran du challenge d'authentification Javascript de Root ME"
            />
            <img
              src={photo5}
              alt="Capture d'écran du challenge d'authentification Javascript de Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo6}
              alt="Capture d'écran du challenge d'authentification Javascript de Root ME"
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

export default JsNativeCode;
