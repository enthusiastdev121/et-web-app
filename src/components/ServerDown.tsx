import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components"
import CountdownTimer from "./CountdownTimer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServerDown = () => {
    // const tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);

    const TIME_IN_MINUTES = 1 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    // const dateTimeAfter = NOW_IN_MS + TIME_IN_MINUTES;
    const dateTimeAfter = 1660365147 * 1000;

    return (
        <Root className="fixed h-full w-full top-0 left-0 flex justify-center bg-[#F8F9FB]">
            <div>
                {/* <SquareBlob /> */}
                <nav className="flex items-center justify-center p-7">
                    <Image src='/svg/logo.svg'
                        width={180}
                        height={40}
                        alt="logo"
                        priority
                    />
                </nav>

                <div>
                    <div className="relative z-20 sm:pb-[30px]" style={{ width: '100vw', background: `linear-gradient(266.26deg, #E4F0FF 27.84%, #EFEDFF 66.17%, #F9F4FF 100%)` }} >
                        <Slider dots infinite fade speed={500} autoplay  >
                            <div>
                                <Card clr="#0070F4">
                                    <Image src="/images/mobile-profile.png" width={376} height={330} alt="person vector" priority />
                                    <h2 className="w-1/2 md:w-fit">
                                        Available in your<br />smartphone soon.
                                    </h2>
                                </Card>
                            </div>
                            <div>
                                <Card clr="#0070F4">
                                    <div className="ml-4" >

                                        <Image src="/images/desktop-homepage.png" width={320} height={220} alt="person vector" priority />
                                    </div>
                                    <h2 className="w-1/2 md:w-fit ml-4">
                                        New & improved<br />
                                        website just for you!
                                    </h2>
                                </Card>
                            </div>
                            <div>
                                <Card clr="#0070F4">
                                    <Image src="/images/girl-audition.png" width={376} height={330} alt="person vector" priority />
                                    <h2 className="w-1/2 md:w-fit ml-4">
                                        User-friendly<br />
                                        and easy to use
                                    </h2>
                                </Card>
                            </div>

                        </Slider>

                    </div>





                    <div className="relative  ">
                        <div className="bottom-grad absolute top-0 left-0">
                        </div>

                        <div className="relative z-20 ">
                            <h3 className="mt-[39px]">Hang on, we’ll be back shortly.</h3>
                            <p className="max-w-[739px] text-center mx-auto mt-2 text-sm md:text-base px-10">We are performing scheduled update to our platform to give you the best service.
                                We expect to complete the update in</p>
                            <div className="flex justify-center mt-5 text-center">
                                <CountdownTimer targetDate={dateTimeAfter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Root>
    )
}

export default ServerDown;

const Root = styled.div`
    h3 {
        font-weight: 700;
        font-size: 32px;
        line-height: 150%;
        text-align: center;
        color: #000000;
        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
            font-size: 24px;
        }
    }

    .bottom-grad {
        height: 50vh;
        width: 100vw;
        background-image: linear-gradient(#FFE9FD 27.84%, #BEE8FF 40%, #F8F9FB 100%);
        filter: blur(340px);
    }
`

const Card = styled.div<{ clr: string }>`
    /* background: ${p => p.grad}; */
    height: 330px;
    height: fit-content;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 20;
    min-height: 300px;

    h2 {
        font-weight: 600;
        font-size: 40px;
        line-height: 150%;
        color: ${p => p.clr};
        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 20px;

        @media (max-width: 800px) {
            font-size: 30px;
        }
        @media (max-width: 700px) {
            font-size: 25px;
        }
        @media (max-width: 600px) {
            font-size: 20px;
        }
    }
`

const SquareBlob = styled.div`
    position: absolute;
    width: 679.33px;
    height: 679.33px;
    left: -373px;
    top: -355.2px;

    background: linear-gradient(134.77deg, rgba(243, 247, 255, 0.3) 0.02%, rgba(215, 215, 255, 0.5) 97.89%);
    opacity: 0.5;
    border-radius: 140px;
    transform: rotate(-27.42deg);
`;

