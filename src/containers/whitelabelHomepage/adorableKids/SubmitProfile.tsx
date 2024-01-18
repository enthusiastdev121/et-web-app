import styled from "styled-components";

import { motion } from "framer-motion";

function SubmitProfile() {
    return (
        <BrandSection>

            <motion.div className="main_bg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.8 }}
            >

                <div className="our_title">
                    <h1>Join the CuteKid to share photos of your cutie and win prizes</h1>
                    <button>Submit a Photo</button>
                </div>


            </motion.div>

        </BrandSection >
    )
}

export default SubmitProfile

const BrandSection = styled.div`
.main_bg{
    background-image:url("/images/submit-backgroun.png")
}
.our_title{
    max-width:784px;
    margin:auto;
    padding: 50px 14px;
    h1{
        text-align: center;
        font-weight: 600;
        font-size: 42px;
        line-height: 54px;
        color: #FFFFFF;
        padding: 26px 0px;
@media (max-width:450px){
    font-size: 26px;
    line-height: 34px;
}
    }
    button{
        background:#fff;
        color:${p => p.theme.primary};
        font-weight: 600;
        display: block;
        margin: auto;
        padding: 12px 20px;
        border-radius: 4px;
    }
}

`;