import styled from "styled-components";

export const Main = styled.main`
  .blue-text {
    font-size: 30px;
    font-weight: bold;
    color: ${(p: any) => p.theme.primary};
  }

  .tags li {
    background-color: #eef3f8;
    color: #6887a5;
    font-size: 13px;
    font-weight: 600;
    padding: 1em 2em;
    border-radius: 20px;
    width: fit-content;
  }

  .social-icons li {
    background-color: #3a3a3a;
    color: white;
    padding: 1em;
    border-radius: 100%;
  }
`;

export const HeroContainer = styled.div`
  .banner-img-container {
    height: 70vh;
    width: 100vw;

    @media (max-width: 768px) {
      height: 100vh;
    }
  }

  .banner-img {
    object-fit: cover;
  }

  .banner-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 70vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;

    @media (max-width: 768px) {
      height: 100vh;
    }
  }

  .content {
    position: relative;
    z-index: 30;
  }

  .stats li div:first-child {
    font-weight: bold;
    font-size: 25px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  .stats li div:last-child {
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 25px;
    }
  }
`;
