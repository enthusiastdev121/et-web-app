import styled from "styled-components";

export const ExperienceCardContainer = styled.div`
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: ${(p: any) => p.theme.pure};

  .blue {
    color: ${(p: any) => p.theme.primary};
  }

  h3 {
    margin-bottom: 5px;
  }
`;
