import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SpotlightMediaItemsD } from 'types/spotlight'
import { deleteSpotlightApi, getMySpotlightDataApi } from 'network/apis/spotlight'
import { useAuth } from 'context/AuthContext'
import { formatSpotlightsMediaItems, formatTime } from 'network/apiFormatter/spotlights'
import MySpotlightSkel from 'containers/spotlights/MySpotlightSkel'
import AddSpotlightModal from 'containers/spotlights/AddSpotlightModal'
import VideoImageThumbnail from 'react-video-thumbnail-image';
// import { formatTime } from '@/utils/helper'
import { RiDeleteBinLine } from 'react-icons/ri'
import DeleteDialog from 'components/DeleteDialog'
import Link from 'next/link'
import momentTz from "moment-timezone";
import InstaStories from './InstaStories'
import { AiFillDelete } from 'react-icons/ai'
import ErrorBoundary from 'components/ErrorrBoundary'

const MySpotlight = () => {
    const [loading, setLoading] = useState(false);
    const [addSpotlightDialogue, setAddSpotlightDialogue] = useState(false)
    const { token } = useAuth();
    const [list, setList] = useState<SpotlightMediaItemsD[]>([]);
    const [delId, setDelId] = useState(0)
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [storiesDialog, setStoriesDialog] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log("Da list is: ", list);
    }, [list])

    const {
        auth: { authenticated },
    } = useAuth();

    const delSpotlight = () => {
        if (!delId) {
            console.log('Media key not found  ')
            return;
        }
        try {
            deleteSpotlightApi(token, delId);
            TempRemove()
            setDeleteOpen(false)

        } catch (err) {
            console.log("Err", err);
        }
    };

    const TempRemove = () => {
        setList(list.filter((i) => i.id !== delId))
    }

    const fetchList = useCallback(
        async () => {
            if (!token) {
                return;
            }
            try {
                setLoading(true);
                const res = await getMySpotlightDataApi({
                    token,
                });
                const data = res.map((i: any) => formatSpotlightsMediaItems(i));
                setList(data)
                console.log("The REs is: ", res)

                // console.log('', res)
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Err", err);
            }
        }, [token]);

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return (
        <Root>
            <div className='flex flex-col gap-2'>
                <div className=''>
                    {/* <h2>Talent Spotlight</h2>
                    <div className='flex gap-4 px-4' style={{ backgroundColor: '#F2F2F2', height: '78px', margin: '10px 0' }}>
                        <Image
                            src='/svg/talent-view-all-svg.svg'
                            width={50}
                            height={40} />
                        <button>view all</button>
                    </div> */}
                    <div className='flex justify-between pr-4'>
                        <p>Your Spotlight</p>
                        {/* <button style={{ paddingLeft: '4px' }} className='flex justify-center items-center gap-1 txt-primary' onClick={() => setAddSpotlightDialogue(true)}> */}
                        <Link href="/spotlights/add-spotlight">
                            <a style={{ paddingLeft: '4px' }} className='flex justify-center items-center gap-1 txt-primary text-sm font-semibold'>
                                <Image src='/svg/add-spotlight.svg'
                                    width={14}
                                    height={14}
                                    alt='add' />
                                Add
                            </a>
                        </Link>
                    </div>
                </div>
                {loading ? (
                    <>
                        <MySpotlightSkel />
                    </>
                ) : (
                    <div className='flex-1 overflow-auto max-h-[150vh]' >
                        {list.map((a, index) => {
                            return <SpotlightItem key={index}>
                                <div onClick={() => {
                                    setStoriesDialog(true)
                                    setActiveIndex(index)
                                }}>
                                    <PicBox>
                                        {a.type == 'image' ? <img src={a.url} /> : <VideoImageThumbnail videoUrl={a.url} alt="spotlight image " />}
                                    </PicBox>
                                </div>
                                <span className="ml-2 txt-base text-sm" >{formatTime(momentTz.tz(a.createdAt, "America/Los_Angeles"))}</span>
                                <button className='del_spotlight' onClick={() => {
                                    setDelId(a.id);
                                    setDeleteOpen(true)
                                }}> <AiFillDelete /></button>
                            </SpotlightItem>
                        })}
                    </div>
                )}
            </div>

            <InstaStories
                own={true}
                open={storiesDialog}
                onClose={() => setStoriesDialog(false)}
                activeIndex={activeIndex}
                list={list}
                currentId={activeIndex}
                onView={(mediaId: any, spotlightId: any) => {
                    setList(s => {

                        console.log("DA LIST: ", list)

                        return s.map((i) => {
                            if (i.id === mediaId) {
                                const newArray = i?.map((ia) => {
                                    if (spotlightId === ia.id) {
                                        return {
                                            ...ia,
                                            isView: false
                                        }
                                    } else {
                                        return ia
                                    }
                                })
                                return {
                                    ...i,
                                    items: newArray
                                }
                            } else {
                                return i
                            }
                        })
                    })
                }
                }>
            </InstaStories>


            <DeleteDialog open={deleteOpen} onConfirm={delSpotlight} onClose={() => setDeleteOpen(false)} title="Are you sure you want to delete this ?" />
            <AddSpotlightModal open={addSpotlightDialogue} onClose={() => setAddSpotlightDialogue(false)} onUpdate={(e) => {
                setList((s) => [e, ...s])
                setAddSpotlightDialogue(false)
            }}></AddSpotlightModal>
        </Root >
    )
}

const Root = styled.div`
    top: 5rem;
    right: 0;
    background-color: #fff;
    width: 100%;
    padding: 20px 0;
    height:100%;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #191919;
    padding: 0 1rem;
    }
    p {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #191919;
    padding: 0 1rem;
    margin-bottom: 10px;
    }
    button {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #191919;
    }
    span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #191919;
    }
`
const SpotlightItem = styled.div`
    display: flex;
    gap: 0.25rem;
    padding: 0 1rem;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #F2F2F2;
    }
    // button.del_spotlight {
    // margin-left: auto;
    // color: #e70707;
    // font-size:24px;
    // }
    // button.del_spotlight:active {
    // transform: scale(1.5);

    .del_spotlight {
        display: none;
        margin-left: auto;
        color: #e70707;
        font-size: 18px;
        color: #fff;
        padding: 5px;
        border-radius: 100%;
    }

  &:hover .del_spotlight {
      display: block;
      background: #eb4444;
      transition: all 0.3s ease;
  }
}
`
const PicBox = styled.div`
    position: relative;
    aspect-ratio: 0.5626;
    width: 80px;
    border-radius: 5px;
    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export default MySpotlight

