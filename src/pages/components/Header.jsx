import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <header className={isScrolled ? "activeHeader" : "header"}>
      <h2>#Blog </h2>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Home"
          >
            <li>
              <p>Accueil</p> <i className="fa-solid fa-house"></i>
            </li>
          </NavLink>

          <NavLink
            to="/challenge"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Challenge"
          >
            <li>
              <p>Challenge</p> <i className="fa-solid fa-image"></i>
            </li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="About"
          >
            <li>
              <p>À Propos</p> <i className="fa-solid fa-circle-info"></i>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
