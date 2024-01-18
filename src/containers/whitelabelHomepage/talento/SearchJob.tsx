import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import TypeAnimation from "react-type-animation";
import { useState } from "react";

export default function SearchJob() {

    const [showSec, setShowSec] = useState(true);

    const showdiv = () => {
        setShowSec(false)
    }

    return (
        <SearchSection>
            <Container className="bg-contain py-10">
                <h3>¿Buscas trabajo cerca de tu zona?</h3>
                <div className="inner-content relative search-bar px-5">

                    <input type="text" onClick={showdiv} />

                    <img src="/images/search-vector.png" alt="" />
                    {showSec &&
                        <div className="auto-type">
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    "Trabajos de actuación",
                                    3000,
                                    "Trabajos de actuación",
                                    3000,
                                    "Trabajos de actuación",
                                    3000,
                                    "Trabajos de actuación",
                                    3000,
                                ]}
                                wrapper="p"
                                repeat={Infinity}
                                className="custom-tag"
                            />
                        </div>
                    }
                </div>
            </Container>
        </SearchSection>
    );
}


const SearchSection = styled.div`
    background:#111111;
    padding-top:50px;
    padding-bottom:50px;
    text-align:center;

    .bg-contain{
        background-image:url("/images/talento/bg-search.png");
        background-size:cover;
        background-repeat: no-repeat;
    }
    
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: #FFFFFF;
        font-family: "RobotoSlab-Bold";
        @media (max-width:1680px){
            font-size: 32px;
           }

           @media (max-width:786px){
            font-size: 28px;
           }
    }

.inner-content{
    max-width:800px;
    margin:0 auto;
    position:relative;
  

    input{
        background: #F4F5F8;
        border: 1px solid #E5E7EB;
        border-radius: 100px;
        height: 80px;
        margin-top:20px;
        width:100%;
        padding-left:120px;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
         color: ${p => p.theme.base};
        font-family: "RobotoSlab-Medium";

        @media (max-width:1680px){
            font-size: 26px;
           }

           @media (max-width:786px){
            font-size: 18px;
           }

    }

       img{
        position:absolute;
        top:35px;
        padding-left:35px;
    }

    .auto-type{
        position:absolute;
        top:35px;
        left:120px;

        @media (max-width:786px){
            top:50px;

           }

        .custom-tag{
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
             color: ${p => p.theme.base};
            @media (max-width:1680px){
                font-size: 26px;
               }

               @media (max-width:786px){
                font-size: 18px;
               }
        }
    }

}
`;
