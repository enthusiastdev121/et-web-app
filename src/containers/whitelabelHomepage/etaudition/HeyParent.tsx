import Link from "next/link";
import styled from "styled-components";
import { Container, P1 } from "./styles";




const HeyParents = () => {


    return (
        <>
            <Root className="md:my-28 my-12">
                <Container>
                    <div className="parent-wrapper flex md:flex-row flex-col justify-between items-center md:gap-5 gap-10">
                        <div className="content flex-1 max-w-[450px]">
                            <div className="flex flex-col gap-5 items-start">
                                <img src="/images/audition/hey-parent/wave-hand.png" alt="wave-hand" />
                                <h2 className="txt-secondary h2">Hey Parents!</h2>
                                <P1>We have Casting Professionals looking for babies, children and teens for Acting and Modelling roles in TV, Film and Magazines. Create a profile for your child and start applying!
                                </P1>
                                <div>
                                    <Link href='join/talentb'>
                                        <a>

                                            <button className="primary-btn profile-btn text-lg">Create Your Kid Profile</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="img-boxes grid items-end lg:gap-0 gap-2 grid-cols-7 grid-rows-6 justify-items-end xl:max-w-[650px] xl:min-h-[470px] md:max-w-[60%]">

                            <div className="img-box col-span-3 row-span-4">
                                <img src="/images/audition/hey-parent/big.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-1 row-span-1 col-start-5 row-start-1">
                                <img src="/images/audition/hey-parent/small-top-1.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-1 row-span-1 col-start-5 row-start-2">
                                <img src="/images/audition/hey-parent/small-top-2.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-2 row-span-2 col-start-6 row-start-1">
                                <img src="/images/audition/hey-parent/medium-top.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-2 row-span-2 col-start-4 row-start-3">
                                <img src="/images/audition/hey-parent/medium-middle-1.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-2 row-span-2 col-start-6 row-start-3">
                                <img src="/images/audition/hey-parent/medium-middle-2.png" alt="hey-parent" />
                            </div>

                            <div className="img-box col-span-2 row-span-2 col-start-2 row-start-5">
                                <img src="/images/audition/hey-parent/medium-bottom-1.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-2 row-span-2 col-start-4 row-start-5">
                                <img src="/images/audition/hey-parent/medium-bottom-2.png" alt="hey-parent" />
                            </div>
                            <div className="img-box col-span-2 row-span-2 col-start-6 row-start-5">
                                <img src="/images/audition/hey-parent/medium-bottom-3.png" alt="hey-parent" />
                            </div>

                        </div>
                    </div>
                </Container>
            </Root>
        </>
    )
}

export default HeyParents;

const Root = styled.div`
    @media screen and (max-width: 950px) {
        .profile-btn {
            padding: 0.8rem 1.4rem;
        }
    }
`;

