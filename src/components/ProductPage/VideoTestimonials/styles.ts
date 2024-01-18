import styled from "styled-components";

export const Root = styled.div`
  background: ${(p) => p.theme.paper};
  padding-bottom: 2em;
  color: ${(p) => p.theme.base};
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 1em;
  }

  a {
    color: ${(p) => p.theme.primary};
    font-weight: 500;
  }
`;

export const Banner = styled.div`
  position: relative;
  height: 100px;
  @media (min-width: 768px) {
    height: 400px;
  }

  .overlay {
    background: linear-gradient(
      92.79deg,
      rgba(117, 152, 172, 0.68) 0.95%,
      rgba(64, 101, 156, 0.595) 97.04%
    );
    backdrop-filter: blur(3px);
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
  line-height: 150%;
  color: ${(p) => p.theme.base};
  max-width: 1530px;
  padding: 2em;

  @media (min-width: 768px) {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 2em;
    padding: 2em 5em;
  }
h2{
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
}
p {
  margin-bottom: 2em;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  }
`;

export const Content = styled.div`
  max-width: 1530px;
  padding: 2em 0.9rem;

  @media (min-width: 768px) {
    width: 80vw;
    margin: 3em auto;
    padding: 0;
  }
`;

export const VideoCard = styled.div`
  width: fit-content;
  background: ${(p) => p.theme.pure};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
`;
