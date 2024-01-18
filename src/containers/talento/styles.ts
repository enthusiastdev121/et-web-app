import styled from "styled-components";

export const Banner = styled.div`
    video{
        position:absolute;
        top:0;
        width:100vw !important;
        left:0;
        height:100%;
        object-fit:cover;
        
        @media (max-width:767px){
          height:100%;
      
    }
      }
`;

export const MainInfo = styled.div`
padding-top:132px;
@media (max-width:786px){
  padding-top:80px;
}
`;


export const AuditionFeesTableFilter = styled.div`

      .tab-rows{
        margin-bottom:38px;
      }

.fees-table{
  background: #393939;
  border-radius: 4px;
  width:100%;

  .table-fees-header{
    background: #2C2B2B;
    border-radius: 4px 4px 0px 0px;


    .table-fees-info{
      display:flex;
      align-items:center;
      margin-left: 5%;
      margin-right: 5%;

      .table-fees-left{
        min-width:30%;
        width:30%;


        .table-fees-left-inner{
          padding:15px 0;
          // margin-left:33px;
          text-align:left;

          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
          }
        }
      }


      .table-fees-left-two{
        min-width:30%;
        width:30%;
        text-align:left;
        overflow-wrap: break-word;

        .table-fees-left-inner{
          padding:15px 0;
         

          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
          }
        }
      }

      .table-fees-right{
        min-width:20%;
        width:20%;
        text-align:left;

        .table-fees-right-inner{
          padding:15px 0;
          // margin-right:33px;
          

          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
          }
        }
      }

      .table-fees-right-two{
        min-width:20%;
        width:20%;
        text-align:left;

        .table-fees-right-inner{
          padding:15px 0;
        

          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #FFFFFF;
          }
        }
      }
    }
  }


  .table-fees-body{

    & >div :last-child{
        .table-fees-left{
          .table-fees-left-inner{
            border-bottom:none !important;
          }
        }
        .table-fees-left-two{
          .table-fees-left-inner{
            border-bottom:none !important;
          }
        }
        .table-fees-right{
          .table-fees-right-inner{
            border-bottom:none !important;
          }
        }
        .table-fees-right-two{
          .table-fees-right-inner{
            border-bottom:none !important;
          }
        }
    }
   
    .table-fees-info{
      display:flex;
      align-items:center;
      margin-left: 5%;
      margin-right: 5%;
      border-bottom: 1px solid #545454;

      .table-fees-left{
        min-width:30%;
        width:30%;

        .table-fees-left-inner{
          padding:15px 0px;
          // margin-left:33px;
          // border-bottom:1px solid #545454;
          height:75px;
          h5{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
            width: 100%;
            max-width: 144px;
            overflow: hidden;
            height:44px;
            line-height:22px;
            overflow:hidden;
          }
        
        }
      }

      .table-fees-left-two{
        min-width:30%;
        width:30%;

        .table-fees-left-inner{
          padding:15px 0px;
          // border-bottom:1px solid #545454;
          height:75px;
          h5{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
            width: 100%;
            max-width: 144px;
            overflow: hidden;
            height:44px;
            line-height:22px;
            overflow:hidden;
          }
        
        }
      }

      .table-fees-right{
        min-width:20%;
        width:20%;
        

        .table-fees-right-inner{
          padding:15px 0px;
          // margin-right:33px;
          height:75px;
          // border-bottom:1px solid #545454;

          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #FFFFFF;
            overflow: hidden;
            height:44px;
            line-height:44px;
            overflow:hidden;
          }
        }
      }

      .table-fees-right-two{
        min-width:20%;
        width:20%;
        .table-fees-right-inner{
          padding:15px 0px;
          height:75px;
          // border-bottom:1px solid #545454;

          h5{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #FFFFFF;
            overflow: hidden;
            height:44px;
            line-height:44px;
            overflow:hidden;
          }
        }
      }

    }
  }


}
`;

