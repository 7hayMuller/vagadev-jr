import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -10;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none; 
  }
`;

export const Slider = styled.div`
  top: 0;
  left: 0;
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;

`;

export const Details = styled.div`
  max-width: 420px;
  color: #ffffff;
  text-align: right;
  margin-left: 1080px;
  margin-top: 209px;

  position: absolute;
  width: 100%;
  top: 0px;

  h3 {
    font-weight: 900;
    font-size: 46px;
    text-transform: uppercase;
  }
  p {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #3ec6e0;

  h1 {
    font-weight: 900;
    font-size: 70px;
    padding: 0;
  }
  small {
    margin-top: 12px;
    font-size: 28px;
    font-weight: 900;
  }
`;
