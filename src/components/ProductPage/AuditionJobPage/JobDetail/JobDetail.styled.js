import styled from "styled-components";

export const MainCenter = styled.div`
  font-size: 14px;

  .top-btns {
    button {
      border-radius: 10px;
      padding: 0 10px;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }
    .blue {
      background-color: ${(p) => p.theme.primary};
    }
    .green {
      background-color: ${(p) => p.theme.abs.green};
    }
  }

  .blue-box {
    background-color: ${(p) => p.theme.abs.lightBlue};

    span {
      color: ${(p) => p.theme.primary};
      font-weight: 600;
    }

    .icons {
      color: ${(p) => p.theme.primary};
    }
  }

  .box {
    h3 {
      color: ${(p) => p.theme.primary};
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .blue-text {
    color: ${(p) => p.theme.primary};
  }

  .card {
    span {
      color: ${(p) => p.theme.abs.lightBlue};
    }

    li span {
      color: ${(p) => p.theme.primary};
      font-weight: bold;
    }
  }

  .role {
    background-color: ${(p) => p.theme.abs.yellowLight};
    border: 1px solid ${(p) => p.theme.abs.yellow};
    border-radius: 10px;
    margin: 1em 0;
    padding: 1.25rem;

    span {
      background-color: ${(p) => p.theme.abs.yellow};
      color: ${(p) => p.theme.abs.white};
      padding: 1px 10px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 5px;
    }

    ul li:first-child {
      color: ${(p) => p.theme.abs.darkBlue};
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
