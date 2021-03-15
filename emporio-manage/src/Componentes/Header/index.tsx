import { Container } from "./style";

import { NavLink, useHistory } from "react-router-dom";
import Logo1 from "../../img/imagem1.png";
import Logo2 from "../../img/imagem2.png";
import { useDispatch, useSelector } from "react-redux";
import { postLoginClose } from "../../store/ducks/userLogin/actions";

import { RiFileUserLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  const user = useSelector((state: any) => state.usersReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const close = () => {
    dispatch(postLoginClose());
    history.push("/login");
  };

  return (
    <>
      <Container>
        <div className="container-logo">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />

          {!user.id ? (
            <NavLink to="/login">
              <RiFileUserLine /> Login
            </NavLink>
          ) : (
            <div className="sair">
              <span onClick={() => close()}>Sair</span>
              <FaPowerOff />
            </div>
          )}
        </div>
        <div className="container-rotas">
          <NavLink to="/emporio">Site Empório</NavLink>

          <NavLink to="/produtos">Produtos</NavLink>
          <NavLink to="/cadastro-produtos">Cadastro Produtos</NavLink>

          <NavLink to="/controle-usuarios">Usuarios</NavLink>
          <NavLink to="/cadastro-usuarios">Cadastro usuario</NavLink>

          <h3>
            {user.name} | {user.role}
          </h3>
        </div>
      </Container>
    </>
  );
};

export default Header;
