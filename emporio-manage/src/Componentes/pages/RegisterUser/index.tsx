import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postControlUsersRequest } from "../../../store/ducks/controlUsers/actions";
import { useHistory } from "react-router";
import Authorization from "../../Authorization";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (user: any) => {
    dispatch(postControlUsersRequest(user));
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
        {errors.name && <span role="alert">Campo obrigatório</span>}

        <label>Email</label>
        <input
          type="email"
          title="email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && <span role="alert">Campo obrigatório</span>}

        <label>Senha</label>
        <input
          type="password"
          title="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <span role="alert">Campo obrigatório</span>}

        <label>Nivel de acesso</label>

        <select name="role" ref={register} required>
          <option value="">Selecione</option>
          <option value="admin">Administrador</option>
          <option value="editor">Editor</option>
        </select>
        {errors.role && <span role="alert">Campo obrigatório</span>}
        <input type="submit" />
      </form>
      <Authorization permissions={["admin"]} />
    </>
  );
}
