import React from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import Avatar from "../../assets/profile-pic.png";
import { Link } from "react-router-dom";

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
          <Link to="https://github.com/youcefKNL" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/youcef-knl/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://codepen.io/youcefKNL/pens/public" target="_blank">
            <FaCodepen />
          </Link>
        </div>

        <div className="disclaimer">
          🚨 Disclaimer 📢: <br />
          Ces notes sont personnelles et constituent un espace où je consigne
          mes réflexions et mon apprentissage. Elles ne sont pas destinées à
          être référencées sur Internet, et aucun robot d'indexation n'est
          autorisé à les parcourir pour les inclure dans leur moteur de
          recherche.
        </div>
        <div className="copyrightBlog">© Youcef - Tous droits réservés.</div>
      </div>
    </div>
  );
};

export default LayoutArticleBlog;
