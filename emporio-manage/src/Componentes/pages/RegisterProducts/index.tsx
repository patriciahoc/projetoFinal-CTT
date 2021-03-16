import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postProductRequest } from "../../../store/ducks/product/actions";
import { useHistory } from "react-router";
import Authorization from "../../Authorization";
import { Container } from "./style";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(postProductRequest(data));
    history.push("/produtos");
  };

  return (
    <Container>
      <div className="container-form">
        <div className="container-head-form">
          <h1>Cadastro produtos</h1>
        </div>
        <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-items-form">
            <label>Título</label>
            <input
              type="text"
              title="title"
              name="title"
              ref={register({ required: true })}
            />
            {errors.title && <span role="alert">Campo obrigatório</span>}
          </div>
          <div className="container-items-form">
            <label>Preço</label>
            <input
              type="text"
              title="price"
              name="price"
              ref={register({ required: true })}
            />
            {errors.price && <span role="alert">Campo obrigatório</span>}
          </div>

          <div className="container-items-form">
            <label>Descrição</label>
            <input
              type="text"
              title="description"
              name="description"
              ref={register({ required: true })}
            />
            {errors.description && <span role="alert">Campo obrigatório</span>}
          </div>
          <div className="container-items-form">
            <label>Imagem (URL)</label>
            <input
              type="url"
              title="image"
              name="image"
              ref={register({ required: true })}
            />
            {errors.image && <span role="alert">Campo obrigatório</span>}
          </div>
          <div className="container-button">
            <button type="submit">Enviar</button>
          </div>
        </form>
        <Authorization permissions={["admin", "editor"]} />
      </div>
    </Container>
  );
}
