import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit23.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit23 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 23 to 24</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit22">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit24">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit24.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, nous devions trouver le programme qui s'exécute de
            manière régulière et analyser ce qu'il fait. <br />
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
            Après analyse, le script <strong>cronjob_bandit24</strong> exécute
            essentiellement tous les scripts trouvés dans le répertoire{" "}
            <strong>"/var/spool/bandit24/foo"</strong> appartenant à{" "}
            <strong>bandit23</strong>. <br />
            Nous devons écrire un script qui lit le flag et l'enregistre à un
            endroit où nous pouvons le consulter et y avoir accès, comme "
            <strong>/tmp/</strong>".
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit23;
