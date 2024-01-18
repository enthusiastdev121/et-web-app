import styled from "styled-components";

export const Question = styled.div`
  background-color: ${(props) => props.theme.abs.lightBlue};
  color: ${(props) => props.theme.primary};
  border-radius: 30px;
  padding: 0.5em 2.5em;
  margin-bottom: 1rem;
  font-size: 18;
  font-weight: bold;
`;
