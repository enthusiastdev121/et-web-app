import { rgba } from "polished";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const HeadingSmall = tw.h4`
  text-sm font-bold mb-2 mt-4
`;

export const ChipBox = styled.div<{ active: boolean }>`
  background: ${(p) => (p.active ? p.theme.primary : rgba(p.theme.primary, 0.3))};
  color: ${(p) => (p.active ? "#fff" : p.theme.base)};
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: ${p => p.theme.primary};
    color: #fff;
  }
`;

export const ContentBox = styled.div`
  // padding: 20px 40px;
  max-width: 600px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.border};
  background: transparent;
  padding-bottom: 0.5em;
`;

export const CountryPik = styled.div`
.ReactFlagsSelect-module_flagsSelect__2pfa2 {
  padding-bottom: 0;
}

.ReactFlagsSelect-module_selectOptions__3LNBJ {
  max-height: 260px;
  background: ${p => p.theme.paper};
}

.ReactFlagsSelect-module_filterBox__3m8EU {
  background: ${p => p.theme.paper};

  input {
   background: ${p => p.theme.paper};
   color: inherit;
 }
}

`



  ;

export const SlideHeading = styled.h2`
  font-weight: 700;
  font-size: 21px;
  line-height: 26px;
   color: ${p => p.theme.base};
  margin-bottom: 1.5em;
`;
