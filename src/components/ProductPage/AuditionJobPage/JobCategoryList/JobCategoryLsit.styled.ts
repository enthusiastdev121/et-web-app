import { lighten, rgba } from "polished";
import styled from "styled-components";

export const Root = styled.div``;

export const Header = styled.header``;

export const Content = styled.div`
  .form-label {
    font-size: 14px;
    cursor: pointer;

    @media (min-width: 1680px) {
      font-size: 19px;
    }
  }

  // .form-input:checked + .form-label {
  //   color: ${(props) => props.theme.primary};
  //   font-weight: 600;
  // }

  // .blue-text {
  //   color: ${(props) => props.theme.primary};
  // }
`;

export const Jobs = styled.div`
  color: ${(props) => props.theme.primary};
`;

export const SearchContainer = styled.div`
  background-color: ${(props) => rgba(props.theme.primary, 0.25)};

  select {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.pure};
  }

  .active {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;
