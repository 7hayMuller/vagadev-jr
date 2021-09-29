import styled from "styled-components";

export const Container = styled.div`
  min-height: 267px;
  min-width: 556px;
  z-index: 10;
  position: absolute;
  left: -30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 37px;
  display: ${ props => props.show };
  transition: all 0.5s;

  @media (max-width: 1240px){
    left: -12px;
  }

`;

export const Arrow = styled.div`
position: relative;
background-color: #3ec6e0;
width: 18px;
height: 18px;
transform: rotate(-45deg) !important;
top: 9px;
left: 30px;

;

`

export const Content = styled.div`
  position: relative;
  background-color: #084154;
  width: 100%;
  border-radius: 5px;
  border: solid 2px #3ec6e0;
  height: 249px;
  z-index: 11;
  margin-bottom: 0px;
  box-shadow: 10px 10px #3ec6e0;
  display: flex;
  padding: 45px 15px 45px 15px;
  align-items: flex-start;
  justify-content: space-between;
  ul{
      list-style: none;
      li:first-child{
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
      li{
        padding: 0px 15px 0px 15px;
        display: flex;
        align-items: center;
        width: 166px;
        height: 33px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 400;
        transition: all ease-out 300ms;
      }
      li:hover:not(li:first-child){
        background-color: #3ec6e0;
        cursor: pointer;
        border-radius: 5px;
      }

  }
`;
