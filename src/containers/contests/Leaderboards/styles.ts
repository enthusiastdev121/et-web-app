import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }
`;

export const AboutSection = styled.div`
  .about-section-title {
    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      color: ${(p) => p.theme.base}
      font-family: "Montserrat-Bold";
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: ${(p) => p.theme.base};
      font-family: "Montserrat-Regular";
      margin-top: 10px;
    }
  }

  .tab-button {
    display: flex;
    align-items: center;
    overflow-x: auto;
    margin-top: 20px;

    .active-button {
      padding: 10px;
      background: ${(p) => p.theme.pure};
      border-radius: 4px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid ${(p) => p.theme.primary};
      margin-right: 10px;
      min-width: 270px;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
      h6 {
        color: ${(p) => p.theme.primary};
        min-width: 157px;
        margin-left: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
      }
    }

    .deactive-button {
      padding: 10px;
      background: ${(p) => p.theme.pure};
      border-radius: 4px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid transparent;
      margin-right: 10px;
      min-width: 270px;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        opacity: 0.5;
      }
      h6 {
        color: ${(p) => p.theme.base}
        min-width: 157px;
        margin-left: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }

  .winner-list {
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 20px;

    .cover-images {
      width: 100%;
      height: 140px;
      object-fit: cover;
    }

    .closing-soon {
      background: rgba(0, 0, 0, 0.9);
      border-radius: 4px;
      position: absolute;
      bottom: 5px;
      right: 5px;
      padding: 5px 10px;

      p {
        color: #fff;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        font-family: "Montserrat-Medium";

        span {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }

    .main-winner-section {
      display: flex;
      align-items: baseline;
      justify-content: center;
      position: absolute;
      top: 0;
      width: 100%;

      .second-winner {
        text-align: center;

        .user-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          border: 2.5567px solid #67a4ff;
          margin: 0 auto;

          @media (max-width: 768px) {
            width: 70px;
            height: 70px;
          }
        }
        h6 {
          background: #67a4ff;
          height: 24px;
          line-height: 24px;
          width: 24px;
          text-align: center;
          border-radius: 50%;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
          margin: 0 auto;
          position: relative;
          margin-top: -15px;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }

        .user-point {
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            color: ${(p) => p.theme.primary};
            font-family: "Montserrat-Regular";
            margin-left: 10px;
          }
        }
      }

      .third-winner {
        text-align: center;

        .user-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          border: 2.5567px solid #ff774d;
          margin: 0 auto;

          @media (max-width: 768px) {
            width: 70px;
            height: 70px;
          }
        }
        h6 {
          background: #ff774d;
          height: 24px;
          line-height: 24px;
          width: 24px;
          text-align: center;
          border-radius: 50%;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
          margin: 0 auto;
          position: relative;
          margin-top: -15px;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }

        .user-point {
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            color: ${(p) => p.theme.primary};
            font-family: "Montserrat-Regular";
            margin-left: 10px;
          }
        }
      }

      .first-winner {
        text-align: center;
        margin-left: 25px;
        margin-right: 25px;
        position: relative;
        margin-top: 50px;

        @media (max-width: 768px) {
          margin-left: 15px;
          margin-right: 15px;
        }

        .crown-image {
          margin: 0 auto;
          width: 63px;
          height: 63px;
          position: absolute;
          top: -50px;
          left: 35px;
        }

        .user-image {
          width: 140px;
          height: 140px;
          object-fit: cover;
          border-radius: 50%;
          border: 2.5567px solid #ffca28;
          margin: 0 auto;

          @media (max-width: 768px) {
            width: 100px;
            height: 100px;
          }
        }
        h6 {
          background: #ffca28;
          height: 24px;
          line-height: 24px;
          width: 24px;
          text-align: center;
          border-radius: 50%;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
          margin: 0 auto;
          position: relative;
          margin-top: -15px;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }

        .user-point {
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            color: ${(p) => p.theme.primary};
            font-family: "Montserrat-Regular";
            margin-left: 10px;
          }
        }
      }
    }
    .other-winner {
      padding-top: 20px;
      padding-bottom: 20px;
      position: relative;
      background-color: ${(p) => p.theme.pure};
      color: ${(p) => p.theme.base};

      & > div :nth-child(2) {
        border-top: none !important;
      }

      & > div :nth-child(2) .sr-number p {
        background: #ffca28;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin: 0 auto;
      }

      & > div :nth-child(2) .user-iamage img {
        border: 2px solid #ffca28;
      }

      & > div :nth-child(3) .sr-number p {
        background: #67a4ff;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin: 0 auto;
      }

      & > div :nth-child(3) .user-iamage img {
        border: 2px solid #67a4ff;
      }

      & > div :nth-child(4) .sr-number p {
        background: #ff774c;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin: 0 auto;
      }

      & > div :nth-child(4) .user-iamage img {
        border: 2px solid #ff774c;
      }

      .view-all-btn {
        text-align: center;

        img {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 210px;
          opacity: 0.5;
          object-fit: cover;
          width: 100%;
        }

        button {
          background: transparent;
          border: 1px solid ${(p) => p.theme.primary};
          box-sizing: border-box;
          border-radius: 100px;
          padding: 10px 24px;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          color: ${(p) => p.theme.primary};
          z-index: 10;
          position: relative;
        }
      }

      .single-row {
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: 1px solid #f7f7f7;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
      }

      .heading-number {
        width: 35%;
        p {
          // text-align:center;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          color: ${(p) => rgba(p.theme.base, 0.7)};
          font-family: "Montserrat-Regular";
        }
        @media (max-width: 768px) {
          display: none;
        }
      }

      .heading-iamage {
        width: 15%;
        p {
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          color: ${(p) => rgba(p.theme.base, 0.7)};
          font-family: "Montserrat-Regular";
        }
        @media (max-width: 768px) {
          display: none;
        }
      }

      .heading-name {
        width: 15%;
        p {
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          color: ${(p) => rgba(p.theme.base, 0.7)};
          font-family: "Montserrat-Regular";
        }
        @media (max-width: 768px) {
          display: none;
        }
      }

      .heading-point {
        width: 15%;
        p {
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          color: ${(p) => rgba(p.theme.base, 0.7)};
          font-family: "Montserrat-Regular";
        }
        @media (max-width: 768px) {
          display: none;
        }
      }

      .sr-number {
        width: 5%;
        text-align: center;

        @media (max-width: 768px) {
          width: 10%;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }
      }

      .user-iamage {
        width: 10%;

        @media (max-width: 768px) {
          width: 25%;
        }

        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
          // margin: 0 auto;
        }
      }

      .user-name {
        width: 20%;

        @media (max-width: 768px) {
          width: 40%;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }
      }

      .user-point {
        display: flex;
        align-items: center;
        width: 15%;
        justify-content: center;

        @media (max-width: 768px) {
          width: 25%;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          color: ${(p) => p.theme.primary};
          font-family: "Montserrat-Regular";
          margin-left: 10px;
        }
      }

      .user-subpoint {
        width: 15%;
        text-align: center;

        @media (max-width: 768px) {
          width: 33.33%;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }
      }

      .user-totalpoint {
        width: 15%;
        text-align: center;
        @media (max-width: 768px) {
          width: 33.33%;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          color: ${(p) => p.theme.base}
          font-family: "Montserrat-Regular";
        }
      }

      .view-entry {
        width: 20%;
        text-align: end;

        @media (max-width: 768px) {
          width: 33.33%;
        }

        button {
          background: ${(p) => p.theme.primary};
          color: #fff;
          padding: 5px 10px;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          font-family: "Montserrat-Light";
          border-radius: 4px;
        }
      }
    }
  }
`;
