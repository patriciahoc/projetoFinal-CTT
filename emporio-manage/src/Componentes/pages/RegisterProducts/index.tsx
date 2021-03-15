import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { postProductRequest } from "../../../store/ducks/product/actions";
import { useHistory } from "react-router";

export default function Form() {
  const user = useSelector((state: any) => state.usersReducer);
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(postProductRequest(data));
    history.push("/produtos");
  };

  return (
    <>
      <h2>Cadastro novos produtos</h2>
      <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Título</label>
        <input
          type="text"
          title="title"
          name="title"
          ref={register({ required: true })}
        />
        {errors.title && <span role="alert">Campo obrigatório</span>}

        <label>Preço</label>
        <input
          type="text"
          title="price"
          name="price"
          ref={register({ required: true })}
        />
        {errors.price && <span role="alert">Campo obrigatório</span>}

        <label>Descrição</label>
        <input
          type="text"
          title="description"
          name="description"
          ref={register({ required: true })}
        />
        {errors.description && <span role="alert">Campo obrigatório</span>}

        <label>Imagem</label>
        <input
          type="url"
          title="image"
          name="image"
          ref={register({ required: true })}
        />
        {errors.image && <span role="alert">Campo obrigatório</span>}

        <input type="submit" />
      </form>
      {!user.accessToken && <Redirect to="/login" />}
    </>
  );
}
