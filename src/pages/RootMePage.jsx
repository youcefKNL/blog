import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import Header from "./components/Header";
import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";

const RootMePage = () => {
  // Gestion de l'état pour les sous-listes déroulantes
  const [isOpen, setIsOpen] = useState({
    Challenge: false,
    CTF: false,
  });

  // Fonction pour basculer l'état des sous-listes déroulantes
  const toggleSubMenu = (menuName) => {
    setIsOpen({
      ...isOpen,
      [menuName]: !isOpen[menuName],
    });
  };

  return (
    <div>
      <HeaderChallenge />
      <div className="challengeContainer">
        <div className="mainContent">
          <LayoutArticleBlog>
            <h1>Root-Me Challenges</h1>
            <p>
              Bienvenue dans l'univers des challenges Root-Me. Découvrez une
              variété de défis captivants pour tester et améliorer vos
              compétences en sécurité informatique.
            </p>
            {/* Liste des challenges */}
            <h2>Liste des Challenges</h2>
            <ul>
              <li
                onClick={() => toggleSubMenu("Challenge")}
                className="parentNode"
              >
                <FaHome /> Challenge
                {isOpen["Challenge"] && (
                  <ul>
                    <li>Niveau 1</li>
                    <li>Niveau 2</li>
                    {/* Ajoutez d'autres niveaux de challenges si nécessaire */}
                  </ul>
                )}
              </li>
              {/* Ajoutez des éléments similaires pour d'autres types de challenges si nécessaire */}
            </ul>
          </LayoutArticleBlog>
        </div>
        {/* Contenu latéral pour la table des matières */}
        <Lexical />
      </div>
    </div>
  );
};

export default RootMePage;
