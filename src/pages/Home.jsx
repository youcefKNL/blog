import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Background from "./components/Background";
import ParticlesContainer from "./components/Particles";

const Home = () => {
  const latestArticles = [
    {
      title: "rootmeBackground",
      description: "Description de l'article 1",
      link: "/article-1",
    },
    {
      title: "rootmeBackground",
      description: "Description de l'article 2",
      link: "/article-2",
    },
    // Ajoutez d'autres articles au besoin
  ];

  return (
    <main className="homeContainer">
      <div className="welcome">
        <ParticlesContainer />
        <h1>welcome</h1>

        <div className="link">
          <Link to="https://portfolio.cabinetlegalis.fr" target="_blank">
            <div className="button">portfolio</div>
          </Link>
          <Link to="https://github.com/youcefKNL" target="_blank">
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
      <div className="homeArticles">
        <Background />
        <h2>Articles récents</h2>
        <div className="homeArticlesContainer">
          {latestArticles.map((article, index) => (
            <div key={index} className="homeCardArticle">
              <div className={`homeBannerArticle ${article.title}`}></div>
              <div className="homeDescriptionArticle">
                <p>{article.description}</p>
                <Link to={article.link}>Lire la suite</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
