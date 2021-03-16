/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getControlUsersRequest } from "../../../store/ducks/controlUsers/actions";
import { getProductRequest } from "../../../store/ducks/product/actions";
import { GrView } from "react-icons/gr";
import { Container } from "./style";

const Home = () => {
  const products = useSelector((state: any) => state.productsReducer);
  const users = useSelector((state: any) => state.controlUsersReducer);
  const user = useSelector((state: any) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getControlUsersRequest());
    dispatch(getProductRequest());
  }, []);

  const hasPermission = (roles: string[]) => {
    return user && roles.includes(user.role);
  };

  return (
    <>
      <Container>
        <div className="wrap">
          <div className="container-items">
            <span>Produtos</span>
            <div className="content-item">
              <h3>{products.items.length}</h3>
            </div>
            <div className="content-show">
              <NavLink to="/produtos">
                <GrView />
                <span>Ver mais</span>
              </NavLink>
            </div>
          </div>
          <div className="container-items">
            <span>Usuários</span>
            <div className="content-item">
              <h3>{users.items.length}</h3>
            </div>
            <div className="content-show">
              {hasPermission(["admin"]) && (
                <NavLink to="/usuarios">
                  <GrView />
                  <span>Ver mais</span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
