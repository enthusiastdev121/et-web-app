import styled from "styled-components";

export const Span = styled.span`
  color: ${(props) => props.theme.primary};

  small {
    color: ${(props) => props.theme.text};
  }
`;

export const Match = styled.span`
  background-color: #ebba15;
  color: ${(props) => props.theme.abs.white};
`;

export const Role = styled.div`
  /* background-color: rgba(255, 255, 255, 0.8); */
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  .matched-role-card {
    background-color: #fefce8;
    border: 1px solid #e7e09b;
    border-radius: 4px;
  }

  .matched-roles {
    width: fit-content;
    background-color: #ffedd5;
    color: ${(p: any) => p.theme.abs.golden};
    font-weight: 600;
    padding: 5px 15px;
    border-radius: 50px;
  }

  h4,
  h5 {
    color: ${(p: any) => p.theme.text};
  }

  li {
    font-weight: 600;
    color: ${(p: any) => p.theme.text};
    margin-bottom: 10px;

    span {
      color: ${(p: any) => p.theme.primary};
    }
  }

  .seeking {
    color: ${(p: any) => p.theme.text};
  }
`;

export const CardContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${(p: any) => p.theme.text};

    a:hover {
      color: ${(p: any) => p.theme.primary};
      transition: all 0.3s ease;
    }
  }

  .secondary-text {
    color: ${(p: any) => p.theme.textSecondary};
  }

  .clock-icon {
    background-color: ${(p: any) => p.theme.primary};
    color: white;
    padding: 0.5em;
    border-radius: 100%;
  }

  .social-icons {
    color: ${(p: any) => p.theme.textDisabled};
  }

  .social-icon {
    border: 1px solid ${(p: any) => p.theme.textDisabled};
    border-radius: 100%;
    padding: 0.5em;
    display: block;
    width: fit-content;
  }

  .fav {
    border: 1px solid ${(p: any) => p.theme.textDisabled};
    border-radius: 100%;
    padding: 0.5em;
  }

  .active-fav {
    border: 1px solid ${(p: any) => p.theme.abs.golden};
    border-radius: 100%;
    padding: 0.5em;
    color: ${(p: any) => p.theme.abs.golden};
  }

  .link-text {
    color: ${(p: any) => p.theme.primary};
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

export const DeleteBtn = styled.button`
  color: ${(p: any) => p.theme.textSecondary};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 100%;
  padding: 0.5em;
`;
