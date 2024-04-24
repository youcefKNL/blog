import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from "../../assets/profile-pic.png";

const LayoutArticleBlog = ({ classname: classProp, children }) => {
  return (
    <div className="articleContainer">
      <div className={`banner ${classProp}`}></div>
      <>{children}</>
      <span className="signed">
        <img src={Avatar} alt="photo Avatar" />

        <cite>
          <em>"</em>
          En pratiquant, nous apprenons, alors à toi de jouer !<em>"</em>
        </cite>
      </span>
      <div className="finalArticles">
        <div className="socialLink">
          <a href="Lien vers votre profil LinkedIn">
            <FaLinkedin />
          </a>
          <a href="Lien vers votre profil GitHub">
            <FaGithub />
          </a>
        </div>

        <div className="disclaimer">
          Disclaimer: <br />
          Merci d'avoir parcouru cet article. N'hésitez pas à me contacter sur
          LinkedIn ou GitHub pour discuter davantage. Je suis conscient que des
          erreurs peuvent s'être glissées dans ce contenu, étant donné que je
          suis encore en phase d'apprentissage. Il existe différentes manières
          d'atteindre un objectif, et les informations peuvent être sujettes à
          changement. Merci de votre compréhension et de votre intérêt pour ce
          contenu.
        </div>
        <div className="copyright">© Youcef - Tous droits réservés.</div>
      </div>
    </div>
  );
};

export default LayoutArticleBlog;
