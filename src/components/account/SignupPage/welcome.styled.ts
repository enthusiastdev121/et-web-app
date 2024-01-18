import styled from "styled-components";

export const ModalPopup = styled.div`
  .modal-popup {
    background-image:url("/images/popup-bg.svg");
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 8px;
    padding-top:50px;
    padding-bottom:50px;
    background-size: cover;

    .close-button{
      cursor:pointer;
      position:absolute;
      right:20px;
      top:15px;
    }
    
    .modal-content{
      max-width:800px;

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
    }
  }
  `;
