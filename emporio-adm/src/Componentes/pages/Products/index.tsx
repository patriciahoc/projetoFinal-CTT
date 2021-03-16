/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  delProductRequest,
  getProductRequest,
} from "../../../store/ducks/product/actions";
import Authorization from "../../Authorization";
import { Container } from "./style";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productsReducer);
  const user = useSelector((state: any) => state.usersReducer);

  const hasPermission = (role: string) => {
    return user && user.role === role;
  };

  const removeProduct = (id: number) => {
    dispatch(delProductRequest(id));
    dispatch(getProductRequest());
  };

  useEffect(() => {
    if (user.id) {
      dispatch(getProductRequest());
    }
  }, []);

  return (
    <Container>
      <div className="wrap">
        <div className="container-link">
          <NavLink to="/cadastro-produtos">Cadastrar</NavLink>
          <NavLink to="/emporio">Preview</NavLink>
        </div>

        <table className="container-table">
          <thead className="container-header-table">
            <tr className="container-header-items">
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody className="container-items-table">
            {products &&
              products.items.map((item: any) => (
                <tr className="container-items-item" key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    {hasPermission("admin") && (
                      <button onClick={() => removeProduct(item.id)}>X</button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Authorization permissions={["admin", "editor"]} />
      </div>
    </Container>
  );
};

export default Products;
