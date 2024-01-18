import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./styles";
import Link from "next/link";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {
    const [playVideoPlayer, setPlayVideoPlayer] = useState(false);

    const playVideo = () => {
        setPlayVideoPlayer(true)
    }

    const stopMovie = (e: any) => {
        e.target.pause();
    }

    const playMovie = (e: any) => {
        e.target.play();
    }

    return (
        <CustomLayer>
            <EditProfile>
                <img src="/images/location-vector.png" alt="" />
                <p> This is What your profile looks like to others •</p>
                <Link href="#">
                    Edit profile
                </Link>
            </EditProfile>

            <Container className="pt-32">
                <HeroSection>
                    <div className="lg:flex ">
                        <div className="profile-images-content">
                            <div className="flex lg:justify-start justify-center mc-profile-layout">
                                <div className="image-left">
                                    <div className="main-image">
                                        <img src="/images/pro-img.png" alt="" />
                                    </div>
                                    <div className="profile-image">
                                        <img src="/images/pro-img4.png" alt="" />
                                    </div>
                                    <div>
                                        <button className="flex items-center justify-center">
                                            <img src="/images/play-profile.png" alt="" />
                                            View video greeting</button>
                                    </div>
                                </div>
                                <div className="image-right">
                                    <div className="profile-image">
                                        <img src="/images/pro-img3.png" alt="" />
                                    </div>
                                    <div className="profile-image">
                                        <img src="/images/pro-img2.png" alt="" />
                                    </div>
                                    <div className="profile-image">
                                        <img src="/images/pro-img5.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-info ml-10">
                            <div className="profile-info-content">
                                <h3 className="user-name">Adam Sandman, 23</h3>
                                <p className="user-archivements">Actor, Extra, Influencer, Singer, Sound Crew Member, Editor / Post Production Staffe, ... <span>more</span></p>
                                <p className="user-location flex items-center"><span><img src="/images/red-location.png" alt="" /></span>Lives in California, USA</p>
                                <div className="add-follow flex items-center">
                                    <button className="add-friends flex items-center"><img src="/images/user-profile-image.png" alt="" />Add Friend</button>
                                    <button className="follows">Follow</button>
                                </div>
                                <div className="likes flex items-center">
                                    <p><span>387</span> Likes</p>
                                    <p><span>42</span> Comments</p>
                                    <p><span>1.3k</span> Friends</p>
                                </div>
                                <div className="quotestions">
                                    <p>
                                        <q> A veteran of screen and voice acting with over 16 years experience, Ross made his acting debut at 18-months old with a commerical for Pampers, but got his proper start in his late teens when he joined the Penthouse Cabaret as a sketch actor and stand up comedian. He would go on to garner experience in many mediums including film, TV, radio, and video games. Ross is Autistic and Dyspraxic, and in 2017 was one of only 30 disabled actors chosen by the BBC for its Class Act Training Scheme, an initiative to help increase disabled representation on screen.</q>
                                    </p>
                                </div>
                                <div className="my-website flex items-center">
                                    <img src="/images/website-icons.png" alt="" />
                                    <Link href="">
                                        <a>www.spotlight.com/7656-8944-4958</a>
                                    </Link>
                                </div>
                                <div className="social-icons">
                                    <Link href="">
                                        <a>
                                            <img src="/images/Facebook.png" alt="" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <img src="/images/Twitter.png" alt="" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <img src="/images/Instagram.png" alt="" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <img src="/images/YouTube.png" alt="" />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <img src="/images/TikTok.png" alt="" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </HeroSection>


                <GallarytFilter>
                    <div className="filter-tabs flex flex-wrap items-center justify-center">
                        <Link href="#Photo">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke).png" alt="" /> </span> Photo <span className="tab-counts"> 4 </span>
                            </a>
                        </Link>
                        <Link href="#Video">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (1).png" alt="" /> </span> Video <span className="tab-counts"> 4 </span>
                            </a>
                        </Link>
                        <Link href="#Audio">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (2).png" alt="" /> </span> Audio <span className="tab-counts"> 4 </span>
                            </a>
                        </Link>
                        <Link href="#Appearance">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (3).png" alt="" /> </span> Appearance
                            </a>
                        </Link>
                        <Link href="#Credits">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (4).png" alt="" /> </span> Credits & Experience
                            </a>
                        </Link>
                        <Link href="#Acting">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (5).png" alt="" /> </span> Acting
                            </a>
                        </Link>
                        <Link href="#Modeling">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (5).png" alt="" /> </span> Modeling
                            </a>
                        </Link>
                        <Link href="#Dancing">
                            <a>
                                <span className="tab-icon"> <img src="/images/Icon (Stroke) (5).png" alt="" /> </span> Dancing
                            </a>
                        </Link>
                    </div>


                    <div className="gallary-images" id="Photo">
                        <div className="masonry sm:masonry-sm md:masonry-md">

                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images1.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images2.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images3.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images4.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images5.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images6.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images7.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images11.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images8.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images9.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>
                            <div className=" mb-5 break-inside relative">
                                <img src="/images/user-images10.png" alt="" />
                                <img src="/images/like-profile.png" alt="like" className="absolute bottom-2 right-2" />
                            </div>

                        </div>
                        <div className="w-full text-center">
                            <button className="load-more-images">
                                Load More
                            </button>
                        </div>
                    </div>
                </GallarytFilter>
                <VideoIntro >
                    <div className="flex items-center justify-between mb-8">
                        <p className="sub-title">Video Introduction</p>
                        <p className="date-posted">Uploaded 1 year ago</p>
                    </div>
                    <div className="relative">
                        {!playVideoPlayer &&
                            <>
                                <div className="layer"></div>
                                <img src="/images/pro-video-img.png" alt="" className="thumbnail" />
                                <div className="layer-btton">
                                    <button onClick={playVideo}> <img src="/images/big-play.png" /> </button>
                                </div>
                            </>
                        }

                        {playVideoPlayer &&
                            <video loop autoPlay controls>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                        }
                    </div>
                </VideoIntro>
                <Videosection id="Video">
                    <div className="flex items-center  mb-8">
                        <img src="/images/Icon (Stroke) (1).png" alt="" className="mr-4" />
                        <p className="sub-title">Video (7)</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="my-video-list">
                            <video loop muted onMouseOver={playMovie} onMouseOut={stopMovie}>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                            <h6>My Dancing skills</h6>
                            <p>Uploaded 1 month ago</p>
                        </div>
                        <div className="my-video-list">
                            <video loop muted onMouseOver={playMovie} onMouseOut={stopMovie}>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                            <h6>My Dancing skills</h6>
                            <p>Uploaded 1 month ago</p>
                        </div>
                        <div className="my-video-list">
                            <video loop muted onMouseOver={playMovie} onMouseOut={stopMovie}>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                            <h6>My Dancing skills</h6>
                            <p>Uploaded 1 month ago</p>
                        </div>
                        <div className="my-video-list">
                            <video loop muted onMouseOver={playMovie} onMouseOut={stopMovie}>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                            <h6>My Dancing skills</h6>
                            <p>Uploaded 1 month ago</p>
                        </div>
                        <div className="my-video-list">
                            <video loop muted onMouseOver={playMovie} onMouseOut={stopMovie}>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                            <h6>My Dancing skills</h6>
                            <p>Uploaded 1 month ago</p>
                        </div>
                        <div className="my-video-list">
                            <video loop muted onMouseOver={playMovie} onMouseOut={stopMovie}>
                                <source src="/video/modeling.net.mp4" type="video/mp4" />
                            </video>
                            <h6>My Dancing skills</h6>
                            <p>Uploaded 1 month ago</p>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <button className="show-more">
                            Show More
                        </button>
                    </div>
                </Videosection>
                <AudioSection id="Audio">
                    <div className="flex items-center  mb-8">
                        <img src="/images/Icon (Stroke) (2).png" alt="" className="mr-4" />
                        <p className="sub-title">Audio (7)</p>
                    </div>

                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>Commercial Voice Reel</h5>
                            <p><span>2:19</span> •  Samples for commercial projects</p>
                        </div>
                    </div>

                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>"Heirloom", Produced by Becca Taylor</h5>
                            <p><span>2:19</span> •  Gail Taplin as "Mother" Sophia, Scarlet by Kailey O'Brien and Kaine Applegate as Raif.</p>
                        </div>
                    </div>


                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>Extract - Body Surfing by Anita Shreve</h5>
                            <p><span>2:19</span> •  Reading from the novel Body Surfing, written by Anita Shreve, voiced by Gail Taplin.</p>
                        </div>
                    </div>

                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>K J Larsen's Sticks and Stones</h5>
                            <p><span>2:19</span> •  2 page extract, K J Larsen's, Sticks and Stones. Beginnings of Pants on Fire Detective Agency.</p>
                        </div>
                    </div>
                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>The Boy Soldier Excerpt. Co-Narrator.</h5>
                            <p><span>2:19</span> •  Podcast produced by Chloe Locke, Inspired by Geert Spillebeen's "Age 14".</p>
                        </div>
                    </div>

                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>Excerpt & credits from The Boy Soldier</h5>
                            <p><span>2:19</span> •  Podcast produced by Chloe Locke. Co-Narrator, Gail Taplin. Inspired by Geert Spillebeen's "Age 14".</p>
                        </div>
                    </div>
                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>Cleo the Talking Cat reading</h5>
                            <p><span>2:19</span> •  Gail Taplin reading an excerpt from the story, "Cleo the Talking Cat" written by Peter Spurgeon.</p>
                        </div>
                    </div>
                    <div className="single-audio py-4 flex items-center">
                        <img src="/images/btn.png" alt="" />
                        <div className="ml-3">
                            <h5>Conversations - An Original Audio Drama</h5>
                            <p><span>2:19</span> •  Podcast by O & J Scriptwriters - Episode 4 - The Void. "Doris" voiced by Gail Taplin</p>
                        </div>
                    </div>


                </AudioSection>

                <AppearanceSec id="Appearance">
                    <div className="flex items-center  mb-8">
                        <img src="/images/Icon (Stroke) (3).png" alt="" className="mr-4" />
                        <p className="sub-title">Appearance</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Gender</p>
                                <h6>Male</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Height</p>
                                <h6>5'11” / 180cm</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Body type</p>
                                <h6>Athletic</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Age</p>
                                <h6>19 yrs old</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Weight</p>
                                <h6>66 kg / 145 lbs</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Hair style</p>
                                <h6>Wavy</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Ethnicity</p>
                                <h6>White / Caucasian</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Chest</p>
                                <h6>91 cm / 36 in</h6>
                            </div>
                        </div><div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Hair color</p>
                                <h6>Black</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Skin color</p>
                                <h6>Tanned</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Waist</p>
                                <h6>71 cm / 28 in</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Chest</p>
                                <h6>91 cm / 36 in</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Eye color</p>
                                <h6>Brown</h6>
                            </div>
                        </div>
                        <div className="appearance-details">
                            <div className="appearance-details-single flex items-center">
                                <p>Shirt</p>
                                <h6>UK 10 / AUS 10 / US 6</h6>
                            </div>
                        </div>

                    </div>
                </AppearanceSec>
                <CreditSection id="Credits">
                    <div className="flex items-center  mb-8">
                        <img src="/images/Icon (Stroke) (4).png" alt="" className="mr-4" />
                        <p className="sub-title">Credits & experience</p>
                    </div>
                    <div className="year-of-credits">
                        <p className="year">2022</p>
                        <h5 className="date flex items-center"><div></div>Feb. 25, 2022 to Present</h5>
                        <h5 className="locations">Ambient Film Shoot, Director Hallie Halliday, Ferndown, Dorset</h5>
                        <h5 className="sub-actor"><i><span>Actor - </span> Reading a Biography • David Manne/Lighthouse Pictures</i></h5>
                    </div>

                    <div className="year-of-credits">

                        <h5 className="date flex items-center"><div></div>Jan. 12, 2022 to Feb. 21, 2022</h5>
                        <h5 className="locations">Stowe Parkland, Buckinghamshire</h5>
                        <h5 className="sub-actor"><i><span>Actor - </span>Johnny the jackman • Allen Skim/Paramount FIlms</i></h5>
                    </div>

                    <div className="year-of-credits">
                        <p className="year">2021</p>
                        <h5 className="date flex items-center"><div></div>Oct. 1, 2021 to Dec. 1, 2021</h5>
                        <h5 className="locations">Wool for Apple TV</h5>
                        <h5 className="sub-actor"><i><span>Extra - </span>  Dock Worker • Ham Levin/NBC Studios</i></h5>
                    </div>

                    <div className="year-of-credits">
                        <h5 className="date flex items-center"><div></div>Jun. 1, 2021 to Sep. 1, 2021</h5>
                        <h5 className="locations">Emerald TV series, Hatfield, Hertfordshire</h5>
                        <h5 className="sub-actor"><i><span>Extra - </span> Passer-by • Greg Pinky/ABC</i></h5>
                    </div>


                    <div className="year-of-credits">
                        <h5 className="date flex items-center"><div></div>Jun. 1, 2021 to Sep. 1, 2021</h5>
                        <h5 className="locations">An Evening With Bournemouth University</h5>
                        <h5 className="sub-actor"><i><span>Actor - </span> Steven the student • Allen Skim/Paramount FIlms </i></h5>
                    </div>


                    <div className="year-of-credits">
                        <h5 className="date flex items-center"><div></div>Mar. 1, 2021 to May. 28, 2021</h5>
                        <h5 className="locations">A High Price for Ginger Beer (Film)</h5>
                        <h5 className="sub-actor"><i><span>Actor - </span> Steven the student • Allen Skim/Paramount FIlms </i></h5>
                    </div>

                    <div className="year-of-credits">
                        <p className="year">2020</p>
                        <h5 className="date flex items-center"><div></div>Oct. 1, 2020 to Dec. 1, 2020</h5>
                        <h5 className="locations">Photoshoot TFP for Neil Alexander Smith</h5>
                        <h5 className="sub-actor"><i><span>Photographer  - </span> Freelance Studio</i></h5>
                    </div>


                    <div className="year-of-credits">
                        <h5 className="date flex items-center"><div></div>Jun. 1, 2021 to Sep. 1, 2021</h5>
                        <h5 className="locations">The Fantastic Flitcrofts</h5>
                        <h5 className="sub-actor"><i><span>Extra - </span> Zombie • Director Craig Roberts  </i></h5>
                    </div>

                    <div className="year-of-credits">
                        <p className="year">2019</p>
                        <h5 className="date flex items-center"><div></div>Feb. 25, 2019 to March 25, 2019</h5>
                        <h5 className="locations">Roadkill. TV Series</h5>
                        <h5 className="sub-actor"><i><span>Actor - </span> Reading a Biography • David Manne/Lighthouse Pictures </i></h5>
                    </div>

                    <div className="year-of-credits">
                        <h5 className="date flex items-center"><div></div>Jan. 12, 2019 to Feb. 21, 2019</h5>
                        <h5 className="locations">Stowe Parkland, Buckinghamshire</h5>
                        <h5 className="sub-actor"><i><span>Extra - </span> Kitchen Staff • BBC  </i></h5>
                    </div>
                </CreditSection>

                <ActingSec id="Acting">
                    <div className="flex items-center  mb-8">
                        <p className="sub-title"># Acting</p>
                    </div>

                    <div className="acting-section">
                        <h4>Acting Experience</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Previous paid speaking roles</p>
                            </div>

                        </div>
                    </div>
                    <div className="acting-section">
                        <h4>Languages</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>English</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>French</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Spanish</p>
                            </div>
                        </div>
                    </div>
                    <div className="acting-section">
                        <h4>Accents</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>English</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Irish</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>French</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Russian</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Spanish</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>UK Posh</p>
                            </div>
                        </div>
                    </div>
                    <div className="acting-section">
                        <h4>Union membership</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>SAG</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>HAU</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>AFTRA</p>
                            </div>
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Equity</p>
                            </div>

                        </div>
                    </div>
                    <div className="relavant-info">
                        <h3>Relevant acting info</h3>
                        <p>I’m familiar with many techniques and approaches to acting, techniques that actors swear by and treat with religious reverence.  Yet these same actors still struggle with confidence, clarity in their work, and nerves in their auditions. When I ask these actors about their approach and why they’ve chosen this particular path to follow, their short obvious response is, “It makes me a better actor.” But I never leave it at that; I always follow up with clarifying questions:</p>

                        <h5>Theatre:</h5>
                        <h6>2019, Immersive Theatre, Leon, Princes Trust , Boz Temple-Morris</h6>
                        <h6>2019, Live Rehearsed Reading, Abel, Buried Kingdom, Yellow Earth/Tristan Bates, Emily Williams</h6>
                        <h6>2018, R&D, The Man, Semite, Arsalan Sattari Productions, Daniel Goldman</h6>
                        <h6>2018, Stage, Jack, Blueberry Toast, Platform Presents/SOHO Theatre, Steve Marmion</h6>


                        <h5>Theatre:</h5>
                        <h6>2019, Immersive Theatre, Leon, Princes Trust , Boz Temple-Morris</h6>
                        <h6>2019, Live Rehearsed Reading, Abel, Buried Kingdom, Yellow Earth/Tristan Bates, Emily Williams</h6>
                        <h6>2018, R&D, The Man, Semite, Arsalan Sattari Productions, Daniel Goldman</h6>
                        <h6>2018, Stage, Jack, Blueberry Toast, Platform Presents/SOHO Theatre, Steve Marmion</h6>



                        <h5>Television/Online/Corporate:</h5>
                        <h6>2022, Phillips, Presenting, Victor (Nurse)</h6>
                        <h6>2022, Commercial, Alcohol, Hero Friend</h6>
                        <h6>2022, NHS VR, Lead Nurse</h6>
                        <h6>2022, NHS VR, Lead Nurse</h6>
                        <h6>2021, Online, Clearhead, Doctor</h6>
                        <h6>2021, Music Video, Babel, Green Hero</h6>




                        <h5>Theatre:</h5>
                        <h6>2019, Immersive Theatre, Leon, Princes Trust , Boz Temple-Morris</h6>
                        <h6>2019, Live Rehearsed Reading, Abel, Buried Kingdom, Yellow Earth/Tristan Bates, Emily Williams</h6>
                        <h6>2018, R&D, The Man, Semite, Arsalan Sattari Productions, Daniel Goldman</h6>
                        <h6>2018, Stage, Jack, Blueberry Toast, Platform Presents/SOHO Theatre, Steve Marmion</h6>

                    </div>
                </ActingSec>

                <ModelingSec id="Modeling">
                    <div className="flex items-center  mb-8">
                        <p className="sub-title"># Acting</p>
                    </div>

                    <div className="acting-section">
                        <h4>Acting Experience</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Part-time model - paid commercial work</p>
                            </div>

                        </div>
                    </div>


                    <div className="acting-section">
                        <h4>Modelling agent</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>TMP</p>
                            </div>

                        </div>
                    </div>

                    <div className="relavant-info">
                        <h3>Relevant acting info</h3>
                        <p>Experienced model with more than five years of experience. Appeared in over 100 fashion shoots published in print and web editions of major magazines. Participated in 2016 New York and Paris Fashion Weeks.</p>


                        <h6>Magazines</h6>
                        <h6>Elle magazine</h6>
                        <h6>Vogue Italia</h6>
                        <h6>Fitnet magazine (front cover)</h6>
                        <h6>Face off magazine</h6>


                        <h6>Designers</h6>
                        <h6>Jan knibbs</h6>
                        <h6>Juliet's interiors</h6>
                        <h6>Fabrayan</h6>
                        <h6>Alyssa smith</h6>
                    </div>
                </ModelingSec>

                <DancingSec id="Dancing">
                    <div className="flex items-center  mb-8">
                        <p className="sub-title"># Dancing</p>
                    </div>

                    <div className="acting-section">
                        <h4>Dancing Ability</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Intermediate</p>
                            </div>

                        </div>
                    </div>


                    <div className="acting-section">
                        <h4>Teaching or Choreography ability</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Intermediate</p>
                            </div>

                        </div>
                    </div>

                    <div className="acting-section">
                        <h4>Dancing agent</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Tracey Adams</p>
                            </div>

                        </div>
                    </div>


                    <div className="acting-section">
                        <h4>Dancing styles</h4>
                        <div className="tag-inners">
                            <div>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Ballet </p>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Contemporary </p>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Jazz </p>
                                <p className="flex items-center"><span><img src="/images/right-icons.png" alt="" /></span>Tap </p>

                            </div>

                        </div>
                    </div>

                    <div className="relavant-info">
                        <h3>Relevant acting info</h3>
                        <h6>Been dancing since I was three.</h6>
                        <h6>Ballet</h6>
                        <h6>Modern</h6>
                        <h6>Jazz</h6>
                        <h6>Pointe</h6>
                        <h6>Tap</h6>
                        <h6>Irish</h6>
                        <h6>Commercial</h6>
                        <h6>Street</h6>
                        <h6>Contemporary</h6>
                        <h6>Lyrical</h6>
                        <h6>Musical Theatre</h6>
                        <h6>Singing</h6>
                    </div>
                </DancingSec>


                <CommentSection>
                    <div id="target19">
                        <div className="latest-comment">
                            <img src="/images/message.png" alt="messages" />   <h5>Latest Comments</h5>
                        </div>
                        <div className="comment-textarea">
                            <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                            <button type="button" > Submit</button>
                        </div>
                    </div>
                    <SingleReply>
                        <div className="single-reply">
                            <div className="profile-images">
                                <img src="/images/user-pro.png" alt="profile" />
                                <h5>Maude Hall</h5>
                                <p>14 min</p>

                            </div>

                            <div className="comment-details">
                                <h3>This person is fantastically incredible </h3>
                            </div>

                            <div className="likes-comment">
                                <div className="likes">
                                    <h3>2 Likes</h3>
                                </div>
                                <div className="reply">
                                    <img src="/images/reply.svg" alt="reply" />
                                    <h3>Reply</h3>
                                </div>
                                <div className="like-icon">
                                    <input type="checkbox" id="heart" />
                                    <label htmlFor="heart"></label>
                                    {/* <img src="/images/thumbs-up.svg" alt="thumbs-up" /> */}
                                </div>
                            </div>
                            {/* <div className="comment-textarea">
                                <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                                <button type="button" > Submit</button>
                            </div> */}
                        </div>
                    </SingleReply>
                    <div className="reply-section">
                        <SingleReply>
                            <div className="single-reply">
                                <div className="profile-images">
                                    <img src="/images/user-pro1.png" alt="profile" />
                                    <h5>Dianne Russell</h5>
                                    <p>24 min</p>

                                </div>

                                <div className="comment-details">
                                    <h3>Yes he is so incredible and friend, I like this man</h3>
                                </div>

                                <div className="likes-comment">
                                    <div className="likes">
                                        <h3>2 Likes</h3>
                                    </div>
                                    <div className="reply" >
                                        <img src="/images/reply.svg" alt="reply" />
                                        <h3>Reply</h3>
                                    </div>
                                    <div className="like-icon">
                                        <input type="checkbox" id="heart" />
                                        <label htmlFor="heart"></label>
                                        {/* <img src="/images/thumbs-up.svg" alt="thumbs-up" /> */}
                                    </div>
                                </div>
                                {/* <div className="comment-textarea">
                                    <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                                    <button type="button" > Submit</button>
                                </div> */}
                            </div>
                        </SingleReply>
                        <SingleReply>
                            <div className="single-reply">
                                <div className="profile-images">
                                    <img src="/images/user-pro2.png" alt="profile" />
                                    <h5>Esther Howard</h5>
                                    <p>26 min</p>

                                </div>

                                <div className="comment-details">
                                    <h3>He has so many talented videos that you can check out</h3>
                                </div>

                                <div className="likes-comment">
                                    <div className="likes">
                                        <h3>2 Likes</h3>
                                    </div>
                                    <div className="reply" >
                                        <img src="/images/reply.svg" alt="reply" />
                                        <h3>Reply</h3>
                                    </div>
                                    <div className="like-icon">
                                        <input type="checkbox" id="heart" />
                                        <label htmlFor="heart"></label>
                                        {/* <img src="/images/thumbs-up.svg" alt="thumbs-up" /> */}
                                    </div>
                                </div>
                                {/* <div className="comment-textarea">
                                    <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                                    <button type="button" > Submit</button>
                                </div> */}
                            </div>
                        </SingleReply>
                    </div>
                </CommentSection>

                <br />
            </Container>
        </CustomLayer >


    );
}

