import styled from "styled-components";

export const SignupCard = styled.div<{ active: boolean }>`
  background-color: ${(props) => props.theme.pure};
  border: 4px solid ${(props) => (props.active ? props.theme.primary : "#fff")};
  cursor: pointer;
  height: 100%;
  width: 100%;
  box-shadow: 3px 7px 25px #c6d6e6;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2.5em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1em;
  }
  @media (max-width: 400px) {
    padding: 1em;
    font-size: 16px;
  }

  &:hover {
    border: 4px solid ${(props) => props.theme.primary};
  }
`;
