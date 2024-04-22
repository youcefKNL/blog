import React, { useEffect, useState } from "react";

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

  //Liste dépliante
  const [isOpen, setIsOpen] = useState({
    RootMe: false,
    VulnHub: false,
    TryHackMe: false,
    HackTheBox: false,
    PortSwigger: false,
  });

  const toggleSubMenu = (menuName) => {
    setIsOpen({
      ...isOpen,
      [menuName]: !isOpen[menuName],
    });
  };

  return (
    <aside
      className={
        isScrolled ? "lexicalContent lexicalContentFixed" : "lexicalContent"
      }
    >
      <h2>table des matières</h2>
      <ul>
        <li onClick={() => toggleSubMenu("RootMe")} className="parentNode">
          Root-Me
          {isOpen["RootMe"] && (
            <ul>
              <li>Challenge</li>
              <li>CTF</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("VulnHub")} className="parentNode">
          VulnHub
          {isOpen["VulnHub"] && (
            <ul>
              <li>Challenge</li>
              <li>CTF</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("TryHackMe")} className="parentNode">
          Try Hack Me
          {isOpen["TryHackMe"] && (
            <ul>
              <li>Challenge</li>
              <li>CTF</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("HackTheBox")} className="parentNode">
          Hack The Box
          {isOpen["HackTheBox"] && (
            <ul>
              <li>Challenge</li>
              <li>CTF</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu("PortSwigger")} className="parentNode">
          PortSwigger
          {isOpen["PortSwigger"] && (
            <ul>
              <li className="childrenNode">Challenge</li>
              <li className="childrenNode">CTF</li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Lexical;
