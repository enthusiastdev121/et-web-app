import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);

  ul {
    max-height: 1000px;
    overflow-y: scroll;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }

  h4 {
    color: ${(p: any) => p.theme.primary};
    font-size: 16px;
    font-weight: 600;
  }

  .secondary-info {
    color: ${(p: any) => p.theme.textSecondary};
    font-size: 12px;
  }

  .matched-star {
    color: ${(p: any) => p.theme.abs.golden};
    background-color: #ffedd5;
    padding: 0.5em;
    border-radius: 100%;
  }
`;
