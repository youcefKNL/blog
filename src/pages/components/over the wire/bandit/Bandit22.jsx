import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit22.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit22 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 22 to 23</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit21">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit23">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit23.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions trouver le programme qui s'exécute de
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
            Donc nous avons deux scripts bandit23 qui sont notre prochain
            niveau. <br />1 qui se joue à chaque démarrage{" "}
            <strong>"@reboot"</strong> et l'autre toutes les minutes{" "}
            <strong>"*****"</strong>. <br />
            En interprétant le 2e script : <br />
            Il récupère le nom de l'utilisateur avec <strong>"whoami"</strong>.
            Il écrit le mot de passe de bandit23 dans un fichier
            /tmp/*variable*. <br />
            Cette variable peut être obtenue en utilisant le chiffrement du
            script pour "mytarget" en remplacant "$myname" par "bandit23", qui
            est la cible. <br />
            Ainsi, nous obtenons notre fichier contenant le mot de passe.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit22;