const CustomLayer = styled.div`
    background-color:#F8F9FB;
`;

const EditProfile = styled.div`
background: rgba(60, 60, 67, 0.6);
display:flex;
align-items:center;
justify-content:center;
padding:10px 0;

img{
    margin-right:10px;
}

p{
    margin-right:10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color:#fff;
}

a{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color:#fff;
    text-decoration:underline;
}
`;

export const SingleReply = styled.div`
    .single-reply{
      margin-top:40px;

      .profile-images{
        display:flex;
        align-items:center;

        img{
          height:40px;
          min-width:40px;
          // aspect-ratio:;
          object-fit:cover;
          border-radius:50%;
        }

        h5{
          font-weight: 500;
          font-size: 18px;
           color: ${p => p.theme.base};
          margin-left:10px;
        }

        p{
          color: #B4BBC6;
          font-weight: 400;
          font-size: 16px;
          margin-left:10px;

        }

      }

      .comment-details{
        margin-top:6px;
        display:flex !important;
        align-items:center;
        justify-content:space-between;

        h3{
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }
      }

      .likes-comment{
        margin-top:12px;
        display:flex;
        align-items:center;
      

      .likes{
        cursor:pointer;

        h3{
          color: #8991A0;
          font-weight: 400;
          font-size: 14px;
        }
      }

      .reply{
        display:flex;
        align-items:center;
        margin-left:12px;
        margin-right:30px;
        cursor:pointer;

        h3{
          color: #8991A0;
          font-weight: 400;
          font-size: 14px;
        }
      }

      .like-icon{
        cursor:pointer;

      

        input[type="checkbox"] {
          display: none;
        }


        input[type="checkbox"]+label {
          position: relative;
          width:24px;
          height:24px;
        }
 
         input[type="checkbox"] + label:before {
              content: "";
              background-image:url(/images/thumbs-up.svg);
              background-size:cover;
              background-repeat:no-repeat;
              top: -11px;
              left: -8px;  
              width:24px;
              height:24px;
              display: block;
              position: absolute;
              transition:  .5s ease;
            cursor:pointer;

          }

          input[type="checkbox"]:checked+label:before {
            border: 1px solid transparent;
            display: none !important;
            background-color: transparent;
          }
 
 
 
        input[type="checkbox"]:checked + label:after {
            content: '';
            background-image:url(/images/thumb-up.png);
            background-size:cover;
            background-repeat:no-repeat;
            position: absolute;
            top: -11px;
            left: -8px;        
            width:24px;
            height:24px;
            transition:  .5s ease;
            cursor:pointer;
        }
      }

    }
    }
`;

