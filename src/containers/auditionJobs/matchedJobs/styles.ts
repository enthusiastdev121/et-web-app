import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  .mobile-padding {
    padding-left: 1.25rem /* 20px */;
    padding-right: 1.25rem /* 20px */;

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

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

  .justBtw {
    @media (min-width: 768px) {
      justify-content: space-between;
    }
  }
`;

export const FindCastingContainer = styled.div`
  background-color: ${(props) => props.theme.abs.lightBlue};

  select {
    color: ${(props) => props.theme.primary};
  }

  .active {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }

  .input-container {
    @media (min-width: 1680px) {
      grid-column: span 4 / span 4;
    }
  }
`;
