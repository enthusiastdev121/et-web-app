import { BsArrow90DegRight, BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineChatAlt } from "react-icons/hi";
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri";
import { CommentsSkel } from "./Skel";
import { CommentContainer } from "./styles";
import { useEffect, useState } from "react";
import { deleteProfileCommentApi, getProfileCommentsApi, likeCommentApi, postCommentReplyApi, postProfileCommentsApi, updateProfileCommentApi } from "network/apis/otherUser";
import { useAuth } from "context/AuthContext";
import { CommentItemD, ReplyItemD } from "types/comments";
import { addCommentFormatter, addReplyFormatter, formatCommentsRes } from "network/apiFormatter/comments";
import { useProfileStore } from "context/ProfileStore";
import Spinner from "components/Spinner";
import Button from "components/Button";
import Link from "next/link";
import ClickAwayListener from "react-click-away-listener";
import Swal from "sweetalert2";
import Item from "../PhotoUploader/Item";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import TranslatedText from "components/TranslatedText";

const CommentBox = ({ onSend, setText, text, btnText, cancel, onCancel }:
  { onSend: any, setText: any, text: string, btnText: string, cancel?: boolean, onCancel?: any }) => {
  return (
    <div className="comment-box mt-5 mb-10">
      <div className="upper">
        <input
          type="text"
          placeholder={btnText === "Reply" ? "Type your reply here" : "Type your comment here"}
          className="p-5 w-full outline-none bg-paper txt-base"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="lower flex items-center justify-end px-5 py-2">
        <button
          className="ml-auto bg-primary text-base"
          onClick={onSend}
          disabled={text === "" ? true : false}
        ><TranslatedText>{btnText}</TranslatedText></button>

        {cancel && <button
          className="txt-primary text-base font-medium"
          onClick={onCancel}
        ><TranslatedText>Cancel</TranslatedText></button>}
      </div>
    </div>
  )
}

const Reply = ({ reply, LikeComment, talentnum, token, setReplies, allReplies }: { reply: ReplyItemD, LikeComment: any, talentnum: number, token: string, setReplies: any, allReplies: ReplyItemD[] }) => {
  const { profile } = useProfileStore()
  const [liked, setLiked] = useState(reply?.isLiked)
  const [likeCount, setLikeCount] = useState(reply?.likeCount)
  const [ownReply, setOwnReply] = useState(false);
  const [editLoading, setEditLoading] = useState(false)
  const [showOptions, setShowOptions] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);
  const [editText, setEditText] = useState(reply?.comment)
  const [replyText, setReplyText] = useState(reply?.comment)

  useEffect(() => {
    setOwnReply(reply?.talentnum === profile.talentnum)
  }, [reply?.talentnum, profile.talentnum])

  useEffect(() => {
    setLiked(reply?.isLiked)
  }, [reply])

  const onEdit = async () => {
    try {
      setEditLoading(true)
      const res = updateProfileCommentApi({ token, comment: editText, commentId: reply.id })
      setReplyText(editText)
      setShowEditBox(false)
      setEditLoading(false)
    } catch (err) {
      console.log(err);
      setEditLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setEditLoading(true)
      const res = deleteProfileCommentApi({ token, commentId: reply.id })
      setReplies(allReplies.filter((c: ReplyItemD) => c.id !== reply.id))
      setEditLoading(false)
    } catch (err) {
      console.log(err);
      setEditLoading(false)
    }
  }

  return (
    <div className="comment">
      <div className="flex justify-between items-center">
        <div
          className="comment-header flex items-center gap-2"
          style={{ fontWeight: "500" }}
        >
          <a href={`/${reply?.talentlogin}`} >
            <div className="img-container">
              <img src={reply?.pic} alt="profile" />
            </div>
          </a>
          <a href={`/${reply?.talentlogin}`} >
            {reply?.name} </a> <span className="text-sm time opacity-70">{reply.createdAt}</span>
        </div>

        {ownReply && <div className="relative">
          <BsThreeDotsVertical className="cursor-pointer" onClick={() => setShowOptions(!showOptions)} />

          {showOptions && <ClickAwayListener onClickAway={() => setShowOptions(false)}>
            <ul className="shadow-lg rounded overflow-hidden  text-sm absolute top-[105%] right-0">
              <li
                className="hover:bg-gray-100 cursor-pointer py-[6px] px-8 font-medium flex txt-base gap-2 items-center bg-pure border-b-[1px]"
                onClick={() => {
                  setShowEditBox(true)
                  setShowOptions(false)
                }}
              ><FiEdit /> Edit</li>
              <li
                className="hover:bg-gray-100 cursor-pointer py-[6px] px-8 font-medium flex txt-base gap-2 items-center bg-pure"
                onClick={() => {
                  Swal.fire({
                    title: 'Are you sure you want to delete this reply?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#0070f4',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No'
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      onDelete()
                    }
                  })
                }}
              ><AiOutlineDelete /><TranslatedText> Delete</TranslatedText></li>
            </ul>
          </ClickAwayListener>}
        </div>}
      </div>

      <p className="comment-body my-2">
        {replyText}
      </p>

      <div className="comment-footer flex items-center opacity-70">
        {likeCount} {likeCount === 1 ? "Like" : "Likes"}
        <div onClick={() => {
          LikeComment(reply.id)
          setLiked(s => !s)
          setLikeCount(s => liked ? s - 1 : s + 1)
        }}>
          {
            liked ?
              <RiThumbUpFill className="text-xl ml-3 cursor-pointer txt-primary" />
              :
              <RiThumbUpLine className="text-xl ml-3 cursor-pointer opacity-70" />
          }
        </div>
      </div>

      {
        showEditBox && (
          <CommentBox
            onSend={onEdit}
            text={editText}
            setText={setEditText}
            btnText="Edit"
            cancel={true}
            onCancel={() => setShowEditBox(false)}
          />
        )
      }

    </div>
  )
}

