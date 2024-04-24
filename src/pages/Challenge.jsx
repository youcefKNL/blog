import React from "react";
import HeaderChallenge from "./components/HeaderChallenge";
import { FaHome, FaUsers, FaLaptop, FaPalette, FaCube } from "react-icons/fa";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import Background from "./components/Background";

const Challenge = () => {
  return (
    <section className="challengePresentation">
      <HeaderChallenge />
      <Background />
      <div className="blogContainer">
        <LayoutArticleBlog classname="challenge">
          <h1>
            Exploration des Défis: <br /> Découvrez les Excitants Challenges de
            Hacking
          </h1>
          <p>
            Bienvenue dans l'antre de l'exploration, où les défis du hacking
            prennent vie et où l'aventure numérique n'attend que vous pour être
            explorée! Plongez dans notre collection variée de challenges et CTFs
            (Capture The Flags) accomplis avec brio, et découvrez un monde où
            l'imagination rencontre la technique, où chaque obstacle franchi est
            une victoire à célébrer. Dans cette page, nous vous invitons à
            parcourir notre voyage, à travers les différents terrains des
            plateformes renommées telles que Root-Me, VulnHub, Try Hack Me, Hack
            The Box et PortSwigger. Chaque plateforme offre son propre défi
            unique, son énigme à résoudre, et sa récompense à gagner. Que vous
            soyez un novice curieux, un amateur avide d'apprentissage ou un
            expert chevronné à la recherche de nouveaux défis, vous trouverez
            ici une expérience adaptée à votre niveau et à votre passion pour le
            hacking éthique. Nos challenges sont conçus pour vous défier, vous
            inspirer et vous divertir, tout en renforçant vos compétences
            techniques et votre créativité. Rejoignez-nous dans cette aventure
            virtuelle, où chaque ligne de code, chaque exploit découvert, et
            chaque CTF remporté, est une étape de plus dans notre quête commune
            pour la connaissance et l'exploration. Préparez-vous à repousser vos
            limites, à surmonter les obstacles, et à célébrer ensemble nos
            succès dans le monde fascinant du hacking éthique. Que l'exploration
            commence!
          </p>

          <h2>
            Les différentes plateformes d'apprentissage de l'éthical hacking
          </h2>
          <ul>
            <li
              onClick={() => {
                window.location.href = "/rootme";
              }}
            >
              <FaHome /> root-me
            </li>
            <li>
              <FaUsers /> try hack me
            </li>
            <li>
              <FaLaptop /> hack the box
            </li>
            <li>
              <FaPalette /> port swigger
            </li>
            <li>
              <FaCube /> VulnHub
            </li>
          </ul>
        </LayoutArticleBlog>

        <Lexical />
      </div>
    </section>
  );
};

export default Challenge;