export const CommentSection = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding:30px;
    margin-top:20px;
    margin-top:20px;
    
    ul{
      align-items:center;

      .previous{
        background:#fff !important;
      }

      .next{
        background:#fff !important;
      }

      .selected{
        color: ${p => p.theme.primary};
        font-weight:600;
      }

      li{
          font-weight:600;
          min-width:44px !important;
          width:auto !important;
          max-width: fit-content;
          span{
            height: 44px ;
            line-height: 44px;

            svg{
              margin-right:0 !important;
              margin-left:0 !important;
            }

            span{
              display:none !important;
            }
          }
      }
    }

    .latest-comment{
      display:flex;
      align-items:center;

      h5{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
         color: ${p => p.theme.base};
        margin-left:10px;
      }
    }

    .comment-textarea{
      margin-top:20px;
      width:100%;

      button{
        border: 1px solid #F31212;
        border-radius: 4px;
        background: #F8F9FB;
        padding:10px 15px;
        font-weight: 600;
        font-size: 16px;
        color: #F31212;
        margin-left:auto;
        display:flex;
      }

      textarea{
        width:100%;
        border: 1px solid rgba(180, 187, 198, 0.5);
        border-radius:5px;
        padding:15px;
        font-size: 16px;
        color:${p => p.theme.base}
        background:#ffffff;
        outline:none !important;
      }

      textarea::placeholder{
        font-weight: 400;
        font-size: 16px;
        color: #9E9EA8;
      }

    }

    .reply-section{
      border-left: 3px dashed #E7E7ED;
      padding-left:15px;
      padding-right:15px;
    }

