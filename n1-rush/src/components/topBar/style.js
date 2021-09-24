import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 35px;
  margin: 44px auto 0px auto;
  background-color: black;
  max-width: 1189px;
  justify-content: space-between;
  align-items: center;

  h6 {
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
  }
`;
export const LeftSide = styled.div`
  align-items: center;
  display: flex;

  img:first-child {
    margin-right: 43px;
  }
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;

  h6 {
    margin-left: 15px;
    margin-right: 43px;
  }

  img:nth-child(3) {
    margin-right: 39px;
  }

  div {
    img {
      margin-left: 39px;
      margin-right: 6px;
    }
    align-items: center;
    display: flex;
  }
`;
