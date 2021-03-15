import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductRequest } from "../../store/ducks/product/actions";
import Authorization from "../Authorization";

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
    <div className="container-itens">
      <>
        {products &&
          products.items.map((item: any) => (
            <div className="beer">
              <h2> {item.title}</h2>
              {/* <img src={item.image} alt="Beers" /> */}
              <h3>{item.description}</h3>
              <h3>{item.price}</h3>
            </div>
          ))}
      </>
      <Authorization permissions={["admin", "editor"]} />
    </div>
  );
};

export default Emporio;
