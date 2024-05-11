import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Error 404</h2>
        <NavLink to="/">
          <h3>retour à l'accueil</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;
