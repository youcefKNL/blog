import React from "react";
import HeaderChallenge from "./components/HeaderChallenge";
import Lexical from "./components/Lexical";
import LayoutArticleBlog from "./components/LayoutArticleBlog";
import ParticlesContainer2 from "./components/background Effect/Particles2";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import RootmeLogo from "../assets/rootme/root-me-logo.png";
import TryHackMeLogo from "../assets/try-hack-me/favicon.png";
import HackTheBox from "../assets/hack-the-box/hack-the-box.png";
import Portswigger from "../assets/portSwigger/pngwing.com.png";
import Vulnhub from "../assets/vulnHub/images-removebg-preview.png";
import OverTheWire from "../assets/over-the-wire/logo-removebg-preview.png";

const Challenge = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="challengePresentation blogPage">
      <HeaderChallenge />
      <ParticlesContainer2 />
      <div className="blogContainer">
        <LayoutArticleBlog classname="challenge">
          <h1>
            Parcours d'Exploration : <br /> Découvrez les Défis de Hacking
          </h1>
          <p>
            Bienvenue dans cet espace d'apprentissage, où je partage ma road map
            vers la maîtrise du hacking éthique. Explorez avec moi les divers
            défis et CTFs (Capture The Flags) que j'ai relevés, où chaque succès
            est une victoire modeste mais significative. Parcourez mes notes
            personnelles, fruit de mes expériences sur des plateformes telles
            que Root-Me, VulnHub, Try Hack Me, Hack The Box et PortSwigger.
            Rejoignez-moi dans cette aventure où chaque pas vers la découverte
            est une récompense en soi. Ensemble, franchissons les obstacles,
            partageons nos réussites et cultivons notre passion pour le hacking
            éthique. Laissez-nous commencer ce voyage ensemble !
          </p>

          <h2>Les solutions des différentes plateformes d'apprentissage</h2>
          <ul className="challengeList">
            <li>
              <img src={RootmeLogo} alt="logo de root me" />
              <Link to="/rootme" onClick={scrollToTop}>
                <span> ROOT ME</span>
              </Link>
            </li>

            <li>
              <img src={TryHackMeLogo} alt="logo de try hack me" />
              <Link to="/#" onClick={scrollToTop}>
                <span> TRY HACK ME</span>
              </Link>
            </li>
            <li>
              <img src={HackTheBox} alt="logo de hack the box" />
              <Link to="/#" onClick={scrollToTop}>
                <span> HACK THE BOX</span>
              </Link>
            </li>
            <li>
              <img src={Portswigger} alt="logo de portswigger" />
              <Link to="/#" onClick={scrollToTop}>
                <span> PORTSWIGGER</span>
              </Link>
            </li>
            <li>
              <img src={Vulnhub} alt="logo de vulnhub" />
              <Link to="/#" onClick={scrollToTop}>
                <span> VULNHUB</span>
              </Link>
            </li>
            <li>
              <img
                src={OverTheWire}
                alt="logo de over the wire"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />

              <Link to="/#" onClick={scrollToTop}>
                <span> OVER THE WIRE</span>
              </Link>
            </li>
          </ul>
        </LayoutArticleBlog>

        <Lexical />
      </div>
      <Footer />
    </section>
  );
};

export default Challenge;
