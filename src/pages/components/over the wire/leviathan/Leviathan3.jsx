import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/leviathan/leviathan3.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Leviathan3 = () => {
  return (
    <div className="leviathan blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Léviathan : Level 3 to 4</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/leviathan/leviathan2">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/leviathan/leviathan4">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/leviathan/"
                target="_blank"
              >
                Over The Wire Wargame - Léviathan - <FaCat />
              </Link>
            </span>
            <br />
            Pour les challenges Léviathan, il n'y a pas de consignes pour chaque
            niveau. <br />
            Donc, c'est à nous d'essayer de comprendre où pourrait être le FLAG.{" "}
            <br />
            Ici, on a un fichier <strong>SUID</strong> qui s'exécute en tant que
            leviathan4 par leviathan3. <br />
            En lançant l'exécutable, il attend password en retour. <br />
            Pour analyser cet exécutable, on peut utiliser la commande{" "}
            <strong>ltrace</strong> qui permet de déboguer en traçant les appels
            aux fonctions. Elle intercepte et affiche les appels aux fonctions.{" "}
            <br />
            Ici, le programme appelle la fonction <strong>strcmp</strong> pour
            comparer le mot de passe avec 2 mots, ensuite il demande d'entrer le
            password et le compare avec la fonction <strong>strcmp</strong> qui
            prend en comparaison un nouveau "string" qui est le password écrit
            en dur. <br />
            Une fois le password entré, on a accès au shell en tant que
            leviathan4 et on peut récupérer le flag à l'endroit habituel.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Leviathan3;
