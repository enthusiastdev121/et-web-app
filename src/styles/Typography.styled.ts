import styled from "styled-components";

export const H1 = styled.h1<Heading>`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2;
  font-weight: ${(p: any) => p.weight};
  font-size: ${(p: any) => p.size}px;
  color: ${(p: any) => p.color};
  line-height: ${(p: any) => p.lineHeight};

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const H2 = styled.h2<Heading>`
  font-size: 25px;
  font-weight: 800;
  line-height: 1.2;
  font-weight: ${(p: any) => p.weight};
  font-size: ${(p: any) => p.size}px;
  color: ${(p: any) => p.color};
  line-height: ${(p: any) => p.lineHeight};
`;

export const H3 = styled.h3<Heading>`
  font-size: 20px;
  font-weight: 600;
  font-weight: ${(p: any) => p.weight};
  font-size: ${(p: any) => p.size}px;
  color: ${(p: any) => p.color};
  line-height: ${(p: any) => p.lineHeight};
`;

export const H4 = styled.h4<Heading>`
  font-size: 18px;
  font-weight: 600;
  font-weight: ${(p: any) => p.weight};
  font-size: ${(p: any) => p.size}px;
  color: ${(p: any) => p.color};
  line-height: ${(p: any) => p.lineHeight};
`;
export const H5 = styled.h5<Heading>`
  font-size: 16px;
  font-weight: 600;
  font-weight: ${(p: any) => p.weight};
  font-size: ${(p: any) => p.size}px;
  color: ${(p: any) => p.color};
  line-height: ${(p: any) => p.lineHeight};
`;
export const H6 = styled.h6<Heading>`
  font-size: 16px;
  font-weight: 600;
  font-weight: ${(p: any) => p.weight};
  font-size: ${(p: any) => p.size}px;
  color: ${(p: any) => p.color};
  line-height: ${(p: any) => p.lineHeight};
`;

export const Body1 = styled.div`
  font-size: 15px;
  font-weight: normal;
`;

export const Body2 = styled.div`
  font-size: 14px;
  font-weight: normal;
`;

type Heading = {
  weight?: number;
  size?: number;
  color?: string;
  lineHeight?: number;
};
