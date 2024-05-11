import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

import ParticlesContainer from "./components/background Effect/Particles";
import ParticlesContainer2 from "./components/background Effect/Particles2";

import Footer from "./components/Footer";
import terminal from "../assets/background/carbon.png";

const Home = () => {
  //scrol top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const latestArticles = [
    {
      title: "overthewireBackground",
      description: "Wargame Léviathan <SHELL>",
      progression: "workInProgress",
      link: "/overthewire/leviathan/leviathan0",
    },
    {
      title: "overthewireBackground",
      description: "Wargame Bandit <SHELL>",
      link: "/overthewire/bandit/bandit0",
      progression: "missionAcomplished",
    },

    {
      title: "rootmeBackground",
      description: "Ethernet Frame <NETWORKS>",
      link: "/rootme/networks/ethernetFrame",
      progression: "missionAcomplished",
    },
    {
      title: "rootmeBackground",
      description: "FTP Authentication <Network>",
      link: "/rootme/networks/ftpAuthentification",
      progression: "missionAcomplished",
    },
    {
      title: "rootmeBackground",
      description: "Telnet Authentification <NETWORK>",
      link: "/rootme/networks/telnetAuthentification",
      progression: "missionAcomplished",
    },
    {
      title: "rootmeBackground",
      description: "DNS Transfert <Network>",
      link: "/rootme/networks/dnsTransfert",
      progression: "missionAcomplished",
    },
  ];

  return (
    <main className="homeContainer">
      <div className="welcome">
        <ParticlesContainer />
        <h1>welcome</h1>
        <div className="link">
          <Link to="https://portfolio.cabinetlegalis.fr" target="_blank">
            <div className="button">Portfolio</div>
          </Link>
          <Link to="https://www.linkedin.com/in/youcef-knl/" target="_blank">
            <div className="button">Linkedin</div>
          </Link>
        </div>

        {/* // Icon Social Link */}

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
      </div>
      <div className="homeArticles">
        <ParticlesContainer2 />
        <div className="terminal">
          <img src={terminal} alt="" />
          {/* <div ref={terminalRef} onKeyDown={handleEnterKeyPress} tabIndex={0}>
            <TerminalComponent history={homeHistory} />
          </div> */}
        </div>
        <h2>🏆 Challenges récents 🏅</h2>
        <div className="homeArticlesContainer">
          {latestArticles.map((article, index) => (
            <div key={index} className="homeCardArticle">
              <div className={`homeBannerArticle ${article.title}`}></div>
              <div className="homeDescriptionArticle">
                <p>{article.description}</p>
              </div>
              <div className={article.progression}></div>
              <div className="homeLinkArticle">
                <Link to={article.link} onClick={scrollToTop}>
                  Lire la suite
                </Link>
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
