import styled from "styled-components";

export const Root = styled.div`
  background: ${(p) => p.theme.paper};
  padding-bottom: 2em;
  color: ${(p) => p.theme.base};
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    text-align: center;
    color: #ffffff;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: rgba(60, 60, 67, 0.6);
  }

  a {
    color: ${(p) => p.theme.primary};
    font-weight: 500;
  }
`;

export const Banner = styled.div`
  position: relative;
  height: 400px;

  .overlay {
    background-image: linear-gradient(
      92.79deg,
      rgba(0, 112, 244, 0.85) 0.95%,
      rgba(118, 101, 185, 0.85) 53.66%,
      rgba(239, 191, 215, 0.85) 97.04%
    );
    height: 400px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  img {
    object-fit: cover;
  }
`;

export const Paper = styled.div`
  background-color: ${(p) => p.theme.pure};
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(p) => p.theme.base}
  max-width: 1530px;
  padding: 2em;

  @media (min-width: 768px) {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 2em;
  }
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(p) => p.theme.base}
  max-width: 1530px;
  padding: 2em;

  @media (min-width: 768px) {
    width: 80vw;
    margin: 3em auto;
    padding: 0;
  }
`;

export const CelebImg = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    border-radius: 8px;
  }
`;

export const Overlay = styled.div`
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.4);
  height: 97%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 50px;
  cursor: pointer;
`;

export const SuccessCard = styled.div`
  height: 717px;
  max-width: 361px;
  width: fit-content;
  background: ${(p) => p.theme.pure};
  font-size: 14px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 16px;
  }
`;
