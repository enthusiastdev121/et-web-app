import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      width: 70%;
    }

    .title-padding{
        @media (max-width:1049px){
            padding-left:15px;
            padding-right:15px;
        }
    }

    .notify-button{

        .notify-text{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: ${(p) => p.theme.base}
            font-family: "Montserrat-Regular";
            padding-right:10px;
        }
        
        .switch {
            position: relative;
            display: inline-block;
            width: 47px;
            height: 26px;

            input { 
                opacity: 0;
                width: 0;
                height: 0;
              }

              input:checked + .slider {
                background-color: #2196F3;
              }
              
              input:focus + .slider {
                box-shadow: 0 0 1px #2196F3;
              }
              
              input:checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
              }

              .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: -3px;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;

                & :before {
                    position: absolute;
                    content: "";
                    height: 20px;
                    width: 20px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
                  }
              }

              .round {
                border-radius: 34px;

                & :before {
                    border-radius: 50%;
                  }
              }
          }
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  }
  `;

export const Card = styled.div`

  .inner-card{
      display:flex;
        padding:30px;
        background: #FFFFFF;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 4px;

        @media (max-width:1049px){
            display:grid;
        }
      
      .cover-image{
        min-width: 183px;
        height: 189px;

        @media (max-width:1049px){
            height: auto;
            margin-bottom:10px;
        }

        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius: 4px;
        }
      }

      .about-contest{

        @media (max-width:1049px){
            padding:0;
        }

          h4{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            color: ${(p) => p.theme.base}
            font-family: "Montserrat-Regular";
           
          }

          p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            font-family: "Montserrat-Regular";
            color: ${(p) => p.theme.base}
            line-height: 20px;
            margin-top:10px;
          }

          h6{
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            font-family: "Montserrat-Bold";
            margin-top:10px;
            

              span{
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                font-family: "Montserrat-Regular";
                color: rgba(60, 60, 67, 0.6);
              }
          }

          button{
              display:flex;
              align-items:center;
              padding:6.5px 24px;
              border-radius: 4px;
              border: 1px solid #2C8BED;
              background: #FFFFFF;
              color: ${(p) => p.theme.primary};
              font-style: normal;
                font-weight: 600;
                font-size: 16px;
                font-family: "Montserrat-Regular";
                margin-top:20px;


              img{
                  margin-right:10px;
              }
          }
      }
  }

  `;
