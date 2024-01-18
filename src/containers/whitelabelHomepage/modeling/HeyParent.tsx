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
                        <h3>Hey parents!</h3>
                        <p>We have Casting Professionals looking for babies, children and teens for Acting and Modelling roles in TV, Film and Magazines. Create a profile for your child and start applying!</p>
                        <button>+ Create a kids profile</button>
                    </div>
                </motion.div>

            </Container>
        </ParentSection >
    );
}


const ParentSection = styled.div`
margin-top:147px;
background-image:url("/images/modelin-search-bg.png");
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
        @media (max-width:1680px){
            font-size: 42px;
           }

           @media (max-width:786px){
            font-size: 34px;
           }
    }

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
        margin-top:20px;
        @media (max-width:786px){
            font-size: 14px;
           }
    }

    button{
        padding:15px 24px;
        background: #FFFFFF;
        border: 1px solid #0CCD85;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-top:30px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #0CCD85;
        @media (max-width:786px){
            font-size: 14px;
           }
    }
}

`;
