import styled from "styled-components";

export const List = styled.ul`
  .active {
    font-weight: 600;
    color: ${(props) => props.theme.primary};
  }
`;
