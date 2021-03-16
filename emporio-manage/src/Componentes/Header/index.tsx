import { Container } from "./style";

import { NavLink, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { postLoginClose } from "../../store/ducks/userLogin/actions";

import { RiFileUserLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import Logo from "../Logo";

const Header = () => {
  const user = useSelector((state: any) => state.usersReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const close = () => {
    dispatch(postLoginClose());
    localStorage.clear();
    history.push("/login");
  };
  const hasPermission = (roles: string[]) => {
    return user && roles.includes(user.role);
  };

  return (
    <>
      {hasPermission(["admin", "editor"]) && (
        <Container>
          <Logo />
          <div className="container-rotas">
            {hasPermission(["admin", "editor"]) && (
              <>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/emporio">Site Empório</NavLink>
                <NavLink to="/produtos">Produtos</NavLink>
              </>
            )}

            {hasPermission(["admin"]) && (
              <>
                <NavLink to="/controle-usuarios">Usuarios</NavLink>
              </>
            )}
          </div>
          <div className="content-user">
            {!user.id ? (
              <NavLink to="/login">
                <RiFileUserLine /> Login
              </NavLink>
            ) : (
              <div className="content-user">
                <h3>{user.name}</h3>
                <div className="content-close">
                  <span onClick={() => close()}>
                    Sair
                    <FaPowerOff />
                  </span>
                </div>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Header;
