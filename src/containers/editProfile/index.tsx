import BackToTop from "components/BackToTop";
import AddAudios from "components/profile/AddAudios";
import AddIntroVideo from "components/profile/AddIntroVideo";
import AddVideos from "components/profile/AddVideos";
import ActingExperience from "components/profile/experience/Acting";
import DancingExperience from "components/profile/experience/Dancing";
import ExtrasExperience from "components/profile/experience/Extras";
import HairMakeupExperience from "components/profile/experience/HairMakeup";
import InfluencerExperience from "components/profile/experience/Influencer";
import VideosListing from "containers/profile/videosListing";
import ModelingExperience from "components/profile/experience/Modeling";
import MusicExperience from "components/profile/experience/Music";
import PhotographyExperience from "components/profile/experience/Photography";
import PresenterExperience from "components/profile/experience/Presenter";
import Appearance from "containers/profile/Appearance";
import AudiosListing from "containers/profile/audiosListing";
import Credits from "containers/profile/CreditExperience";
import IntroVideo from "containers/profile/IntroVideo";
import Navbar from "containers/profile/Navbar";
import PhotosListing from "containers/profile/photosListing";
import { useProfileStore } from "context/ProfileStore";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChatAlt, HiPencil } from "react-icons/hi";
import AboveTheFold from "./AboveTheFold";
import Score from "./Score";
import { Container, Disclaimer, SingleReply, OverLayFirstSlide } from "./styles";
import AddPhotos from "components/profile/EmptyPhotoList";
import AddExperience from "components/profile/edit/AddExperience";
import IntroVideoSection from "components/profile/IntroVideoSection";
import DocumentsListing from "containers/profile/documentsListing";
import FilmStageExperience from "components/profile/experience/FilmStage";
import TvRealityExperience from "components/profile/experience/TvReality";
import { categoriesKeys, interest } from "@/utils/constants/profile";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Joyride from "react-joyride";
import { IoChatboxEllipses } from "react-icons/io5";
import { useRouter } from "next/router";
import CommentSection from "components/profile/CommentSection";
import DynamicSection from "containers/profile/DynamicSection";
import ProfileSpotlights from "components/profile/ProfileSpotlights";
import ContestEntries from "components/profile/ContestEntries";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const steps = [
  {
    target: '#target1',
  },
  {
    target: '#target2',
    content:
      <div className="target-content">
        <p>This is your headshot</p>
        <h6>The most important photo you need
          that all Casting Directors see first.</h6>

      </div>,
  },
  {
    target: '#target3',
    content:
      <div className="target-content">
        <p>Messaging</p>
        <h6>See important messages here like
          CD invitations, messages from talent.</h6>
      </div>,
  },
  {
    target: '#target4',
    content:
      <div className="target-content">
        <p>Notifications</p>
        <h6>Displays list of important events and
          notifications, like connections request,
          ET updates, matched jobs and more.
          Make sure to check it always.</h6>

      </div>,
  },
  {
    target: '#target5',
    content:
      <div className="target-content">
        <p>Profile sub menu</p>
        <h6>You can click here and it will dropdown another menu:</h6>
        <ul>
          <li>Upgrade to Pro</li>
          <li>Be a Featured Talent</li>
          <li>Casting Preference</li>
          <li>Settings</li>
          <li>About</li>
          <li>Testimonials</li>
          <li>Language</li>
          <li>Logout</li>
        </ul>
      </div>
  },
  {
    target: '#target6',
    content:
      <div className="target-content">
        <p>Likes & Connections counter</p>
        <h6>Show’s your followers, follow and connections.
          You can tap on it to show your connections.</h6>
      </div>
  },
  {
    target: '#target7',
    content:
      <div className="target-content">
        <p>Location & Interests</p>
        <h6>Display’s where you from &
          Show’s the job interests you have selected</h6>
      </div>
  },
  {
    target: '#target8',
    content:
      <div className="target-content">
        <p>About me</p>
        <h6>Display short details about yourself.</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like you don’t have details added yet
            Please click on add about me</h5>
        </div>
      </div>
  },
  {
    target: '#target9',
    content:
      <div className="target-content">
        <p>Social links</p>
        <h6>Link your social media pages</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>You can still add more of your social profiles
            Please click on add social links</h5>
        </div>
      </div>
  },
  {
    target: '#target10',
    content:
      <div className="target-content">
        <p>Photos</p>
        <h6>Photos that showcase your career</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like you don’t have photos yet
            Please click on add photos</h5>
        </div>
      </div>
  },
  {
    target: '#target11',
    content:
      <div className="target-content">
        <p>Video greeting</p>
        <h6>One of the important video where
          Casting Directors will notice</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like you don’t have video greeting yet
            Please click on add video greting</h5>
        </div>
      </div>
  },
  {
    target: '#target12',
    content:
      <div className="target-content">
        <p>Video</p>
        <h6>Showcase videos of yourself that
          related to your career</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like you don’t have video’s yet
            Please click on add video</h5>
        </div>
      </div>
  },
  {
    target: '#target13',
    content:
      <div className="target-content">
        <p>Audio</p>
        <h6>Post audio recording of yourself that
          help’s you with your career.</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like you don’t have audio’s yet
            Please click on add audio</h5>
        </div>
      </div>
  },
  {
    target: '#target14',
    content:
      <div className="target-content">
        <p>Appearance</p>
        <h6>Details information about your appearance
          as a reference of casting director’s on the role they are looking.</h6>
      </div>
  },
  {
    target: '#target15',
    content:
      <div className="target-content">
        <p>Credits & experience</p>
        <h6>Add experience that you have from
          your entire career</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like you don’t have credits & experience yet
            Please click on add credits & experience</h5>
        </div>
      </div>
  },
  {
    target: '#target16',
    content:
      <div className="target-content">
        <p>Acting experience  </p>
        <h6>Based from your acting interest, This will be serve as
          summary of Casting Director’s interest for their casting.</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like youdid not fill your Acting experience yet
            Please click on add acting experience</h5>
        </div>
      </div>
  },
  {
    target: '#target17',
    content:
      <div className="target-content">
        <p>Modeling experience</p>
        <h6>Based from your modeling interest, This will be serve as
          summary of Casting Director’s interest for their casting.</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like youdid not fill your modeling experience yet
            Please click on add modeling experience</h5>
        </div>
      </div>
  },
  {
    target: '#target18',
    content:
      <div className="target-content">
        <p>Dancing experience</p>
        <h6>Based from your dancing interest, This will be serve as
          summary of Casting Director’s interest for their casting.</h6>
        <div className="flex items-center danger-zone">
          <img src="/images/danger.svg" alt="" />
          <h5>It seems like youdid not fill your dancing experience yet
            Please click on add modeling experience</h5>
        </div>
      </div>
  },
  {
    target: '#target19',
    content:
      <div className="target-content">
        <p>Latest comments</p>
        <h6>The comments from other talents or casting director
          will be displayed here. You can also manage your contents of profile. </h6>
      </div>
  }

]

