import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Profile() {

    return (
        <ProfileSection>
            <Container>
                <motion.div className="lg:grid grid-cols-2 gap-4 our-brands px-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className="image-profile-app lg:block hidden">
                        <img src="/images/modeling-content.png" alt="" />
                    </div>
                    <div className="content-profileapp">
                        <img src="/images/modeling-images/user-octagon-2.png" alt="" />
                        <h2>Create your amazing profile</h2>
                        <p>Design your own portfolio with photos & videos to showcase your talent
                            and catch the eye of casting professionals.</p>
                        <button>
                            + Create free profile
                        </button>
                    </div>
                </motion.div>

            </Container>
        </ProfileSection >
    );
}


const ProfileSection = styled.div`
// padding-top:230px;
position:relative;
background: linear-gradient(93.74deg, rgba(151, 151, 151, 0) 28.56%, rgba(19, 19, 19, 0) 28.57%, rgba(0, 0, 0, 0.36) 65.66%, rgba(0, 0, 0, 0.48) 87.19%);
backdrop-filter: blur(20px);

.our-brands{
    margin-top:362px;

    @media (max-width:1340px){
        margin-top:200px;

       }

       @media (max-width:1050px){
        margin-top:100px;

       }

    .image-profile-app{
        position:relative;
       
        img{
            position:absolute;
            top:-132px;
            right:0;
        }

       
    }

    .content-profileapp{
        padding-top:80px;
        padding-bottom:72px;

        img{
            margin:0 auto;
        }


        h2{
            font-style: normal;
            font-weight: 600;
            font-size: 34px;
            color: #fff;
            margin-top:8px;
      

            @media (max-width:786px){
                font-size: 24px;
               }
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #fff;
    
            margin-top:16px;
            @media (max-width:786px){
                font-size: 14px;
               }
        }

        button{
            background: #0CCD85;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding:12px 24px;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color: #FFFFFF;
            margin-top:30px;
       
            @media (max-width:786px){
                font-size: 14px;
               }

        }
    }
    
}
`;
