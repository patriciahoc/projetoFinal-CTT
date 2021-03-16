import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductRequest } from "../../store/ducks/product/actions";
import Authorization from "../Authorization";
import { Container } from "./style";

const Emporio = () => {
  const products: any = useSelector((state: any) => state.productsReducer);
  const user: any = useSelector((state: any) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(getProductRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="container-items">
        {products &&
          products.items.map((item: any) => (
            <div key={item.id} className="container-item">
              <h2> {item.title}</h2>
              <img src={item.image} alt="imagem produto" />
              <h3>{item.description}</h3>
              <h3>{item.price}</h3>
            </div>
          ))}

        <Authorization permissions={["admin", "editor"]} />
      </div>
    </Container>
  );
};

export default Emporio;
