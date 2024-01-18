import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: ${(props) => props.theme.pure};
  max-width: 825px;
  max-height: 825px;
  text-align: center;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.pure};
  border: 4px solid ${(props) => props.theme.pure};
  transition: all 0.3s ease;

  &:hover {
    border: 4px solid ${(props) => props.theme.primary};
  }
`;
