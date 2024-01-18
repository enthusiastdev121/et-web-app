import { darken } from "polished";
import styled from "styled-components";

import tw from "tailwind-styled-components";

export const AuditionRoot = styled.div`
  .bg-primary {
    background: ${(p) => p.theme.primary};
  }

  .txt-primary {
    color: ${(p) => p.theme.primary};
  }

  .bg-secondary {
    background: ${(p) => p.theme.secondary};
  }

  .txt-secondary {
    color: ${(p) => p.theme.secondary};
  }

  .bg-lghtBlack {
    background: ${(p) => p.theme.lghtBlack};
  }

  .txt-lghtBlack {
    color: ${(p) => p.theme.lghtBlack};
  }

  .bg-yellow {
    background: ${(p) => p.theme.yellow};
  }

  .txt-yellow {
    color: ${(p) => p.theme.yellow};
  }
  .primary-btn {
    background: ${(p) => p.theme.primary};
    color: #fff;
    padding: 0.8rem 3rem;
    border-radius: 15rem;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    transition: 0.3s;
    &:hover {
      background: ${(p) => darken(0.1, p.theme.primary)};
      transition: 0.3s;
    }
  }

  .yellow-btn {
    background: ${(p) => p.theme.yellow};
    color: ${(p) => p.theme.secondary};
    padding: 0.8rem 3rem;
    border-radius: 15rem;
    font-size: 20px;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      background: ${(p) => darken(0.15, p.theme.yellow)};
      transition: 0.3s;
    }
  }

  .h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 120%;
  }
  .h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
  }
  .h3 {
    font-size: 40px;
    font-weight: 500;
    line-height: 130%;
  }
  .h4 {
    font-size: 30px;
    font-weight: 700;
    line-height: 130%;
  }

  @media screen and (max-width: 1024px) {
    .h1 {
      font-size: 50px;
    }
    .h2 {
      font-size: 38px;
    }
    .h3 {
      font-size: 32px;
      font-weight: 500;
    }
    .h4 {
      font-size: 28px;
    }
    .primary-btn,
    .yellow-btn {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 767px) {
    .h1 {
      font-size: 36px;
    }
    .h2 {
      font-size: 28px;
    }
    .h3 {
      font-size: 24px;
      font-weight: 500;
    }
    .h4 {
      font-size: 20px;
    }
    .primary-btn,
    .yellow-btn {
      font-size: 16px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1172px;
  width: 90vw;
  margin: 0 auto;
  @media screen and (min-width: 1560px) {
    max-width: 1340px;
  }
`;

export const P1 = tw.p`md:text-lg text-base font-normal`;
