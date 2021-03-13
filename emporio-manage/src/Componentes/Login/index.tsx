import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

import { postLoginRequest } from "../../store/ducks/user/actions";
import { User } from "./LoginTypes";
import { Container } from "./style";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, errors } = useForm<User>();
  const user = useSelector((state: any) => state.usersReducer);

  const dispatch = useDispatch();

  const onSubmit = (data: User) => {
    dispatch(postLoginRequest(data));
    toast("Verifique permissão");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>

          <HiOutlineMail />
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

          {errors.email && <span role="alert">Campo obrigatório</span>}
        </div>
        <div>
          <label>Senha</label>
          <RiLockPasswordFill />{" "}
          <input
            type="password"
            name="password"
            ref={register({
              required: true,
              min: 8,
            })}
          />
          {errors.password && <p role="alert">Campo Obrigatório</p>}
        </div>
        <div className="content-role">
          <label>Nivel de acesso</label>

          <select name="role" ref={register} required>
            <option value="">Selecione</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
          </select>
          {errors.role && <span role="alert">Campo obrigatório</span>}
        </div>
        <input type="submit" />

        {user.accessToken || user.role ? <Redirect to="/Home" /> : <Toaster />}
      </form>
    </Container>
  );
};

export default Login;
