import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 980px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid #ccc;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  background-color: var(--bg-color-content);

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container-link {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 31px 8px;
    align-items: center;
    padding: 0 20px;
  }
  .container-link a {
    text-decoration: none;
    border: 1px solid var(--border-color);
    padding: 10px;
    cursor: pointer;
  }
  .container-link a:hover {
    background-color: var(--bg-color-input);
  }

  .container-table {
    font-weight: 400;
    width: 100%;
  }
  .container-table th {
    text-align: center;
  }
  .container-header-table {
    font-weight: 500;
  }
  .container-items-item th {
    text-align: left;
    justify-content: center;
    align-items: center;
  }
  .container-items-item td {
    padding: 8px;
    border-bottom: 1px solid var(--border-color);
  }
  .container-items-item button {
    cursor: pointer;
    border-radius: 15px;
    background-color: var(--border-color);
    border: none;
    color: #ffff;
    padding: 10px;
    font-weight: 700 !important;
    outline: none;
  }
  .container-items-item button:hover {
    background-color: var(--bg-color-input);
  }
`;
