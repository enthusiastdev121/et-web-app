import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function HeyParent() {

    return (
        <ParentSection>
            <Container>
                <motion.div className="lg:grid grid-cols-2 gap-4 child-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="children-section">
                        <div className="first-image">
                            <img src="/images/hey-1.png" alt="" />
                        </div>
                        <div className="second-image">
                            <img src="/images/hey-2.png" alt="" />
                        </div>
                        <div className="third-image">
                            <img src="/images/hey-3.png" alt="" />
                        </div>
                    </div>
                    <div className="content-parent">
                        <h3>¡Hola padres!</h3>
                        <p>Tenemos profesionales de casting que buscan bebés, niños y adolescentes para roles de actuación y modelaje en televisión, cine y revistas. ¡Cree un perfil para su hijo y comience a aplicar!</p>
                        <button>+ Crea un perfil para tu hija(feminine)
                        </button>
                    </div>
                </motion.div>

            </Container>
        </ParentSection >
    );
}


const ParentSection = styled.div`
margin-top:147px;
background-image:url("/images/talento/BG.png");
background-repeat:no-repeat;
background-size:cover;
height:533px;

@media (max-width:1050px){
    height:auto;
    padding-bottom:40px;
    margin-top:50px;

}

.child-section{
        .children-section{
            display:flex;
            justify-content:center;
        }
}

.content-parent{
    max-width:729px;
    margin-left:80px;
    padding-top:140px;

    @media (max-width:1340px){
        padding-top:40px;
        margin-left:40px;
       }

       @media (max-width:768px){
        padding-top:40px;
        margin-left:0px;
       }

    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        color: #FFFFFF;
        font-family: "RobotoSlab-Bold";
        @media (max-width:1680px){
            font-size: 42px;
           }

           @media (max-width:786px){
            font-size: 34px;
           }
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        margin-top:20px;
        font-family: "RobotoSlab-Regular";
        @media (max-width:786px){
            font-size: 14px;
           }
    }

    button{
        padding:15px 24px;
        background: transparent;
        border: 1px solid #fff;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-top:30px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #fff;
        font-family: "RobotoSlab-Regular";
        @media (max-width:786px){
            font-size: 14px;
           }
    }
}

`;
