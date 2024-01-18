import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f7f9;
  .box {
    background-color: ${(p: any) => p.theme.pure};
  }
`;
