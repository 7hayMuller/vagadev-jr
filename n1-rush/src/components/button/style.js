import styled from "styled-components";

export const PurchaseButton = styled.button`

  width: 240px !important;
  height: 52px !important;
  all: unset;
  background-color: #3ec6e0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: transition all 0.5s;

  margin:auto auto !important;
  :hover {
    opacity: 0.7;
  }

  p {
    color: #ffffff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 18px;
  }
`;
