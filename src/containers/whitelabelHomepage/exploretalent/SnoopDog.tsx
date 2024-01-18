import { motion } from "framer-motion";
import styled from "styled-components";

export default function SnoopDogg() {
    
    return (
        <section className="relative h-fit  py-8 md:p-0">
            <Width>
                <div className="md:flex items-center  gap-5 2xl:gap-24 ">
                    <motion.div
                        className=" md:w-[40%]  md:text-left relative z-10 "
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div className="">
                            <h3 className="">
                            Snoop Dogg approves Explore Talent
                                {/* <TranslateText text="ETHome.Snoop Dogg approves Explore Talent" /> */}
                            </h3>
                            <p className="mt-5  text-lg">
                            Snoop Dogg shares exclusively tips on how to get the best results on Explore Talent Casting Website. use to ExploreTalent.com to find casting calls and opportunities to get on Netflix shows, movies, reality content and even do extra work! You might be the next Snoop Dogg!
                                {/* <TranslateText text="ETHome.Snoop Dogg shares" /> */}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative flex-1 aspect-video"
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <VideoCard>
                            <iframe width="100%" height="100%"
                
                                src="https://www.youtube.com/embed/3hkzSt1bjRQ"
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                           
                        </VideoCard>
                    </motion.div>
                </div>
            </Width>
        </section>
    );
}

export const Width = styled.div`
 max-width: 1530px;
  width: 80vw;
  margin: 30px auto 100px auto;
    color: ${p => p.theme.base};
    h3 {
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
  }
`;
const VideoCard = styled.div`
  background: #c4c4c4;
  position: absolute;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 8px 20px;
width: 100%;
height: 100%;

`;
