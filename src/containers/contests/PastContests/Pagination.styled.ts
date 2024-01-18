import styled from "styled-components";

export const Span = styled.span`
  color: ${(props) => props.theme.primary};

  small {
    color: ${(props) => props.theme.text};
  }
`;

export const Match = styled.span`
  background-color: #ebba15;
  color: ${(props) => props.theme.abs.white};
`;

export const MatchCard = styled.div``;

export const PageNumberContainer = styled.div`
  ul {
    display: flex;
  }

  li {
    height: 44px;
    line-height: 44px;
    width: 44px;
    text-align: center;
    margin-right: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer !important;

    @media (max-width: 767px) {
      height: 30px;
      line-height: 30px;
      width: 30px;
      font-size: 12px;
      margin-right: 4px;
    }
  }

  .selected {
    padding: 0;
    margin: 0;
    background: #f0f8ff;
    color: #000000;
  }

  .previous {
    background: #f0f8ff;
    width: 116px !important;
    color: ${(p) => p.theme.primary};
    border-radius: 100px;
    @media (max-width: 767px) {
      width: 30px;
    }

    span {
      span {
        @media (max-width: 767px) {
          display: none !important;
        }
      }
    }
  }

  .next {
    background: #f0f8ff;
    width: 116px !important;
    margin-right: 0;
    color: ${(p) => p.theme.primary};
    border-radius: 100px;
    @media (max-width: 767px) {
      width: 30px;
    }
    span {
      span {
        @media (max-width: 767px) {
          display: none !important;
        }
      }
    }
  }

  .next a span,
  .previous a span {
    display: flex;
    align-items: center;
  }

  .label-check {
    padding: 1em;
    cursor: pointer;
  }

  .input-check:checked + .label-check {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
  }

  .active {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
  }
`;

export const Role = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const ListContainer = styled.div`
  // display:flex;
  // flex-wrap:wrap;

  // @media (min-width:787px) and (max-width:1024px) {
  //   & >div{
  //     margin-right:10px;
  //     }
  // }

  //   @media (min-width:1025px) and (max-width:1049px) {
  //     & >div:nth-child(3n){
  //       margin-right:0px;
  //       }
  //   }

  //   @media (min-width:1512px) and (max-width:1898px) {
  //     & >div:nth-child(3n){
  //       margin-right:0px;
  //       }
  //   }

  //   @media (min-width:1899px) {
  //     & >div:nth-child(4n){
  //       margin-right:0px;
  //       }
  //   }
`;
