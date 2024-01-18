import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AuduionFooter() {

    return (
        <AuduionFooterSection>
            <Container>
                <motion.div className="footersection-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="lg:grid grid-cols-2 gap-4 footersection px-5">
                        <div className="location-audition">
                            <h5>Find acting auditions by city:</h5>
                            <h6>Acting Auditions in New York,Acting Auditions Los Angeles,
                                Acting Auditions Chicago, the Acting Auditions Atlanta,
                                Acting Auditions Miami</h6>
                        </div>
                        <div className="location-audition lg:mt-0 mt-12">
                            <h5>Find Modeling jobs by city:</h5>
                            <h6>Modeling Jobs in New York, Modeling Jobs in Los Angeles,
                                Modeling Jobs in Chicago, Modeling Jobs in Atlanta</h6>
                        </div>
                    </div>

                    <div className="relative hr-rowdiv">
                        <hr />
                        <div className="logo">
                            <img src="/images/audition-logo.png" alt="" className="logo-image" />
                        </div>
                        <div className="extra-content">
                            <p>Auditions.com is neither an employment agent nor a modeling agency. We do not guarantee employment, jobs or bookings. Auditions only provides Internet exposure, resources, and tools for you to match your talent with auditions and casting directors. If you have any questions, contact our Customer Service department at (702) 553-2700. Here is our User Agreement, Privacy Policy and Kids Privacy Policy.</p>


                            <p>Auditions.com is the worldwide leader in acting Modeling Auditions. We are offering thousands of casting calls and Auditions. Get more Casting, auditions resources and Talent Agents than all other sites combined. Spending hours and not finding the Acting Jobs & Modeling Jobs you need? Find Reality TV Shows Casting Calls the modeling auditions Acting Auditions, modeling jobs, acting jobs, all in one place. Stop spending hours searching for casting & auditions. Submit yourself to casting calls, auditions - Get a call when Casting directors wants you.</p>
                            <div className="social-media">
                                <Link href="#"><img src="/images/fb-audition.png" alt="" /></Link>
                                <Link href="#"><img src="/images/insta-audition.png" alt="" /></Link>
                                <Link href="#"><img src="/images/twitter-audition.png" alt="" /></Link>
                                <Link href="#"><img src="/images/youtube-audition.png" alt="" /></Link>
                                <Link href="#"><img src="/images/pinterest-audition.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="credit-link">
                        <p>© Auditions.com </p>

                        <div className="footer-link">
                            <Link href="#">About Auditions</Link>
                            <Link href="#">Tour</Link>
                            <Link href="#">Home</Link>
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Acting Auditions</Link>
                            <Link href="#">Terms of Use</Link>
                            <Link href="#">Articles</Link>
                            <Link href="#">Community Post</Link>
                            <Link href="#">Become an Affiliate</Link>
                            <Link href="#">Contact Us Disclaimer</Link>
                            <Link href="#">DMCA Fair Use Disclaimer</Link>
                            <Link href="#">Site Map</Link>

                        </div>

                        <img src="/images/verifies.png" alt="" />

                    </div>

                </motion.div>
            </Container>
        </AuduionFooterSection >
    );
}


const AuduionFooterSection = styled.div`
    background-color:#0A0C0F;
    padding-top:50px;
    padding-bottom:50px;


    .footersection-container{
        max-width:1140px;
        margin:0 auto;
    

    .footersection{
       

        .location-audition{
            max-width:424px;
            h5{
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                color: #FFFFFF;
                margin-bottom:40px;
            }
            h6{
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                color: #FFFFFF;
                line-height:32px;
            }
        }
    }

    .hr-rowdiv{
        margin-top:52px;

        .logo{
            position:absolute;
            top:-20px;
            width:100%;
            
            img{
                margin:0 auto;
                background-color:#0A0C0F;
                padding:0 25px;
            }
        }

        .extra-content{
            margin-top:20px;

            p{
                color:#fff;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                text-align:center;
                padding-top:30px;
            }

            .social-media{
                display:flex;
                align-items:center;
                justify-content:center;
                margin-top:50px;

                
                    
                    img{
                        margin-left:5px;
                        margin-right:5px;
                    }
               
            }
        }
    }

    .credit-link{
        text-align:center;
        margin-top:25px;

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            margin-bottom:30px;
        }

        a{
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            color: #FFFFFF;
            padding-left:10px;
            padding-right:10px;
        }

        img{
            margin-top:40px !important;
            margin:0 auto;
        }
    }
}

`;
