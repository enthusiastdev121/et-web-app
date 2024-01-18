import styled from "styled-components";

export const Card = styled.div`
  background: ${(p) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  .textLeft {
    @media (min-width: 1340px) {
      text-align: left;
    }
  }
  .heading-link {
    color: ${(p: any) => p.theme.primary};
    height: 29px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: ${(p) => p.theme.base}
    transition: all 0.3s ease;

    &:hover {
      color: ${(p: any) => p.theme.primary};
      height: 29px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: ${(p) => p.theme.base}
      transition: all 0.3s ease;
    }
  }

  .description {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${(p) => p.theme.base}
  }

  .content-ending {
    display: flex;
    align-items: center;
    .title {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }

    .time {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: ${(p) => p.theme.base}
    }
  }

  .view-contest {
    width: 132px;
    // height: 33px;
    align-items: center;
    background: ${(p) => p.theme.primary};
    border-radius: 4px;
    margin-right: 10px;
    padding: 8px 20px;
  }

  .rule {
    padding: 0;
    align-items: center;
    width: 80px;
    height: 33px;
    background: #ffffff;
    border-radius: 4px;
  }

  .image-contribute {
    object-fit: cover;
    border-radius: 9999px;
    width: 37px;
    height: 37px;
    display: inline-block;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .-space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(-0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }
`;

// export const PhotoItem = styled.div`
//   border-radius: 15px;
//   background-color: ${(p) => p.theme.abs.lightBlue};
//   width: 183px;
//   height: 189px;
//   overflow: hidden;
//   position: relative;
//   border-radius: 8px;

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 15px;
//   }

//   img {
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//   }
// `;
export const PhotoItem = styled.div<{ src: string }>`
  border-radius: 15px;
  background-color: ${(p) => p.theme.abs.lightBlue};
  width: 183px;
  height: 189px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  
  background: transparent url(${(p) => p.src}) no-repeat 0 0;
  width: 130px;
  height: 130px;
}
`;

export const ContestInfo = styled.div`
  .blue {
    color: ${(p) => p.theme.primary};
  }
  .box {
    background-color: ${(p) => p.theme.abs.lightBlue};
    width: 62px;
    height: 62px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  small {
    color: ${(p) => p.theme.abs.red};
  }
`;

export const LeaderBoardContainer = styled.div`
  .gray {
    background-color: #f5f7f9;
  }

  .leaderboard-input {
    position: absolute;
    opacity: 0;
  }

  .leaderboard-label {
    padding: 0.5em 2em;
    display: inline-block;
    border-radius: 30px;
    font-weight: 600;
    color: #6887a5;
    cursor: pointer;
    background-color: ${(p: any) => p.theme.abs.lightBlue};

    &:hover {
      background-color: ${(p: any) => p.theme.primary};
      color: white;
      transition: all 0.3s ease;
    }
  }

  .leaderboard-input:checked + .leaderboard-label {
    background-color: ${(p: any) => p.theme.primary};
    color: white;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
  }

  .nav-item:not(:first-child) {
    margin: 5px;
  }

  .nav-item:first-child {
    margin: 5px 5px 5px 0;
  }

  .card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    overflow: hidden;

    .img-container {
      position: relative;
      height: 210px;
      width: 100%;

      img {
        object-fit: cover;
        object-position: top;
      }
    }

    .info-container {
      padding: 20px;
      height: 110px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      background-color: ${(p: any) => p.theme.pure};
    }

    li {
      display: flex;
      align-items: start;
      margin-right: 15px;
      font-size: 13px;

      span {
        color: ${(p: any) => p.theme.primary};
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
`;
