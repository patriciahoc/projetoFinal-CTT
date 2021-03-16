import React from "react";
import { NavLink } from "react-router-dom";

import Logo1 from "../../img/imagem1.png";
import Logo2 from "../../img/imagem2.png";

const Logo = () => {
  return (
    <div className="container-logo">
      <NavLink to="/home">
        <img src={Logo1} alt="Logo EC" />
        <img src={Logo2} alt="Logo Emporio" />
      </NavLink>
    </div>
  );
};

export default Logo;