const CommentComponent = ({ comment, LikeComment, token, talentnum, parent_id, talentlogin, setComments, allComments, newUpdate, own }
  : {
    comment: CommentItemD, LikeComment: any, token: string, talentnum: number, parent_id: number,
    talentlogin: string, setComments: any, allComments: CommentItemD[], newUpdate: boolean
  }) => {
  const { profile } = useProfileStore();
  const [commentText, setCommentText] = useState(comment?.comment)
  const [liked, setLiked] = useState(comment?.isLiked)
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [reply, setReply] = useState("");
  const [likeCount, setLikeCount] = useState(comment?.likeCount)
  const [replies, setReplies] = useState(comment?.replies)
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false)
  const [showOptions, setShowOptions] = useState(false);
  const [showEditBox, setShowEditBox] = useState(false);
  const [editText, setEditText] = useState(comment?.comment)

  const addReply = async () => {
    setShowReplyBox(false)
    try {
      setLoading(true)
      const res = await postCommentReplyApi({
        talentnum: talentnum,
        comment: reply,
        parent_id: parent_id,
        token
      })
      const formattedRes = addReplyFormatter({ res, pic: profile?.pic, name: profile?.name })
      setReplies([formattedRes, ...replies])
      setReply("")
      setLoading(false)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }

  const onEdit = async () => {
    try {
      setEditLoading(true)
      const res = updateProfileCommentApi({ token, comment: editText, commentId: comment.id })
      setCommentText(editText)
      setShowEditBox(false)
      setEditLoading(false)
    } catch (err) {
      console.log(err);
      setEditLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setEditLoading(true)
      const res = deleteProfileCommentApi({ token, commentId: comment.id })
      setComments(allComments.filter((c: CommentItemD) => c.id !== comment.id))
      setEditLoading(false)
    } catch (err) {
      console.log(err);
      setEditLoading(false)
    }
  }

  useEffect(() => {
    setLiked(comment?.isLiked)
  }, [comment])

  return (
    <>
      {
        editLoading
          ?
          <div className="p-10 flex items-center justify-center">
            <Spinner primary />
          </div>
          :
          <div className="comment">
            <div className="flex justify-between items-center">
              <div
                className="comment-header flex items-center gap-2"
                style={{ fontWeight: "500" }}
              >
                <Link href={`/${talentlogin}`} passHref>
                  <div className="img-container">
                    <img src={comment?.pic || "/images/user_profile.png"} />
                  </div>
                </Link>

                <Link href={`/${talentlogin}`} passHref>
                  {comment?.name}
                </Link>
                <span className="text-sm time opacity-70">{
                  comment?.createdAt
                }</span>
              </div>

              {own && <div className="relative">
                <BsThreeDotsVertical className="cursor-pointer" onClick={() => setShowOptions(!showOptions)} />

                {showOptions &&
                  <ClickAwayListener onClickAway={() => setShowOptions(false)}>
                    <ul className="shadow-lg rounded overflow-hidden  text-sm absolute top-[105%] right-0">
                      <li
                        className="hover:bg-gray-100 cursor-pointer py-[6px] px-8 font-medium flex txt-base gap-2 items-center bg-pure border-b-[1px]"
                        onClick={() => {
                          setShowEditBox(true)
                          setShowOptions(false)
                        }}
                      ><FiEdit /> Edit</li>
                      <li
                        className="hover:bg-gray-100 cursor-pointer py-[6px] px-8 font-medium flex txt-base gap-2 items-center bg-pure"
                        onClick={() => {
                          Swal.fire({
                            title: 'Are you sure you want to delete this comment?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#0070f4',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes',
                            cancelButtonText: 'No'
                          }).then(async (result) => {
                            if (result.isConfirmed) {
                              onDelete()
                            }
                          })
                        }}
                      ><AiOutlineDelete /> <TranslatedText>Delete</TranslatedText></li>
                    </ul>
                  </ClickAwayListener>
                }

              </div>}
            </div>

            <p className="comment-body my-2">
              {commentText}
            </p>

            <div className="comment-footer flex items-center gap-2 opacity-70">
              {likeCount} {likeCount === 1 ? "Like" : "Likes"}
              <span className="flex items-center gap-2 cursor-pointer" onClick={() => { setShowReplyBox(s => !s) }}>
                <BsArrow90DegRight />
                <TranslatedText> Reply</TranslatedText>
              </span>
              <div onClick={() => {
                LikeComment(comment.id)
                setLiked(s => !s)
                setLikeCount(s => liked ? s - 1 : s + 1)
              }}>
                {
                  liked ?
                    <RiThumbUpFill className="text-xl ml-3 cursor-pointer txt-primary" />
                    :
                    <RiThumbUpLine className="text-xl ml-3 cursor-pointer opacity-70" />
                }
              </div>
            </div>

            {
              showEditBox && (
                <CommentBox
                  onSend={onEdit}
                  text={editText}
                  setText={setEditText}
                  btnText="Edit"
                  cancel={true}
                  onCancel={() => setShowEditBox(false)}
                />
              )
            }

            {showReplyBox &&
              <div>
                <CommentBox onSend={addReply} setText={setReply} text={reply} btnText="Reply" cancel={true}
                  onCancel={() => setShowReplyBox(false)} />
              </div>
            }
          </div>
      }

      {/* Replies */}
      <div className="reply-container pl-5">
        {
          loading ?
            <div className="p-10 flex items-center justify-center">
              <Spinner primary />
            </div>
            : ""
        }

        {replies?.map((reply: any) => (
          <Reply key={reply.id} reply={reply} LikeComment={LikeComment} talentnum={talentnum} token={token} setReplies={setReplies} allReplies={replies} />
        ))
        }
      </div>
    </>
  )
}

