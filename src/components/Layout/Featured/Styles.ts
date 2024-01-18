import styled from "styled-components";

export const Container = styled.div`
  .img-container {
    background: ${(p: any) => p.theme.abs.lightBlue};
    margin: 0 auto;
    border-radius: 3px;
    overflow: hidden;

    img {
      width: 200px;
      aspect-ratio: 0.66;
      object-fit: cover;
    }
  }
`;
