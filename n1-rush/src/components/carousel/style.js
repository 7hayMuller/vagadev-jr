import styled from "styled-components";
import img from "../../assets/img/principal_banner_desktop.jpg";

export const Container = styled.div`
  //background-color: blue;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
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
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  /* img {
    position: relative;
    width: 100%;
    height: auto;
    max-width: 1920px;
    margin: auto auto auto auto;
  } */
`;
export const Image = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 840px;
  background: url(${(props) => props.image}) no-repeat center center;
  -webkit-background-size:cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin:auto auto auto auto  
`;

export const Details = styled.div`
  max-width: 420px;
  color: #ffffff;
  text-align: right;
  margin-left: 55%;
  margin-top: 209px;
  position: relative;
  width: 100%;


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
