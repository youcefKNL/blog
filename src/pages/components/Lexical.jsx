import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaThList } from "react-icons/fa";
const Lexical = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0.3 * window.innerHeight);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      className={
        isScrolled ? "lexicalContent lexicalContentFixed" : "lexicalContent"
      }
    >
      <h2>
        <FaThList />
        <span>table des matières</span>
      </h2>
      <ul className="challengeList">
        <li>
          <Link to="/rootme" onClick={scrollToTop}>
            <span>🏁 root me</span>
          </Link>
        </li>

        <li>
          <Link to="/#" onClick={scrollToTop}>
            <span>🚩 try hack me</span>
          </Link>
        </li>
        <li>
          <Link to="/#" onClick={scrollToTop}>
            <span>🏳️ hack the box</span>
          </Link>
        </li>
        <li>
          <Link to="/#" onClick={scrollToTop}>
            <span>🏁 portswigger</span>
          </Link>
        </li>
        <li>
          <Link to="/#" onClick={scrollToTop}>
            <span>🏴 vulnhub</span>
          </Link>
        </li>
        <li>
          <Link to="/#" onClick={scrollToTop}>
            <span>🎌 over the wire</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Lexical;
