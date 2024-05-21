import React, { useEffect } from "react";
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
      banner: "overthewireBackground",
      title: "Wargame Léviathan <SHELL>",
      description: "Un bon challenge pour manipuler les 'SUID' ❤️.",
      link: "/overthewire/leviathan/leviathan0",
      progression: "missionAcomplished",
    },
    {
      banner: "overthewireBackground",
      title: "Wargame Bandit <SHELL>",
      description: "Un long challenge pour faire le tour du game.",

      link: "/overthewire/bandit/bandit0",
      progression: "missionAcomplished",
    },

    {
      banner: "rootmeBackground",
      title: "SNMP Authentification <NETWORKS>",
      link: "/rootme/networks/snmpAuthentification",
      progression: "missionAcomplished",
    },
    {
      banner: "rootmeBackground",
      title: "DNS Exfiltration <Forensic>",
      link: "/rootme/forensic/exfiltrationDns",
      progression: "missionAcomplished",
    },
    {
      banner: "rootmeBackground",
      title: "SQL Injection <Web Server>",
      link: "/rootme/web-server/sqlInjectionReadFile",
      progression: "missionAcomplished",
    },
    {
      banner: "rootmeBackground",
      title: "LDAP Null Bind <Network>",
      link: "/rootme/networks/ldapNullBind",
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

        <div className="socialLink attract-hover-proximity">
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
              <div className={`homeBannerArticle ${article.banner}`}></div>
              <div className="homeDescriptionArticle">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <div className={article.progression}></div>
              <div className="homeLinkArticle">
                <Link to={article.link} onClick={scrollToTop}>
                  Let's go!
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
