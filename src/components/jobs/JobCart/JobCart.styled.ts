import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  color: ${(p: any) => p.theme.base};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);

  ul {
    max-height: 1000px;
    overflow-y: scroll;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }

  .job-item {
    color: ${(p: any) => p.theme.primary};
  }

  .icon {
    color: ${(p: any) => p.theme.textSecondary};
    font-size: 14px;
  }
`;
