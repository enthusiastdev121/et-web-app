import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ToursPage() {
    return (

        <Layout title={`${WHITELABEL_NAME} | Member Video Testimonials - ${WHITELABEL_NAME}`}>

            <div className="padding-small bg-paper txt-base">
                <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-5 px-5 sm:px-0">Tour</h1>
                    <Image src="/images/et-tour.jpg" alt="tour" width={747} height={351} />
                </div>

                <ul>
                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-1.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            <Link href="/auditions/all-jobs">
                                <a className="txt-link">Search Thousands of Auditions</a>
                            </Link> With new listings added every single day, you&apos;ll be able to search for auditions in your area with ease. Explore Talent has thousands of auditions at any given time.
                        </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-2.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            Create Multiple Talent Profiles In One Portfolio If you&apos;re a musician and an actor, you don&apos;t have to have two separate profiles to get the same amount of auditions. Explore Talent allows you to have multiple talent profiles in one place so you can keep track of auditions with less stress!</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-3.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>Upload an Unlimited Amount of Photos, Videos, and Audio to your Profile With an Explore Talent Pro Member account, you&apos;ll be able to upload an unlimited amount of photos, music tracks and videos to your profile. Get the most out of Explore Talent with an updated portfolio.</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-4.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            <Link href="/points/index/how-do-i-earn-points">
                                <a className="txt-link">ET Points</a>
                            </Link> Earn redeemable points when you submit yourself to contests, refer friends or use any of the other great features that Explore Talent has to offer!

                        </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-5.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            <Link href="/search_featured">
                                <a className="txt-link">Featured Talent</a>
                            </Link> Have your profile be the first one that casting directors see when the search for talent in your area.
                        </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-6.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            <Link href="/contests">
                                <a className="txt-link">Contests</a>
                            </Link> New contests are starting every month in various categories to give you the opportunity to show the world what you&apos;ve got! Submission to any contest or multiple contests earns you points redeemable toward many Explore Talent prizes!
                        </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-7.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            Audition from Home With our new video feature, you&apos;ll be able to submit yourself to auditions from your living room!</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-8.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>Community Buzz See what ET members are talking about in our Community Buzz section. Comment, network and see tell members what&apos;s on your mind!</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-9.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            <Link href="/requests/index/contact">
                                <a className="txt-link">Customer Service</a>
                            </Link> Explore Talent&apos;s customer service reps are here to serve you when you need it. Our customer service hours are from 10am to 6pm PST, Monday through Friday or you can submit your inquiry online.
                        </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-10.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>Search Casting Directors, Agencies, Photographers, Studios and other Industry Resources We work with studios, agencies, photographers, make-up artists and other Industry Resources to make sure you have everything you need locally. Need some headshots? Search our database for the perfect photographer in your area.</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-11.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>Blog We like to keep up on current industry events and we&apos;re sure you do too. Check out our blog for the latest news and gossip in show biz!</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-12.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>Friends Add friends to your profile and network with other Explore Talent members. Share tips and tricks with other talent with our &ldquo;Add Friend&rdquo; feature.</p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-13.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>
                            <Link href="https://www.facebook.com/ExploreTalent">
                                <a target="_blank" className="txt-link">Explore Talent Facebook</a>
                            </Link> Check out our Facebook page.
                        </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-14.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>One Click Casting and Audition Submissions Submit yourself to auditions without all of the hassle. Simply complete your Explore Talent profile and click the &ldquo;Submit&rdquo; button. That&apos;s it! </p>
                    </Li>

                    <Li>
                        <div className="img-container">
                            <Image src="/images/tour-15.jpg" alt="camera" width={76} height={73} />
                        </div>

                        <p>Matched Auditions Once you submit yourself to an audition, we&apos;ll suggest similar opportunities for to you based on the stats you provide in your profile. For instance, if you&apos;re a dancer, we&apos;ll match you with dance opportunities in your area.</p>
                    </Li>
                </ul>
            </div>
        </Layout>
    )
}

const Li = styled.li`
.img-container {
    min-width: 76px;
    margin-top: 20px;
}

display: flex;
align-items: center;
gap: 20px;

@media (max-width: 1050px) {
    margin-bottom: 20px;
}
@media (max-width: 450px) {
    padding: 0 10px;
    font-size: 14px;
}
`