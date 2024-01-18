import { THEME } from "@/utils/constants/theme";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addProfilePicApi, updateProfileDetailApi } from "network/apis/ownProfile";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ImBin } from "react-icons/im";
import { MdImage } from "react-icons/md";
import styled from "styled-components";
import Layout from "components/Layout";
import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import CreateAccountBox from "components/CreateAccountBox";

export default function Page() {
    const router = useRouter();
    const { token, user, auth: { authenticated } } = useAuth();
    const cropRef = useRef();
    const { profile, setProfile } = useProfileStore();
    const [localFile, setLocalFile] = useState<any>(null);
    const [imageUri, setImageUri] = useState("");
    const [loading1, setLoading1] = useState(false);
    const [finished, setFinished] = useState(false);
    const [cropper, setCropper] = useState<any>();
    const [imageSrc, setImageSrc] = useState(null)
    const [saved, setSaved] = useState(false);

    const updateProfileStatus = async (st: any) => {
        try {
            await updateProfileDetailApi({
                token: token,
                talentnum: user?.talentnum || profile?.talentnum?.toString(),
                raw: {
                    join_status: st,

                },
            });
        }
        catch (err) {
            console.log("Err", err)
        }
    }

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
                    updateProfileStatus(4);
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
        <Layout>
            {authenticated ? (
                <Root className={`padding-small lg:flex flex-col items-center justify-center`}>
                    <Paper>
                        <>
                            <div>
                                <h4 className="font-bold text-3xl md:text-5xl mb-5">Add your Profile Picture</h4>
                                <p>Agents & Casting Directors choose
                                    only serious candidates with pictures.
                                    Upload a picture or use your camera.</p>

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
                                                        <span>+</span> Select photo
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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
                                </>
                                )}
                            </div>

                            {!saved && localFile && (
                                <div>
                                    <div className="mt-2 flex items-center justify-center gap-3 pb-3">
                                        <Button
                                            onClick={() => {
                                                onUpload();
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

                                    {/* <ul className="txt-link cursor-pointer text-sm lg:text-base xl:text-lg text-left">
                                    <li className="mb-3" onClick={() => setSaved(false)}>
                                        <MdCrop className="inline-block text-2xl" /> Crop/Edit
                                    </li>
                                    <li className="relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={onPick2}
                                            className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                                        />
                                        <MdAddBox className="inline-block text-2xl mb-1" /> Select new photo
                                    </li>
                                </ul> */}
                                </div>
                            )}

                            {
                                saved && localFile && (
                                    <div className="flex flex-col items-center gap-5">
                                        <ImgContainer>
                                            <img src={imageSrc} alt="profile" style={{ height: "100%", width: "100%" }} className="block" />

                                            <button className="p-2 border-4 border-white rounded-full text-white absolute -bottom-1 right-6 z-10"
                                                style={{ background: 'rgba(0, 0, 0, 0.7)' }}
                                            >
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={onPick2}
                                                    className="w-full h-full inline-block opacity-0 absolute top-0 left-0 z-10"
                                                />
                                                <MdImage />
                                            </button>

                                            <button className="bg-red-500 p-2 border-4 border-white rounded-full text-white absolute -bottom-1 -right-2 z-10"
                                                onClick={() => {
                                                    setImageUri("");
                                                    setLocalFile(null);
                                                    setSaved(false)
                                                }}
                                            >
                                                <ImBin />
                                            </button>
                                        </ImgContainer>

                                        <div className="flex gap-5">
                                            <Button
                                                primary
                                                onClick={() => {
                                                    router.push('/' + profile.talentlogin)
                                                }}
                                            >
                                                View Profile
                                            </Button>

                                            <button
                                                className="txt-link font-semibold"
                                                onClick={() => {
                                                    router.push('/profile/edit#target10')
                                                }}
                                            >
                                                Add more photos to gallery
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    </Paper>
                </Root>
            ) : (
                <CreateAccountBox />
            )}
        </Layout>
    );
}

const Root = styled.div`
    text-align: center;
    height: calc(100vh - ${MAIN_NAV_HEIGHT}px);

    @media (min-width: 1530px)  {
        height: fit-content;
    }
`

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
const ImgContainer = styled.div`
    width: 230px;
    aspect-ratio: ${THEME.profilePicRatio};
    position: relative;
    background-color: black;
    border-radius: 3px; 
    margin-top: 20px;

    img {
        border-radius: inherit;
    }
`