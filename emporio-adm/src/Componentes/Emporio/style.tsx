import styled from "styled-components";

export const Container = styled.div`
  .container-items {
    display: grid;
    grid-template-columns: 250px 250px 250px;
    justify-content: center;
    width: 100%;
    padding: 20px;
  }
  .container-item {
    display: flex;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-right: 8px;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 8px 12px rgb(0 0 0 / 10%);
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container-item h2 {
    font-size: 13px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-item h3 {
    font-size: 16px;
  }
  .container-item img {
    max-height: 150px;
  }
`;
