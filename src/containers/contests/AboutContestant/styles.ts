import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};
  color: ${(p) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }
`;

export const AboutSection = styled.div`
  color: ${(p) => p.theme.base};

    .about-section-title{
      h3{
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: ${(p) => p.theme.base}
        font-family: "Montserrat-Bold";
      }

      p{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: ${(p) => p.theme.base};
        font-family: "Montserrat-Medium";
        margin-top:20px;
      }

      .about-part{
        background-color:#EFF6FF;
        padding:10px;
        display:flex;
        align-items:center;
        border-radius:200px;
        width:fit-content;
        margin-top:20px;

        .about-i{
          margin-right:10px;
        }

        h4{
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          font-family: "Montserrat-Regular";
          color: ${(p) => p.theme.primary};

          @media (max-width: 500px) {
            font-size: 12px;
          }
        }

        .about-Chevron{
          margin-left:10px;
        }
      }
    }

    .contest-terms-single{
      margin-top:60px;

      ul{
        p{
          margin-top:20px;
          li{
            margin-left:15px;
            list-style:auto;
            
            }
          }

        & >p :first-child{
          margin-top:10px !important;
        }
      }

      h4{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: ${(p) => p.theme.base};
        text-transform:uppercase;
        font-family: "Montserrat-Bold";
      }
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: ${(p) => p.theme.base};
        line-height:21px;
        font-family: "Montserrat-Regular";
        margin-top:20px;
        letter-spacing:0.5px;
      }

      & >p :nth-child(2){
        margin-top:10px !important;
      }

      &:first-child{
        margin-top:30px !important;
      }
    }
  `;
