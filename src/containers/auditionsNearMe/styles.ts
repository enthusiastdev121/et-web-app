import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};

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

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .nav-item {
    padding-bottom: 12px;
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
  }

  .blue-bg {
    background-color: ${(p: any) => p.theme.abs.lightBlue};
  }

  .gap-issue {
    @media (min-width: 768px) {
      gap: 4rem /* 40px */;
    }

    @media (min-width: 1340px) {
      gap: 5rem /* 80px */;
    }
  }
`;
