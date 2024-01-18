import BackToTop from "components/BackToTop";
import Button from "components/Button";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useAuth } from "context/AuthContext";
import { formatContestantDetailItem, formatContestDetailItem, formatLeaderboardItem } from "network/apiFormatter/contest";
import { contestView, getComment, getContestantDetailApi, getContestByIdApi, getContestNotVotedApi, submitComment, submitVote } from "network/apis/contest";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { CardLeft, Container, Card, CommentSection, SingleReply } from "./styles";
import { FacebookShareButton, EmailShareButton, TwitterShareButton } from "next-share";
import { formatContestantDetailSlug, formatContestDetailSlug, formateTimeWithMin } from "@/utils/helper";
import PaginationNew from "./PaginationNew";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

TimeAgo.addDefaultLocale(en);
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ContestantDetail({ talentnum, contest_id, ip }: any) {
  const { auth: authentication, user, token } = useAuth();

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");
  const [rateSelection, setrateSelection] = useState(0);
  const [res, seContestentDetail] = useState<any>();
  const [contentDetail, setContentDetail] = useState<any>();
  const [comment, setComment] = useState<any>();
  const [successfully, setsuccessfully] = useState(false);
  const [replyShow, showReply] = useState(0);
  const [reply, setReply] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(0);
  const [descr, setTextArea] = useState("");
  const [copied, setcopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMain, setLoadingMain] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  const [nextCheckbox, setNextCheckbox] = useState(false);
  const [nextButton, setNextbutton] = useState(true);

  const route = useRouter();
  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  const URL = `${origin}${route.asPath}`;

  useEffect(() => {
    const getContenstentDetail = async () => {
      try {

        setLoadingMain(true);
        const res = await getContestantDetailApi({
          contest_id: contest_id,
          talentnum: talentnum,
          token: token,
        });

        console.log("R", res);
        const data = formatContestantDetailItem(res)

        console.log("data: ", data);

        seContestentDetail(data);

        if (data) {
          setLoadingMain(false);
          if (authentication.authenticated == true && data?.id) {
            const raw = {
              cm_id: data?.id,
              last_viewed: Math.round(new Date().getTime() / 1000).toString(),
              ip: ip,
            };
            await contestView(JSON.stringify(raw), token);
          }
        }

      }

      catch (err) {
        console.log("ERR", err)
      }

    };

    const getContenstDetail = async () => {

      try {
        setLoadingComment(true);
        const res = await getContestByIdApi({ id: contest_id });
        setContentDetail(formatContestDetailItem(res));

        if (res) {
          setLoadingComment(false);
        }
      }
      catch (err) {
        console.log("Err", err)
      }
    };
    getContenstentDetail();
    getContenstDetail();

    const getNonVated = async () => {

      try {
        setLoadingComment(true);
        const res = await getContestNotVotedApi(contest_id, nextPage + 1, 1, token);
        if (res?.data.length == 0) {
          setNextbutton(false);
        }

        getNonVated()

        setInterval(() => {
          setcopied(false);
        }, 1000);
      }
      catch (err) {
        console.log("Err", err)
      }

    }
  }, [token]);

  useEffect(() => {
    if (res?.talentnum) {
      getCommentData(res?.talentnum);
    }
  }, [res?.talentnum]);

  const showSucessfully = async (cm_id: any, talentnum: any) => {

    try {


      setLoading(true);
      let raw = {
        cm_id: cm_id,
        of_talentnum: talentnum,
        status: "1",
        score: rateSelection,
        by_ip_address: ip,
      };

      const result = await submitVote(JSON.stringify(raw), token);
      if (result) {
        setsuccessfully(true);
        setLoading(false);

        if (nextCheckbox) {
          GoToNext(contest_id, contentDetail?.name);
        }
      }
    }
    catch (err) {
      console.log("Err", err)
    }
  };

  const postComment = async (cm_id: any, talentnum: any, tm_id: any, parent_ccid: any) => {

    try {


      setLoadingComment(true);
      let raw = {
        cm_id: cm_id,
        of_talentnum: talentnum,
        tm_id: tm_id,
        des: descr,
        parent_ccid: parent_ccid,
      };
      const result = await submitComment(JSON.stringify(raw), token);
      if (result) {
        setTextArea("");
        currentTableData(res?.talentnum, currentPage);
      }

    }

    catch (err) {
      console.log("Err", err)
    }

  };
  const postReply = async (cm_id: any, talentnum: any, tm_id: any, parent_ccid: any) => {


    try {


      setLoadingComment(true);
      let raw = {
        cm_id: cm_id,
        of_talentnum: talentnum,
        tm_id: tm_id,
        des: reply,
        parent_ccid: parent_ccid,
      };
      const result = await submitComment(JSON.stringify(raw), token);
      if (result) {
        setReply("");
        showReply(0);
        currentTableData(res?.talentnum, currentPage);
      }

    }
    catch (err) {
      console.log("Err", err)
    }

  };

  const getCommentData = async (talentnum: any) => {


    try {

      setComment([]);
      const result = await getComment({ talentnum: talentnum, parent_ccid: 0, token: token, page: 1, perPage: 25 });
      setComment(result);
      if (result) {
        setLoadingComment(false);
      }

    }
    catch (err) {
      console.log("Err", err)
    }

  };

  const currentTableData = async (talentnum: any, page: any) => {

    try {

      setCurrentPage(page);
      setComment([]);
      const result = await getComment({ talentnum: talentnum, parent_ccid: 0, token: token, page: page, perPage: 25 });
      setComment(result);
      if (result) {
        setLoadingComment(false);
      }
    }
    catch (err) {
      console.log("Err", err)
    }
  };

  const openPopup = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success bg-blue-500 text-white",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Delete Comment ?",
        text: "Are you sure you want to delete this comment?",
        showCancelButton: false,
        confirmButtonText: "Delete",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire("Deleted!", "Your Comment has been deleted.", "success");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelled", "Your Comments is safe :)", "error");
        }
      });
  };

  const GoToProfilePage = (talentName: any) => {
    route.push(`/` + talentName);
  };

  const GoToNext = async (id: number, contest_name: string) => {

    try {


      const res = await getContestNotVotedApi(contest_id, nextPage + 1, 1, token);
      const data = formatLeaderboardItem(res?.data[0]);
      setNextPage(nextPage + 1);
      if (data) {
        const getContenstentDetail = async () => {

          try {


            setLoadingMain(true);
            const res = await getContestantDetailApi({
              contest_id: contest_id,
              talentnum: data.id,
              token: token,
            });
            seContestentDetail(formatContestantDetailItem(res?.data[0]));

            if (res) {
              setLoadingMain(false);
            }
          }
          catch (err) {
            console.log("Err", err)
          }
        };

        const getContenstDetail = async () => {
          setLoadingComment(true);
          const res = await getContestByIdApi({ id: contest_id });
          setContentDetail(formatContestDetailItem(res));

          if (res) {
            setNextCheckbox(false);
            setsuccessfully(false);
            setrateSelection(0);
            setLoading(false);
            setLoadingComment(false);
          }
        };
        getContenstentDetail();
        getContenstDetail();

        route.push(`/contestants/${formatContestDetailSlug(contest_name, id)}/${formatContestantDetailSlug(data?.name, data?.name, data.id)}`);
      }

    }

    catch (err) {
      console.log("Err", err)
    }

  };

  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="padding-x lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          {loadingMain && (
            <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
              {[1].map((i) => {
                return (
                  <div key={i}>
                    <Skeleton style={{ height: 100, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 90, width: "90%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 80, width: "80%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 70, width: "70%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 60, width: "60%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 50, width: "50%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 40, width: "40%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 30, width: "30%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 20, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 10, width: "10%", borderRadius: 8, marginBottom: 4 }} />
                  </div>
                );
              })}
            </div>
          )}
          {!loadingMain && (
            <>
              <nav className="rounded-md w-full breadcrumb ">
                <div className="list-reset flex whitespace-nowrap">
                  <div>
                    <Link href="/contests/current-contests">
                      <div className="text-color-primary hover:text-color-primary">Contests</div>
                    </Link>
                  </div>
                  <div >
                    <span className="text-gray-500 mx-2">/</span>
                  </div>
                  <div  >
                    <Link href="/contests/current-contests">
                      <div style={{ maxWidth: 140, overflow: 'hidden' }} className="text-color-primary hover:text-color-primary text-ellipsis ">{contentDetail?.name}</div>
                    </Link>
                  </div>
                  <div>
                    <span className="text-gray-500 mx-2">/</span>
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden' }} className="text-gray-500 text-ellipsis">{res?.name}</div>
                </div>
              </nav>

              <div className="contest-details">
                <div className="contest-details-inner">
                  <img src={contentDetail?.pic} alt="cover-image" className="cover-image" />
                  <div>
                    <p>{contentDetail?.name}</p>
                    <h3>{res?.name}’s Entry</h3>
                  </div>
                </div>
                <div className="contest-details-button">

                  {nextButton &&
                    <button
                      onClick={() => {
                        GoToNext(contest_id, contentDetail?.name);
                      }}
                    >
                      Next <img src="/images/arrow-narrow-right.png" alt="arrow-narrow-right" />
                    </button>
                  }
                </div>
              </div>

              <div className="lg:flex justify-between mt-5">
                <CardLeft className="-mx-5 sm:mx-0">
                  <div className="contest-img-container pb-10">
                    {contentDetail?.accept_video == "1" && (
                      <>
                        {res?.video && (
                          <video className="contest-img-main-video" controls>
                            <source src={res?.video} />
                          </video>
                        )}
                      </>
                    )}
                    {contentDetail?.accept_pic == "1" && (
                      <div className="contest-img-main-inner-main">
                        <img src={res?.entryImage} alt="banner" className="contest-img" />
                        <div className="contest-img-main-inner">
                          <img src={res?.entryImage} alt="banner" className="contest-img-main" />
                        </div>
                      </div>
                    )}

                    {!res?.is_voted && (
                      <>
                        {!loading && successfully == false && (
                          <>
                            <div className="rate-contest">
                              <h1>How would you rate this entry?</h1>
                              <div className="relative mb-1">
                                <div className="rating">
                                  {Array.from(Array(10).keys()).map((y, i) => (
                                    <div
                                      key={i}
                                      className={rateSelection == y + 1 ? "rate-count-active" : "rate-count-deactive"}
                                      onClick={() => {
                                        setrateSelection(y + 1);
                                      }}
                                    >
                                      <h2 className="w-full text-center">{y + 1}</h2>
                                    </div>
                                  ))}
                                </div>
                                <div className="rating-titie">
                                  <div className="bad-count">Bad</div>
                                  <div className="great-count">Great</div>
                                </div>
                              </div>
                              <button
                                className="submit-vote-btn"
                                onClick={() => {
                                  showSucessfully(res?.id, res?.talentnum);
                                }}
                              >
                                Submit vote
                              </button>
                              {nextButton &&
                                <div className="form-check px-2">
                                  <input
                                    type="checkbox"
                                    checked={nextCheckbox}
                                    onChange={(e) => {
                                      setNextCheckbox(e.target.checked);
                                    }}
                                    id="check"
                                  />
                                  <label className="container-checkbox" htmlFor="check">
                                    Go to next contestant after clicking submit?
                                    {/* <span className="checkmark"></span> */}
                                  </label>
                                </div>
                              }
                            </div>
                          </>
                        )}
                        {loading && (
                          <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                            {[1].map((i) => {
                              return (
                                <div key={i}>
                                  <Skeleton style={{ height: 46, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                                  <Skeleton style={{ height: 23, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {successfully == true && (
                          <div className="sucessfully-badge">
                            <h5>{rateSelection}</h5>
                            <p>Vote successfully submitted</p>
                          </div>
                        )}
                      </>
                    )}

                    {res?.is_voted && (
                      <div className="sucessfully-badge">
                        <h5>{res?.user_rating ?? 0}</h5>
                        <p>Vote successfully submitted</p>
                      </div>
                    )}
                  </div>
                </CardLeft>
                <Card>
                  <div className="profile-card">
                    <div
                      className="name-and-profile"
                      onClick={() => {
                        GoToProfilePage(res?.talentName);
                      }}
                    >
                      <img src={res?.pic} className="object-top" />
                      <h5 className="ml-2">{res?.name}</h5>
                    </div>
                    <div className="total-vote-row">
                      <div className="votes">
                        <h3>{res?.votes}</h3>
                        <h6>Votes</h6>
                      </div>
                      <div className="votes">
                        <h3>{res?.score || 0}</h3>
                        <h6>Score</h6>
                      </div>
                      <div className="votes">
                        <h3>{res?.views}</h3>
                        <h6>Views</h6>
                      </div>
                    </div>
                  </div>

                  <div className="share-social">
                    <h5>Share this entry</h5>
                    <div className="flex align-items-center">
                      <FacebookShareButton url={URL} title={"Explore Talent Contests-" + res?.name}>
                        <img src="/images/fb.svg" alt="facebook" className="social-button" />
                      </FacebookShareButton>
                      <TwitterShareButton url={URL} title={"Explore Talent Contests-" + res?.name}>
                        <img src="/images/tw.svg" alt="twitter" className="social-button" />
                      </TwitterShareButton>

                      {/* <InstapaperShareButton
                    url={'https://github.com/next-share'}
                    title={'Next Share'}
                  >
                    <img src="/images/insta.svg" alt="instagram" className="social-button" />
                  </InstapaperShareButton> */}

                      <EmailShareButton url={URL} title={"Explore Talent Contests-" + res?.name}>
                        <img src="/images/mail.svg" alt="email" className="social-button" />
                      </EmailShareButton>
                      {/* <a onClick={() => { window.open(`https://www.facebook.com/sharer/sharer.php?u=${route.asPath}`, "_blank") }}></a>
                  <a href="https://twitter.com"></a>
                  <a href="https://www.instagram.com"></a>
                  <a href="https://mail.google.com"></a>
                  <a href=""><img src="/images/more.svg" alt="more" /></a> */}
                    </div>
                  </div>

                  <div className="share-social">
                    <h5>Vote invitation URL</h5>
                    <div className="flex align-items-center relative">
                      <input type="link" placeholder="Add Link" value={URL} readOnly />
                      <button
                        className="copy-link"
                        onClick={() => {
                          const el = document.createElement("textarea");
                          el.value = URL;
                          document.body.appendChild(el);
                          el.select();
                          document.execCommand("copy");
                          document.body.removeChild(el);
                          setcopied(true);
                        }}
                      >
                        Copy Link
                        {copied && <span className="tooltiptext">copied</span>}
                      </button>
                    </div>
                  </div>

                  {/* <div className="leave-comment">
                <button > <img src="/images/msg.svg" alt="" />Leave a comment</button>
              </div> */}

                  {/* <div className="how-work">
                    <h3>
                      <span>How does scoring work?</span>
                      <span>How strict is this contest?</span>
                    </h3>
                  </div> */}
                </Card>
              </div>
            </>
          )}

          <CommentSection className="-mx-5 sm:mx-0">
            <div className="latest-comment">
              <img src="/images/message.png" alt="messages" /> <h5 className="ml-2">Latest Comments</h5>
            </div>

            <div className="comment-textarea">
              <ReactTextareaAutosize
                placeholder="Type your comment here"
                minRows={3}
                value={descr}
                onChange={(e) => {
                  setTextArea(e.target.value);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  postComment(res?.id, res?.talentnum, res?.tm_id, "");
                }}
              >
                {" "}
                Submit
              </button>
            </div>

            {loadingComment && (
              <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                {[1].map((i) => {
                  return (
                    <div key={i}>
                      <Skeleton style={{ height: 100, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                      <Skeleton style={{ height: 80, width: "80%", borderRadius: 8, marginBottom: 4 }} />
                      <Skeleton style={{ height: 60, width: "60%", borderRadius: 8, marginBottom: 4 }} />
                      <Skeleton style={{ height: 40, width: "40%", borderRadius: 8, marginBottom: 4 }} />
                    </div>
                  );
                })}
              </div>
            )}

            {!loadingComment && (
              <>
                {comment?.data &&
                  comment?.data
                    ?.filter((y: any) => y.parent_ccid == "0")
                    .map((item: any, index: number) => (
                      <>
                        <SingleReply key={index}>
                          <div className="single-reply">
                            <div className="profile-images">
                              <img src={item?.bam_talentci_by?.profile_picture_path || "/images/user_profile.png"} alt="profile" />
                              <h5>
                                {item?.bam_talentci_by?.fname} {item?.bam_talentci_by?.lname}
                              </h5>
                              {/* <p>{console.log(comment?.data, "comment?.data")}
                    </p> */}

                              <p>{item.date_created ? timeAgo.format(new Date(item.date_created * 1000)) : null}</p>
                              {authentication?.authenticated && (
                                <>
                                  {item.by_talentnum == user?.talentnum && (
                                    <div className="ml-2">
                                      {/* <Menu as="div" className="relative inline-block text-left">
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
                                                  <button className={classNames(active ? "bg-gray-100 text-gray-800" : "text-gray-400", "flex items-center px-4 py-2 text-sm w-full")}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                  </button>
                                                )}
                                              </Menu.Item>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <button onClick={openPopup} className={classNames(active ? "bg-gray-100 text-gray-800" : "text-gray-400", "flex items-center px-4 py-2 text-sm w-full")}>
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
                                      </Menu> */}
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                            <div className="comment-details">
                              <h3>{item?.des}</h3>
                            </div>
                            <div className="likes-comment">
                              {/* <div className="likes">
                        <h3>2 Likes</h3>
                      </div> */}
                              <div
                                className="reply"
                                onClick={() => {
                                  if (replyShow == index + 1) {
                                    showReply(0);
                                  } else {
                                    showReply(index + 1);
                                  }
                                }}
                              >
                                <img src="/images/reply.svg" alt="reply" />
                                <h3>Reply</h3>
                              </div>
                              <div className="like-icon">
                                {/* <input type="checkbox" id="heart" />
                        <label htmlFor="heart">

                        </label> */}
                                {/*                       
                      <img src="/images/thumbs-up.svg" alt="thumbs-up" /> */}
                              </div>
                            </div>
                            {replyShow == index + 1 && (
                              <div className="comment-textarea">
                                <ReactTextareaAutosize
                                  placeholder="Type your comment here"
                                  minRows={3}
                                  value={reply}
                                  onChange={(e) => {
                                    setReply(e.target.value);
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    postReply(res?.id, res?.talentnum, res?.tm_id, item?.cc_id);
                                  }}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </div>
                            )}
                          </div>
                        </SingleReply>

                        <div className="reply-section">
                          {comment?.data
                            ?.filter((y: any) => y.parent_ccid == item?.cc_id)
                            .map((itemReply: any, index: number) => (
                              <>
                                <SingleReply key={"reply" + index}>
                                  <div className="single-reply">
                                    <div className="profile-images">
                                      <img src={itemReply?.bam_talentci_by?.profile_picture_path || "/images/user_profile.png"} alt="profile" />
                                      <h5>
                                        {itemReply?.bam_talentci_by?.fname} {itemReply?.bam_talentci_by?.lname}
                                      </h5>
                                      <p>{item.date_created ? timeAgo.format(new Date(itemReply.date_created * 1000)) : null}</p>
                                      {authentication?.authenticated && (
                                        <>
                                          {item.by_talentnum == user?.talentnum && (
                                            <div className="ml-2">
                                              {/* <Menu as="div" className="relative inline-block text-left">
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
                                                          <button className={classNames(active ? "bg-gray-100 text-gray-800" : "text-gray-400", "flex items-center px-4 py-2 text-sm w-full")}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                            Edit
                                                          </button>
                                                        )}
                                                      </Menu.Item>
                                                      <Menu.Item>
                                                        {({ active }) => (
                                                          <button onClick={openPopup} className={classNames(active ? "bg-gray-100 text-gray-800" : "text-gray-400", "flex items-center px-4 py-2 text-sm w-full")}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                              <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                              />
                                                            </svg>
                                                            Delete
                                                          </button>
                                                        )}
                                                      </Menu.Item>
                                                    </div>
                                                  </Menu.Items>
                                                </Transition>
                                              </Menu> */}
                                            </div>
                                          )}
                                        </>
                                      )}
                                    </div>
                                    <div className="comment-details">
                                      <h3>{itemReply?.des}</h3>
                                    </div>
                                    <div className="likes-comment">
                                      {/* <div className="likes">
                              <h3>2 Likes</h3>
                            </div> */}
                                      {/* <div className="reply">
                              <img src="/images/reply.svg" alt="reply" />
                              <h3>Reply</h3>
                            </div> */}
                                      {/* <div className="like-icon">
                              <img src="/images/thumbs-up.svg" alt="thumbs-up" />
                            </div> */}
                                    </div>
                                  </div>
                                </SingleReply>
                              </>
                            ))}
                        </div>
                      </>
                    ))}

                {/* {comment?.total && (
                  <>
                    <PaginationNew className="pagination-bar ssss" currentPage={currentPage} totalCount={parseInt(comment?.total)} pageSize={25} siblingCount={2} onPageChange={(page: any) => currentTableData(res?.talentnum, page)} />
                  </>
                )} */}
              </>
            )}
          </CommentSection>

        </div>

        <aside className="right mt-5 lg:mt-0">
          <Advertisement />

          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div className="mb-5">
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  );
}


{/* <div className="card flex items-start justify-between gap-5 p-5 border-2 rounded-lg shadow-sm">
  <img src={res?.pic} alt="profile" />

  <div>
    <ul>
      <div>{res?.name}</div>
      <div>
        {res?.age} Years Old, {res?.location}
      </div>
      <div>{res?.title}</div>
      <div>{res?.des}</div>
    </ul>
  </div>

  <div>
    <ul>
      <div>Votes - {res?.votes}</div>
      <div>Score - {res?.score}</div>
      <div>Views - {res?.views}</div>
    </ul>
  </div>
</div> */}

{/* <SingleReply>
                    <div className="single-reply">
                      <div className="profile-images">
                        <img src="/images/profile-photo-10.png" alt="profile" />
                        <h5>Maude Hall</h5>
                        <p>14 min</p>
                      </div>
                      <div className="comment-details">
                        <h3>This person is fantastically incredible</h3>
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
                          <img src="/images/thumbs-up.svg" alt="thumbs-up" />
                        </div>
                      </div>
                    </div>
                  </SingleReply>
      
                  <div className="reply-section">
                    <SingleReply>
                      <div className="single-reply">
                        <div className="profile-images">
                          <img src="/images/profile-photo-10.png" alt="profile" />
                          <h5>Maude Hall</h5>
                          <p>14 min</p>
                        </div>
                        <div className="comment-details">
                          <h3>This person is fantastically incredible</h3>
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
                            <img src="/images/thumbs-up.svg" alt="thumbs-up" />
                          </div>
                        </div>
                      </div>
                    </SingleReply>
                    <SingleReply>
                      <div className="single-reply">
                        <div className="profile-images">
                          <img src="/images/profile-photo-10.png" alt="profile" />
                          <h5>Maude Hall</h5>
                          <p>14 min</p>
                        </div>
                        <div className="comment-details">
                          <h3>This person is fantastically incredible</h3>
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
                            <img src="/images/thumbs-up.svg" alt="thumbs-up" />
                          </div>
                        </div>
                      </div>
                    </SingleReply>
                  </div> */}



