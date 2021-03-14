import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state: any) => state.productsReducer);
  const users = useSelector((state: any) => state.usersReducer);

  return (
    <div>
      <div>
        <h1>número de produtos cadastrados, número de usuários cadastrados</h1>
      </div>
    </div>
  );
};

export default Home;
