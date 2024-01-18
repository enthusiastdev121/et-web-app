import { createGlobalStyle } from "styled-components";
import { WHITELABEL } from "../utils/envProviders";

const CustomStyles = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.pure};
    color: ${(props) => props.theme.text};
    font-family: ${(p) => p.theme.fontFamily || `"Montserrat", sans-serif`};
    overflow-x: hidden;

     #nprogress .bar {
        background: ${(props) => props.theme.primary} !important;
      }

    .clr-primary {
        color: ${(props) => props.theme.primary}; 
    }
    .txt-link {
        color: ${(props) => props.theme.primary};
    }
    .txt-danger {
        color: ${(props) => props.theme.abs.danger};
    }
    .txt-secondary { 
        color: ${(props) => props.theme.textSecondary};
    }
    .txt-disabled {
        color: ${(props) => props.theme.textDisabled};
    }
    .txt-green { 
        color: ${(props) => props.theme.abs.green};
    }
    .txt-light-blue {
        color: ${(props) => props.theme.abs.lightBlue};
    }

    .bg-primary-clr {
        background-color: ${(props) => props.theme.primary};
    }

    .edit-profile-shadow {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        background-color: ${(p) => p.theme.pure};
    }
    .profile-shadow {
        box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        background-color: ${(p) => p.theme.pure};
    }

    .bg-paper {
        background: ${(p) => p.theme.paper};
    }
    .bg-primary {
        background: ${(p) => p.theme.primary};
    }
    .bg-base {
        background: ${(p) => p.theme.base};
    } 
    .bg-border {
        background: ${(p) => p.theme.border};
    } 
    .bg-pure {
        background: ${(p) => p.theme.pure};
    } 
    .txt-paper {
        color: ${(p) => p.theme.paper};
    }
    .txt-primary {
        color: ${(p) => p.theme.primary} !important;
    }
    .txt-base {
        color: ${(p) => p.theme.base};
    } 
    .txt-pure {
        color: ${(p) => p.theme.pure};
    } 
    .txt-border {
        color: ${(p) => p.theme.border};
    }
    .txt-gray {
        color: ${(p) => p.theme.abs.grayLight};  
    }
}

select {
    display: block;
    padding: 0.8rem 0.5rem;
    appearance: none; 
    background-image:  url(${WHITELABEL === "exploretalent" || WHITELABEL === "auditions" ? "/images/Icon.svg" : "/images/arrow-white.png"});
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 0.7em;
    outline: none !important;
  }
`;

export const GlobalStyle = () => (
  <>
    <CustomStyles />
  </>
);
