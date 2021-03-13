import React from "react";
import { Container } from "./style";

import { NavLink } from "react-router-dom";
import Logo1 from "../../img/imagem1.png";
import Logo2 from "../../img/imagem2.png";

const Header = () => {
  return (
    <>
      <Container>
        <div className="container-logo">
          <a href="/home">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
          </a>
        </div>
        <div className="container-rotas">
          <NavLink to="/">Login</NavLink>
          <h3>Usuário</h3>
        </div>
      </Container>
    </>
  );
};

export default Header;
