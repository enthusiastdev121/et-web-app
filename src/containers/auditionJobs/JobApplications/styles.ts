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

  nav {
    color: ${(p: any) => p.theme.textDisabled};
    font-weight: 600;
    border-bottom: 1px solid ${(p: any) => p.theme.border};
  }

  .nav-item {
    cursor: pointer;
    input:checked + label {
      color: ${(p: any) => p.theme.primary};
      padding-bottom: 0.75rem;
      border-bottom: 4px solid ${(p: any) => p.theme.primary};
    }
    label {
      cursor: pointer;
      &:hover {
        color: ${(p: any) => p.theme.primary};
        transition: all 0.3s ease;
      }
    }
  }

  .active-link {
    color: ${(p: any) => p.theme.primary};
    padding-bottom: 0.75rem;
    border-bottom: 4px solid ${(p: any) => p.theme.primary};
  }

  li {
    padding-bottom: 12px;
  }

  .invitation-container {
    background-color: ${(p: any) => p.theme.pure};
    color: ${(p: any) => p.theme.textSecondary};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    h2 {
      font-size: 30px;
      text-align: center;
      line-height: 1.2;
      font-weight: bold;

      @media (max-width: 500px) {
        font-size: 20px;
      }
    }

    p {
      @media (min-width: 1340px) {
        width: 50%;
      }
      @media (min-width: 1680px) {
        width: 40%;
      }
    }
  }
`;
