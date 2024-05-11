import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit28.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit28 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 28 to 29</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit27">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit29">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit29.html"
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
            Ici le password a était dissimulé. Il existe plusieur commande git.
            Voici les principales: <br />
            <ul>
              <li>
                <strong>git init</strong> : Initialise un nouveau dépôt Git dans
                le répertoire local.
              </li>
              <li>
                <strong>git clone</strong> : Clone un dépôt Git distant dans le
                répertoire local.
              </li>
              <li>
                <strong>git add</strong> : Ajoute des modifications spécifiques
                à l'index pour être prêtes à être validées dans le prochain
                commit.
              </li>
              <li>
                <strong>git commit</strong> : Enregistre les modifications
                indexées dans un nouveau commit avec un message explicatif.
              </li>
              <li>
                <strong>git status</strong> : Affiche l'état actuel du
                répertoire de travail et de l'index.
              </li>
              <li>
                <strong>git log</strong> : Affiche l'historique des commits.
              </li>
              <li>
                <strong>git pull</strong> : Récupère les modifications depuis un
                dépôt distant et fusionne les changements dans la branche locale
                actuelle.
              </li>
              <li>
                <strong>git push</strong> : Envoie les commits locaux vers un
                dépôt distant.
              </li>
              <li>
                <strong>git branch</strong> : Affiche la liste des branches
                locales.
              </li>
              <li>
                <strong>git checkout</strong> : Déplace l'HEAD vers une branche
                spécifiée ou vers un commit spécifique.
              </li>
              <li>
                <strong>git merge</strong> : Fusionne une branche spécifiée dans
                la branche active.
              </li>
              <li>
                <strong>git remote</strong> : Gère les dépôts distants.
              </li>
              <li>
                <strong>git fetch</strong> : Récupère toutes les branches et
                leurs commits depuis le dépôt distant sans les fusionner dans la
                branche locale.
              </li>
              <li>
                <strong>git reset</strong> : Réinitialise l'index et le
                répertoire de travail à un état spécifique.
              </li>
              <li>
                <strong>git tag</strong> : Crée, liste ou supprime des tags
                annotés.
              </li>
            </ul>
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            En affichant l'historique des commits. On s'appercoit qu'un commit a
            pour description "add missing data" <br />
            On récupere la data de ce commit.Et on verifie le seul fichier
            existant pour voir les modifications.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit28;
