import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaFlag, FaInfoCircle, FaTools } from "react-icons/fa";
import { SiPowershell } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scrol top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className={isScrolled ? "activeHeader" : "header"}>
      <h2>
        {" "}
        #<SiPowershell /> <GiCyberEye />
      </h2>
      <nav>
        <ul>
          <NavLink
            to="/#h1"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Home"
            onClick={scrollToTop}
          >
            <li>
              <p>Accueil</p> <FaHome />
            </li>
          </NavLink>{" "}
          <NavLink
            to="/toolbox"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Outils"
            onClick={scrollToTop}
          >
            <li>
              <p>Outils</p> <FaTools />
            </li>
          </NavLink>
          <NavLink
            to="/challenge"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Challenge"
            onClick={scrollToTop}
          >
            <li>
              <p>Challenge</p> <FaFlag />
            </li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="About"
            onClick={scrollToTop}
          >
            <li>
              <p>À Propos</p> <FaInfoCircle />
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
