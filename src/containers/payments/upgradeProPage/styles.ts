import styled from "styled-components";

export const Nav = styled.div`
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
  height: 380px;
  @media (min-width: 768px) {
    height: 584px;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 1000px;

    @media (min-width: 768px) {
      width: 80vw;
      font-size: 40px;
      line-height: 51px;
    }
    /* @media (max-width: 1100px) {
      font-size: 40px;
    } */
  }

  .overlay {
    background: linear-gradient(92.79deg, rgba(0, 112, 244, 0.85) 0.95%, rgba(118, 101, 185, 0.85) 53.66%, rgba(239, 191, 215, 0.85) 97.04%);
    backdrop-filter: blur(1px);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    height: 380px;
    @media (min-width: 768px) {
      height: 584px;
    }
  }
  img {
    object-fit: cover;
  }
`;

export const Root = styled.main`
  background: ${(p) => p.theme.paper};
  color: ${(p) => p.theme.base};
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    @media (min-width: 768px) {
      font-size: 34px;
      line-height: 41px;
    }
    color: ${(p) => p.theme.base};
  }

  section {
    margin-top: 40px;

    @media (min-width: 768px) {
      margin-top: 80px;
    }
  }

  .grad-heading {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    background: linear-gradient(270deg, #efbfd7 0%, #7665b9 47.38%, #2282f2 97.82%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 49px;
    }
  }

  .create-portfolio {
    background: linear-gradient(93.74deg, rgba(255, 255, 255, 0) 28.56%, rgba(247, 239, 255, 0) 28.56%, ${(p) => p.theme.gradOne} 65.66%, ${(p) => p.theme.gradTwo} 87.19%);
  }
  div {
  }
`;

export const Width = styled.div`
  max-width: 1100px;
  width: 80vw;
  margin: 0 auto;
`;

export const PriceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 190px;
  max-width: 350px;
  width: 100%;
  background: ${(p) => p.theme.paper};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px 16px 8px 8px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto;
  padding: 2px;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 16px;
    height: 250px;
    padding: 10px;
  }
  .pricecard_top {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    position: absolute;
    top: 30px;
    /* left: 50%;
    transform: translateX(-50%); */

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  .pricecard_middle {
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .pricecard_bottom {
    /* font-size: 1.25rem; */
    line-height: 1.75rem;
  }

  &:hover {
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const PriceCardMiddle = styled(PriceCard)`
  height: 290px;
  .recommend {
    font-size: 11px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: ${(p) => p.theme.primary};
    border-radius: 26px;
    padding: 0 5px;
    color: white;
  }

  .pricecard_top {
    top: 35px;
  }
`;

export const Table = styled.table`
  background: #ffffff;
  box-shadow: 0px -1px 25px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  width: 100%;

  tr {
    display: flex;
    align-items: start;
    text-align: left;
    padding: 0.7em;

    @media (min-width: 768px) {
      padding: 1.5em;
      padding-left: 3em;
    }
  }

  tbody tr:nth-of-type(odd) {
    background: #f8f9fb;
  }

  tr > th:not(:first-child) {
    text-align: center;
  }

  tr > td:not(:first-child) {
    display: flex;
    justify-content: center;
  }

  th {
    font-weight: 700;
    /* font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    } */
    line-height: 24px;
    color: #000000;
  }

  th:first-child {
    width: 60%;
  }
  th:nth-child(2) {
    width: 20%;
    justify-self: center;
  }
  th:nth-child(3) {
    width: 20%;
    justify-self: center;
  }

  td:first-child {
    width: 60%;
    color: #000;
    font-weight: 600;

    /* --------For Responsive----- */
    font-size: 13px;
    line-height: 15px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  td:nth-child(2) {
    width: 20%;
    justify-self: center;
    text-align: center;
  }
  td:nth-child(3) {
    width: 20%;
    justify-self: center;
    text-align: center;
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

export const MobilePricing = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
  max-width: 350px;
  width: 100%;
  background: ${(p) => p.theme.paper};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px 16px 8px 8px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto;
  padding: 10px;
`;
