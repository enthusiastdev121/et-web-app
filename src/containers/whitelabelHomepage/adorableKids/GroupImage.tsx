import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "./styles";
function GroupImage() {
    return (
        <ImageSection>
            <Container>
                <motion.div className="main_bg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                // viewport={{ once: true, amount: 0.6 }}
                >
                    <div className="ImageSection">
                        <div>
                            <img src="./images/Monthly-Winners.png" alt="Monthly Winners" />
                            <h1>Monthly Winners</h1>
                        </div>
                        <div>
                            <img src="./images/Special-Galleries.png" alt="Special Galleries" />
                            <h1>Monthly Winners</h1>
                        </div>
                        <div>
                            <img src="./images/How-it-Works.png" alt="Monthly Winners" />
                            <h1>Monthly Winners</h1>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </ImageSection >
    )
}
export default GroupImage
const ImageSection = styled.div`
.ImageSection{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 70px 0px;
    div {
    position: relative;
    

    }
    h1{
        position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    bottom: 16px;
    width: 100%;




    }
}

`;