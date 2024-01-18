import styled from "styled-components";

export const LikeBtn = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.abs.white};
`;

export const GreenBtn = styled.button`
  background-color: #37c96a;
  color: ${(props) => props.theme.abs.white};
`;

export const H3 = styled.h3`
  color: ${(props) => props.theme.primary};

  span {
    color: ${(props) => props.theme.text};
  }
`;
