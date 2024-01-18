import styled from "styled-components";

export const Box = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};
  margin-bottom: 20px;

  & > * {
    color: ${(p: any) => p.theme.base};
  }
`;
