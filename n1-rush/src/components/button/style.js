import styled from "styled-components";

export const PurchaseButton = styled.button`
  position: relative !important;
  width: 240px !important;
  height: 52px !important;
  all: unset;
  //background-color: ${props => props.state.color};
  background-color: #3ec6e0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: transition all 0.5s;

  margin: auto auto !important;
  
  p {
    color: #ffffff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 18px;
    //margin-right: ${props => props.state.labelMargin};
    margin-right: 0px !important;

    
  }

  img {
    position: absolute;      
    margin-left: 123px !important;
    bottom: 0;
    width: 68px;
    height: 79px;
    //display: ${props => props.state.showMario}; 
    display  : none;
    display: none;   
  }

  :hover:enabled {
    opacity: 0.7;
    cursor: pointer;
  }

  :disabled{
    background-color: #084154;
    p{
      margin-right: 50px !important;
    }
    
    img{
      display: block;
    }
  }
`;
