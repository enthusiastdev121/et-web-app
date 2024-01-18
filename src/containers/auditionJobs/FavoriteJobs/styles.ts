import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }

  .padding-x {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .select-styled {
    border-radius: 50px;
    border: 1px solid ${(p: any) => p.theme.border};
  }
`;
