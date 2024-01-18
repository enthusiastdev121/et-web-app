import styled from "styled-components";

export const LeaderBoardContainer = styled.div`
  color: ${(p) => p.theme.base};

  .gray {
    background-color: #f5f7f9;
  }

  .padding-x {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media (min-width: 500px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .leaderboard-input {
    position: absolute;
    opacity: 0;
  }

  .leaderboard-label {
    padding: 0.3em 1.3em;
    font-size: 14px;
    display: inline-block;
    border-radius: 30px;
    font-weight: 500;
    color: ${(p) => p.theme.primary};
    cursor: pointer;
    background-color: "#FFFFFF";

    @media (min-width: 1680px) {
      font-size: 1rem;
      line-height: 1.2;
      padding: 0.5em 2em;
    }

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

  .tabs-messages {
    &:not(:first-child) {
      padding: 8px 18px;
    }
    display: flex;
    overflow-x: auto;

    button {
      margin-right: 10px;
      height: 33px;
      ling-height: 33px;
      white-space: nowrap !important;
    }

    .de-active {
      padding: 0px 15px;
      border-radius: 200px;
      border: 1px solid ${(p) => p.theme.primary};
      background: #ffffff;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: ${(p) => p.theme.primary};
    }

    .active {
      padding: 0px 15px;
      border-radius: 200px;
      border: 1px solid ${(p) => p.theme.primary};
      background: ${(p) => p.theme.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #ffffff;
    }
  }

  .card {
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
    // overflow: hidden;
    padding: 10px;
    height: 498px;
    border-left: ;
    transition: all 0.3s ease-in-out;

    .heading-link:hover {
      color: ${(p: any) => p.theme.primary};
      transition: all 0.3s ease;
    }

    .img-container {
      position: relative;

      a {
        width: 100%;
        text-align: center;
      }

      .contestant-img {
        object-fit: cover;
        object-position: top;
        display: block;
        margin: 0 0;
        width: 481px;
        height: 381px;
      }
    }

    .info-container {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${(p: any) => p.theme.pure};
    }

    .person-title {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50px;
      }
      h1 {
        margin-left: 7.9px;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        color: ${(p) => p.theme.base}
      }
    }

    .text-color-primary {
      color: ${(p) => p.theme.primary};
    }
    .text-color-secondory {
      color: #e5e7eb;
    }

    .action-panel {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }

    .content-list {
      line-height: 25px;
      h1 {
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        color: ${(p) => p.theme.base}
        line-height: 25px;
      }
      span {
        font-weight: 400;
        font-size: 13px;
        text-align: center;
        color: rgba(60, 60, 67, 0.6);
      }
    }
    .padding-hi {
      padding-left: 20px;
      padding-right: 20px;
      font-size: 20px;
    }
    li {
      line-height: 150%;
    }

    .voting-content {
      display: none;
    }
    .border-top {
      border-top: 1px solid #e5e7eb;
    }

    &:hover {
      padding: 0px;
      // width: 412px;
      transform: scale(1.1);
      z-index: 1;

      .voting-content {
        display: block;
        margin-top: 10px;
        background: #ffffff;
        padding-bottom: 10px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06),
          0px 0px 3px rgba(0, 0, 0, 0.1);

        .sucessfully-badge {
          background: #eff6ff;
          border-radius: 2000px;
          padding: 9px 10px;
          display: flex;
          align-items: center;
          max-width: 283px;
          margin: 20px auto;

          h5 {
            width: 28px;
            height: 28px;
            line-height: 28px;
            border-radius: 50%;
            background: #3b82f6;
            font-weight: 700;
            font-size: 15px;
            color: #ffffff;
            margin-bottom: 0;
            text-align: center;
          }

          p {
            color: ${(p) => p.theme.primary};
            font-weight: 500;
            font-size: 15px;
            margin-left: 10px;
          }
        }

        h1 {
          margin-top: 10px;
          margin-bottom: 12px;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: rgba(60, 60, 67, 0.6);
        }

        .rating {
          display: flex;
          justify-content: space-between;
          align-item: center;
          margin-left: 13px;
          margin-right: 13px;

          .rate-count-deactive {
            cursor: pointer;
            width: 24px;
            height: 24px;
            text-align: center;
            // padding: 4px 10px;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            box-sizing: border-box;
            border-radius: 4px;

            align-items: center;
            display: flex;

            h2 {
              font-weight: 600;
              font-size: 18px;
              text-align: center;
              color: ${(p) => p.theme.base}
              margin: 0 auto;
            }
          }

          .rate-count-active {
            cursor: pointer;
            width: 24px;
            height: 24px;
            text-align: center;
            // padding: 4px 10px;
            background: ${(p) => p.theme.primary};
            border: 1px solid #e5e7eb;
            box-sizing: border-box;
            border-radius: 4px;
            justify-content: space-between;
            align-items: center;
            display: flex;

            h2 {
              font-weight: 400;
              font-size: 18px;
              text-align: center;
              color: #ffffff;
              margin: 0 auto;
            }
          }
        }

        .rating-titie {
          display: flex;
          justify-content: space-between;
          align-item: center;
          margin-top: 20px;
          .bad-count {
            position: absolute;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            text-align: right;
            color: #a1a1aa;
            bottom: 0;
            left: 14px;
          }

          .great-count {
            position: absolute;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            text-align: right;
            color: #a1a1aa;
            bottom: 0;
            right: 14px;
          }
        }

        .submit-vote {
          width: 127px;
          height: 33px;
          background: ${(p) => p.theme.primary};
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
`;

export const Popup = styled.div`
  background: ${(p: any) => p.theme.pure};
`;
