import BackToTop from "components/BackToTop";
import { H1 } from "@/styles/Typography.styled";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import { useEffect, useState } from "react";
import VideoInput from "./VideoInput";
import AudioInput from "./AudioInput";
import LinkInput from "./LinkInput";
import Layout from "components/Layout";
import { getContestByIdApi, submitContentMedia, uploadContentRoute, uploadLinkContentRoute, uploadSongContentRoute, uploadVideoContentRoute } from "network/apis/contest";
import { formatContestDetailItem } from "network/apiFormatter/contest";
import { fetchUser } from "@/utils/helper";
import { useAuth } from "context/AuthContext";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

export default function SubmitContest({ res }: any) {
  const route = useRouter()
  const { token, user }: any = useAuth();
  const [selectedImage, setSelectedImage] = useState<any>();
  const [linkType, setLinkType] = useState<any>();
  const [desc, setDescription] = useState<any>("");
  const [duration, setDuration] = useState<any>("");
  const [active, setActive] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const onSubmitContent = async () => {
    try {
      setloading(true)
      let userRes = fetchUser();
      if (userRes) {
        var formdata = new FormData();
        formdata.append("talentnum", userRes.talentnum);
        formdata.append("type", "5");
        formdata.append("file", selectedImage);
        formdata.append("des", desc);
        await axios.post(uploadContentRoute, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }).then(async (resSubmit: any) => {
          const raw = {
            tm_id: resSubmit.data.id,
            link_id: "",
            status: "1",
            contest_id: res.id,
            cm_type: "2",
            title: desc,
            des: desc
          }
          const result = await submitContentMedia(JSON.stringify(raw), token)

          if (result) {
            route.push("/contests/current-contests")
            setloading(false)
          }
        }).catch((err) => {
          setloading(false)
          setError(err.errors.contest_media)
          console.log("Error", err)
        });
      }
    } catch (err: any) {
      setloading(false)
      setError(err.errors.contest_media)
      console.log("Err", err);
    }
  };

  const onSubmitContentVideo = async () => {
    try {
      setloading(true)
      var formdata = new FormData();
      formdata.append("type", "99");
      formdata.append("file", selectedImage);
      formdata.append("des", desc);
      await axios.post(uploadVideoContentRoute, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }).then(async (resSubmit: any) => {
        const raw = {
          tm_id: resSubmit.data.id,
          link_id: "",
          status: "1",
          contest_id: res.id,
          cm_type: resSubmit.type,
          title: desc,
          des: desc
        }
        const result = await submitContentMedia(JSON.stringify(raw), token)

        if (result) {
          route.push("/contests/current-contests")
          setloading(false)
        }
      }).catch((err) => {
        setloading(false)
        setError(err.errors.contest_media)
        console.log("Error", err)
      });
    } catch (err: any) {
      setloading(false)
      setError(err.errors.contest_media)
      console.log("Err", err);
    }
  }

  useEffect(() => {
    let flag = false;
    if (selectedImage) {
      flag = true
    } else {
      flag = false
    }
    if (desc) {
      flag = true
    } else {
      flag = false
    }

    if (res.accept_link == '1') {
      if (linkType) {
        flag = true
      } else {
        flag = false
      }
    }
    if (res.accept_mp3 == '1') {
      if (duration) {
        flag = true
      } else {
        flag = false
      }
    }

    setActive(flag)
  }, [selectedImage, desc, linkType, duration])

  const getVideo = (url: any) => {
    setSelectedImage(url)
  }

  const getLink = (link: any) => {
    setSelectedImage(link)
  }

  const getLinkType = (type: any) => {
    setLinkType(type)
  }

  const getAudioFile = (audio: any) => {
    setSelectedImage(audio)
  }
  const getduration = (audioDuration: any) => {
    setDuration(audioDuration)
  }

  const onSubmitContentLink = async () => {
    setloading(true)
    try {
      const rawLink = {
        type: linkType,
        link: selectedImage,
        title: desc,
        desc: desc
      }
      await axios.post(uploadLinkContentRoute, JSON.stringify(rawLink), {
        headers: {
          "Content-Type": "multipart/json",
          Authorization: "Bearer " + token,
        },
      }).then(async (resSubmit: any) => {
        const raw = {
          tm_id: "",
          link_id: resSubmit.data.id,
          status: "1",
          contest_id: res.id,
          cm_type: "5",
          title: desc,
          des: desc
        }
        const result = await submitContentMedia(JSON.stringify(raw), token)

        if (result) {
          route.push("/contests/current-contests")
          setloading(false)
        }
      }).catch((err) => {
        setloading(false)
        setError(err.errors.contest_media)
        console.log("Error", err)
      });
    } catch (err: any) {
      setloading(false)
      setError(err.errors.contest_media)
      console.log("Err", err);
    }
  }

  const onSubmitContentAudio = async () => {

    try {
      setloading(true)
      var formdata = new FormData();
      formdata.append("type", "1");
      formdata.append("file", selectedImage);
      formdata.append("duration", duration);
      formdata.append("title", desc);
      formdata.append("des", desc);
      await axios.post(uploadSongContentRoute, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }).then(async (resSubmit: any) => {
        const raw = {
          tm_id: resSubmit.data.id,
          link_id: "",
          status: "1",
          contest_id: res.id,
          cm_type: "1",
          title: desc,
          des: desc
        }
        const result = await submitContentMedia(JSON.stringify(raw), token)

        if (result) {
          route.push("/contests/current-contests")
          setloading(false)
        }
      }).catch((err) => {
        setloading(false)
        setError(err.errors.contest_media)
        console.log("Error", err)
      });
    } catch (err: any) {
      setloading(false)
      setError(err.errors.contest_media)
      console.log("Err", err);
    }
  }

  return (
    <Layout>
      <Container className="padding-small">
        <BackToTop />
        <main
          className="lg:flex gap-10"
          style={{ maxWidth: "1530px", margin: "0 auto" }}
        >
          <div className="left">

            <nav className="rounded-md w-full breadcrumb">
              <ol className="list-reset flex flex-wrap">
                <li><Link href="/contests/current-contests"><div className="text-color-primary hover:text-color-primary">Contests</div></Link></li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li><Link href="/contests/current-contests"><div className="text-color-primary hover:text-color-primary">{res?.name}</div></Link></li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li className="text-gray-500">Entry submission</li>
              </ol>
            </nav>

            <div className="title-pages">
              <H1>{res?.name}</H1>
            </div>

            <form className="lg:flex gap-10 custom-form -mx-5 sm:mx-0">
              {res.accept_pic == '1' &&
                <div className="lg:w-3/5 w-full upload-image-card">
                  <h3>Upload your photo entry</h3>
                  {!selectedImage && (
                    <div className="rounded-lg relative add-photo-container">
                      <input
                        type="file"
                        className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                        onChange={imageChange}
                      />
                      <div className="text-center bg-upload-image">
                        <img
                          src="/images/upload-image.png"
                          alt="Upload"
                        />
                      </div>
                    </div>
                  )}
                  {selectedImage && (
                    <>
                      <div className="add-uploaded-container">
                        <div className="bg-small-image-container-main">
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Thumb"
                            className="bg-big-image"
                          />
                          <div className="bg-small-image-container">
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt="Thumb"
                              className="bg-small-image"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg relative">
                        <input
                          type="file"
                          className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                          onChange={imageChange}
                        />
                        <div className="text-center">
                          <div className="upload-black-image">
                            <button><img src="/images/camera-icon.png" alt="upload-image" />Change</button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="textarea">
                    <textarea
                      name="detial"
                      id="detial"
                      className="border-2 rounded w-full p-2 mt-4"
                      placeholder="Enter short description of your entry"
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    ></textarea>
                    <p>0/100 Characters left</p>
                    {loading && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                      {[1].map((i) => {
                        return (
                          <div key={i}>
                            <Skeleton style={{ height: 46, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 23, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                          </div>
                        );
                      })}
                    </div>}
                    {!loading && !error &&
                      <button type="button" className={`${active == true ? "" : " de-active"} submit-profile`} onClick={onSubmitContent}>Submit my entry</button>
                    }
                    {error &&
                      <div className="text-center">
                        <h3>Image Already Submited</h3>
                      </div>
                    }

                  </div>
                </div>
              }

              {res.accept_video == '1' &&
                <div className="lg:w-3/5 w-full upload-image-card">
                  <h3>Upload your video entry</h3>
                  <VideoInput getVideo={getVideo} />
                  <div className="textarea">
                    <textarea
                      name="detial"
                      id="detial"
                      className="border-2 rounded w-full p-2 mt-4"
                      placeholder="Enter short description of your entry"
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    ></textarea>
                    <p>0/100 Characters left</p>
                    {loading && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                      {[1].map((i) => {
                        return (
                          <div key={i}>
                            <Skeleton style={{ height: 46, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 23, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                          </div>
                        );
                      })}
                    </div>}
                    {!loading && !error &&
                      <button type="button" className={`${active == true ? "" : " de-active"} submit-profile`} onClick={onSubmitContentVideo}>Submit my entry</button>
                    }
                    {error &&
                      <div className="text-center">
                        <h3>Video Already Submited</h3>
                      </div>
                    }
                  </div>
                </div>
              }
              {
                res.accept_mp3 == '1' &&
                <div className="lg:w-3/5 w-full upload-image-card">
                  <h3>Upload your audio entry</h3>
                  <div className="textarea">
                    <AudioInput getAudioFile={getAudioFile} getduration={getduration} />
                    <textarea
                      name="detial"
                      id="detial"
                      className="border-2 rounded w-full p-2 mt-4"
                      placeholder="Enter short description of your entry"
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    ></textarea>
                    <p>0/100 Characters left</p>
                    {loading && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                      {[1].map((i) => {
                        return (
                          <div key={i}>
                            <Skeleton style={{ height: 46, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 23, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                          </div>
                        );
                      })}
                    </div>}
                    {!loading && !error &&
                      <button type="button" className={`${active == true ? "" : " de-active"} submit-profile`} onClick={onSubmitContentAudio}>Submit my entry</button>
                    }
                    {error &&
                      <div className="text-center">
                        <h3>Audio Already Submited</h3>
                      </div>
                    }
                  </div>
                </div>
              }

              {res.accept_link == '1' &&
                <div className="lg:w-3/5 w-full upload-image-card">
                  <h3>Upload your entry</h3>
                  <div className="textarea">
                    <LinkInput getLink={getLink} getLinkType={getLinkType} />
                    <textarea
                      name="detial"
                      id="detial"
                      className="border-2 rounded w-full p-2 mt-4"
                      placeholder="Enter short description of your entry"
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    ></textarea>
                    <p>0/100 Characters left</p>
                    {loading && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                      {[1].map((i) => {
                        return (
                          <div key={i}>
                            <Skeleton style={{ height: 46, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                            <Skeleton style={{ height: 23, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                          </div>
                        );
                      })}
                    </div>}
                    {!loading && !error &&
                      <button type="button" className={`${active == true ? "" : " de-active"} submit-profile`} onClick={onSubmitContentLink}>Submit my entry</button>
                    }
                    {error &&
                      <div className="text-center">
                        <h3>Link Already Submited</h3>
                      </div>

                    }
                  </div>
                </div>
              }
              <div className="px-5">
                <div className="lg:w-2/5 w-full upload-rules-list lg:mt-0 mt-4 mb-4">
                  <h3>Rules</h3>
                  <ul className="list-disc">
                    <li>
                      You must be smiling in the picture.
                    </li>
                    <li>
                      Pictures should be close up of your face.
                    </li>
                    <li>
                      One photo per contestant.
                    </li>
                    <li>
                      No visible or implied nudity picture
                    </li>
                    <li>
                      No small pictures
                    </li>
                    <li>
                      No low-quality pictures (blurry, etc.)
                    </li>
                    <li>
                      Properly rotated (Not sideways/skewed)
                    </li>
                    <li>
                      Must contain only yourself, no one else
                    </li>
                    <li>
                      Minimum of 30 votes required to win
                    </li>
                  </ul>
                  <p>Entries failing to meet these requirements will be disqualified and/or removed.</p>
                </div>
              </div>
            </form>
          </div>
          <aside className="right">
            <Advertisement />
            <div className="mb-5">
              <CommunityBuzz />
            </div>

          </aside>
        </main>
      </Container>
    </Layout>

    /* <SubmitContestContainer className="padding-small">
      <div style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="px-5 sm:px-0">
          <H1>Contests</H1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            eligendi.
          </p>
        </div>

        <div className="content-container">
          <div>
            <H2>Cutest throwback baby picture 2019</H2>
          </div>

          <div className="border-t-2 border-b-2 py-5 my-5">
            <div>
              <div className="flex items-start mb-3">
                <span className="icon">
                  <TiTick />
                </span>
                <H3>Contest Description</H3>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                quidem impedit culpa maxime perspiciatis esse at qui, fugit
                consequuntur similique alias maiores, nam praesentium! Ratione
                ut vel expedita quia hic?
              </p>
            </div>

            <div className="my-10">
              <div className="flex items-start mb-3">
                <span className="icon">
                  <TiTick />
                </span>
                <H3>Contest Rule</H3>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                quidem impedit culpa maxime perspiciatis esse at qui, fugit
                consequuntur similique alias maiores, nam praesentium! Ratione
                ut vel expedita quia hic?
              </p>
            </div>

            <div>
              <div className="flex items-start mb-3">
                <span className="icon">
                  <TiTick />
                </span>
                <H3>Contest Prize</H3>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                quidem impedit culpa maxime perspiciatis esse at qui, fugit
                consequuntur similique alias maiores, nam praesentium! Ratione
                ut vel expedita quia hic?
              </p>
            </div>
          </div>

          <form className="lg:flex gap-10">
            <div className="lg:w-1/2">
              <div>
                <H4 color="#2C8BED" size={20}>
                  Step-1
                </H4>
                <H5 size={24}>Upload Contest Media</H5>
              </div>

              <div className="p-10 rounded-lg relative mt-5 add-photo-container">
                <input
                  type="file"
                  className="absolute top-0 left-0 p-10 border-2 h-full w-full opacity-0"
                />
                <div className="text-center">
                  <Image
                    src="/svg/uploadPhoto.svg"
                    alt="Upload"
                    height={60}
                    width={70}
                  />
                  <div className="add-photo-text">ADD PHOTO LOGO</div>
                </div>
              </div>
            </div>

            <div className="mt-5 lg:mt-0 lg:w-1/2">
              <div>
                <H4 color="#2C8BED" size={20}>
                  Step-2
                </H4>
                <H5 size={24}>Add/Edit Details</H5>
              </div>

              <div className="mt-5">
                <div>
                  <label htmlFor="title" className="font-bold text-lg">
                    My contest title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border-2 rounded w-full p-2 mt-2"
                  />
                </div>
                <div className="mt-5">
                  <label htmlFor="detail" className="font-bold text-lg">
                    My contest details
                  </label>
                  <textarea
                    name="detial"
                    id="detial"
                    className="border-2 rounded w-full p-2 mt-2"
                    style={{ minHeight: "170px" }}
                  ></textarea>
                </div>
                <div className="lg:flex lg:justify-end">
                  <PrimaryBtn type="submit" className="btn mt-5 ml-auto">
                    Enter&nbsp;Contest
                  </PrimaryBtn>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SubmitContestContainer> */
  );
}


export async function getServerSideProps(context: any) {
  try {
    const slug = context.params.slug;
    const id = slug.match(/[^-]*$/)[0];
    const res = await getContestByIdApi({ id: id });
    return {
      props: {
        res: formatContestDetailItem(res)
      },
    };
  } catch (err) {
    console.log("Err", err);
    return {
      redirect: {
        destination: "/404",
      },
    };
  }
}

const Container = styled.div`

.left {

  @media (min-width: 1050px) {
    width: 70%;
  }
}
.right {

  @media (min-width: 1050px) {
    width: 30%;
  }
}

.title-pages{
  @media (max-width: 499px) {
    padding-left:20px;
    padding-right:20px;
  }
}

.breadcrumb {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom:20px;
  @media (max-width: 499px) {
    padding-left:20px;
    padding-right:20px;
  }
}

.text-color-primary{
  color:#0070F4
}
.text-color-secondory{
  color:#E5E7EB
}

.action-panel{
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

form{
  margin-top:25px;

  @media (max-width: 499px) {
    padding-left:20px;
    padding-right:20px;
  }

  .add-uploaded-container{
    position:relative;

    .bg-small-image-container-main{
      height: 443.5px;
      overflow:hidden;
    }

    .bg-big-image{
      width:100%;
      height:443.50px;
      object-fit:cover;
      filter: blur(10px);
    }

    .bg-small-image-container{
      width: 100%;
      height: 443.5px;
      text-align:center;
      top: 0;
      position: absolute;
    }

    .bg-small-image{
      width:295px;
      height:100%;
      object-fit:cover;
      margin:0 auto;

      @media (max-width:499px) {
        width: 100% !important;
      }
    }
  }

  .upload-image-card{
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
    padding-top:40px;
    padding-bottom:40px;
    overflow: hidden;

    h3{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
       color: ${p => p.theme.base};
      text-align:center;
      margin-bottom:10px;
    }
  }

  .bg-upload-video{
    background: #F6F7F9;
    border: 2px dashed #C8C8CD;
    border-radius: 8px;
    // width:100%;
    max-width:90%;
    margin:0 auto;
    padding-top:150px;
    padding-bottom:150px;
  }

  .bg-upload-audio{
    .bg-upload-audio-inner{
    max-width:90% !important;
    margin:0 auto;

    label{
      font-weight: 600;
      font-size: 12px;
       color: ${p => p.theme.base};
    }

    input{
      outline:none !important;
      padding:0 20px;
      color: rgba(60, 60, 67, 0.6);
    }
    }
  }

  .upload-black-image{
    margin-top:5px;
    button{
      display:flex;
      align-items:center;
      margin:0 auto;
      padding:8.5px 10px;
      background: ${p => p.theme.base}
      border-radius: 1000px;
      font-weight: 600;
      font-size: 14px;
      color: #FFFFFF;
    }
  }

  .bg-upload-image{
    background: #F6F7F9;
    border: 2px dashed #C8C8CD;
    border-radius: 8px;
    max-width:295px;
    margin:0 auto;
    padding-top:150px;
    padding-bottom:150px;
    
      img{
        width: 119px;
        height: 139.52px;
        margin:0 auto;
      }
    }

  .textarea{
    max-width:90%;
    margin:0 auto;

    textarea{
      font-weight: 400;
      font-size: 16px;
       color: ${p => p.theme.base};
      outline:none !important;

      &::placeholder{
        color: #A1A1AA;
        
      }
    }

    p{
      font-weight: 400;
      font-size: 12px;
      color: rgba(60, 60, 67, 0.6);
      text-align:right;
    }

    .de-active{
      opacity:0.5;
    }


    .submit-profile{
      background: ${p => p.theme.primary};
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      color: #FFFFFF;
      padding:11.5px 20px;
      display:flex;
      justify-content:center;
      margin:0 auto;
    }

  }

  .upload-rules-list{
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height:max-content;
    padding-top:30px;
    padding-bottom:30px;

    h3{
      font-weight: 600;
      font-size: 18px;  
       color: ${p => p.theme.base};
      padding-left:15px;
      margin-bottom:10px;
    }

    ul{
      padding: revert !important;
      padding-left: 20px !important;
      li{
        list-style: disc;
         color: ${p => p.theme.base};
        font-weight: 400;
        font-size: 13px;
      }
    }
    p{
      padding:30px 15px 0 20px !important;
      font-weight: 400;
      font-size: 13px;
       color: ${p => p.theme.base};
    }
  }

}

`;