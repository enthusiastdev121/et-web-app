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

  .padding-x {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

export const JobsContainer = styled.div`
  background: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: ${(p: any) => p.theme.base};

  .link-text {
    color: ${(p: any) => p.theme.primary};
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const DeleteBtn = styled.button`
  color: ${(p: any) => p.theme.textSecondary};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 100%;
  /* padding: 0.5em 0.8em; */
  padding: 0.5em;
`;

export const FilledCartContainer = styled.div`
  .card {
    background: ${(p: any) => p.theme.pure};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 1em;

    @media (min-width: 768px) {
      justify-content: space-between;
    }
  }

  .link-text {
    color: ${(p: any) => p.theme.primary};
    text-decoration: underline;
    font-weight: 500;
  }

  .role {
    color: ${(p: any) => p.theme.primary};
    font-weight: 600;
  }

  .dates {
    color: ${(p: any) => p.theme.textSecondary};
  }

  .secondary-text {
    color: ${(p: any) => p.theme.textSecondary};
  }
`;