export const AuditionFeesTable = styled.div`
      width:90%;

      @media (max-width:1340px){
        width:100%;
      }

        .title-fees-table{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:38px;

          @media (max-width:768px){
            display:grid;
          }

            h3{
              font-style: normal;
              font-weight: 500;
              font-size: 26px;
              color: #FFFFFF;
              span{
              font-weight: 700;
              }
          }
            button{
              border: 1px solid #F31212;
              border-radius: 4px;
              width: 80px;
              height: 35px;
              color: #F31212;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
            }
          }

           .fees-table{
            background: #393939;
            border-radius: 4px;
            width:100%;

            .table-fees-header{
              background: #2C2B2B;
              border-radius: 4px 4px 0px 0px;


              .table-fees-info{
                display:flex;
                align-items:center;
                margin-left: 33px;
                margin-right: 33px;

                .table-fees-left{
              

                    min-width:70%;
                    width:70%;

                  .table-fees-left-inner{
                    padding:15px 0;
                    // margin-left:33px;
                    text-align:left;

                    h5{
                      font-style: normal;
                      font-weight: 700;
                      font-size: 18px;
                      color: #FFFFFF;
                    }
                  }
                }

                .table-fees-right{
              
                  min-width:30%;
                  width:30%;

                  .table-fees-right-inner{
                    padding:15px 0;
                    // margin-right:33px;
                    text-align:left;

                    h5{
                      font-style: normal;
                      font-weight: 700;
                      font-size: 18px;
                      color: #FFFFFF;
                    }
                  }
                }
              }
            }


            .table-fees-body{
             
              .table-fees-info{
                display:flex;
                align-items:center;
                margin-left: 33px;
                margin-right: 33px;
                border-bottom: 1px solid #545454;

                .table-fees-left{

                    min-width:70%;
                    width:70%;

                  .table-fees-left-inner{
                    padding:15px 0px;
                    // margin-left:33px;
                    // border-bottom:1px solid #545454;
                    height:75px;
                    h5{
                      font-style: normal;
                      font-weight: 500;
                      font-size: 15px;
                      color: #FFFFFF;
                      width: 100%;
                      max-width: 375px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    h6{
                      font-style: normal;
                      font-weight: 500;
                      font-size: 13px;
                      color: #FFFFFF;
                      display:flex;
                      align-items:center;
                      margin-top:2px;
                      width: 100%;
                      max-width: 375px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }

                .table-fees-right{
              
                  min-width:30%;
                  width:30%;
                  .table-fees-right-inner{
                    padding:15px 0px;
                    // margin-right:33px;
                    height:75px;
                    // border-bottom:1px solid #545454;

                    h5{
                      font-style: normal;
                      font-weight: 700;
                      font-size: 16px;
                      color: #FFFFFF;
                    }
                  }
                }
              }
            }


          }
`;

export const SingleInfo = styled.div`
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid #B8B8B8;
        border-radius: 4px;
        padding:45px 30px;
        h3{
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            color: #F31212;
            text-align:center;
            margin-bottom:17px;
            font-family: "Montserrat-Bold";

        }
        p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        text-align:center;
        height:64px;
        line-height:32px;
        font-family: "Montserrat-Regular";
        }
`;

export const UesrInfo = styled.div`
padding-top:132px;

@media (max-width:786px){
  padding-top:80px;
}

.user-image{
  position:relative;
  padding-left:20px;
  .wallpaper{
    width:100%;
    max-width:388px;
    object-fit:cover;
    height:500px;

    @media (max-width:1050px){
      margin:0 auto;
    }
    
  }
  .wallpaper-border{
    position:absolute;
    top:50px;
    left:60px;
    @media (max-width:1050px){
      top: 16px;
      left: 30%;
    }
    @media (max-width:786px){
  
      left: 0%;
    }
  }
}

.user-info{
    padding-top:20px;

    h5{
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      color: #F31212;

      @media (max-width:786px){
        font-size:28px;
      }
    }
    h6{
      margin-top:50px;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      color: #FFFFFF;
      @media (max-width:786px){
        font-size:22px;
        margin-top:25px;
      }
    }
    p{
      margin-top:25px;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #FFFFFF;
      @media (max-width:786px){
        font-size:16px;
        margin-top:18px;
      }
    }
    button{
      background: #F31212;
      border: 1px solid #F31212;
      border-radius: 4px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #FFFFFF;
      margin-top:44px;
      padding:5px 15px;
    }
}

`;

