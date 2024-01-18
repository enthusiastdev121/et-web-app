import styled from "styled-components";

export const VideoCardContainer = styled.div`
  .video-overlay {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }

  .thumbnail-container {
    height: 260px;
    width: 100%;
    max-width: 463px;
    border: 1px solid ${(p: any) => p.theme.border};
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
