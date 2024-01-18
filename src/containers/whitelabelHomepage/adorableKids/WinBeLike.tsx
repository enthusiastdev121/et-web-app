import styled from "styled-components";
import { motion } from "framer-motion";

function WinBeLike() {
    return (
        <BrandSection>
            <CustomeContainer>
                <motion.div className="main_section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className="img_section">
                        <div className="new__class">
                            <img src='./images/mobile_child.png' />
                            <span className="price_tag"><h5> $ 500</h5><p>Cash Price</p></span>
                        </div>

                    </div>
                    <div className="content_section">
                        <h5>Win Big Like Aidan!</h5>
                        <h1>2022&apos;s CuteKid of the Year</h1>
                        <p>Enter your cutie for a chance to win in 2022 </p>
                        <button>Submit a Photo</button>
                    </div>
                </motion.div>
            </CustomeContainer>
        </BrandSection >
    )
}

export default WinBeLike
const BrandSection = styled.div`
    background: linear-gradient(270deg, #38B6CD 0.35%, rgba(255, 252, 246, 0) 100%);
    margin-top: 200px;
    .main_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.main_section:after {
    content: '';
    background: url('./images/child_cartoon.png');
    width: 313px;
    height: 334px;
    position: absolute;
    background-repeat: no-repeat;
    top:30px;
    right: 0px;
}
.img_section{
    flex:1;
    position: relative;
}
.img_section img {
    margin: -100px auto 0px;
}
.content_section{
   flex:1.5;
}
.new__class {
    width: fit-content;
    margin: auto;
    position: relative;
}
span.price_tag {
    background: ${p => p.theme.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 144px;
    height: 144px;
    justify-content: center;
    border-radius: 50%;
    border: 10px solid #ffffffe6;
    color: #fff;
    position: absolute;
    top: 60px;
    right: -88px ;

}
span.price_tag:after {
    content: '';
    background: url(./images/price_tag_after.png);
    position: absolute;
    top: -86px;
    right: -68px;
    color: red;
    width: 88px;
    height: 86px;
    background-repeat: no-repeat;
    @media (max-width:450px){
    right: -32px;
    top: -59px;
    width: 49px;
    height: 67px;
    background-size: contain;
    }
}
span.price_tag h5{
    font-weight: 600;
    font-size: 30px;
    @media (max-width:450px) {
        font-size: 18px;
    }
}
span.price_tag p{
    font-size: 16px;
    @media (max-width:450px) {
        font-size: 14px;
    }
}
.content_section h1{
        font-weight: 600;
        font-size: 42px;
        line-height: 54px;
        color: ${p => p.theme.base};
        @media (min-width:1025px){
            max-width: 62%;
        }
}
.content_section h5 {
    text-decoration: underline;
}
.content_section button{
        background:${p => p.theme.primary};
        color:#fff;
        font-weight: 600;
        padding: 12px 20px;
        border-radius: 4px;
    }
@media (max-width:1024px) {
    .main_section:after{
        display:none;
    }
}
@media (max-width:786px) {
    .content_section{
   flex:1;
    }
    span.price_tag{
        top: 30px;
    right: -100px;
    }
    .content_section h1{
        font-size: 30px;
    }
    span.price_tag:after{
        top: -66px;
    }
    .main_section {
    flex-direction: column;
    align-items: self-start;
    padding: 20px 30px;
    gap:40px;
    }
    .main_section{
        gap:18px;
    }

}
@media (max-width:450px) {
.img_section {
    width: 74%;
}
span.price_tag{
    right: -70px;
    top: 30px;
    width: 100px;
    height: 100px;
    border: 6px solid #ffffffe6;
}

}
`
const CustomeContainer = styled.div`
max-width:1400px;
margin:0 auto;
`