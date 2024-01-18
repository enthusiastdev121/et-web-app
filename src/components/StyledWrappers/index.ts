import { rgba } from "polished";
import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: ${(p: any) => p.theme.pure};
  display: flex;
  color: ${(p: any) => p.theme.base};
  // border: 1px solid #DFDFDF;
  border-radius: 5px;
  
  display: block;
  
  .form-control {
    background: ${(p: any) => p.theme.pure};
    height: 46px;
    width: 100px;
    margin: 0;
  }
  
  .react-tel-input {
    height: 46px;
    width: 100px;
  }
  
  .selected-flag {
    background: ${(p: any) => p.theme.pure};
  }
  
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background: ${(p: any) => p.theme.pure};
  }
  
  .country-list  {
    background: ${(p: any) => p.theme.pure};
  }
  
  .react-tel-input .country-list .country:hover {
    background: ${(p: any) => rgba(p.theme.paper, 0.5)};
  }

  .react-tel-input .country-list .country.highlight {
    background: ${(p: any) => rgba(p.theme.paper, 0.5)};
  }
  
  .react-tel-input .flag-dropdown.open .selected-flag {
  background: ${(p: any) => p.theme.pure};

}
  }
`;
// export const ContactWrapper = styled.div`
//   background: #f8f9fb;
//   display: flex;
//    color: ${p => p.theme.base};

//   .contact-input-container,
//   .PhoneInput {
//     width: 100%;
//   }

//   .contact-input-container {
//     .PhoneInputCountry,
//     input {
//       background-color: ${(p: any) => p.theme.pure};
//       border: 1px solid ${(p: any) => p.theme.border};
//       border-radius: 4px;
//       padding: 0.5em;
//     }

//     input {
//       width: 100%;
//       display: block;
//     }
//   }
// `;