export default function EditUserProfile({ newUser }: { newUser: boolean }) {

  const { profile, loading, refreshing } = useProfileStore();

  const [startTour, setStartTour] = useState(true);
  const [startSlideTour, setStartSlideTour] = useState(false);
  const [startIndexData, setSetIndex] = useState(0);
  const route = useRouter()
  const Data = route.asPath.split("#")[1]
  console.log("route.asPath.split('#')[1]: ", route.asPath.split("#")[1])
  const [firstTourDone, setFirstTourDone] = useState("")



  useEffect(() => {
    setFirstTourDone(localStorage.getItem("firstTourDone") || "")
  }, [])

  const acting = {
    experience: profile?.categories?.acting?.experience || '',
    agentName: profile?.categories?.acting?.agentName || '',
    agentWebsite: profile?.categories?.acting?.agentWebsite || '',
    language: profile?.categories?.acting?.language || [],
    accent: profile?.categories?.acting?.accent || []
  }

  const isActingEmpty = acting.language.length === 0 && acting.accent.length === 0 && !acting.agentName && !acting.experience;

  useEffect(() => {

    if (Data) {
      // debugger;
      switch (Data) {
        case "target7":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(6)
          break;
        case "target9":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(8)
          break;
        case "target10":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(9)
          break;
        case "target11":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(10)
          break;
        case "target12":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(11)
          break;
        case "target13":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(12)
          break;
        case "target15":
          setStartSlideTour(true)
          setStartTour(false)
          setSetIndex(14)
          break;


        default:
          setSetIndex(0)
          break;
      }

    }

  }, [Data])

  const CancleTourBtn = () => {
    setStartTour(false)
  }

  const StartTourBtn = () => {
    setStartSlideTour(true)
    setStartTour(false)

  }

  useEffect(() => {
    localStorage.setItem("firstTourDone", "y")
  }, [])

  return (
    <>
      {newUser && firstTourDone === "" && startTour &&
        <OverLayFirstSlide>
          <div className="modal-inner">
            <div className="modal-header">
              <img src="/images/flagstep1.png" alt="" />
              <h6>Welcome to ET app tour</h6>
              <p>You will learn more about the app on:</p>
            </div>
            <div className="modal-list">
              <ol className="list-decimal">
                <li>
                  Profile
                  <ul>
                    <li>Sections of profile page</li>
                    <li>Adding / managing your contents</li>
                  </ul>
                </li>
                <li>
                  Audition/Jobs
                  <ul>
                    <li>Sections of contest page</li>
                    <li>How to apply for auditions/jobs</li>
                    <li>Job preferences</li>
                  </ul>
                </li>
                <li>
                  Contest
                  <ul>
                    <li>Sections of contest page</li>
                    <li>How to join contest</li>
                    <li>Rating contestant entry</li>

                  </ul>
                </li>
                <li>
                  Explore
                  <ul>
                    <li>Section of explore page</li>
                    <li>How to post on explore news feed</li>
                  </ul>
                </li>
                <li>
                  Top menus
                  <ul>
                    <li>Getting to know more of our menus</li>
                    <li>Section of explore page</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="modal-footer">
              <button className="start-tour" onClick={StartTourBtn}>OK, Start app tour</button>
              <button className="cancle-tour" onClick={CancleTourBtn}>Cancel</button>
            </div>
          </div>
        </OverLayFirstSlide>
      }

      <Disclaimer className="px-5 py-3 block">
        <div className="w-fit mx-auto">
          <span>
            <HiPencil className="text-x" style={{ display: "inline-block" }} />{" "}
          </span>
          <span>You are currently on profile edit mode • </span>{" "}
          <Link href={"/" + profile.talentlogin}>
            <a className="underline">View as public</a>
          </Link>
        </div>
      </Disclaimer>

      <BackToTop />

      <Container className="padding-small bg-paper txt-base">
        <div className="" style={{ maxWidth: "1530px", margin: "0 auto" }}>
          {/* profile score */}
          {/* <div className="w-full mb-10">
            <Score />
          </div> */}

          {/* above the fold */}
          <div className="w-full mb-5" >
            <AboveTheFold
              {...{
                ...profile,
                loading,
                refreshing,
                own: true,
                editable: true,
              }}
            />
          </div>

          {/* nav */}
          <Navbar
            photos={profile?.photoCount}
            videos={profile?.videoCount}
            documents={profile?.documentCount}
            songs={profile?.songCount}
            creditExperience={
              profile?.creditExperience?.length > 0 ? true : false
            }
            acting={
              profile?.interest
                ?.map((i: any) => i.label === "Acting")
                .includes(true)
                ? true
                : false
            }
            photography={
              profile?.interest
                ?.map((i: any) => i.label === "Photography")
                .includes(true)
                ? true
                : false
            }
            hairMakeup={
              profile?.interest
                ?.map((i: any) => i.label === "Hair, Makeup, & Styling")
                .includes(true)
                ? true
                : false
            }
            dance={
              profile?.interest
                ?.map((i: any) => i.label === "Dancing")
                .includes(true)
                ? true
                : false
            }
            extras={
              profile?.interest
                ?.map((i: any) => i.label === "Extras")
                .includes(true)
                ? true
                : false
            }
            influencer={
              profile?.interest
                ?.map((i: any) => i.label === "Influencer")
                .includes(true)
                ? true
                : false
            }
            modeling={
              profile?.interest
                ?.map((i: any) => i.label === "Modeling")
                .includes(true)
                ? true
                : false
            }
            filmStage={
              profile?.interest
                ?.map((i: any) => i.label === "Film & Stage Crew")
                .includes(true)
                ? true
                : false
            }
            tvReality={
              profile?.interest
                ?.map((i: any) => i.label === "TV & Reality")
                .includes(true)
                ? true
                : false
            }
            music={
              profile?.interest
                ?.map((i: any) => i.label === "Musician")
                .includes(true)
                ? true
                : false
            }
            presenter={
              profile?.interest
                ?.map((i: any) => i.label === "Presenter")
                .includes(true)
                ? true
                : false
            }
          />

          {/* photos */}
          <div className="w-full mt-5" id="target10">
            <PhotosListing
              own
              addEnable={true}
              editable={true}
              profile={profile}
            />
          </div>

          {/* <ContestEntries own={true} />

          <div className="my-5">
            <ProfileSpotlights own={true} />
          </div> */}

          {/* video intro */}
          {/* {profile?.introVideo?.uri?.length > 0 && ( */}
          <div id="intro-video">
            <div className="w-full mb-5 mt-5">
              <IntroVideoSection own edit {...profile.introVideo} />
            </div>
          </div>
          {/* )} */}

          {/* videos */}
          <div className="w-full mb-5">
            <VideosListing own addEnable={true} editable={true} />
          </div>

          {/* audios */}
          <div className="w-full mb-5">
            <AudiosListing own addEnable={true} editable={true} />
          </div>

          {/* DOCUMENTS */}
          <div className="w-full mb-5">
            <DocumentsListing own editable />
          </div>

          {/* appearance */}
          <div className="w-full mb-5">
            <Appearance own edit />
          </div>

          {/* credits and experience */}
          <div id="credits">
            {profile?.creditExperience?.length > 0 ? (
              <div className="w-full mb-5" id="target15">
                <Credits own edit />
              </div>
            ) : (
              <div id="target15">
                <AddExperience
                  title="Credits & experience"
                  text="The detailed your credits & experience, the higher the chances you will be choosen."
                  link="/profile/edit/creditExperience"
                  imagesSource="/images/preview-credit.svg"
                  buttonText="credits & experience"
                />
              </div>
            )}
          </div>

          {/* experience */}
          <DynamicSection profile={profile} edit={true} own={true} />

          {/* comments */}
          <div className="w-full mb-5">
            <CommentSection talentnum={profile?.talentnum} />
            {/* <CommentSection  /> */}
          </div>
        </div>
      </Container>

      {newUser && startSlideTour &&
        startIndexData == 0 &&
        <Joyride
          steps={steps}
          continuous={true}
          hideBackButton={true}
        />
      }
      {newUser && startSlideTour &&
        startIndexData > 0 &&
        <Joyride
          steps={steps}
          continuous={true}
          hideBackButton={true}
          stepIndex={startIndexData}
          styles={{
            buttonNext: {
              display: 'none',
            }
          }}
        />
      }
    </>
  );
}


