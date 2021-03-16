import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .wrap {
    display: flex;
  }

  .container-items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    padding: 10px;
    margin: 0 auto;
    border-radius: 10px;
    border: 2px solid #ccc;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    background-color: var(--bg-color-content);
    justify-content: space-around;
  }
  .container-items:first-child {
    margin-right: 150px;
  }
  .content-show {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .content-show span {
    margin: 0 4px;
  }
  .content-show svg {
    width: 21px;
    height: 15px;
  }
  .content-show a {
    display: flex;
    align-items: center;
  }
  .content-item h3 {
    font-size: 40px;
  }
`;
