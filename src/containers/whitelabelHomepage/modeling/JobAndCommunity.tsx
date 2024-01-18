import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import { motion } from "framer-motion";
// import CountUp from 'react-countup';

export default function JobAndCommunity() {
    return (
        <JobSection>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="job-bg">
                    <img src="/images/gredient circle design .png" alt="" />
                </div>

                <img src="/images/second-image.png" className="second-gredient-image" />

                <Container>

                    <h3>Community and Job opportunity
                        for everybody!</h3>

                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4 our-brands">
                        <div className="singleJobDesc">
                            <img src="/images/modeling-images/note-2.png" alt="" />
                            <h2>
                                {/* <CountUp
                                    end={3254}
                                    separator=","
                                /> */}
                            </h2>
                            <p>New roles posted this week</p>
                        </div>
                        <div className="singleJobDesc">
                            <img src="/images/modeling-images/profile-2user.png" alt="" />
                            <h2>
                                {/* <CountUp
                                    end={10791632}
                                    separator=","
                                /> */}
                            </h2>
                            <p>ExploreTalent members and counting</p>
                        </div>
                        <div className="singleJobDesc">
                            <img src="/images/modeling-images/user-octagon.png" alt="" />
                            <h2>
                                {/* <CountUp
                                    end={521782}
                                    separator=","
                                /> */}
                            </h2>

                            <p>Creators looking for talent</p>
                        </div>
                        <div className="singleJobDesc">
                            <img src="/images/modeling-images/teacher.png" alt="" />
                            <h2>
                                {/* <CountUp
                                    end={62}
                                    separator=","
                                /> */}
                            </h2>
                            <p>Years of insider knowledge</p>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </JobSection >
    );
}


const JobSection = styled.div`
    position:relative;


    .second-gredient-image{
        // bottom:-200px;
        position:absolute;
        right:0;
    }

.job-bg{
    position:absolute;
    top:-200px;
    left:0;
}


h3{
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    color: #fff;
    text-align:center;
    max-width:585px;
    margin-bottom:64px !important;
    margin-top:150px !important;
    margin:0 auto;

    @media (max-width:1340px){
        margin-top:40px !important;
        font-size: 28px;
       }

       @media (max-width:786px){
        font-size: 20px;
       }
}

.singleJobDesc{
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(30px);
    border-radius: 8px;
    padding:70px 40px 64px 40px;
    text-align:center;
    position:relative;

    @media (max-width:786px){
        padding:40px;
       }

    img{
        margin:0 auto;
    }

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: #FFFFFF;
        margin-top:24px;

        @media (max-width:1680px){
            font-size: 36px;
           }
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        margin-top:21px;

    }

}

`;
