import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
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
    toast("Formulário enviado!");
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

        <label>Preço</label>
        <input
          type="text"
          title="price"
          name="price"
          ref={register({ required: true })}
        />
        {errors.price && <p role="alert">Campo obrigatório</p>}

        <label>Descrição</label>
        <input
          type="text"
          title="description"
          name="description"
          ref={register({ required: true })}
        />
        {errors.description && <p role="alert">Campo obrigatório</p>}

        <label>Imagem</label>
        <input
          type="url"
          title="image"
          name="image"
          ref={register({ required: true })}
        />
        {errors.image && <p role="alert">Campo obrigatório</p>}

        <input type="submit" />
        <Toaster />
        {!user.accessToken && <Redirect to="/" />}
      </form>
    </>
  );
}