{/* <CommentSection className="bg-paper txt-base" >
              <div id="target19">
                <div className="latest-comment">
                  <HiOutlineChatAlt className="text-2xl" />   <h5>Latest Comments</h5>
                </div>
                <div className="comment-textarea">
                  <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                  <button type="button" > Submit</button>
                </div>
              </div>
              <SingleReply>
                <div className="single-reply">
                  <div className="profile-images">
                    <img src="/images/user_profile.png" alt="profile" />
                    <h5>Sondagr Ravi</h5>
                    <p>3 weeks ago</p>
                    <div className="ml-2">
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex justify-center w-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 opacity-50	">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button

                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-800' : 'text-gray-400',
                                      'flex items-center px-4 py-2 text-sm w-full'
                                    )}
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button


                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-800' : 'text-gray-400',
                                      'flex items-center px-4 py-2 text-sm w-full'
                                    )}
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>

                            </div>
                          </Menu.Items>

                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="comment-details">
                    <p>Have been getting response form casting Director and any  advice you could give me too I been getting massage or cd invitation form casting director but it’s just not respond form them. </p>
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
                    </div>
                  </div>
                  <div className="comment-textarea">
                    <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                    <button type="button" > Submit</button>
                  </div>
                </div>
              </SingleReply>
              <div className="reply-section">
                <SingleReply>
                  <div className="single-reply">
                    <div className="profile-images">
                      <img src="/images/user_profile.png" alt="profile" />
                      <h5>Sondagr Ravi</h5>
                      <p>3 weeks ago</p>
                      <div className="ml-2">
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="inline-flex justify-center w-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 opacity-50	">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button

                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-800' : 'text-gray-400',
                                        'flex items-center px-4 py-2 text-sm w-full'
                                      )}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                      Edit
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button


                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-800' : 'text-gray-400',
                                        'flex items-center px-4 py-2 text-sm w-full'
                                      )}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                      </svg>
                                      Delete
                                    </button>
                                  )}
                                </Menu.Item>

                              </div>
                            </Menu.Items>

                          </Transition>
                        </Menu>
                      </div>
                    </div>

                    <div className="comment-details">
                      <h3>Have been getting response form casting Director and any  advice you could give me too I been getting massage or cd invitation form casting director but it’s just not respond form them. </h3>
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
                      </div>
                    </div>
                    <div className="comment-textarea">
                      <ReactTextareaAutosize placeholder="Type your comment here" minRows={3} />
                      <button type="button" > Submit</button>
                    </div>
                  </div>
                </SingleReply>
              </div>
            </CommentSection> */}