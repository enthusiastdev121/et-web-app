import styled from "styled-components";
import { THEME } from "@/utils/constants/theme";

export const CardContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 0px;
  /* transition: all 0.3s easy-in-out; */
  height: fit-content;
  transition: all 0.3s ease;

  &:hover {
    margin-top: -20px;
  }

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
    bottom: 61px;
    background: white;
    border-radius: 50%;
  }

  img {
    max-width: 100%;
    aspect-ratio: ${THEME.profilePicRatio};
    object-fit: cover;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

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
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 auto;
    text-align: center;
  }
  .sub_title {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: ${(p) => p.theme.gray};
    padding-top: 2px;
  }
`;
