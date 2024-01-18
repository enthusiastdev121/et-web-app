import styled from "styled-components";

export const PhotoContainer = styled.div`
  color: ${(props) => props.theme.abs.midLightBlue};
  border: 2px dashed ${(props) => props.theme.abs.midLightBlue};
  font-weight: 600;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.abs.white};
  box-shadow: 3px 7px 50px #01010173;
  border-radius: 20px;
`;

export const Dot = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.abs.white};
  margin: 0 4px;
  display: inline-block;
`;

export const Frame = styled.div`
  transform: rotate(-20deg);

  img {
    border: 16px solid ${(props) => props.theme.abs.white};
  }
`;
