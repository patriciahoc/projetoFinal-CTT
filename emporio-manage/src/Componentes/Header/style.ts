import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);

  .container-logo img {
    width: 80px;
    height: 60px;
    margin: 10px 0;
  }
  .container-rotas h3 {
    font-weight: 400;
  }
  .container-rotas {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 14px;
  }
  .container-rotas a {
    margin-right: 20px;
    text-decoration: none;
    color: #2d3436;
    font-size: 18px;
  }
`;
