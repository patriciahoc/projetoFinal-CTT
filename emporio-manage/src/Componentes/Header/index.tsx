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
    localStorage.clear();
    history.push("/login");
  };
  const hasPermission = (role: string) => {
    return user && user.role === role;
  };

  return (
    <>
      <Container>
        <div className="container-logo">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
        </div>
        <div className="container-rotas">
          <NavLink to="/emporio">Site Empório</NavLink>
          {hasPermission("") && (
            <>
              <NavLink to="/home">Home</NavLink>
            </>
          )}
          {hasPermission("admin" && "editor") && (
            <>
              <NavLink to="/produtos">Produtos</NavLink>
            </>
          )}
          {hasPermission("admin") && (
            <>
              <NavLink to="/controle-usuarios">Usuarios</NavLink>
            </>
          )}
        </div>
        <div>
          {!user.id ? (
            <NavLink to="/login">
              <RiFileUserLine /> Login
            </NavLink>
          ) : (
            <div className="sair">
              <h3>{user.name}</h3>
              <span onClick={() => close()}>Sair</span>
              <FaPowerOff />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Header;
