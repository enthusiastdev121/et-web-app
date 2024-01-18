import styled from "styled-components";

import { motion } from "framer-motion";

function JobAndCommunity() {
    return (
        <BrandSection>

            <motion.div className="main_bg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            // viewport={{ once: true, amount: 0.8 }}
            >
                <div className="our_title">
                    <h1>Community and Job opportunity for everybody!</h1>
                </div>
                <div className="community_section">
                    <div>
                        <img src='./images/community_icon.png' alt='community icon' />
                        <h1>3,254</h1>
                        <p>New roles posted this week</p>
                    </div>
                    <div>
                        <img src='./images/community_icon.png' alt='community icon' />
                        <h1>3,254</h1>
                        <p>New roles posted this week</p>
                    </div>
                    <div>
                        <img src='./images/community_icon.png' alt='community icon' />
                        <h1>3,254</h1>
                        <p>New roles posted this week</p>
                    </div>
                    <div>
                        <img src='./images/community_icon.png' alt='community icon' />
                        <h1>3,254</h1>
                        <p>New roles posted this week</p>
                    </div>
                </div>

            </motion.div>

        </BrandSection >
    )
}

export default JobAndCommunity

const BrandSection = styled.div`
.main_bg{
    
}
.our_title{
    max-width:700px;
    margin:auto;
    padding:0px 10px;
    h1{
        text-align: center;
        font-weight: 700;
        font-size: 42px;
        line-height: 54px;
        color: ${p => p.theme.base};
        padding: 26px 0px;
@media (max-width:450px){
    font-size: 30px;
    line-height: 42px;
}
    }
    
}
.community_section{
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
}
.community_section > div {
    border: 1px solid #ededed7a;
    border-radius: 10px;
    background: #FFFFFF;
    padding: 30px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.community_section > div:hover{
    box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.08);
}
.community_section img {
    margin: auto;
}
.community_section h1 {
    font-weight: 700;
    font-size: 38px;
}
.kuqiOu .community_section p {
    font-weight: 400;
    font-size: 16px;
}

`;