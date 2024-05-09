import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit21.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit21 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 21 to 22</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit20">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit22">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit22.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions trouver le programme qui se joue de
            manière régulière et voir quelle commande est en cours d'exécution.{" "}
            <br />
            <strong>cron</strong> est un planificateur de tâches sur les
            systèmes Unix et Unix-like. Il permet d'exécuter des commandes à des
            moments spécifiés dans un fichier de configuration appelé crontab.{" "}
            <br />
            <strong>crontab</strong> est utilisée pour créer, modifier ou
            afficher la table de planification des tâches (crontab) des
            utilisateurs. Chaque utilisateur peut avoir sa propre crontab.
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            Donc nous avons deux scripts bandit22 qui est notre prochain niveau.{" "}
            <br />1 qui se joue à chaque démarrage <strong>"@reboot"</strong> et
            l'autre toutes les minutes <strong>"*****"</strong>. <br />
            En lisant le 2e script : <br />
            La deuxième ligne modifie les permissions du fichier. <br />
            La troisième ligne copie le contenu du fichier
            /etc/bandit_pass/bandit22 (notre FLAG) dans le fichier
            /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv. <br />
            Donc lisons ce fichier.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit21;