`;

const DancingSec = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 40px 50px;
    border-radius: 4px;
    margin-top:20px;

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .relavant-info{
        margin-top:60px;

        h3{
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color:${p => p.theme.base}
            
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
          
            margin-top:15px;
        }

        h5{
            margin-top:20px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color:${p => p.theme.base}
        }

        h6{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color:${p => p.theme.base}
            line-height:30px;
          
        }   
    }

    .acting-section{
        margin-top:32px;
  

        h4{
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            color:${p => p.theme.base}
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
            margin-top:10px;
            span{
                margin-right:10px;
            }
        }
    }
`;

const ModelingSec = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 40px 50px;
    border-radius: 4px;
    margin-top:20px;

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .relavant-info{
        margin-top:60px;

        h3{
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color:${p => p.theme.base}
            
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
            opacity:0.7;
            margin-top:15px;
        }

        h5{
            margin-top:20px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color:${p => p.theme.base}
        }

        h6{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color:${p => p.theme.base}
            line-height:30px;
            opacity:0.8;
        }   
    }

    .acting-section{
        margin-top:32px;
  

        h4{
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            color:${p => p.theme.base}
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
            
            margin-top:10px;
            span{
                margin-right:10px;
            }
        }
    }
`;

const ActingSec = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 40px 50px;
    border-radius: 4px;
    margin-top:20px;
    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .relavant-info{
        margin-top:60px;

        h3{
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color:${p => p.theme.base}
            
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
            opacity:0.7;
            margin-top:15px;
        }

        h5{
            margin-top:20px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color:${p => p.theme.base}
        }

        h6{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color:${p => p.theme.base}
            line-height:30px;
            opacity:0.8;
        }   
    }

    .acting-section{
        margin-top:32px;
        .tag-inners{
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            width:100%;

            & >div :nth-child(1n){
                width:30%;
            }

            
            & >div :nth-child(2n){
                width:70%;
            }
        }

        h4{
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            color:${p => p.theme.base}
        }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
         
            margin-top:10px;
            span{
                margin-right:10px;
            }
        }
    }
`;

