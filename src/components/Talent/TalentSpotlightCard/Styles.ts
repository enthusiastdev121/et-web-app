import { THEME } from "@/utils/constants/theme";
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  // margin-right:20px;

  .person-name {
    position: absolute;
    left: 5px;
    bottom: 13px;
    align-items: center;
    display: flex;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      color: #ffffff;
      margin-left: 4px;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: ${THEME.profilePicRatio};
    object-fit: cover;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 81.44%,
      rgba(0, 0, 0, 0.6) 100%
    );
    border-radius: 8px;
  }

  .border-radius-image {
    border-radius: 50px;
    width: 24px;
    height: 24px;
  }
`;
