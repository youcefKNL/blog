import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <main className="homeContainer">
      <div className="welcome">
        <h1>welcome</h1>

        <div className="link">
          <Link to="https://portfolio.cabinetlegalis.fr" target="_blank">
            <div className="button">portfolio</div>
          </Link>
          <Link to="https://github.com/lyy289065406" target="_blank">
            <div className="button">github</div>
          </Link>
        </div>
        <div className="socialLink">
          <a
            href="https://github.com/lyy289065406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://twitter.com/YourTwitterHandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
      <div className="articles">
        <h2>ici les futurs</h2>
      </div>
    </main>
  );
};

export default Home;
