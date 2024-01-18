import Top from "./Top";
import Bottom from "./Bottom";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import { useHost } from "context/HostContext";
import AuditionFooter from "containers/whitelabelHomepage/etaudition/AuditionFooter";

export default function Footer({ whitelabel }) {
  return (
    <>
      {whitelabel === WHITELABELS.exploretalent ? (
        <StyledFooter className="text-center">
          <Top />
          <Bottom />
        </StyledFooter>
      ) : whitelabel === WHITELABELS.talento ? (
        <StyledFooter className="text-center">
          <Top />
          <Bottom />
        </StyledFooter>
      ) : whitelabel === WHITELABELS.auditions ? (
        <StyledFooter className="text-center">
          <AuditionFooter />
        </StyledFooter>
      ) : whitelabel === WHITELABELS.adorableKids ? (
        <StyledFooter className="text-center">
          <Top />
          <Bottom />
        </StyledFooter>
      ) : whitelabel === WHITELABELS.modeling ? (
        <StyledFooter className="text-center">
          <Top />
          <Bottom />
        </StyledFooter>
      ) : whitelabel === WHITELABELS.manilaModeling ? (
        <StyledFooter className="text-center">
          <Top />
          <Bottom />
        </StyledFooter>
      ) : whitelabel === WHITELABELS.cebuModeling ? (
        <StyledFooter className="text-center">
          <Top />
          <Bottom />
        </StyledFooter>
      ) : (
        <>
          <StyledFooter className="text-center">
            <Top />
            <Bottom />
          </StyledFooter>
        </>
      )}
    </>
  );
}

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
