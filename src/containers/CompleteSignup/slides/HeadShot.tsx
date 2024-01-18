import Button from "components/Button";
import HeadshotInstructions from "components/profile/HeadshotInstructions";
import HeadshotUploader from "components/profile/HeadshotUploader";
import { useEffect, useRef, useState } from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useProfileStore } from "context/ProfileStore";
import { useAuth } from "context/AuthContext";
import { addProfilePicApi } from "network/apis/ownProfile";
import { THEME } from "@/utils/constants/theme";
import Image from "next/image";
import styled from "styled-components";
import OverlayLoader from "components/OverlayLoader";
import Modal from "components/Modal";
import { IoClose } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { MdAddBox, MdCrop } from "react-icons/md";

export default function HeadShot({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  onComplete,
  setCurrentSlide,
  onNext,
  loading,
  apiLoaded,
  isChild
}: any) {
  const cropRef = useRef();
  const { profile, setProfile } = useProfileStore();
  const [localFile, setLocalFile] = useState<any>(null);
  const [imageUri, setImageUri] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [finished, setFinished] = useState(false);
  const [localPic, setLocalPic] = useState("");
  const { token, user } = useAuth();
  const [cropper, setCropper] = useState<any>();
  const [imageSrc, setImageSrc] = useState(null)
  const [saved, setSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    width < 1060 ? setShowModal(true) : setShowModal(false);
  }, [width]);

  console.log("cropper: ", cropper)

  useEffect(() => {
    !apiLoaded && setCurrentSlide(nextSlide);
  }, [apiLoaded])

  const onPick = (e: any) => {
    console.log("onPick ran")
    if (e.target?.files.length > 0) {
      setLocalFile(e.target.files[0]);
    }
    e.target.value = null;
  };
  const onPick2 = (e: any) => {
    console.log("onPick ran")
    if (e.target?.files.length > 0) {
      setLocalFile(e.target.files[0]);
    }
    e.target.value = null;
    setSaved(false)
  };

  useEffect(() => {
    if (localFile) {
      setImageUri(URL.createObjectURL(localFile));
    }
  }, [localFile]);

  const onUpload = async () => {
    cropper.getCroppedCanvas().toBlob(async (b: any) => {
      try {
        const raw = new FormData();
        raw.append("talentnum", user.talentnum);
        raw.append("type", "2");
        raw.append("file", b);
        setLoading1(true);

        const res = await addProfilePicApi(token, raw);
        if (res && res.bam_media_path_full) {
          setProfile((s) => ({ ...s, pic: res.bam_media_path_full }));
          setLoading1(false);
          setImageSrc(res.bam_media_path_full)
        } else {
          setLoading1(false);
        }
        setSaved(true);
      } catch (err) {
        setLoading1(false);
        console.log("ERR", err);
      }
    });
  };

  console.log("local file: ", localFile);

  return (
    <Frame bannerChangeOne>
      {/* SKIP BUTTON */}
      {/* <button
        className="txt-link font-semibold cursor-pointer self-end mt-5"
        onClick={() => setCurrentSlide(nextSlide)}>Skip</button> */}

      {/* {loading && <OverlayLoader />} */}
      {/* <HeadshotUploader onClose={() => setOpen(false)} open={open} /> */}
      <div className="grow flex items-center">
        <Paper>
          <>
            <div className="">
              {saved ?
                <>
                  <h4 className="font-bold text-2xl">Wow, your photo is stunning,
                  </h4>
                  <p>let’s continue and finalize your profile.</p>
                </>
                :
                <>
                  <h4 className="font-bold text-2xl">Looking good!</h4>
                  <p>{isChild ? "now add the best photo of your child as the headshot" : "now let’s add the best photo as your headshot"}</p>
                </>
              }

              {!saved && localFile ? (
                <div className="my-3">
                  <div
                    style={{
                      maxWidth: 600,
                      width: "100%",
                      margin: "auto",
                      aspectRatio: THEME.profilePicRatio,
                    }}
                  >
                    <Cropper
                      style={{ height: 300, width: "100%" }}
                      src={imageUri}
                      aspectRatio={THEME.profilePicRatio}
                      guides={false}
                      crop={(e) => console.log("III", e)}
                      ref={cropRef}
                      onInitialized={(instance) => {
                        setCropper(instance);
                      }}
                    />
                  </div>
                </div>
              ) : !saved && (
                <div className="flex gap-4 items-center">
                  <div className="photo-container-outer my-10 mx-auto">
                    <div className="photo-container-inner flex items-center justify-center relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onPick}
                        className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                      />
                      <div
                        style={{ height: "250px" }}
                        className="flex items-center flex-col justify-center"
                      >
                        <Image
                          src="/images/pro.png"
                          alt="add photo"
                          height={105}
                          width={98}
                        />

                        <div className="txt-link mt-3 font-semibold">
                          <span>+</span> Select photo
                        </div>
                      </div>
                    </div>
                  </div>
                  {width < 1060 && showModal && <Modal width={width > 768 ? "50%" : "100%"} handleClose={() => setShowModal(false)}>
                    <ul className="bg-white p-5 rounded w-11/12 mx-auto flex flex-col text-left items-start gap-2 text-sm md:text-base">
                      <li className="flex items-center justify-between pb-2 border-b-2 mb-2 w-full text-xl font-semibold">
                        <span>
                          Instructions
                        </span>
                        <span onClick={() => setShowModal(false)} className="cursor-pointer"><IoClose /></span>
                      </li>

                      <li>
                        <span className="inline-block translate-y-1.5">
                          <Image
                            src="/svg/green-tick-fill.svg"
                            alt="tick"
                            height={24}
                            width={24}
                          />
                        </span>{" "}
                        Make sure you’re looking straight to the camera
                      </li>

                      <li>
                        <span className="inline-block translate-y-1.5">
                          <Image
                            src="/svg/green-tick-fill.svg"
                            alt="tick"
                            height={24}
                            width={24}
                          />
                        </span>{" "}
                        User proper lighting & plain background
                      </li>

                      <li>
                        <span className="inline-block translate-y-1.5">
                          <Image
                            src="/svg/red-tick-fill.svg"
                            alt="tick"
                            height={24}
                            width={24}
                          />
                        </span>{" "}
                        Don’t user filters, effects, don’t wear hats & sunnies
                      </li>
                    </ul>
                  </Modal>}
                  <ul className="hidden lg:flex flex-col text-left items-start gap-2 text-sm ">
                    <li>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/green-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      Make sure you’re looking straight to the camera
                    </li>

                    <li>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/green-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      User proper lighting & plain background
                    </li>

                    <li>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/red-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      Don’t user filters, effects, don’t wear hats & sunnies
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {!saved && localFile && (
              <div className="mt-2 flex items-center gap-3 pb-3">
                <Button
                  onClick={() => {
                    onUpload();
                    // setLocalFile(null);
                    setFinished(true)
                  }}
                  primary
                  loading={loading1}
                >
                  Save
                </Button>
                <button
                  className="txt-link font-semibold"
                  onClick={() => {
                    setImageUri("");
                    setLocalFile(null);
                  }}
                >
                  Remove
                </button>
              </div>
            )}

            {
              // saved && localFile && (
              true && (
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2 flex-col items-start">
                    <div className="relative w-fit bg-black my-5" style={{ height: "250px", width: "166.5px" }}>
                      <img src={imageSrc} alt="profile" style={{ height: "250px" }} className="block " />

                      <button className="bg-red-500 p-2 border-4 border-white rounded-full text-white absolute -bottom-1 -right-2"
                        onClick={() => {
                          setImageUri("");
                          setLocalFile(null);
                          setSaved(false)
                        }}
                      >
                        <ImBin />
                      </button>
                    </div>

                    <Button
                      primary
                      onClick={() => {
                        setCurrentSlide(nextSlide);
                        onNext();
                      }}
                    >
                      OK
                    </Button>
                  </div>

                  <ul className="txt-link font-semibold cursor-pointer text-sm lg:text-base xl:text-lg">
                    <li className="mb-3" onClick={() => setSaved(false)}>
                      <MdCrop className="inline-block text-lg" /> Crop/Edit
                    </li>
                    <li className="relative"  >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onPick2}

                        className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                      />
                      <MdAddBox className="inline-block text-lg mb-1" /> Select new photo
                    </li>

                  </ul>
                </div>
              )
            }
          </>
        </Paper>
      </div>


      <BottomBar
        width={90}
        onComplete={() => {
          onNext();
        }}
        text="Done"
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        setCurrentSlide={setCurrentSlide}
        allFilled={localFile !== null}
        warningText={"Please add your headshot"}
      />

    </Frame>
  );
}

const Paper = styled.div`
  .photo-fix {
    position: fixed;
    margin-right: 180px;
    margin-top: 50px;
  }

  .photo-container-outer {
    background: #ffffff;
    box-shadow: 0px 1.79738px 17.9738px 5.39215px rgba(0, 0, 0, 0.05),
      0px 3.59477px 3.59477px rgba(0, 0, 0, 0.05);
    border-radius: 1.79738px;
    padding: 10px 10px 20px 10px;
    width: 210px;
    height: 320px;
    max-height: 368px;
  }

  .photo-container-inner {
    background: #f6f7f9;
    border: 1px dashed #c8c8cd;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
`;
