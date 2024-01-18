import styled from "styled-components";

export const Nav = styled.nav`
  height: 75px;
  background-color: ${(p) => p.theme.pure};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a1a1aa;
  max-width: 1100px;
  width: 80vw;
  margin: 0 auto;
  text-align: center;
`;

export const Banner = styled.div`
  position: relative;
  height: 530px;

  @media (min-width: 1540px) {
    height: 584px;
  }

  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
    text-align: center;
    color: #ffffff;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    width: 80vw;

    @media (max-width: 1100px) {
      font-size: 32px;
      line-height: 41px;
    }
  }

  .overlay {
    background: linear-gradient(
      274.95deg,
      rgba(17, 76, 145, 0.85) 13.19%,
      rgba(108, 128, 234, 0.85) 81.54%,
      rgba(215, 131, 255, 0.85) 110.95%
    );
    backdrop-filter: blur(2px);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    height: 530px;

    @media (min-width: 1540px) {
      height: 584px;
    }
  }

  img {
    object-fit: cover;
  }
`;

export const MobileBanner = styled.div`
  position: relative;
  height: 380px;
  h1 {
    font-weight: 700;
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    width: 80vw;
  }

  .overlay {
    background: linear-gradient(
      274.95deg,
      rgba(17, 76, 145, 0.85) 13.19%,
      rgba(108, 128, 234, 0.85) 81.54%,
      rgba(215, 131, 255, 0.85) 110.95%
    );
    backdrop-filter: blur(2px);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    height: 530px;

  }

  img {
    object-fit: cover;
  }
`;

export const Width = styled.div`
  /* max-width: 1100px; */
  width: 90vw;
  @media (min-width: 768px) {
    width: 80vw;
    }
  margin: 0 auto;
  /* background-color: red; */
`;

export const FeatureCard = styled.div`
  background: ${(p) => p.theme.pure};
  color: ${(p) => p.theme.base};
  box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.02),
    0px -6px 15px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 18px;
  max-width: 600px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  /* Adding responsive css */
  @media (min-width: 510px) {
flex-direction: row;
  }
  align-items: center;
  // justify-content: center;
  gap: 40px;
  padding: 40px;
  margin: 0 auto;
  font-weight: 600;
`;

export const PlansContainer = styled.div`
  background: linear-gradient(
    266.26deg,
    ${(p) => p.theme.gradOne} 27.84%,
    ${(p) => p.theme.gradTwo} 66.17%,
    ${(p) => p.theme.gradOne} 100%
  );
  padding: 6em 0;
  margin-top: 40px;

  h2 {
    color: ${(p) => p.theme.base};
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    @media (min-width: 768px) {
      font-size: 34px;
    line-height: 41px;
    }
    text-align: center;
  }

  .plans {
    display: grid;
    // grid-template-columns: repeat(4, 312px);
    // grid-template-columns: repeat(auto-fill, minmax(250px, 312px));
    gap: 20px;
    justify-items: center;
    align-items: self-end;
    max-width: 1100px;
    overflow-x: auto;
    position: relative;

    .arrow-right {
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06),
        0px 1px 3px rgba(0, 0, 0, 0.1);
      border-radius: 8px 0px 0px 8px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 36px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }
`;

export const PlanCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 22px 24px rgba(206, 206, 206, 0.331184);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  max-width: 400px;
  width: 90vw;
  @media (min-width: 768px) {
    max-width: 320px;
    width: 100%;
    }
  height: 324px;
  cursor: default;

  h3 {
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    display: flex;
    align-items: flex-start;
  }

  .time {
    margin-top: -5px;
    margin-left: 25px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .billed {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(60, 60, 67, 0.6);
    margin-left: 20px;
  }

  .offer-ends {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${(p) => p.theme.base};
    margin-left: 20px;

    span {
      font-weight: 700;
    }
  }

  .active {
    background: ${(p) => p.theme.primary};
    color: #fff;
  }

  .today-only {
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #ffffff;
    background: ${(p) => p.theme.primary};
    border-radius: 26px;
    padding: 0 7px;

    position: absolute;
    top: 10px;
    right: 10px;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s ease-out;
  }
`;

export const PlanButton = styled.button`
  background: #ffffff;
  border: 1px solid ${(p) => p.theme.primary};
  border-radius: 26px;
  color: ${(p) => p.theme.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.233333px;
  padding: 1em 2em;
  max-width: 257px;
  width: 100%;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    background: ${(p) => p.theme.primary};
    color: #fff;
  }

  &:hover {
    transform: scale(0.99);
  }
`;

export const Footer = styled.footer`
  background: #171a1f;
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding: 2em 0;
  @media (min-width: 768px) {
    padding: 6em 0;
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: #ffffff;

    @media (min-width: 768px) {
      font-size: 34px;
      line-height: 41px;
    }
  }
`;

export const Overlay = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  background: linear-gradient(
    286.22deg,
    #458bcb -11.37%,
    #378ff7 28.66%,
    #6966fe 70.1%,
    #5b1be1 123.48%
  );
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 50px 70px;
  color: #fff;
  position: relative;

  @media (max-width: 500px) {
    border-radius: 0;
  }

  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    max-width: 515px;
    margin: 0 auto;

    @media (max-width: 500px) {
      font-size: 22px;
      line-height: 120%;
    }
  }

  .card {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    max-width: 208px;
    height: 307px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;

    p {
      font-size: 13px;
      font-weight: 600;
    }

    button {
      font-size: 11px;
      opacity: 0.7;
    }

    .line {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 8px;
      width: 34px;
      height: 2px;
    }
  }
`;
