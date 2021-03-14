import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    if (data) {
      return toast("Formulário enviado!");
    }
  };

  return (
    <>
      <h2>Cadastro novo usuário</h2>
      <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input
          type="text"
          title="nome"
          name="nome"
          ref={register({ required: true })}
        />

        <label>Email</label>
        <input
          type="text"
          title="email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && <p role="alert">Campo obrigatório</p>}

        <label>Nivel de acesso</label>
        {errors.estadocivil && <p role="alert">Campo Obrigatório</p>}
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
      </form>
    </>
  );
}
