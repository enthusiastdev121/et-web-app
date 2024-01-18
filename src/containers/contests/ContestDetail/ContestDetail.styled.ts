import styled from "styled-components";

export const Container = styled.div`
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

  .breadcrumb {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .text-color-primary {
    color: ${(p) => p.theme.primary};
  }
  .text-color-secondory {
    color: #e5e7eb;
  }

  .action-panel {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 1530px) {
      font-size: 16px;
    }
  }

  .contest-img-container {
    // width: 66.66%;
    position: relative;
    // height: 259px;
    // border-radius: 8px;
    overflow: hidden;
    // width: 100%;
    // width: 572px;

    // @media (max-width: 1049px) {
    //   width: 100%;
    // }
    // @media (min-width: 1340px) {
    //   // width: 60vw;
    // }

    width: 100%;
    background: gray;
  }

  .contest-img {
    object-fit: cover;
    width: 100%;
    height: 187px;
    aspect-ratio: 3.1;
    object-fit: cover;
    width: 100%;
    height: 187px;
  }

  .contest-img-i {
    aspect-ratio: 3.1;
    width: 100%;
    height: 100%;
    // max-height: 187px;
    // object-position: -205px 0px;
    object-position: -100px -55%;
    object-fit: cover;
  }

  .contest-rules-img-1 {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 2.75;
    height: 141px;
  }

  .contest-rules-img-2 {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 3.1;
    height: 141px;
  }

  .full-img {
    aspect-ratio: 2;
  }

  .text {
    position: absolute;
    z-index: 10;
    bottom: 40px;
    width: 80%;
  }

  .contest-stats-container {
    li {
      display: flex;
      align-items: center;
    }

    .date {
      display: flex;
      flex-direction: column;
      align-items: start;

      span {
        margin-left: 30px;
      }
    }

    .icon {
      color: ${(p: any) => p.theme.primary};
      font-size: 20px;
      margin-right: 10px;
    }

    @media (min-width: 768px) {
      width: 40vw;
      margin-left: 40px;
    }
    @media (min-width: 1340px) {
      width: 30vw;
    }
  }

  .tabs-messages {
    button {
      margin-right: 10px;
      height: 33px;
      ling-height: 33px;
    }

    .de-active {
      padding: 0px 15px;
      border-radius: 200px;
      border: 1px solid #e5e7eb;
      background: ${(p) => p.theme.pure};
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: ${(p) => p.theme.base};
    }

    .active {
      padding: 0px 15px;
      border-radius: 200px;
      border: 1px solid #e5e7eb;
      background: ${(p) => p.theme.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #ffffff;
    }
  }
`;

export const InfoModalContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  width: 80vw;
  height: 80vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1340px) {
    width: 40vw;
  }

  .header {
    position: sticky;
    top: 0;
    background: ${(p: any) => p.theme.pure};
  }

  .footer {
    position: sticky;
    bottom: 0;
    background: ${(p: any) => p.theme.pure};
  }

  li {
    display: flex;
    align-items: start;
    margin-bottom: 5px;
  }

  li span {
    color: ${(p: any) => p.theme.primary};
    font-size: 20px;
    margin-right: 5px;
  }

  .content {
    /* height: 50vh; */
  }

  .icon {
    color: ${(p: any) => p.theme.primary};
    margin-right: 5px;
    font-size: 20px;
  }

  .date {
    font-size: 26px;
    margin-left: 26px;
  }
`;

export const Card = styled.div`
  // width: 33.33%;
  // height: 259px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-left: 15px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;

  @media (max-width: 1049px) {
    width: 100%;
    margin-left: 0px;
  }

  .enteries-votes {
    & > div :first-child {
      border-right: 1px solid transparent;
      border-image: -webkit-gradient(linear, left bottom, left top, from(#e5e7eb6b), to(#fff), color-stop(1, #fff), color-stop(1, #e5e7eb)) 21 30 30 21 repeat repeat;
      background-repeat: no-repeat;
      border-image-slice: 1;
    }
    > div {
      padding-top: 25px;
    }
  }

  .views-score {
    position: relative;

    img {
      position: absolute;
      top: 14px;
      right: 36px;
      height: 22px;
      width: 22px;
    }

    & > div :first-child {
      border-right: 1px solid transparent;
      border-top: 1px solid transparent;
      border-image-slice: 1;
      border-image: -webkit-gradient(linear, right top, right bottom, from(#e5e7eb6b), to(#fff), color-stop(1, #fff), color-stop(1, #e5e7eb)) 21 30 30 21 repeat repeat;
    }
    & > div :nth-child(2) {
      border-top: 1px solid transparent;
      border-image: -webkit-gradient(linear, right top, right bottom, from(#e5e7eb6b), to(#fff), color-stop(1, #fff), color-stop(1, #e5e7eb)) 21 30 30 21 repeat repeat;
      background-repeat: no-repeat;
      border-image-slice: 1;
      position: relative;
    }
    > div {
      padding-top: 25px;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    color: ${(p) => p.theme.base};
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${(p) => p.theme.base};
  }
`;
export const CardRule = styled.div`
  // display:flex;
  // margin-top: 20px;

  .rules-image {
    img {
      width: 49%;
      @media (max-width: 1339px) {
        width: 100%;
      }
    }
  }

  .expire-submit {
    margin-left: 15px;
    @media (max-width: 1339px) {
      margin-left: 0px;
      // margin-top: 20px;
    }
  }

  @media (max-width: 1049px) {
    display: grid;
  }
`;
export const CardExpires = styled.div`
  height: 70px;
  // margin-left:15px;
  background: #ffffff;
  border: 1px solid ${(p) => p.theme.primary};
  box-sizing: border-box;
  box-shadow: 0px 1px 6px 2px rgba(0, 112, 244, 0.15), 0px 1px 2px rgba(0, 112, 244, 0.06), 0px 1px 3px rgba(0, 112, 244, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 439px;
  }

  .expires-date {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${(p) => p.theme.base};
    span {
      color: ${(p) => p.theme.primary};
    }
  }

  .day {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${(p) => p.theme.base};
  }
`;

export const SubmitEntry = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: ${(p) => p.theme.primary};
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;
