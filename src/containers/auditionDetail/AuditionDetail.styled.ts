import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  .left {
    @media (min-width: 1050px) {
      width: 70%;
    }

    & > * {
      padding-left: 1.25rem;
      padding-right: 1.25rem;

      @media (min-width: 500px) {
        padding-left: 0px;
        padding-right: 0px;
      }
    }

    .roles-container {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  }

  .matched-roles {
    width: fit-content;
    background-color: #ffedd5;
    color: ${(p: any) => p.theme.abs.golden};
    font-weight: 600;
    padding: 5px 15px;
    border-radius: 50px;
  }
`;

export const BreadcrumbContainer = styled.div`
  ul li + li:before {
    padding: 8px;
    color: ${(p: any) => p.theme.textDisabled};
    content: "/";
  }

  .link {
    color: ${(p: any) => p.theme.primary};
  }

  li:last-child {
    color: ${(p: any) => p.theme.textDisabled};
  }
`;

export const Warning = styled.div`
  background-color: ${(p: any) => p.theme.abs.lightBlue};
  padding: 15px;

  .danger {
    color: ${(p: any) => p.theme.abs.danger};
    font-weight: bold;
  }
`;

export const Note = styled.div`
  background-color: ${(p: any) => p.theme.abs.lightBlue};
  padding: 15px;

  .blue {
    color: ${(p: any) => p.theme.primary};
    font-weight: bold;
  }
`;

export const JobDescriptionContainer = styled.div`
  .clock-icon {
    background-color: ${(p: any) => p.theme.primary};
    color: white;
    padding: 0.5em;
    border-radius: 100%;
  }

  .shortlisting {
    background-color: ${(p: any) => p.theme.abs.lightBlue};
  }

  li {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  li span {
    color: ${(p: any) => p.theme.primary};
  }

  .social-icons {
    color: ${(p: any) => p.theme.textSecondary};
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  .social-icon {
    border: 1px solid ${(p: any) => p.theme.textSecondary};
    border-radius: 100%;
    padding: 0.5em;
    display: block;
    width: fit-content;
  }
`;