const CreditSection = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 40px 50px;
    border-radius: 4px;
    margin-top:20px;

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .year-of-credits{
        margin-top:35px;

        .year{
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            color:${p => p.theme.base}
        }
        .date{
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color:${p => p.theme.base}
            margin-top:10px;

            div{
                width:10px;
                height:10px;
                border-radius:50%;
                background:#F31212;
                margin-right:10px;
            }
        }
        .locations{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color:${p => p.theme.base}
            margin-top:10px;

        }

        .sub-actor{
            span{
            font-weight: 600;

            }
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color:${p => p.theme.base}
            margin-top:10px;
        }
    }
`;

const AppearanceSec = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 40px 50px;
    border-radius: 4px;
    margin-top:20px;

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .appearance-details{
        .appearance-details-single{
            margin-bottom:10px;

            p{
                width:100px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                color:${p => p.theme.base}
             
            }

            h6{
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                color: #F31212;
            }
        }
    }
`;

const AudioSection = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 50px 50px;
    border-radius: 4px;
    margin-top:20px;

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }
    .single-audio{
        border-bottom:1px solid #E5E7EB;
        
        img{
            cursor:pointer;
        }

        h5{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color:${p => p.theme.base}
        }   
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color:${p => p.theme.base}
   

            span{
                font-weight: 500;
            }
        }
    }
