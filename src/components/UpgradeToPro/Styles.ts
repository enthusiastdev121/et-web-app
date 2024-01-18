import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 317px;
  /* max-width: 500px; */

  @media (max-width: 1049px) {
    max-width: 100%;
    margin-top: 3rem;
  }

  .background-img {
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    position: relative;
    z-index: 10;
    height: 100%;

    h3 {
      font-size: 30px;
      color: white;
      font-weight: bold;
      line-height: 1.2;
    }
  }
`;
