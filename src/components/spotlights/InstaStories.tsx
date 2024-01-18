import Stories, { WithSeeMore } from "react-insta-stories";
import React, { useEffect, useState, useCallback } from "react";
import { HiArrowRight } from 'react-icons/hi'
import { HiArrowLeft } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { FiPlus } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import styled from "styled-components";
import ModalAnimated from "components/ModalAnimated";
import { formatDate } from "@/utils/helper";
import { useAuth } from "context/AuthContext";
import { updateJobRoleApi } from "network/apis/jobs";
import { spotlightIsViewUpdateApi } from "network/apis/spotlight";
import { formatSpotlightsMediaItems, formatTime } from "network/apiFormatter/spotlights";
import { it } from "date-fns/locale";
import Comments from "./Comments";
import Link from "next/link";
import momentTz from "moment-timezone";
import ErrorBoundary from "components/ErrorrBoundary";

export default function InstaStories(props: Props) {
    const {
        open,
        onClose,
        activeIndex: pActiveIndex,
        list = [],
        onView,
        own = false,
        currentId: pCurrentId
    } = props;
    const { token } = useAuth();
    const [activeIndex, setActiveIndex] = useState<number>(pActiveIndex);
    const [currentId, setCurrentId] = useState(pCurrentId || 0);
    const [storiesCount, setStoriesCount] = useState(list[activeIndex]?.items?.length - 1)

    useEffect(() => {
        setStoriesCount(list[activeIndex]?.items?.length - 1)
        console.log("list in effect: ", list, "activeIndex: ", activeIndex)
    }, [list, activeIndex])

    console.log("list[activeIndex].items?.length: ", list[activeIndex]?.items?.length, " currentId: ", currentId)
    console.log("list: ", list, "activeIndex: ", activeIndex)

    useEffect(() => {
        if (pCurrentId === undefined) return
        setCurrentId(pCurrentId);
    }, [pCurrentId])
    // }, [])

    const [pauseVal, setPauseVal] = useState(false)
    const {
        auth: { authenticated },
    } = useAuth();

    async function onStorieStartView() {
        try {
            if (list[activeIndex].items[currentId].isViewed) {
                return;
            }
            const res = await spotlightIsViewUpdateApi({
                token,
                id: list[activeIndex].items[currentId].id
            })
            // if (list[activeIndex]?.items?.filter(i => i?.id === currentId)?.isViewed) {
            //     return;
            // }
            // const res = await spotlightIsViewUpdateApi({
            //     token,
            //     id: currentId
            // })
            onView(list[activeIndex].id, list[activeIndex].items[currentId].id)
            console.log('CurrentId:', currentId)
        }
        catch (err) {
            console.log('Error message')
        }
    }
    let storiesArr: any[] = [];

    useEffect(() => {
        setActiveIndex(pActiveIndex)
    }, [pActiveIndex])

    useEffect(() => {
        if (list.length === 0) return;
        // setCurrentId(parseInt(list[activeIndex]?.items?.map((i, index) => {
        //     if (!i.isViewed) {
        //         return index
        //     }
        //     return [0]
        // })[0]))
    }, [list])

    useEffect(() => { console.log("currentId is this one: ", currentId) }, [currentId])
    // useEffect(() => {
    //     // setCurrentId(list[activeIndex]?.items?.filter(i => i?.isView === false)[0]?.id)
    //     setCurrentId(list[activeIndex]?.items?.filter(i => i?.isViewed === false)[0]?.id)
    //     console.log('CurrentId:', currentId)
    // }, [list])

    // setCurrentId(list[activeIndex]?.items?.map((i, index) => {
    //     if (!i.isViewed) {
    //         return index
    //     }
    //     return [0]
    // })[0])

    if (list.length > 0) {

        if (own) {
            storiesArr = list.map(i => {
                return {
                    url: i.url || '',
                    header: {
                        heading: list[activeIndex]?.name || '',
                        subheading: formatDate(i?.createdAt) || '',
                        profileImage: list[activeIndex]?.pic || ''
                    },
                    type: i.type,
                }
            })
        } else {
            // setCurrentId(list[activeIndex]?.items?.map((i, index) => {
            //     if (!i.isViewed) {
            //         return index
            //     }
            //     return [0]
            // })[0])

            // setCurrentId(2)

            storiesArr = list[activeIndex]?.items.map(i => {
                // setCurrentId(2)

                return {
                    url: i.url || '',
                    header: {
                        heading: list[activeIndex]?.name || '',
                        subheading: formatDate(i.createdAt) || '',
                        profileImage: list[activeIndex]?.pic || ''
                    },
                    type: i.type,
                }
            })
        }

    }
    const NextActive = () => {
        return setActiveIndex(activeIndex + 1);
    }
    const CloseStories = () => {
        onClose()
        setActiveIndex(0);
        setCurrentId(0);
        console.log('I changed currentid: closeStories ', currentId)
    }



    return (
        <>
            <ModalAnimated open={open}  >
                <StorieSection className='StorieSection'>
                    <div className="left__side">
                        <div className='StorieDev'>
                            <div className='close icon' onClick={CloseStories}><RiCloseFill /></div>
                            {activeIndex <= 0 ? <> </> :
                                <div className='left_icon icon' onClick={() => {
                                    setCurrentId(0);
                                    setActiveIndex(activeIndex - 1);
                                    console.log('I changed currentid: hiArrow ', currentId)
                                }}><HiArrowLeft /></div>}

                            <div className="stories_img">
                                {
                                    (storiesArr && storiesArr.length > 0) ?
                                        <Stories
                                            currentIndex={currentId}
                                            loop
                                            // preventDefault
                                            keyboardNavigation
                                            isPaused={pauseVal}
                                            defaultInterval={3000}
                                            stories={storiesArr}

                                            onStoryEnd={(s: any, st: any) => {
                                                // console.log('story ended', s, st);
                                                if (currentId === storiesCount) {
                                                    // console.log('index is equal to current idesx ', currentId, list[activeIndex].items?.length)
                                                } else {
                                                    setCurrentId(s => s + 1)
                                                    console.log('I changed currentid: storyend ', currentId)
                                                }
                                            }}
                                            onAllStoriesEnd={(s: any, st: any) => {
                                                if (activeIndex === list.length - 1) {
                                                    setCurrentId(0);
                                                    console.log('I changed currentid: storiesend ', currentId)
                                                    onClose()
                                                }
                                                else {
                                                    setCurrentId(currentId + 0);
                                                    console.log('I changed currentid: storiesend else ', currentId)
                                                    NextActive()
                                                }
                                            }}
                                            onStoryStart={(s: any, st: any) => {
                                                // console.log('story started', s, st);
                                                // onView(activeIndex, currentId)
                                                onStorieStartView()
                                            }}
                                        />

                                        // <></>
                                        : null}
                            </div>
                            <div className='right icon' onClick={() => {
                                if (activeIndex === list.length - 1) {
                                    setCurrentId(0);
                                    console.log('I changed currentid: hi arrow right ', currentId)
                                    onClose()
                                } else {
                                    setCurrentId(0);
                                    console.log('I changed currentid: hi arrow right ', currentId)
                                    setActiveIndex(activeIndex + 1);
                                }
                            }}><HiArrowRight /></div>
                            {/* Comment Component */}
                            <Comments mediaId={
                                own ?
                                    list[currentId]?.id
                                    :
                                    list[activeIndex]?.items[currentId]?.id

                            }
                                boxOpen={() => { setPauseVal(false) }}
                                boxClose={() => { setPauseVal(true) }} />
                        </div>
                    </div>

                    {
                        !own &&
                        <div className="SideBar">
                            {authenticated ? <> <h2>Talent Spotlight</h2>
                                <div className='sidebar_btn'>
                                    <Link href="/spotlights/add-spotlight">
                                        <a><FiPlus /> Add spotlight</a>
                                    </Link>
                                </div> </> : ' '}
                            <h2>All Spotlights</h2>
                            <div className="overflow-auto h-[620px] no-scroll">
                                {list.map((i: any, index: any) => {
                                    return (
                                        <ProfileButton key={index} onClick={() => {
                                            setActiveIndex(index)
                                        }} active={index === activeIndex}>
                                            <div className='StoriePerson'>
                                                {i.pic ?
                                                    <img src={i.pic} alt={i?.name} style={
                                                        i.items.every((k: any) => { return (k.isView === true) })
                                                            ? { outline: '2px solid #fffff' }
                                                            : { outline: '2px solid #0070f4' }
                                                    } /> : <><img src='/images/user_profile.png' alt={i?.name} style={
                                                        i.items.every((k: any) => { return (k.isView === true) })
                                                            ? { outline: '2px solid #fffff' }
                                                            : { outline: '2px solid #0070f4' }
                                                    } /></>}
                                                <div>
                                                    <h4>{i?.name}</h4>
                                                    <p>{formatTime(
                                                        momentTz.tz(i?.items[i.items.length - 1].createdAt, "America/Los_Angeles")
                                                    )}</p>
                                                </div>
                                            </div>
                                        </ProfileButton>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </StorieSection>

            </ModalAnimated>
        </>
    )
}
function SeeMore() {
    return <div>see more</div>;
}
const StorieSection = styled.section`
    height: 100vh;
    width: 100%;
    background: black;
    display: flex;
    z-index: 9;
    justify-content: space-between;
    .StorieDev {
    margin: 20px auto;
    position: relative;
    height: fit-content;
}
 
.left__side{
margin:0px auto;
width:auto;
}
.icon {
  position: absolute;
  z-index: 9999;
  background: #3c3c4399;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
}
.right {
  right: -60px;
}
.left_icon {
  left: -60px;
}
.close {
  top: 20px;
  left: -70px;
  transform: unset;
}
.stories_img > div >div:nth-child(2) {
    justify-content: center;
}

.stories_img {
    img {
        object-fit: cover;
    }
}
/* ================================================================= */
.SideBar {
  background: #fff;
  width: 300px;
  padding: 20px 0px;
}
.SideBar h2 {
  font-weight: 600;
  font-size: 20px;
  margin: 0px 20px;
}
.sidebar_btn {
  padding: 0px 20px;
}
.sidebar_btn > a {
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #0070f4;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #0070f4;
  font-weight: 500;
  font-size: 16px;
  gap: 6px;
  margin: 20px 0px 40px 0px;
}
.StoriePerson img {
  width: 54px;
  height: 54px;
  object-fit: contain;
  border-radius: 50%;
  border: 3px solid white;
}
.StoriePerson {
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 8px 0px;
}

@media (max-width: 768px) {
    .SideBar{
        display:none;
    }}
@media (max-width: 500px) {
    .close{
        left: unset;
        right: 10px;
    }
    .left_icon{
        left:0px;
    }
    .right{
        right:0px;
    }
}
@media (max-width: 350px) {
    .close{
        left: unset;
        right: 40px;
    }
    .left_icon{
        left:0px;
    }
    .right{
        right:0px;
    }
}
`
const ProfileButton = styled.button`
    background:${p => p.active ? '#F2F2F2' : ''};
    padding: 0px 20px;
    border: none;
    width: 100%;
    text-align: left;
    transition: all 0.5s;
    &:hover {
    background: #f2f2f2;
}
`
