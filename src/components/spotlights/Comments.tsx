import React, { useState, useEffect, useCallback, useRef } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GoCommentDiscussion } from 'react-icons/go'
import styled from "styled-components"
import { useAuth } from "context/AuthContext";
import { commentsUpdateApi, getCommentsApi } from 'network/apis/spotlight';
import { formatComments } from 'network/apiFormatter/spotlights';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Skel from 'containers/spotlights/CommentSkel';
import Pagination from 'components/Pagination';
import { CommentsD } from 'types/spotlight';
import { useProfileStore } from 'context/ProfileStore';
import { IoSend } from 'react-icons/io5';

function Comments(props: { mediaId: number; boxOpen: any; boxClose: any; }) {
    const {
        mediaId,
        boxOpen,
        boxClose,
    } = props;
    const { token } = useAuth();
    const { profile } = useProfileStore();
    // const [comments, setComments] = useState(false)
    const [commentData, setCommentData] = useState<CommentsD[]>([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState('')
    const [commentValue, setCommentValue] = useState('')
    const [total, setTotal] = useState(50);
    const [perPage, setPerPage] = useState(10);
    const [messageBoxs, setMessageBoxs] = useState(false);
    const [page, setPage] = useState(1)

    const getComments = useCallback(
        async (more = false) => {
            if (!token) {
                return;
            }
            try {
                setLoading(true);
                const res = await getCommentsApi({
                    token,
                    // parentId: parentId,
                    mediaId,
                    page,
                    perPage
                });
                const data = res.data.map((i: any) => formatComments(i));
                setCommentData(data.reverse())
                setTotal(data.length)
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Error message --------- ", err);
            }
        }, [token, mediaId, perPage]);

    useEffect(() => {
        getComments();
    }, [getComments, perPage]);

    async function addComment() {
        try {
            const res = await commentsUpdateApi({
                token,
                // parentId: parentId,
                comment: comment,
                spotlightmediaId: mediaId,
            })
        }
        catch (err) {
            console.log('Error messages')
        }
    }

    const SubmitComment = (e: any) => {
        e.preventDefault();
        setCommentValue(comment);
        setComment('')
        if (comment.trim().length > 0) {
            addComment()
            commentData.push({
                id: commentData.length + 1,
                comment: comment,
                is_like: false,
                spotlightmediaId: mediaId,
                userPic: profile.pic,
                name: profile?.name
            }
            )
        } else {
            return
        }
    }

    const messageEndRef = useRef(null);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView();
    }, [commentValue, loading, commentData, messageBoxs
    ])

    return (
        <CommentSection>
            <div className="comment_section">
                <div className={messageBoxs ? 'comment__box' : 'comment__box visible'}>
                    {!loading && total + 1 > perPage && (
                        <div className="flex justify-center">
                            <button className='text-white' onClick={() => {
                                setPerPage(perPage + 10)
                                setPage(page + 1)
                                setMessageBoxs(true)
                            }}>
                                Load More
                            </button>
                        </div>
                    )}
                    {loading ? (
                        <>
                            <Skel />
                        </>
                    ) : (
                        <>
                            {commentData.map((i: CommentsD, ix) => {
                                if (mediaId === i.spotlightmediaId) {
                                    // if (mediaId === i.id) {
                                    return (
                                        <div key={ix} className='comments'>
                                            <div><img src={i.userPic} /></div>
                                            <div className='content'>
                                                <h1>{i?.name}</h1>
                                                <p>{i.comment}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return null;
                                }
                            })}
                            <div ref={messageEndRef} />
                        </>
                    )}
                </div>
                <div className="send_comment">
                    <GoCommentDiscussion onClick={() => {
                        if (messageBoxs) { setMessageBoxs(false); boxOpen() }
                        else { setMessageBoxs(true); boxClose() }
                    }} className='arrow_icon' />
                    <input type='text' placeholder="Post a comment..." value={comment} onChange={(e) => { setComment(e.target.value) }} onFocus={() => { setMessageBoxs(true); boxClose() }} />
                    <button onClick={SubmitComment} type='submit' className='big-btn txt-primary'><IoSend /></button>
                </div>
            </div>
        </CommentSection>
    )
}
export default Comments

const CommentSection = styled.section`
    position: relative;
    z-index: 99999;
   .comments img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 6px;
}

.big-btn {
    font-size: 1.5rem !important;
    line-height: 2rem;
}

.comment_bar{
    display:flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    background:#000;
    position: relative;
    z-index:9;
}
.comments {
    display: flex;
    color: #fff;
    gap: 8px;
    margin: 10px 0px;
}
.comments >div:nth-child(1) {
    flex:0 0 40px;
}
.comments >div:nth-child(2) {
    flex:auto;
}
.comments >div:nth-child(3) {
    color:#fff;
}
.content h1 {
    font-weight: bold;
    font-size: 12px;
}
.content p {
    font-size: 12px;
}

.comment__box {
    max-height: 231px;
    overflow-x: auto;
}
.send_comment {
    display: flex;
    align-items: center;
    position: relative;
    background:#111111;
    padding:10px;
}

.send_comment input {
    width: 70%;
    padding: 10px;
    margin-left: 10px;
    color: #000;
    border-radius: 20px 0px 0px 20px;
}
.send_comment button {
    background: #fff;
    padding: 10px;
    border-radius: 0px 20px 20px 0px;
}
.comment_section {
    overflow: hidden;
    position: absolute;
    width: 100%;
    bottom: 0px;
    
}
.comment__box{
    opacity: 1;
    max-height: 201px;
    overflow-x: auto;
    z-index: -1;
    transition: all 0.2s ease;
    background: #000000ad;
}
.comment__box.visible{
    opacity: 0;
    /* margin-bottom: -202px; */
}
.comment__box::-webkit-scrollbar-track {
    background: #0000;
}
.comment__box::-webkit-scrollbar-thumb {
    background: #0000;
}
.arrow_icon{
    color:#fff;
    font-size:30px;
}
`