export default function CommentSection({ talentnum }: {
  talentnum: number
}) {
  const { token } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentItemD[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { profile } = useProfileStore();
  const [newUpdate, setNewUpdate] = useState(false);

  useEffect(() => {
    if (!talentnum) {
      return;
    }
    const getComments = async () => {
      try {
        setLoading(true)
        const res = await getProfileCommentsApi({ talentnum: talentnum, token, page: page, perPage: 10 })
        setLastPage(res?.last_page)
        const formattedRes = res.data.map((i: any) => formatCommentsRes(i));
        // setComments(comments !== [] ? [...comments, ...formattedRes] : formattedRes)
        setComments(formattedRes)
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
    }
    getComments()
  }, [token, talentnum, newUpdate])

  useEffect(() => {
    if (!talentnum || page === 1) {
      return;
    }

    const getComments = async () => {
      try {
        setLoading(true)
        const res = await getProfileCommentsApi({ talentnum: talentnum, token, page: page, perPage: 10 })
        setLastPage(res?.last_page)
        const formattedRes = res.data.map((i: any) => formatCommentsRes(i));
        setComments([...comments, ...formattedRes])
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
    }
    getComments()
  }, [page])

  const addComment = async () => {
    try {
      setLoading(true)
      const res = await postProfileCommentsApi({
        talentnum: talentnum,
        comment: comment,
        token
      })
      const formattedRes = addCommentFormatter({ res, pic: profile?.pic, name: profile?.name })
      setComment("")
      // setComments([formattedRes, ...comments])
      setNewUpdate(!newUpdate)
      setLoading(false)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }

  const LikeComment = async (commentId: number) => {
    try {
      const res = await likeCommentApi({
        token,
        commentId
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <CommentContainer className="py-10 px-5 md:px-10 lg:text-lg">
      <h2 className="profile-heading">
        <HiOutlineChatAlt className="text-xl lg:text-2xl" /><TranslatedText> Latest Comments</TranslatedText>
      </h2>

      <CommentBox onSend={addComment} setText={setComment} text={comment} btnText="Send" />

      <div>
        {
          loading ?
            <div className="p-10 flex items-center justify-center">
              <Spinner primary />
            </div>
            : ""
        }
        {comments.map((comment: any) => {
          return (
            <CommentComponent key={comment.id} comment={comment}
              LikeComment={LikeComment} token={token} talentnum={talentnum}
              parent_id={comment.id} talentlogin={comment.talentlogin}
              setComments={setComments} allComments={comments} newUpdate={newUpdate}
              own={comment?.talentnum === profile.talentnum}
            />
          )
        })}
      </div>

      {lastPage > page &&
        <div className="flex justify-center p-10">
          <Button primary loading={loading} onClick={() => { setPage(page + 1) }}><TranslatedText>Load More</TranslatedText></Button>
        </div>}
    </CommentContainer>
  );
}
