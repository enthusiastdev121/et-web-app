import styled from "styled-components";

export const Span = styled.span`
  color: ${(props) => props.theme.primary};

  small {
    color: ${(props) => props.theme.text};
  }
`;

export const Match = styled.span`
  background-color: #ebba15;
  color: ${(props) => props.theme.abs.white};
`;

export const MatchCard = styled.div``;

export const PageNumberContainer = styled.div`
  .label-check {
    padding: 1em;
    cursor: pointer;
  }

  .input-check:checked + .label-check {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
  }

  .active {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
  }
`;

export const Role = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;
