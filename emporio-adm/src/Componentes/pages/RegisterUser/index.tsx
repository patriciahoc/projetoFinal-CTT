import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postControlUsersRequest } from "../../../store/ducks/controlUsers/actions";
import { useHistory } from "react-router";
import Authorization from "../../Authorization";
import { Container } from "./style";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (user: any) => {
    dispatch(postControlUsersRequest(user));
    history.push("/controle-usuarios");
  };

  return (
    <Container>
      <div className="container-form">
        <div className="container-head-form">
          <h1>Cadastro usuários</h1>
        </div>
        <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-items-form">
            <label>Nome</label>
            <input
              type="text"
              title="name"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && <span role="alert">Campo obrigatório</span>}
          </div>

          <div className="container-items-form">
            <label>Email</label>
            <input
              type="email"
              title="email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && <span role="alert">Campo obrigatório</span>}
          </div>

          <div className="container-items-form">
            <label>Senha</label>
            <input
              type="password"
              title="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && <span role="alert">Campo obrigatório</span>}
          </div>

          <div className="container-items-form">
            <label>Nivel de acesso</label>

            <select name="role" ref={register} required>
              <option value="">Selecione</option>
              <option value="admin">Administrador</option>
              <option value="editor">Editor</option>
            </select>
            {errors.role && <span role="alert">Campo obrigatório</span>}
          </div>

          <div className="container-button">
            <button type="submit">Enviar</button>
          </div>
        </form>
        <Authorization permissions={["admin"]} />
      </div>
    </Container>
  );
}
