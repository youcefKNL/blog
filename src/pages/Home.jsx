import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Background from "./components/Background";
import ParticlesContainer from "./components/Particles";

const Home = () => {
  const latestArticles = [
    {
      title: "rootmeBackground",
      description: "ethernetFrame",
      link: "/rootme/networks/ethernetFrame",
    },
    {
      title: "rootmeBackground",
      description: "ftpAuthentification",
      link: "/rootme/networks/ftpAuthentification",
    },
    {
      title: "rootmeBackground",
      description: "telnetAuthentification",
      link: "/rootme/networks/telnetAuthentification",
    },
    {
      title: "rootmeBackground",
      description: "dnsTransfert",
      link: "/rootme/networks/dnsTransfert",
    },
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

        {/* // Icon Social Link */}

        <div className="socialLink">
          <Link to="https://github.com/youcefKNL" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://github.com/youcefKNL" target="_blank">
            <FaLinkedin />
          </Link>
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
              </div>
              <div className="homeLinkArticle">
                <Link to={article.link}>Lire la suite</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="copyright">
          © Khenichil Youcef 2024. Tous droits réservés.
        </div>
      </div>
    </main>
  );
};

export default Home;
