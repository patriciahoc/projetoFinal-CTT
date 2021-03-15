/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import {
  delProductRequest,
  getProductRequest,
} from "../../../store/ducks/product/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productsReducer);
  const user = useSelector((state: any) => state.usersReducer);

  const hasPermission = (role: number) => {
    return user && +user.role === role;
  };

  const removeProduct = (id: number) => {
    dispatch(delProductRequest(id));
    dispatch(getProductRequest());
  };

  useEffect(() => {
    if (user.accessToken) {
      dispatch(getProductRequest());
    }
  }, []);

  return (
    <div>
      <div>
        <NavLink to="/cadastro-produtos">novo</NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.items.map((item: any) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  {hasPermission(1) && (
                    <button onClick={() => removeProduct(item.id)}>X</button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!user.accessToken && <Redirect to="/login" />}
    </div>
  );
};

export default Products;
