import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { postControlUsersRequest } from "../../../store/ducks/controlUsers/actions";
import { useHistory } from "react-router";

export default function Form() {
  const user = useSelector((state: any) => state.usersReducer);
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(postControlUsersRequest(data));
    toast("Formulário enviado!");
    history.push("/controle-usuarios");
  };

  return (
    <>
      <h2>Cadastro novos usuários</h2>
      <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input
          type="text"
          title="name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <p role="alert">Campo obrigatório</p>}

        <label>Email</label>
        <input
          type="email"
          title="email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && <p role="alert">Campo obrigatório</p>}

        <label>Senha</label>
        <input
          type="number"
          title="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <p role="alert">Campo obrigatório</p>}

        <label>Nivel de acesso</label>
        {errors.acesso && <p role="alert">Campo Obrigatório</p>}
        <label>Administrador</label>
        <input
          title="acesso"
          name="admin"
          type="radio"
          value="admin"
          ref={register({ required: true })}
        />
        <label>Editor</label>
        <input
          title="acesso"
          name="editor"
          type="radio"
          value="editor"
          ref={register({ required: true })}
        />

        <input type="submit" />
        <Toaster />
        {!user.accessToken && <Redirect to="/" />}
      </form>
    </>
  );
}
