import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 602px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #3ec6e0;
`;

export const Image = styled.div`
  height: 415px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
`;

export const Info = styled.div`
  height: 185px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  justify-content: flex-start;
  border-radius: 0px 0px 10px 10px;
  color: #084154;
  small{
    margin-top: 24px;
    margin-left: 36px;
    font-weight: 400;
    font-size: 14px;
  }
  h6{
    margin-top: 27px;
    margin-left: 36px;
    font-weight: 900;
    font-size: 18px;
  }
`;
