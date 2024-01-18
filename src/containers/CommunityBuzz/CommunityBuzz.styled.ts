import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.pure};
  color: ${(p: any) => p.theme.base};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const PhotoItem = styled.div`
  border-radius: 500px;
  background-color: ${(p: any) => p.theme.abs.lightBlue};
  width: 60px;
  aspect-ratio: 1;
  margin-right: 15px;
  cursor: pointer;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const TextItem = styled.div`
  h3 {
    color: ${(p: any) => p.theme.primary};
    font-weight: 600;
    cursor: pointer;

    span {
      font-size: 12px;
      font-weight: normal;
      cursor: text;
    }
  }
`;
