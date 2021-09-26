import styled from "styled-components";

export const Slider = styled.div`
  max-width: 1920px;
  max-height: 840px;
  top: 0;
  left: 0;
  z-index: -1;
  position: relative;
`;

export const Details = styled.div`
  max-width: 420px;
  color:#ffffff;
  text-align: right;
  margin-left: 1080px;
  margin-top: 209px;
  
  position: absolute;
  width: 100%;
  top:0px;
  
  h3{
    font-weight: 900;
    font-size: 46px;
    text-transform: uppercase;
  }
  p{
    font-weight: 400;
    font-size: 16px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #3EC6E0;

  h1{
    font-weight: 900;
    font-size: 70px;
    padding: 0;

  }
  small{
    margin-top: 12px;
    font-size: 28px;
    font-weight: 900;
  }
`;
