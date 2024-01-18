import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function HeyParent() {

    return (
        <ParentSection>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="main_section">
                        <div className="first_image">
                            <img src="/images/hey_parents.png" alt="" />
                        </div>
                        <div className="content_parent">
                            <h3>Hey parents!</h3>
                            <p>We have Casting Professionals looking for babies, children and teens for Acting and Modelling roles in TV, Film and Magazines. Create a profile for your child and start applying!

                            </p>
                            <button>Submit a Photo</button>
                        </div>

                    </div>



                </motion.div>

            </Container>
        </ParentSection >
    );
}


const ParentSection = styled.div`
margin-top:147px;
background-image:url("/images/hello-parent-bg.png");
background-repeat:no-repeat;
background-size:cover;

@media (max-width:1050px){
    height:auto;
    padding-bottom:40px;
    margin-top:50px;
}
.main_section{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}
.first_image{
    flex: 1.3;
    margin: -50px 0px;
}

.content_parent{
    flex: 1;
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
        max-width: 78%;
        @media (max-width:786px){
            font-size: 14px;
            max-width: 100%;
           }
    }

    button{
        padding:15px 24px;
        background: #FFFFFF;
        border: 1px solid ${p => p.theme.primary};
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-top:30px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: ${p => p.theme.primary};
        @media (max-width:786px){
            font-size: 14px;
           }
    }
}
@media (max-width:1024px){
.main_section{
    margin-top: 100px;
}
}
@media (max-width:786px){
.main_section{
    flex-direction: column;
}}
`
