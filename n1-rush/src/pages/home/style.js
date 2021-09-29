import styled from "styled-components";

export const App = styled.div`
  background-color: greenyellow;
  font: 400 14px Roboto, sans-serif;
  width: 100%;
  height: 100% !important;
`;

export const Products = styled.div`
margin-top: 359px;
  background-color: red;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.div`
  background-color: orange;
  display: flex;
  max-width: 1920px;
  margin: auto auto auto auto;
  width: 100%;

  img{
    margin-left: 327px;
  }

  h2 {
    font-size: 36px;
    font-weight: 300;
    line-height: 42px;
    text-align: left;
    color: #084154;
    margin-left: 22px;
  }
`;
