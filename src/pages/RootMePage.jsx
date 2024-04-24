import React from "react";
import { FaHome } from "react-icons/fa";

import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import { LuAppWindow } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import Background from "./components/Background";
// import { Accordion, Placeholder } from "rsuite";

const RootMePage = () => {
  return (
    <div className="rootmePresentation">
      <HeaderChallenge />
      <Background />
      <div className="blogContainer">
        <LayoutArticleBlog classname="rootmeBackground">
          <h1>Root-Me Challenges</h1>
          <p>
            Bienvenue dans l'univers des challenges Root-Me. Découvrez une
            variété de défis captivants pour tester et améliorer vos compétences
            en sécurité informatique.
          </p>
          {/* Liste des challenges */}
          <h2>Liste des Challenges</h2>
          <ul>
            <li>
              <FaHome /> Challenge
              <ul>
                <li>
                  <LuAppWindow /> App - Script
                </li>
                <li>
                  <TbShieldSearch /> Stéganographie
                  <ul>
                    <li>EXIF - Metadata</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                {/* Ajoutez d'autres niveaux de challenges si nécessaire */}
              </ul>
            </li>
            {/* Ajoutez des éléments similaires pour d'autres types de challenges si nécessaire */}
          </ul>
        </LayoutArticleBlog>

        <Lexical />
      </div>
    </div>
  );
};

export default RootMePage;
