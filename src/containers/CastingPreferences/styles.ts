import styled from "styled-components";

export const CastingPreferencesContainer = styled.div`
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

  .padding-x {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

export const ContentContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-top: 2rem;

  .pref-container {
    border-bottom: 1px solid ${(p: any) => p.theme.border};
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .pref-heading {
    font-size: 18px;
    font-weight: 600;
    color: ${(p: any) => p.theme.primary};
  }

  input {
    margin-right: 5px;
  }

  .dropdown {
    background-color: ${(p: any) => p.theme.pure};
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    min-width: 300px;
  }
`;
