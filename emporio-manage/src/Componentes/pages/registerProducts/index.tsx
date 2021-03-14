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
      </form>
    </>
  );
}
