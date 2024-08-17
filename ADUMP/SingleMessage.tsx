import { useAuth } from 'context/AuthContext';
import { formatTalentMessageRes } from 'network/apiFormatter/talent';
import { getMessageTalentApi } from 'network/apis/messages';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
    setShowChatClass: any;
}
const SingleMessage: React.FC<Props> = ({ setShowChatClass }) => {
    const {
        auth: authentication,
        user,
        token
    } = useAuth();

    const route = useRouter()
    const [loadingMessage, setLoadingMessage] = useState(false)
    const [messageTalent, setMessageTalent] = useState<any[]>([])
    const [activeMessage, setActiveMessage] = useState(false)
    const [showDeleteEdit, setShowDeleteEdit] = useState(0);
    const [page, setPage] = useState<number>(1);
    const [lastPage, setlastPage] = useState<number>(1);


    const getContenstentDetail = async () => {
        page == 1 && setLoadingMessage(true)
        const res = await getMessageTalentApi({ token: token, page: page });
        setMessageTalent((prev) => {
            if (page == 1) {
                return [...res.data.map((y: any) => formatTalentMessageRes(y, user.id))]
            } else {
                return [...prev, ...res.data.map((y: any) => formatTalentMessageRes(y, user.id))]
            }
        });
        setlastPage(res.last_page)

        if (res && page == 1) {
            setLoadingMessage(false)
        }

    };

    useEffect(() => {
        if (token) {
            getContenstentDetail()
        }

    }, [page, token])

    const msgclick = (item: any) => {
        route.push("messages?id=" + item.conversationsId)
    }

    return (

        <Nav >

            {loadingMessage && page == 1 &&

                <div className="gap-5 p-2">
                    {
                        Array.from(Array(5).keys()).map((i) => {
                            return (
                                <div key={i}>
                                    <Skeleton
                                        style={{
                                            height: 50,
                                            width: '100%',
                                            marginRight: 4,
                                        }}
                                    />

                                    <div>
                                        <Skeleton
                                            style={{
                                                height: 30,
                                                width: '80%',
                                                marginBottom: 4,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Skeleton
                                            style={{
                                                height: 20,
                                                width: '20%',
                                                marginBottom: 4,
                                            }}
                                        />
                                    </div>
                                </div>
                            );

                        })
                    }
                </div>
            }
            {!loadingMessage &&
                <div id="scrollableDiv"
                    className='scrollable-messages'
                // style={{
                //     height: 300,
                //     overflow: "auto"
                // }}
                >
                    <InfiniteScroll
                        dataLength={messageTalent.length}
                        next={() => {
                            if (lastPage > page) {
                                setPage((prev) => prev + 1)
                            }
                        }}
                        hasMore={lastPage > page ? true : false}
                        inverse={false} //
                        scrollableTarget="scrollableDiv"
                        loader={<div className="gap-5 p-2">
                            {Array.from(Array(5).keys()).map((i) => {
                                return (
                                    <div key={i}>
                                        <Skeleton
                                            style={{
                                                height: 50,
                                                width: '100%',
                                                marginRight: 4,
                                            }}
                                        />

                                        <div>
                                            <Skeleton
                                                style={{
                                                    height: 30,
                                                    width: '80%',
                                                    marginBottom: 4,
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <Skeleton
                                                style={{
                                                    height: 20,
                                                    width: '20%',
                                                    marginBottom: 4,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>}>
                        {messageTalent.length > 0 && messageTalent.map((item: any, index: number) => (
                            // <div className={showMessage === true ? "single-message-user active" : "single-message-user"} onClick={() => { msgclick(item) }}>
                            <div className={`single-message-user`} onClick={() => { msgclick(item) }} key={index}>
                                <div className='image-user-single'>
                                    <img
                                        src={item.profile_picture_path || "images/user_profile.png"}
                                        alt="profile"
                                        className='user-image'
                                        style={{ objectFit: 'cover', objectPosition: "top" }}
                                    />
                                </div>
                                <div className='data-user-single'>
                                    <div className='flex items-center'>
                                        <h5>{item?.name}</h5>
                                        {item.unread_count > 0 &&
                                            <div className='status'>
                                            </div>
                                        }
                                    </div>
                                    {item?.type == "text" &&
                                        <h6>{item?.lastMessage}</h6>
                                    }
                                    {item?.type == "picture" &&
                                        <h6>Image</h6>
                                    }
                                    {item?.type == "audio" &&
                                        <h6>Audio</h6>
                                    }
                                    <p>Just now</p>
                                </div>

                                {/* <div>
                                    <Menu as="div" className=" inline-block text-left">
                                        <Menu.Button className="ml-3 opacity-40" onClick={(e: any) => {
                                            e.stopPropagation()
                                            if (item.conversationsId == showDeleteEdit) {
                                                setShowDeleteEdit(0)
                                            } else {
                                                setShowDeleteEdit(item.conversationsId)
                                            }
                                        }}>
                                            <img src="/images/reply.png" alt="" className='white-dots-static' />
                                        </Menu.Button >


                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 top-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="p-2">
                                                    <Menu.Item>
                                                        {() => (
                                                            <button
                                                                className="w-full text-left text-base text-gray-700 font-semibold"
                                                                onClick={() => { deleteMessage(item?.conversationsId) }}
                                                            >
                                                                Delete
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div> */}
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
            }
        </Nav >


        // <Nav>

        //     {/* <div className='fixed-messaged-limit'>
        //         <p>Free daily view message 2 out of 5</p>
        //     </div> */}



        //     <div className='single-message-user active' onClick={msgclick}>
        //         <div className='image-user-single'>
        //             <img
        //                 src="/images/img-2.png"
        //                 alt="profile"
        //                 className='user-image'
        //             />
        //         </div>
        //         <div className='data-user-single'>
        //             <h5>Anna Fredrich</h5>
        //             <h6>It’s great to be connected with you, let’s share...</h6>
        //             <p>Just now</p>
        //         </div>
        //         <div className='status'>
        //         </div>
        //     </div>
        //     <div className='single-message-user' onClick={msgclick}>
        //         <div className='image-user-single'>
        //             <img
        //                 src="/images/img-2.png"
        //                 alt="profile"
        //                 className='user-image'
        //             />
        //         </div>
        //         <div className='data-user-single'>
        //             <h5>Anna Fredrich</h5>
        //             <h6>It’s great to be connected with you, let’s share...</h6>
        //             <p>Just now</p>
        //         </div>
        //         {/* <div className='status'>
        //         </div> */}
        //     </div>
        //     <div className='single-message-user' onClick={msgclick}>
        //         <div className='image-user-single'>
        //             <img
        //                 src="/images/img-2.png"
        //                 alt="profile"
        //                 className='user-image'
        //             />
        //         </div>
        //         <div className='data-user-single'>
        //             <h5>Anna Fredrich</h5>
        //             <h6>It’s great to be connected with you, let’s share...</h6>
        //             <p>Just now</p>
        //         </div>
        //         {/* <div className='status'>
        //         </div> */}
        //     </div>
        //     <div className='single-message-user' onClick={msgclick}>
        //         <div className='image-user-single'>
        //             <img
        //                 src="/images/img-2.png"
        //                 alt="profile"
        //                 className='user-image'
        //             />
        //         </div>
        //         <div className='data-user-single'>
        //             <h5>Anna Fredrich</h5>
        //             <h6>It’s great to be connected with you, let’s share...</h6>
        //             <p>Just now</p>
        //         </div>
        //         {/* <div className='status'>
        //         </div> */}
        //     </div>
        //     <div className='single-message-user' onClick={msgclick}>
        //         <div className='image-user-single'>
        //             <img
        //                 src="/images/img-2.png"
        //                 alt="profile"
        //                 className='user-image'
        //             />
        //         </div>
        //         <div className='data-user-single'>
        //             <h5>Anna Fredrich</h5>
        //             <h6>It’s great to be connected with you, let’s share...</h6>
        //             <p>Just now</p>
        //         </div>
        //         {/* <div className='status'>
        //         </div> */}
        //     </div>
        // </Nav>
    )
}

export default SingleMessage


const Nav = styled.div`
.scrollable-messages{
    height:calc(100vh - 190px);
    height: fit-content;
    overflow-y:auto;
}
.fixed-messaged-limit{
    position:fixed;
    width:100%;
    bottom:0;
    max-width: 400px;
    text-align:center;
    background: #F1F1F1;
    padding:10px;
    border-radius: 0px 0px 8px 8px;

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: rgba(60, 60, 67, 0.6);
    }
}



.active{
    background:#F3F7FC;
        .data-user-single{
            h6{
                color:#0070F4 !important;
            }
        }
}

.single-message-user{
    display:flex;
    align-items:center;
    padding:8px 15px;
    position:relative;


.status{
    width:10px;
    height:10px;
    border-radius:50%;
    background:${p => p.theme.primary};
    margin-left:auto;


}

.image-user-single{
    img{
        min-width:80px;
        height:80px;
        border-radius:50%;
    }
}

.data-user-single{
    margin-left:10px;

    h5{
        font-size:13px;
        height:16px;
        line-height:16px;
        color:${p => p.theme.base}
        width:258px;
        overflow:hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width:768px) {
            width:168px;

        }
    }
    h6{
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
         color: ${p => p.theme.base};
        height:13px;
        line-height:13px;
        margin-top:5px;
        width:258px;
        overflow:hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;


        @media (max-width:768px) {
            width:168px;

        }
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        height:13px;
        line-height:13px;
        margin-top:5px;
        color: rgba(60, 60, 67, 0.6);
    }
    }
}
`;
// Users have requested the ability to search data within tables 4

// Fix JavaScript Errors in UI Kit 4
