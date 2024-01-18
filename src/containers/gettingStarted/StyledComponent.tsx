import styled from "styled-components";
import { motion } from "framer-motion";
import { rgba } from "polished";
export const TitleBar = styled.div`
padding: 0 1rem;
@media (min-width: 768px) {
  padding: 0;
  }
  display: flex;
  max-width: 700px;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 600;
    font-size: 24px;
  }
`;
export const TitleTiles = styled.section`
  max-width: 700px;
  margin: 20px auto;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
  @media (max-width: 450px) {
    padding: 10px 10px;
    gap: 10px;
  }
  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 32px;
    @media (max-width: 450px) {
      gap: 10px;
    }
  }

  p {
    font-weight: 600;
    font-size: 16px;
    color: ${p => rgba(p.theme.base, 0.7)};
  }
  div:nth-child(1) .Done {
    color: #3c3c4399;
  }
  div:nth-child(2) .Done {
    color: #37c96a !important;
  }
  div:nth-child(2) {
    gap: 20px;
  }
  div:nth-child(2) p {
    color: rgba(60, 60, 67, 0.6);
  }
`;
export const VideoTile = styled.section`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  text-align: center;
  gap: 10px;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
  div {
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
  }
  div:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  h1 {
    font-weight: 600;
    font-size: 14px;
    padding: 10px;
  }
`;
export const Tab = styled.section`
  max-width: 700px;
  margin: auto;

  button {
    display: inline-block;
    padding: 12px 20px;
    margin: 10px 20px 10px 0px;
    background: #fff;
    border-radius: 50px;
    color: #000;
    border: 1px solid #e5e7eb;
    @media (max-width: 450px) {
      padding: 8px 12px;
      margin: 10px 10px 10px 0px;
    }
  }

  button.active {
    background: #0070f4;
    color: #fff;
  }
`;
export const Bgimg = styled.div`
  background-image: url(/images/Getting-started.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
  color: #fff;
  @media (max-width: 450px) {
    min-height: 630px;
  }
`;
export const Bannersec = styled(motion.div)`
  text-align: center;
  max-width: 524px;
  margin: auto;
  padding: 40px 10px;

  h1 {
    font-size: 18px;
    font-weight: 900;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  button {
    border: 1px solid #fff;
    padding: 10px 15px;
    border-radius: 5px;
  }
  p {
    font-size: 15px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
  img {
    margin: auto;
    padding: 14px;
  }
/* MOBILE MODAL DESIGN */

.internal-model{
        .popup-header{
          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            color: #FFFFFF;
            text-align:center;
            font-family: "Montserrat-Regular" !important;
          }
        }
        .image{
          margin:0 auto;
          margin-top:40px;
        }
        .popup-info{
          margin-top:16px;

          h4{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #FFFFFF;
            max-width:380px;
            margin:0 auto;
            text-align:center;
            font-family: "Montserrat-Regular" !important;
          }
          p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #FFFFFF;
            margin-top:15px;
            text-align:center;
            font-family: "Montserrat-Regular" !important;
          }
        }

        .slider-modal{
          margin-top:22px !important;
          max-width:90%;
          margin:0 auto;

          .take-tour-btn{
            display:flex;
            background: ${(p) => p.theme.primary};
            border-radius: 4px;
            padding:10px 24px;
            align-items:center;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #FFFFFF;
            margin-top:40px !important;
            margin:0 auto;

            img{
              margin-right:8px;
            }
          }

          // .slick-slide{
          //   margin-right:10px;
          //   margin-left:10px;
          // }
        }

        .single-slide{
          background:#fff;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding:26px 12px;
          img{
            margin:0 auto;
          }

          h5{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            color: ${(p) => p.theme.base};
            text-align:center;
            margin-top:22px;
            height:34px;
            line-height:17px;
          }
        }
      }

  
`;
export const Btn = styled.div`
  margin-top: 15px !important;
  a {
    margin: auto;
    display: flex;
    justify-content: center;
    border: 1px solid #fff;
    width: fit-content;
    padding: 2px 10px;
    @media (min-width: 768px) {
      padding: 10px 20px;

    }
    border-radius: 5px;
    align-items: center;
  }
  img {
    filter: invert(1);
    margin: unset;
  }
`;
