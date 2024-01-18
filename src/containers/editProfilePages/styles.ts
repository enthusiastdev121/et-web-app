import styled from "styled-components";

export const ParentContainer = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  min-height: 100vh;

  & > * {
    color: ${(p: any) => p.theme.base};
  }

  .dim-text {
    color: ${(p: any) => p.theme.textSecondary};
    opacity: 60%;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    @media (min-width: 1050px) {
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
    }
  }

  .arrow {
    color: ${(p: any) => p.theme.textDisabled};
    cursor: pointer;

    &:hover {
      transform: translateX(-2px);
      transition: all 0.3s ease-in-out;
    }

    @media (min-width: 1050px) {
      font-size: 40px;
    }
  }
`;

export const Input = styled.input`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
`;

export const Select = styled.select`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
`;

export const TextArea = styled.textarea`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
  min-height: 10rem;
  white-space: pre-line;
`;

export const InterestContainer = styled.div`
  label {
    padding: 0.5em 1em;
    color: ${(p: any) => p.theme.primary};
    border: 1px solid ${(p: any) => p.theme.primary};
    border-radius: 40px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }

  .default {
    padding: 0.5em 1em;
    color: ${(p: any) => p.theme.primary};
    border: 1px solid ${(p: any) => p.theme.primary};
    border-radius: 40px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }

  label:hover {
    background-color: ${(p: any) => p.theme.primary};
    color: ${(p: any) => p.theme.abs.white};
    transition: all 0.3s ease;
  }

  input:checked + label,
  .active {
    background-color: ${(p: any) => p.theme.primary};
    color: ${(p: any) => p.theme.abs.white};
  }
`;
