import styled from "styled-components";

export const BtnPrimary = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background: #0CCD85;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
    transition: filter 0.2s ease;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const BtnNoBack = styled.button`
  font-weight: 600;
  font-size: 18px;
  font-family: 'Roboto';
  line-height: 22px;
  color: #fff;
  padding: 12px 24px;
  &:hover {
    color: #ffffff;
    background: #0CCD85;
    transition: all 0.3s ease;
    border-radius: 8px;
  }
  &:active {
    transform: translateY(1px);
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
export const BtnPrimaryOutline = styled(BtnPrimary)`
  border: 1px solid #0CCD85;
  background: transparent;
  color: #0CCD85;
  &:hover {
    color: #ffffff;
    background: #0CCD85;
    transition: all 0.2s ease;
  }
  &:active {
    transform: translateY(1px);
  }
`;
export const BtnPrimaryWhite = styled(BtnPrimary)`
  background-color: #fff;
  color: #0CCD85;
`;
