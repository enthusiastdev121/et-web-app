import Link from "next/link";
import styled from "styled-components";
import { Container, P1 } from "./styles";


const PROFILES = [
    {
        id: 1,
        src: "/images/audition/profile/profile-1.png",
        alt: "profile",
    },
    {
        id: 2,
        src: "/images/audition/profile/profile-2.png",
        alt: "profile",
    },
    {
        id: 3,
        src: "/images/audition/profile/profile-3.png",
        alt: "profile",
    },
    {
        id: 4,
        src: "/images/audition/profile/profile-4.png",
        alt: "profile",
    },
    {
        id: 5,
        src: "/images/audition/profile/profile-5.png",
        alt: "profile",
    },
    {
        id: 6,
        src: "/images/audition/profile/profile-6.png",
        alt: "profile",
    },
    {
        id: 7,
        src: "/images/audition/profile/profile-7.png",
        alt: "profile",
    },
    {
        id: 8,
        src: "/images/audition/profile/profile-8.png",
        alt: "profile",
    },
    {
        id: 9,
        src: "/images/audition/profile/profile-9.png",
        alt: "profile",
    },
    {
        id: 10,
        src: "/images/audition/profile/profile-10.png",
        alt: "profile",
    },
    {
        id: 11,
        src: "/images/audition/profile/profile-11.png",
        alt: "profile",
    },
    {
        id: 12,
        src: "/images/audition/profile/profile-12.png",
        alt: "profile",
    },
]

const Profile = () => {


    return (
        <>
            <Root className="md:my-24 my-12">
                <Container>
                    <div className="profile-wrapper flex flex-col gap-10 justify-center items-center">
                        <div className="profile-header flex flex-col gap-5 justify-center items-center text-center">
                            <h2 className="h2 txt-secondary">Create A Stunning Profile
                            </h2>
                            <P1 className="max-w-[550px] m-auto txt-secondary">Design your own portfolio with photos & videos to showcase your talent and catch the eye of casting professionals.
                            </P1>
                        </div>
                        <ProfileImage className="flex md:flex-row flex-col md:gap-0 gap-12">
                            <div className="left-section flex flex-col gap-8 relative top-6 items-center justify-end">
                                <div className="max-w-[75%]">
                                    <img src="/images/audition/audition-logo.png" alt="" />
                                </div>

                                <div className="profile-big">
                                    <img src="/images/audition/profile/profile-big.png" alt="" />
                                </div>
                            </div>
                            <div className="right-section grid lg:grid-cols-4 grid-cols-3 md:gap-4 gap-2 items-center">
                                {
                                    PROFILES.map(({ src, alt, id }: { src: string, alt: string, id: number }) => {
                                        return (
                                            <div key={id}>
                                                <img src={src} alt={alt} className="w-full object-scale-down" />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </ProfileImage>
                        <div>
                            <Link href='join/talentb'>

                                <button className="primary-btn px-40">View All</button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Root>
        </>
    )
}

export default Profile;

const Root = styled.div`
`;

const ProfileImage = styled.div`
    background-color: #fff;
    padding: 1.5rem 1.5rem 1.5rem 0;
    border: 1px solid #DBDBDB;
    box-shadow: 10px 14px 64px rgba(30, 30, 33, 0.12);
    border-radius: 30px;
    @media screen and (max-width: 767px) {
        padding: 1rem;
    }
`;

