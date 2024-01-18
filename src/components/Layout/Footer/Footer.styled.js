import styled from "styled-components";
import tw from "tailwind-styled-components";

const footerColor = styled.footer`
  background-color: ${(props) => props.theme.bgFooterLower};
  color: ${(props) => props.theme.footerText};
`;

export const StyledFooter = tw(footerColor)`
`;

const footerUpperColor = styled.div`
  background-color: ${(props) => props.theme.bgFooterUpper};
`;

export const FooterUpper = tw(footerUpperColor)`


`;