`;

const Videosection = styled.div`
background-color:#ffffff;
box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 15px 50px;
    border-radius: 4px;
    margin-top:20px;

    .show-more{
        background: #F8F9FB;
        border: 1px solid #F31212;
        border-radius: 4px;
        color: #F31212;
        padding:10px 24px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        margin-bottom:50px;
    }

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .my-video-list{
        margin-bottom:40px;
        video{
            // height:250px;
            width:100%;
            cursor:pointer;
           
        }
        h6{
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            color:${p => p.theme.base}
            margin-top:20px;
        }
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color:${p => p.theme.base}
            margin-top:10px;
        }
    }
`;

const VideoIntro = styled.div`
    background-color:#ffffff;
    box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding:60px 50px 50px 50px;
    border-radius: 4px;
    margin-top:50px;

    .sub-title{
        color:${p => p.theme.base}
        font-style: normal;
        font-weight: 600;
        font-size:24px;
    }

    .date-posted{
        color:rgba(60, 60, 67, 0.6);
        opacity:0.6;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }

    .layer{
        position:absolute;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.6);

    }

    .thumbnail{
        
    }

    .layer-btton{
        position:absolute;
        width:100%;
        text-align:center;
     
        top:40%;
    }

    video{
   
        width:100%;
    }

`;

const GallarytFilter = styled.div`
    margin-top:40px;

