import React from "react";
import { FaCat } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import Lexical from "../../Lexical";
import LayoutArticleBlog from "../../LayoutArticleBlog";
import HeaderChallenge from "../../HeaderChallenge";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/over-the-wire/bandit/bandit31.png";

import ParticlesContainer2 from "../../background Effect/Particles2";

import Footer from "../../Footer";

const Bandit31 = () => {
  return (
    <div className="bandit blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="overthewireBackground">
          <h1>WarGame Bandit : Level 31 to 32</h1>
          <div className="lvlBtn">
            <Link to="/overthewire/bandit/bandit30">
              <FcPrevious />
            </Link>
            <p>Level</p>
            <Link to="/overthewire/bandit/bandit32">
              <FcNext />
            </Link>
          </div>
          <div className="solution">
            Vous trouverez l'énoncé et le challenge à cette adresse : <br />
            <span>
              <Link
                to="https://overthewire.org/wargames/bandit/bandit32.html"
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
            Ici, le README attend de nous de push un format de texte et un
            contenu spécifique afin d'avoir peut-être le mdp. <br />
            Voici les commandes pour le processus de push :
            <ul>
              <li>
                <strong>git add</strong>: Cette commande permet d'ajouter des
                fichiers spécifiques à la zone de staging (index) de Git. Elle
                prépare les modifications pour être incluses dans le prochain
                commit.
              </li>
              <li>
                <strong>git commit</strong>: Cette commande crée un instantané
                (commit) des modifications présentes dans la zone de staging.
                Elle enregistre les modifications dans l'historique des commits
                du dépôt Git, avec un message décrivant les changements
                effectués.
              </li>
              <li>
                <strong>git push</strong>: Utilisée pour pousser les commits
                locaux vers un dépôt distant spécifié. Elle met à jour les
                références de branche sur le dépôt distant avec les commits de
                votre branche locale. Cela permet de partager vos modifications
                avec d'autres collaborateurs ou de sauvegarder votre travail sur
                un dépôt distant.
              </li>
            </ul>
            <img
              src={photo1}
              alt="Capture d'écran du challenge Wargame Bandit"
            />
            On crée le fichier et le contenu voulus. Sauf qu'aux commits, le
            fichier <strong>.txt</strong> n'est pas pris en compte. Pourquoi ?{" "}
            <br />
            On découvre dans le <strong>.gitignore</strong> que les fichiers
            .txt devaient être ignorés au moment du <strong>commit</strong> .{" "}
            <br />
            Donc, on efface ce filtre et le processus du push fonctionne
            correctement.
          </div>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </div>
  );
};

export default Bandit31;
