import { THEME } from "@/utils/constants/theme";
import Button from "components/Button";
import Modal from "components/Modal";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addProfilePicApi } from "network/apis/ownProfile";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ImArrowRight2, ImBin } from "react-icons/im";
import { IoArrowForwardOutline, IoClose } from "react-icons/io5";
import { MdAddBox, MdCrop } from "react-icons/md";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import TranslatedText from "components/TranslatedText";

export default function Photo({
  data,
  setData,
  isChild,
  height,
  joinStatusUpdate
}: any) {
  const router = useRouter();
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
  const [showModal, setShowModal] = useState(true);

  // console.log("cropper: ", cropper)

  const onPick = (e: any) => {
    if (e.target?.files.length > 0) {
      setLocalFile(e.target.files[0]);
    }
    e.target.value = null;
  };
  const onPick2 = (e: any) => {
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


  return (
    <div className="padding text-center min-h-screen lg:flex flex-col items-center justify-center"
      style={{ minHeight: height }}>
      <Paper>
        <>
          <div className="">
            {saved ?
              <>
                <h4 className="font-bold text-2xl lg:text-5xl mb-5"> <TranslatedText>Wow, your photo is stunning,</TranslatedText>
                </h4>
                <p className="mb-10"> <TranslatedText>let’s continue and finalize your profile.</TranslatedText></p>
              </>
              :
              <>
                <h4 className="font-bold text-3xl md:text-5xl mb-5"> <TranslatedText>Add your Profile Picture</TranslatedText></h4>
                <p> <TranslatedText>Agents & Casting Directors choose
                  only serious candidates with pictures.
                  Upload a picture or use your camera.</TranslatedText></p>
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
            ) : !saved && (<>
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
                        <span>+</span>  <TranslatedText>Select photo</TranslatedText>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {showModal && <Modal width={"100%"} handleClose={() => setShowModal(false)}>
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
                </Modal>} */}
                <ul className="hidden lg:flex flex-col text-left items-start gap-2 text-sm ">
                  <li>
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/green-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>
                    <TranslatedText>Make sure you’re looking straight to the camera</TranslatedText>
                  </li>

                  <li>
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/green-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>
                    <TranslatedText>User proper lighting & plain background</TranslatedText>
                  </li>

                  <li>
                    <span className="inline-block translate-y-1.5">
                      <Image
                        src="/svg/red-tick-fill.svg"
                        alt="tick"
                        height={24}
                        width={24}
                      />
                    </span>
                    <TranslatedText>Don’t user filters, effects, don’t wear hats & sunnies</TranslatedText>
                  </li>
                </ul>
              </div>

              <div className="w-full text-center txt-primary mt-5">
                {/* <Link href="/profile"> */}
                <button className="hover:underline font-medium" onClick={() => {
                  joinStatusUpdate()
                  document?.getElementById("interest").classList.remove("hidden")
                  router.push("#interest")
                }}>

                  {/* Skip and add pics later and
                  Go to my account */}
                  <TranslatedText>Skip for now and add pics later</TranslatedText>
                </button>
                {/* </Link> */}
              </div>
            </>
            )}
          </div>

          {!saved && localFile && (
            <div className="mt-2 flex items-center justify-center gap-3 pb-3">
              <Button
                onClick={() => {
                  onUpload();
                  // setLocalFile(null);
                  setFinished(true)
                }}
                primary
                loading={loading1}
              >
                <TranslatedText>Save</TranslatedText>
              </Button>
              <button
                className="txt-link font-semibold"
                onClick={() => {
                  setImageUri("");
                  setLocalFile(null);
                }}
              >
                <TranslatedText>Remove</TranslatedText>
              </button>
            </div>
          )}

          {
            saved && localFile && (
              <>
                <div className="flex gap-4 items-center justify-center">
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


                  </div>

                  <ul className="txt-link font-semibold cursor-pointer text-sm lg:text-base xl:text-lg text-left">
                    <li className="mb-3" onClick={() => setSaved(false)}>
                      <MdCrop className="inline-block text-lg" /> <TranslatedText> Crop/Edit</TranslatedText>
                    </li>
                    <li className="relative"  >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={onPick2}

                        className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                      />
                      <MdAddBox className="inline-block text-lg mb-1" />  <TranslatedText>Select new photo</TranslatedText>
                    </li>

                  </ul>
                </div>

                <div className="text-center w-full mt-3">
                  <Button
                    primary
                    onClick={() => {
                      joinStatusUpdate()
                      document?.getElementById("interest").classList.remove("hidden")
                      router.push("#interest")
                    }}
                  >
                    <TranslatedText>Continue</TranslatedText> <IoArrowForwardOutline />
                  </Button>
                </div>
              </>
            )
          }
        </>


      </Paper>
    </div>
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
