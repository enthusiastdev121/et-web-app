import { THEME } from "@/utils/constants/theme";
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  // margin-right:20px;
  // @media (max-width: 767px) {
  //   margin-right:0 !important;
  // }
  h2 {
    color: ${(p: any) => p.theme.text};

    a:hover {
      color: ${(p: any) => p.theme.primary};
      transition: all 0.3s ease;
    }
  }

  .play-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 5px;
    bottom: 90px;
    background: white;
    border-radius: 50%;
    color: #000;
  }

  img {
    max-width: 100%;
    width: 100%;
    aspect-ratio: ${THEME.profilePicRatio};
    object-fit: cover;

    @media (max-width: 767px) {
      width: 100%;
      /* height: 600px; */
    }

    @media (max-width: 499px) {
      width: 100%;
      /* height: 500px; */
    }
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: ${(p) => p.theme.base}
    padding-top: 13px;
  }
  .sub_title {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: rgba(60, 60, 67, 0.6);
    padding-top: 2px;
  }

  .follow-btn {
    margin-top: 10px;
    width: 152px;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    background: ${(p) => p.theme.paper};
    border: 1px solid #a1a1aa;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;
