import styled from "styled-components";

export const Container = styled.div`
  background-image: ${(props) => props.image};
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 627px;
  min-height: 368px;
  position: relative;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Label = styled.div`
  width: 100%;
  max-height: 61px;
  min-height: 31.64px;
  background-color: #3ec6e0;
  color: #084154;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  img {
    position: absolute;
    right: 26px;
    width: 248px;
  }
`;

export const LeftEdge = styled.div`
  width: 10px;
  max-height: 61px;
  min-height: 31.64px;
  background-color: #084154;
  border-bottom-left-radius: 5px;
  margin-right: 19px;
`;