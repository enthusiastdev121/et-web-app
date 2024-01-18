import styled from "styled-components";

export const Root = styled.div`
  background: ${(p) => p.theme.paper};
  padding-bottom: 2em;
  color: ${(p) => p.theme.base};
  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
  }
`;

export const Banner = styled.div`
  position: relative;
  height: 200px;
  @media (min-width: 768px) {
    height: 400px;
  }
  .overlay {
    background-image: linear-gradient(
      92.79deg,
      rgba(105, 183, 255, 0.68) 0.95%,
      rgba(15, 110, 199, 0.68) 97.04%
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
  color: ${(p) => p.theme.base};
  max-width: 1100px;
  padding: 2em;
  padding: 1em;

  @media (min-width: 768px) {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 2em;
    padding: 4em;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    @media (min-width: 768px) {
      font-size: 24px;
    }
    line-height: 26px;
    margin-bottom: 1em;
  }

  h3,
  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 1em;
    margin-bottom: 5px;

    @media (min-width: 768px) {
      margin-top: 1.5em;
    }
  }

  h4 {
    font-size: 15px;
  }

  summary {
    font-size: 21px;
    h2 {
      display: inline;
      margin-bottom: 0;
      cursor: pointer;
      @media (max-width: 500px) {
        font-size: 16px;
      }
    }
  }

  a {
    color: ${(p) => p.theme.primary};
    font-weight: 500;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 0.9em;
    }
    font-size: 14px;
    
  }

  label {
    display: block;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 3px;
  }

  input,
  textarea,
  select {
    background: ${(p) => p.theme.pure};
    border: 1px solid ${(p) => p.theme.border};
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 1em;
  }

  textarea {
    min-height: 150px;
  }

  .links-list {
    margin-top: 1em;

    li {
      padding: 0.5em;
      font-size: 16px;
    }
  }
`;

export const VideoTestimonialCard = styled.div`
  height: 617px;
  // max-width: 361px;
  width: fit-content;
  background: #fff;
  font-size: 14px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 767px) {
    height: fit-content;
  }

  @media (min-width: 900px) {
    height: 600px;
  }

  @media (min-width: 1110px) {
    height: 530px;
  }

  h3,
  h4 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 1em;
    margin-bottom: 5px;

    @media (min-width: 768px) {
      margin-top: 1.5em;
    }
  }

  img {
    object-fit: cover;
  }

  .play-btn-container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 1rem 2rem;

    &:hover {
      background-color: #bd3b3b;
      transition: all 0.3s ease;
    }
  }
`;

export const FeaturedTestimonialCard2 = styled(VideoTestimonialCard)`
  height: fit-content;

  .image-container {
    width: 100%;
    height: 242px;
    background-color: ${(p) => p.theme.base}
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Ovderlay = styled.div`
  background: rgb(0, 0, 0);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    opacity: 0.7;
  }
`;

export const FeaturedTestimonialCard = styled.div`
  display: flex;
  gap: 20px;
  background: #fff;
  font-size: 14px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 2em 1em;

  .img-container {
    background: #000;
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 150px;
    width: 120px;
  }

  img {
    object-fit: contain;
    margin: auto 0;
  }

  .text-container {
    width: 100%;
  }

  h3 {
    font-weight: bold;
    line-height: 110%;
  }

  p {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
