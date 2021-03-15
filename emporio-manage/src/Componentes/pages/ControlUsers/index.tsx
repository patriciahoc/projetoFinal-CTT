import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getControlUsersRequest } from "../../../store/ducks/controlUsers/actions";
import { delControlUsers } from "../../../store/ducks/controlUsers/sagas";
import Authorization from "../../Authorization";

const ControlUsers = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state: any) => state.controlUsersReducer);

  const user = useSelector((state: any) => state.usersReducer);

  const hasPermission = (role: string) => {
    return user && user.role === role;
  };

  const removeProduct = (id: number) => {
    dispatch(delControlUsers(id));
    dispatch(getControlUsersRequest());
  };

  useEffect(() => {
    if (user.id) {
      dispatch(getControlUsersRequest());
    }
  }, [dispatch, user.id]);

  return (
    <div>
      <div>
        <NavLink to="/cadastro-usuarios">Novo usuário</NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.items.map((item: any) => (
              <tr key={item.id}>
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
  );
};

export default ControlUsers;
