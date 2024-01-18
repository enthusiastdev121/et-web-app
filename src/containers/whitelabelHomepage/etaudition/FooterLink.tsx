import styled from "styled-components";
import { Container } from "./styles";
import Slider from "react-slick";
import Link from "next/link";
import { WHITELABEL_NAME } from "@/utils/envProviders";


export default function FooterLink() {

    return (
        <FooterLinkSection>
            <Container>
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-4 FooterLink px-5">
                    <div>
                        <h3>Auditions & Jobs</h3>
                        <Link href="">Acting Auditions</Link>
                        <Link href="">Modeling Auditions</Link>
                        <Link href="">Dance Auditions</Link>
                        <Link href="">Music Auditions</Link>
                        <Link href="">Crew Auditions</Link>
                        <Link href="">All Auditions/Jobs</Link>

                    </div>


                    <div>
                        <h3>Videos</h3>
                        <Link href="">Video Testimonials</Link>
                        <Link href="">More Videos</Link>
                        <Link href="">Hip Hop Musicians Advice</Link>
                        <Link href="">Acting Workshop</Link>
                        <Link href="">Celebrity Videos</Link>
                        <Link href="">Member Video Search</Link>
                    </div>


                    <div>
                        <h3>Find Talent</h3>
                        <Link href="">Search Models and Actors</Link>
                        <Link href="">Search Musicians</Link>
                        <Link href="">Featured Talents</Link>
                        <Link href="">Featured Contestants</Link>
                        <Link href="">See Who Just Joined ET</Link>
                        <Link href="">Who's Online</Link>
                        <Link href="">Talent Activity Feed</Link>
                        <Link href="">All Talents</Link>
                    </div>

                    <div>
                        <h3>About {WHITELABEL_NAME}</h3>
                        <Link href="">About Us</Link>
                        <Link href="">FAQ</Link>
                        <Link href="">Affiliates/Advertising</Link>
                        <Link href="">Testimonials</Link>

                    </div>


                    <div>
                        <h3>More on Auditions</h3>
                        <Link href="">Articles</Link>
                        <Link href="">News</Link>
                        <Link href="">Links</Link>
                    </div>

                </div>
            </Container>
        </FooterLinkSection >
    );
}


const FooterLinkSection = styled.div`
    background-color:#171A1F;
    padding-top:100px;
    padding-bottom:120px;

h3{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom:40px;
}

a{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    margin-top:10px;
    display:block;
}

`;
