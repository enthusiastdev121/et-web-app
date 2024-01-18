import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function News() {

    return (
        <NewsSection>
            <div className="bg-around"><img src="/images/talento/animated element.png" alt="" /></div>
            <Container>
                <motion.div className="lg:grid grid-cols-3 gap-4 NewsSection px-5"

                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >

                    <div className="col-span-2 audition-news">
                        <h3>Noticias Talento</h3>
                        <h6>'DMZ' de HBO Max protagonizada por Rosario Dawson ahora tiene extras</h6>
                        <p><div className="round"></div>'Chad' de TBS protagonizada por Nasim Pedrad Convocatoria
                            de casting para bailarines</p>
                        <h5>Convocatoria de casting de la película 'Apollo 11' de Richard
                            Linklater
                            Un papel de habla</h5>
                        <button>Ver todo</button>
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
                color: #fff;
              
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
                color: #fff;
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
                color:#F31212;
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
                    min-height:15px;
                    width:15px;
                    
                    background-color:#F31212;
                    border-radius:50%;
                    margin-right:10px;

                }
            }

            h5{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                color: #fff;
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
                border: 1px solid #fff;
                filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1));
                border-radius: 8px;
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                color:#fff;
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
