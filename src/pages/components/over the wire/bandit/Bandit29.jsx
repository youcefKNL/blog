import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit29.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit29 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 29 to 30</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit28">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit30">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit30.html"
                target="_blank"
              >
                Over The Wire Wargame - Bandit - <FaCat />
              </Link>
            </span>
            <br />
            Pour ce défi, il suffisait de cloner le dépôt Git grâce à la
            commande <strong>"git clone"</strong> suivie de l'adresse HTTP du
            dépôt. N'oubliez pas de spécifier le port après "localhost". <br />
            Vous pouvez le faire sur le serveur bandit dans le dossier{" "}
            <strong>/tmp</strong> où nous pouvons écrire.
            <br />
            Ici, le mot de passe a été dissimulé. Voici des commandes Git que
            nous allons utiliser : <br />
            <ul>
              <li>
                <strong>git branch</strong> : Affiche la liste des branches
                locales présentes dans votre dépôt Git.
              </li>
              <li>
                <strong>git branch -r</strong> : Affiche la liste des branches
                distantes, c'est-à-dire les branches qui résident sur le dépôt
                distant.
              </li>
            </ul>
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            En affichant l'historique des commits et en vérifiant celui-ci, nous
            n'avons trouvé aucune information intéressante.
            <br />
            Sur Git, il existe plusieurs branches sur lesquelles une équipe peut
            travailler de manière indépendante avant d'être fusionnées si
            validées par le chef.
            <br />
            En vérifiant les branches distantes avec{" "}
            <strong>git branch -r</strong>, nous découvrons plusieurs branches.{" "}
            <br /> En vérifiant l'une d'elles, une équipe a omis de cacher le
            mot de passe.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit29;