export const TestimonialContent = styled.div`
  padding-top:132px;
  @media (max-width:786px){
    padding-top:80px;
  }

  .single-testimonial{
    width:100%;

    .avtar-name{
      width:100%;
      text-align:center;
      margin-top:-40px;

      img{
        width:78px;
        height:78px;
        border-radius:50%;
        object-fit:cover;
        margin:0 auto;
      }

      h5{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        margin-top:4px;
      }

      h6{
        font-style: italic;
        font-weight: 500;
        font-size: 16px;
        color: #F31212;
      }

    }
  

    .testimonial-inner{
      background: rgba(0, 0, 0, 0.61);
      border: 1px solid #3C3C3C;
      padding:25px 33px 50px 33px;
      texx-align:center;

      .quote-images{
        margin:0 auto;
      }

      p{
        font-style: italic;
        font-weight: 400;
        font-size: 15px;
        color: #FFFFFF;
        text-align:center;
        margin-top:11px;
      }
    }

  }
`;

export const CastingSection = styled.div`
  background-image:url('/images/wallpaper-girl.png');
  background-repeat: no-repeat;
  background-size:cover;
  height:600px;
  object-fit:cover;
  margin-top:132px;
  @media (max-width:786px){
    padding-top:80px;
  }

  .girls-info{
    max-width:615px;
    padding-top:150px;

    @media (max-width:768px){
      padding-top:0px;

    }

    h5{
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      color: #FFFFFF;
      line-height:47px;

      @media (max-width:768px){
        font-size: 28px;
      }
    }
    h6{
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #FFFFFF;
      margin-top:30px;
      @media (max-width:768px){
        font-size: 16px;
        margin-top:20px;
      }
    }

    .button-box{
      margin-top:30px;
      .info-btn{
        width: 249px;
        height: 48px;
        background: #F31212;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color:#fff;
        margin-right:24px;
        @media (max-width:768px){
          font-size: 16px;
          margin-right:0;
          width:100%;
        }
      }
      .cancle-btn{
        width: 249px;
        height: 48px;
        background: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color:#000;
        margin-right:24px;
        @media (max-width:768px){
          font-size: 16px;
          margin-right:0;
          width:100%;
        
        }
      }
    }
  }

`;

export const VideoSection = styled.div`

  padding-top:132px;
  padding-bottom:136px;
  text-align:center;
  @media (max-width:786px){
    padding-top:80px;
    padding-bottom:80px;

  }

  .cover-image{
    width: 580px;
    height: 423px;
    object-fit:cover;
    margin:0 auto;
  }

  .play-button{
    position:absolute;
    top:40%;
    left:48%;
    cursor:pointer;
    z-index:10;
  }

  .layers{
    position:absolute;
    top:20px;
    left:30%;
    @media (max-width:1050px){
      top: 12px;
      left: 2%;
    }
  }

  video{
    width: 580px;
    height: 423px;
    object-fit:cover;
    margin:0 auto;
  }

  h5{
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-top:38px;
    color: #F31212;
  }

  h3{
    height:47px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
  }

  p{
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 25px;
    margin-top:12px;
  }

`;

export const TalentPartsSection = styled.div`
padding-top:55px;
  padding-bottom:136px;

  @media (max-width:786px){
    padding-bottom:80px;
  }

  img{
    margin:0 auto;
    width:100%;
    height:395px;
    object-fit:cover;
  }

  `;

export const Heading = styled.div`
  padding-top:100px;
  @media (max-width:786px){
    padding-top:50px;
  }

  h4{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #F31212;
    text-align:center;
  }

  `;

export const FooterLinkSection = styled.div`
  padding-top:60px;
  padding-bottom:60px;

  .link-section{
    h5{
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #FFFFFF;
      // margin-bottom:20px;
    }
    a{
      display:block;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      color: #FFFFFF;
      text-decoration:none;
      line-height:16px;
      margin-top:20px;
    }
  }

  `;


export const FooterLinkExtra = styled.div`
  padding-top:60px;
  padding-bottom:0px;
  
    h5{
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: #FFFFFF;
    }

    h6{
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #FFFFFF;
      margin-top:9px;
    }

  }

  .info-footer{
    padding-top:60px;
    p{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #FFFFFF;
      text-align:center;
      margin-top:25px;
    }
  }

  .extra-footer-link{
    margin-top:40px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;


    & >a :last-child{
      border-right:0;
    }

    a{
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      color: #FFFFFF;
      padding-left:15px;
      padding-right:15px;
      line-height:18px;
      margin-top:10px;
    }

  }

  .footer-credits{
    padding:46px 0 11px 0;
    .logo{
      margin:0px auto;
    }
    .secure-logo{
      margin:46px auto 21px auto;
    }
    p{
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #FFFFFF;
      text-align:center;
    }
  }

  `;

