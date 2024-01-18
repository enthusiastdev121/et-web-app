import styled from "styled-components";

export const PrimaryAlertContainer = styled.div`
  background-color: ${(p: any) => p.theme.abs.lightBlue};
  border-radius: 50px;

  .icon-primary {
    color: ${(p: any) => p.theme.primary};
    font-size: 26px;
  }
`;
