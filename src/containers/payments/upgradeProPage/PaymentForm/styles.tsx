import styled from "styled-components";

export const Root = styled.div`
  max-width: 1100px;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
     color: ${p => p.theme.base};
    margin-bottom: 40px;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
     color: ${p => p.theme.base};
  }

  li {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
   color: ${p => p.theme.base};
`;

export const Input = styled.input`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  display: block;
`;

export const Select = styled.select`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
`;
