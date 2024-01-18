import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.primary};

  input {
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 8px;

    &::placeholder {
      color: white;
    }
  }
`;

export const Main = styled.main`
  background-color: #f5f7f9;
`;

export const InfoContainer = styled.div`
  background-color: ${(p) => p.theme.pure};

  .new {
    color: ${(props) => props.theme.primary};
  }

  .reschedule {
    color: #cc4848;
  }

  .marginY {
    @media (min-width: 1050px) {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
`;

export const NavContainer = styled.nav`
  background-color: ${(p) => p.theme.pure};
  color: #98a9bb;

  .active {
    color: ${(p) => p.theme.primary};
    border-bottom: 4px solid ${(p) => p.theme.primary};
  }
`;

export const ApplicationListContainer = styled.nav`
  background-color: ${(p) => p.theme.pure};

  .deadline {
    color: #ff0000;
  }

  .invited {
    color: #37c96a;
  }
`;
