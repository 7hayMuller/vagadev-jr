import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 63px;
  height: 384px;
  right: 0px;
  top: 212px;
  background-color: #084154;
  border-radius: 0px 0px 0px 10px;
  z-index: 100;
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  background-color: #3ec6e0;
  height: 300px;

  h6 {
    margin-top: 80px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    transform: rotate(90deg);
    white-space: nowrap;
  }

  img {
    max-height: 77px;
    margin-bottom: 22px;
  }
`;


export const BottomSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  height: 84px;
  left: 1857px;
  top: 512px;
  h6{
      font-weight: 400;
      font-size: 14px;
  }
`;


export const Controls = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    img:hover{
        cursor: pointer;
    }
`;
