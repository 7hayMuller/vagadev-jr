import styled from "styled-components";

export const Container = styled.div`
  
  height: 35px;
  margin: 44px auto 0px auto;
  background-color: transparent;
  max-width: 1189px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;

  h6 {
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 1240px){
    padding: 0px 18px 0px 18px;
  }
`;

export const LeftSide = styled.div`
  align-items: center;
  display: flex;

  img {
    margin-right: 43px;
  }

  @media (max-width: 740px){
    
  }

`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
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
