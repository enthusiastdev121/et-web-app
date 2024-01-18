import styled from "styled-components";

export const Background = styled.div`
  background: ${(p: any) => p.theme.paper};
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1530px;
  width: 100%;
  margin: 0 auto;
  color: ${(p: any) => p.theme.base};

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }

  main {
    max-width: 1100px;
    // width: 1100px;

    @media (min-width: 1200px) {
      flex-direction: row;
    }

    .second-column {
      @media (min-width: 1200px) {
        margin-left: 20px;
        margin-top: 0;
      }
    }

    .quotes {
      @media (min-width: 1200px) {
        display: none;
      }
      @media (min-width: 1340px) {
        display: block;
      }
    }
  }
`;

export const Card = styled.div`
  background: ${(p: any) => p.theme.pure};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  max-width: 530px;
  padding: 30px 25px;
  position: relative;
  font-size: 15px;

  img {
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    height: 49px;
    width: 49px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #414042;
  }

  .stars-container {
    color: #ffb543;
    font-size: 20px;
  }

  .video-container {
    height: 270px;
    max-width: 480px;
    width: 100%;
    background-color: #000;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play {
    color: #fff;
    font-size: 50px;
    cursor: pointer;
  }
`;
