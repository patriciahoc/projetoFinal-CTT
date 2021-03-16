import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getControlUsersRequest,
  delControlUsersRequest,
} from "../../../store/ducks/controlUsers/actions";
import Authorization from "../../Authorization";
import { Container } from "./style";

const ControlUsers = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state: any) => state.controlUsersReducer);

  const user = useSelector((state: any) => state.usersReducer);

  const hasPermission = (role: string) => {
    return user && user.role === role;
  };

  const removeProduct = (id: number) => {
    dispatch(delControlUsersRequest(id));
    dispatch(getControlUsersRequest());
  };

  useEffect(() => {
    if (user.id) {
      dispatch(getControlUsersRequest());
    }
  }, [dispatch, user.id]);

  return (
    <Container>
      <div className="wrap">
        <div className="container-link">
          <NavLink to="/cadastro-usuarios">Novo usuário</NavLink>
        </div>
        <table className="container-table">
          <thead className="container-header-table">
            <tr className="container-header-items">
              <th>Nome</th>
              <th>Nível de acesso</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="container-items-table">
            {listUsers &&
              listUsers.items.map((item: any) => (
                <tr className="container-items-item" key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>
                    {hasPermission("admin") && (
                      <button onClick={() => removeProduct(item.id)}>X</button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Authorization permissions={["admin"]} />
      </div>
    </Container>
  );
};

export default ControlUsers;
