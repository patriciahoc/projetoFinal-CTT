import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #ccc;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  background-color: var(--bg-color-content);

  .container-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }
  .container-head-form {
    margin-bottom: 16px;
  }
  .container-head-form h1 {
    font-size: 28px;
    text-transform: uppercase;
    color: var(--font-color);
  }
  .container-items-form {
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container-items-form input {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-color);
    padding: 6px;
    width: 100%;
    outline: none;
  }
  .container-items-form select {
    border: 1px solid var(--border-color);
    outline: none;
    padding: 8px;
    cursor: pointer;
    background-color: #ffff;
  }
  .container-button button {
    width: 125px;
    cursor: pointer;
    border-radius: 25px;
    font-weight: 700 !important;
    height: 50px;
    background-color: var(--border-color);
    font-size: 1rem;
    border: none;
  }
  .container-button button:hover {
    background-color: var(--bg-color-input);
  }
  span {
    font-size: 10px;
    color: red;
    display: flex;
  }
`;
