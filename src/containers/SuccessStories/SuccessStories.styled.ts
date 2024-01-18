import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.pure};
  color: ${(p: any) => p.theme.base};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);

  li {
    &:first-child {
      padding-bottom: 1.25rem;
    }

    &:not(:first-child) {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${(p: any) => p.theme.border};
    }
  }
`;

export const H3 = styled.h3`
  &::after {
    content: "";
    display: block;
    border-radius: 5px;
    height: 4px;
    width: 40px;
    margin-top: 5px;
    background-color: ${(props) => props.theme.abs.lightBlue};
  }
`;
export const H4 = styled.h4`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
`;

export const PhotoItem = styled.div`
  border-radius: 5px;
  background-color: ${(p: any) => p.theme.abs.lightBlue};
  height: 90px;
  width: 84px;
  margin-right: 20px;
  cursor: pointer;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Message = styled.p`
  span {
    color: ${(p: any) => p.theme.primary};
    cursor: pointer;
  }
`;
