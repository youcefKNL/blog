import React from "react";
import { FaUserSecret } from "react-icons/fa";

import Lexical from "../../../Lexical";
import LayoutArticleBlog from "../../../LayoutArticleBlog";
import HeaderChallenge from "../../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/1.png";
import photo2 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/2.png";
import photo3 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/3.png";
import photo4 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/4.png";
import photo5 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/5.png";
import photo6 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/6.png";
import photo7 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/7.png";
import photo8 from "../../../../../assets/rootme/Web-Serveur/HTTP-Cookies/8.png";

import ParticlesContainer2 from "../../../background Effect/Particles2";

import Footer from "../../../Footer";

const HttpCookies = () => {
  return (
    <div className="httpcookies blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog className="rootmeBackground">
          <h1>HTTP - Cookies</h1>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://www.root-me.org/fr/Challenges/Web-Serveur/HTTP-Cookies"
                target="_blank"
              >
                Root-ME <FaUserSecret />
              </Link>
            </span>
            <br />
            Au début du challenge, nous constatons que nous devons entrer un
            email et en cliquant sur le lien "saved email addresses", nous
            devons être admin :
            <img
              src={photo1}
              alt="Capture d'écran du challenge JWT Intro Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            En inspectant la console dans l'onglet "Application" pour voir les
            cookies, nous apercevons qu'il y a 1 cookie de stocké.
            <img
              src={photo2}
              alt="Capture d'écran du challenge JWT Intro Root ME"
              style={{ maxWidth: "450px", important: "true" }}
            />
            Celui-ci a pour clé "ch7" et valeur "visiteur". <br />
            Modifions la valeur directement depuis le navigateur et testons.
            <img
              src={photo3}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />{" "}
            <img
              src={photo4}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Bingo, nous avons notre Flag !<br />
            Nous pouvons également passer par Burp Suite.
            <img
              src={photo5}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            <img
              src={photo6}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            <img
              src={photo7}
              alt="Capture d'écran du challenge JWT Intro Root ME"
            />
            Bingo, nous avons notre Flag !
            <img
              src={photo8}
              alt="Capture d'écran du challenge JWT Intro Root ME"
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

export default HttpCookies;
