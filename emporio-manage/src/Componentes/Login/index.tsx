import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import { postLoginRequest } from "../../store/ducks/userLogin/actions";
import { UserLogin } from "./LoginTypes";
import { Container } from "./style";
import Logo from "../Logo";

const Login = () => {
  const { register, handleSubmit, errors } = useForm<UserLogin>();
  const user = useSelector((state: any) => state.usersReducer);
  const dispatch = useDispatch();

  const onSubmit = (data: UserLogin) => {
    dispatch(postLoginRequest(data));
  };

  return (
    <Container>
      <div className="wrap">
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-input">
            <label>Email</label>

            <div className="content-input-field">
              <div className="content-icon">
                <HiOutlineMail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="exemplo@exemplo.com"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "email invalido",
                  },
                })}
              />
            </div>

            {errors.email && <span role="alert">Campo obrigatório</span>}
          </div>
          <div className="content-input">
            <label>Senha</label>
            <div className="content-input-field">
              <div className="content-icon">
                <RiLockPasswordFill />{" "}
              </div>
              <input
                type="password"
                name="password"
                ref={register({
                  required: true,
                  min: 8,
                })}
              />
            </div>
            {errors.password && <span role="alert">Campo Obrigatório</span>}
          </div>
          <div className="content-input content-role">
            <label>Nivel de acesso</label>
            <div className="contente-input-field">
              <select name="role" ref={register} required>
                <option value="">Selecione</option>
                <option value="admin">Administrador</option>
                <option value="editor">Editor</option>
              </select>
            </div>
            {errors.role && <span role="alert">Campo obrigatório</span>}
          </div>
          <div className="content-button">
            <button type="submit">Entrar</button>
          </div>
          {user.id && <Redirect to="/home" />}
        </form>
      </div>
    </Container>
  );
};

export default Login;
