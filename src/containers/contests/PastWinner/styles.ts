import styled from "styled-components";

export const Container = styled.div`
  background: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

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
    .about-section-title{
      h3{
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: ${(p) => p.theme.base};
        font-family: "Montserrat-Bold";
      }

      p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: ${(p) => p.theme.base};
        font-family: "Montserrat-Regular";
        margin-top:10px;
      }
    }

    .tab-button{
        display:flex;
        align-items:center;
        overflow-x:auto;
        margin-top:20px;

        .active-button{
            padding:10px;
            /* background-color: red; */
            background: ${(p: any) => p.theme.pure};
            border-radius: 4px;
            display:flex;
            align-items:center;
            border-bottom:2px solid ${(p) => p.theme.primary};
            margin-right:10px;
            min-width: 270px;
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
        

            img{
                width:50px;
                height:50px;
                object-fit:cover;
            }
            h6{
                color: ${(p) => p.theme.primary};
                min-width:157px;
                margin-left:10px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }
        }

        .deactive-button{
            padding:10px;
            background: ${(p: any) => p.theme.pure};
            border-radius: 4px;
            display:flex;
            align-items:center;
            border-bottom:2px solid transparent;
            margin-right:10px;
            min-width: 270px;
            width: 100%;
            text-align: left;
            margin-bottom: 20px;
        


            img{
                width:50px;
                height:50px;
                object-fit:cover;
                opacity:0.5;
            }
            h6{
                color: ${(p) => p.theme.base}
                min-width:157px;
                margin-left:10px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }
        }
    }

    .winner-list{
        background: ${(p: any) => p.theme.pure};
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-top:20px;

            .cover-images{
                width:100%;
                height:140px;
                object-fit:cover;
            }

            .main-winner-section{
                display:flex;
                align-items:baseline;
                justify-content:center;
                position: absolute;
                top: 0;
                width: 100%;

            .second-winner{
                text-align:center;

                .user-image{
                    width:100px;
                    height:100px;
                    object-fit:cover;
                    border-radius:50%;
                    border: 2.5567px solid #67A4FF;
                    margin:0 auto;

                    @media (max-width:768px){
                        width:70px;
                    height:70px;
                    }

                }
                h6{
                    background:#67A4FF;
                    height:24px;
                    line-height:24px;
                    width:24px;
                    text-align:center;
                    border-radius:50%;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular";
                    margin:0 auto;
                    position:relative;
                    margin-top:-15px;
                }

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                    @media(max-width: 500px) {
                        font-size: 16px;
                        line-height: 120%;
                    }
                }

                .user-point{
                    display:flex;
                    align-items:center;
                    justify-content: center;

                    p{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 15px;
                        color: ${(p) => p.theme.primary};
                        font-family: "Montserrat-Regular";
                        margin-left:10px; 
                    }
                }
            }

            .third-winner{
                text-align:center;

                .user-image{
                    width:100px;
                    height:100px;
                    object-fit:cover;
                    border-radius:50%;
                    border: 2.5567px solid #FF774D;
                    margin:0 auto;

                    @media (max-width:768px){
                        width:70px;
                    height:70px;
                    }

                }
                h6{
                    background:#FF774D;
                    height:24px;
                    line-height:24px;
                    width:24px;
                    text-align:center;
                    border-radius:50%;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular";
                    margin:0 auto;
                    position:relative;
                    margin-top:-15px;
                }

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                    @media(max-width: 500px) {
                        font-size: 16px;
                        line-height: 120%;
                    }
                }

                .user-point{
                    display:flex;
                    align-items:center;
                    justify-content: center;

                    p{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 15px;
                        color: ${(p) => p.theme.primary};
                        font-family: "Montserrat-Regular";
                        margin-left:10px; 
                    }
                }
            }

            .first-winner{
                text-align:center;
                margin-left:25px;
                margin-right:25px;
                position:relative;
                margin-top:50px;

                @media (max-width:768px){
                    margin-left:15px;
                    margin-right:15px;
                }

                .crown-image{
                    margin:0 auto;
                    width:63px;
                    height:63px;
                    position:absolute;
                    top:-50px;
                    // left:35px;
                    left: 50%;
                    transform: translateX(-50%);


                }

                .user-image{
                    width:140px;
                    height:140px;
                    object-fit:cover;
                    border-radius:50%;
                    border: 2.5567px solid #FFCA28;
                    margin:0 auto;
                    
                    @media (max-width:768px){
                        width:100px;
                        height:100px;
                        min-width: 100px;
                        min-height: 100px;
                    }

                }
                h6{
                    background:#FFCA28;
                    height:24px;
                    line-height:24px;
                    width:24px;
                    text-align:center;
                    border-radius:50%;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular";
                    margin:0 auto;
                    position:relative;
                    margin-top:-15px;
                }

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                    @media(max-width: 500px) {
                        font-size: 16px;
                        line-height: 120%;
                    }
                }

                .user-point{
                    display:flex;
                    align-items:center;
                    justify-content: center;

                    p{
                        font-style: normal;
                        font-weight: 600;
                        font-size: 15px;
                        color: ${(p) => p.theme.primary};
                        font-family: "Montserrat-Regular";
                        margin-left:10px; 
                    }
                }
            }

            
        }
        .other-winner{
            padding-top:150px;
            padding-bottom:30px;
            position: relative;

            @media (max-width:768px){
                padding-top:100px;

            }

            & >div :first-child{
                border-top:none !important;
            }

            .view-all-btn{
                text-align:center;


                img{
                    position:absolute;
                    bottom:0;
                    width:100%;
                    height:250px;
                    opacity:0.5;
                    object-fit: cover;
                    width: 100%;
                }

                button{
                background: ${(p: any) => p.theme.pure};
                border: 1px solid #2C8BED;
                box-sizing: border-box;
                border-radius: 100px;
                padding:10px 24px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                color: ${(p) => p.theme.primary};
                z-index: 999;
                position: relative;
                }
            }

            .single-row{
                padding-top:10px;
                padding-bottom:10px;
                border-top:1px solid #f7f7f7;
                flex-wrap:wrap;
                display:flex;
                align-items:center;
                padding-left:15px;
                padding-right:15px;
            }

            .sr-number {
                width:5%;
                text-align:center;

                @media (max-width:768px){
                width:10%;

                }
                

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                }
            }

            .user-iamage{
                width:10%;

                @media (max-width:768px){
                    width:25%;
                }

                img{
                    width:50px;
                    height:50px;
                    object-fit:cover;
                    border-radius:50%;
                    margin:0 auto;
                }
            }

            .user-name {
                width:20%;

                @media (max-width:768px){
                    width:40%;
                }

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                }
            }

            .user-point {
                display:flex;
                align-items:center;
                width:15%;
                justify-content: center;

                @media (max-width:768px){
                    width:25%;
                }


                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    color: ${(p) => p.theme.primary};
                    font-family: "Montserrat-Regular";
                    margin-left:10px; 

                }
            }

            .user-subpoint {
                width:15%;
                text-align: center;

                @media (max-width:768px){
                    width:33.33%;
                }

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                }
            }

            .user-totalpoint {
                width:15%;
                text-align: center;
                @media (max-width:768px){
                    width:33.33%;
                }

                p{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    color: ${(p) => p.theme.base}
                    font-family: "Montserrat-Regular"; 

                }
            }

            .view-entry {
                width:20%;
                text-align: end;

                @media (max-width:768px){
                    width:33.33%;
                }

                button{
                    background:${(p) => p.theme.primary};
                    color:#fff;
                    padding:5px 10px;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 15px;
                    font-family: "Montserrat-Light";
                    border-radius:4px;

                }
            }

        }
     
    }

    


  `;
