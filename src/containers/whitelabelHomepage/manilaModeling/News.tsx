import styled from "styled-components";
import { Container, FontFamily } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function News() {

    return (
        <NewsSection>
            <div className="bg-around"><img src="/images/new-rouindbg.png" alt="" /></div>
            <Container>
                <motion.div className="lg:grid grid-cols-3 gap-4 NewsSection px-5"

                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >

                    <div className="col-span-2 audition-news">
                      <FontFamily>   <h3><span style={{}}>Manila Modeling</span> News</h3></FontFamily>
                        <h6>HBO Max’s ‘DMZ’ Starring Rosario Dawson Now Casting Extras</h6>
                        <p><div className="round"></div>TBS’s ‘Chad’ Starring Nasim Pedrad Casting Call for Dancers</p>
                        <h5>Richard Linklater’s ‘Apollo 11’ Movie Casting Call For A Speaking Role</h5>
                        <button className="">See All</button>
                    </div>
                    <div className="lg:mt-0 mt-8">
                        <img src="/images/thubnail.png" alt="" />
                    </div>
                </motion.div>

            </Container>
        </NewsSection >
    );
}


const NewsSection = styled.div`
position:relative;


    .bg-around{
        position:absolute;
        right:0;
        bottom:0;
    }


padding:150px 0;

@media (max-width:786px){
    padding:100px 0;

   }

    .NewsSection{
    

        .audition-news{
            max-width:827px;

            h3{
                font-style: normal;
                font-weight: 700;
                font-size: 50px;
                 color: ${p => p.theme.base};
                @media (max-width:1680px){
                    font-size: 40px;
                   }

                   @media (max-width:786px){
                    font-size: 32px;
                   }
            }

            h6{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                 color: ${p => p.theme.base};
                margin-top:70px;
                @media (max-width:1680px){
                    font-size: 20px;
                    margin-top:40px;
                   }

                   @media (max-width:786px){
                    font-size: 16px;
                   }
            }

            p{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                color:#0770B7;
                display:flex;
                align-items:center;
                margin-top:70px;
                @media (max-width:1680px){
                    font-size: 20px;
                    margin-top:40px;
                   }

                   @media (max-width:786px){
                    font-size: 16px;
                   }


                .round{
                    height:15px;
                    width:15px;
                    background-color:#0770B7;
                    border-radius:50%;
                    margin-right:10px;

                }
            }

            h5{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                 color: ${p => p.theme.base};
                margin-top:70px;
                @media (max-width:1680px){
                    font-size: 20px;
                    margin-top:40px;
                   }
                   @media (max-width:786px){
                    font-size: 16px;
                   }
            }

            button{
                border: 1px solid black;
                filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1));
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                color:black;
                padding:18px 24px;
                margin-top:80px;

                
                @media (max-width:1680px){
            
                    margin-top:40px;
                   }

                   @media (max-width:786px){
                    font-size: 16px;
                padding:12px 18px;

                   }
            }
        }
    }

`;