.gallary-images{
    margin-top:40px;

    .single-images{
        margin-top:20px;
        img{

        }
    }

    .load-more-images{
        background: #F8F9FB;
        border: 1px solid #F31212;
        border-radius: 4px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #F31212;
        padding:14px 24px;
        margin-top:40px;
    }
}

    
.filter-tabs{


    a{
        background: #F8F9FB;
        border: 1px solid rgba(87, 87, 97, 0.6);
        border-radius: 4px;
        padding:14px 24px;
         color: ${p => p.theme.base};
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        display:flex;
        align-items:center;
        width:max-content;
        margin-left:4px;
        margin-right:4px;
        margin-bottom:10px;

        img{
            margin-right:7px;
        }

        .tab-counts{
            margin-left:7px;
        }
    }
}
`;

const HeroSection = styled.div`
    // background-color:#000;

    .mc-profile-layout{
        .image-left{
            .main-image{
                img{
                    width: 219px;
                    min-width: 219px;
                    height: 328px;
                    object-fit:cover;
                    margin-bottom:5px;
                }
            }
            .profile-image{
                img{
                    width: 219px;
                    min-width: 219px;
                    height: 181px;
                    object-fit:cover;
                    margin-bottom:5px;

                }
            }
            button{
                background: ${p => p.theme.base}
                border-radius: 1000px;
                width:100%;
                padding:7px 0;
                font-weight: 600;
                font-size: 14px;
                color: #FFFFFF;
                img{
                    margin-right:8px;
                }
                
            }
        }
        .image-right{

            margin-left:5px;

            .profile-image{
                img{
                    width: 219px;
                    min-width: 219px;
                    height: 181px;
                    object-fit:cover;
                    margin-bottom:5px;

                }
            }
        }
    }


    .profile-info{
        .profile-info-content{
            .user-name{
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                color:${p => p.theme.base}
            }
            .user-archivements{
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                margin-top:10px;
                color:${p => p.theme.base}


                span{
                    color:#F31212;
                }
            }

            .user-location{
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                color: #F31212;
                margin-top:14px;

                img{
                    margin-right:10px;
                }
            }

            .add-follow{
                margin-top:17px;

                .add-friends{
                    background: #F31212;
                    border-radius: 4px;
                    padding:10px 24px;
                    color: #FFFFFF;
                    font-weight: 600;
                    font-size: 16px;

                    img{
                        margin-right:7px;
                    }
                }
                .follows{
                    font-weight: 600;
                    font-size: 16px;
                    color: #F31212;
                    border: 1px solid #FF0000;
                    border-radius: 4px;
                    background: #F8F9FB;
                    padding:10px 24px;
                    margin-left:10px;
                }
            }

            .likes{
                margin-top:30px;
                p{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                     color: ${p => p.theme.base};
                    margin-right:25px;

                    span{
                        font-weight: 600;

                    }
                }
            }

            .quotestions{
                margin-top:15px;
                p{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                     color: ${p => p.theme.base};
                    
                }
            }

            .my-website{
                margin-top:20px;

                img{
                    margin-right:7px;
                }

                a{
                    color:#F31212;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                }
            }

            .social-icons{
                margin-top:30px;

                a{
                    margin-right:10px;
                }

            }

        }
    }

`;






