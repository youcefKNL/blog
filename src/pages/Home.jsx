import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

import ParticlesContainer from "./components/background Effect/Particles";
import ParticlesContainer2 from "./components/background Effect/Particles2";

import Footer from "./components/Footer";

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
          <Link to="https://codepen.io/youcefKNL/pens/public" target="_blank">
            <FaCodepen />
          </Link>
        </div>
      </div>
      <div className="homeArticles">
        <ParticlesContainer2 />

        <h2>Posts récents</h2>
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
      </div>
      <Footer />
    </main>
  );
};

export default Home;
