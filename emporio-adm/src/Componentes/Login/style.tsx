import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #ccc;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  background-color: var(--bg-color-content);

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  form {
    margin-top: 20px;
    width: 100%;
  }
  svg {
    height: 16px;
    width: 16px;
  }
  input {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 6px;
    width: 100%;
    outline: none;
  }
  select {
    border: 1px solid var(--border-color);
    outline: none;
    padding: 8px;
    cursor: pointer;
    background-color: #ffff;
    width: 100%;
  }
  button {
    width: 125px;
    cursor: pointer;
    border-radius: 25px;
    font-weight: 700 !important;
    height: 50px;
    background-color: var(--border-color);
    font-size: 1rem;
    border: none;
  }
  button:hover {
    background-color: var(--bg-color-input);
  }
  span {
    font-size: 10px;
    color: red;
    display: flex;
  }
  label {
    margin-right: 16px;
  }
  .content-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .content-input-field {
    display: flex;
    align-items: center;

    padding: 8px;
    border: 1px solid var(--border-color);
  }
  .container-logo {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
  }
  .content-button {
    display: flex;
    justify-content: flex-end;
    outline: none;
  }
  .content-role {
    margin-bottom: 20px;
  }
`;
