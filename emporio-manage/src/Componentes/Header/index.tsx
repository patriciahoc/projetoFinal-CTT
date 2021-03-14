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
          <NavLink to="/home">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
          </NavLink>
        </div>
        <div className="container-rotas">
          <NavLink to="/">Login / Sair</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
          <NavLink to="/emporio">Site Empório</NavLink>
          <h3>Usuário - admin</h3>
        </div>
      </Container>
    </>
  );
};

export default Header;
