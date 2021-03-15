import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const Emporio = () => {
  const user = useSelector((state: any) => state.usersReducer);
  return (
    <div className="container-itens">
      <div className="beer">
        <h2> produto.title</h2>
        <img src="produto.image" alt="Buzz" />
        <h3>produto.description</h3>
        <h3>produto.price</h3>
      </div>
      {!user.accessToken && <Redirect to="/login" />}
    </div>
  );
};

export default Emporio;
