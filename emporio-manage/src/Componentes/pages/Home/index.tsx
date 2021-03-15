/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getControlUsersRequest } from "../../../store/ducks/controlUsers/actions";
import { getProductRequest } from "../../../store/ducks/product/actions";
import { GrView } from "react-icons/gr";

const Home = () => {
  const products = useSelector((state: any) => state.productsReducer);
  const users = useSelector((state: any) => state.controlUsersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getControlUsersRequest());
    dispatch(getProductRequest());
  }, []);

  const hasPermission = (role: string) => {
    return users && users.role === role;
  };

  return (
    <div>
      <div className="container-produtos">
        <div>
          <h3>{products.items.length}</h3>
        </div>
        <NavLink to="/produtos">
          <GrView />
        </NavLink>
      </div>
      <div className="container-usuarios">
        <div>
          <h3>{users.items.length}</h3>
        </div>
        {!hasPermission("admin") && (
          <NavLink to="/usuarios">
            <GrView />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Home;
