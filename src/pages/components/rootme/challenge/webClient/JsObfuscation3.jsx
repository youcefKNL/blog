import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 3/1.webp";
import photo2 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 3/2.webp";
import photo3 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 3/3.webp";
import photo4 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 3/4.webp";
import photo5 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 3/5.webp";
import photo6 from "../../../../../assets/rootme/Web-Client/Js-Obfuscation 3/6.webp";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const JsObfuscation3 = () => {
  return (
    <div className="jsObfuscation3 blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>Javascript Obfuscation 3</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-3"
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
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            <img
              src={photo2}
              style={{ maxWidth: "450px", important: "true" }}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            En inspectant la console, nous trouvons un script. Ce script est un
            exemple d'obfuscation, une technique utilisée pour rendre le code
            source difficile à comprendre ou à lire. Dans ce cas, le code est
            obfusqué en utilisant des noms de variables non explicites, des
            indentations incohérentes et des boucles et des conditions inutiles
            pour masquer le processus de déchiffrement.
            <img
              src={photo3}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            On copie-colle la valeur de "déchiffre" dans la console du
            navigateur. <br />
            Le navigateur interprète automatiquement les séquences '\x' comme
            des caractères Unicode convertis en valeurs hexadécimales. Ces
            valeurs hexadécimales sont ensuite interprétées comme des caractères
            ASCII dans le contexte du déchiffrement effectué par le script.
            <img
              src={photo4}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />
            Le script retourne ainsi une chaîne de caractères ASCII, que nous
            déchiffrons grâce à la méthode JavaScript "String.fromCharCode()".
            <img
              src={photo5}
              alt="Capture d'écran du challenge Javascript obfuscation Root ME"
            />{" "}
            Bingo, nous avons notre Flag !
            <img
              src={photo6}
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

export default JsObfuscation3;
