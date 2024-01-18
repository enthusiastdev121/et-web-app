import { MAIN_NAV_HEIGHT } from "@/utils/constants";
import { Send } from "iconsax-react";
import { position } from "polished";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import styled from "styled-components"
import { onMessageArgs } from "types/messagingV2";
import SendBtn from "./SendBtn";

export default function AddMedia({ state, setState, onMessage }: { state: File[], setState: (state: File) => void, onMessage: ({ }: onMessageArgs) => void }) {
    const handleMultipleImages = (evnt: any) => {
        const selectedFIles: any = [...state];
        const targetFiles = evnt.target.files;
        const targetFilesObject = [...targetFiles]

        if (selectedFIles.length > 0) {
            for (const item of selectedFIles) {
                if (item?.name == targetFiles[0]?.name) {
                    evnt.target.value = ''
                    return false;
                }
            }
            targetFilesObject.map((file) => {
                return selectedFIles.push(file)
            })

        } else {
            targetFilesObject.map((file) => {
                return selectedFIles.push(file)
            })
        }

        setState(selectedFIles)
        evnt.target.value = ''
    }

    const handleRemove = (url: {}) => {
        setState(state.filter(s => s?.name !== url?.name));
        if (url?.name === activeUrl?.name) {
            if (activeUrl?.name === state[0]?.name && state.length > 1) {
                setActiveUrl(state[1])
            } else {
                setActiveUrl(state[0])
            }
        }
    }

    const [activeUrl, setActiveUrl] = useState(state[0] || {})

    console.log("state: ", state)

    return (
        <Root>
            {/* CLOSE */}
            <IoClose
                className="text-3xl cursor-pointer opacity-70 absolute top-5 right-5"
                onClick={() => { setState([]) }}
            />

            {/* MAIN */}
            <div className="grow flex items-center justify-center">
                <MediaBig>
                    {activeUrl?.type?.split("/")[0] == "video" &&
                        <>
                            <video width="520" height="400" controls src={URL.createObjectURL(activeUrl)}>
                            </video>
                        </>
                    }
                    {activeUrl?.type?.split("/")[0] == "image" &&
                        <img src={URL.createObjectURL(activeUrl)} />
                    }
                </MediaBig>
            </div>

            {/* BOTTOM BAR */}
            <BottomBar>
                <div className="flex items-center justify-center gap-3 w-[80%] mx-auto">
                    {state.map((url: any, index) => (
                        <div
                            className={url?.name === activeUrl?.name ? "active-media media-container" : "media-container"}
                            key={index}
                        >
                            <>
                                {url.type.split("/")[0] == "video" &&
                                    <>
                                        <video width="320" height="240"
                                            controls src={URL.createObjectURL(url)}
                                            onClick={() => setActiveUrl(url)}
                                        >
                                        </video>
                                    </>
                                }
                                {url.type.split("/")[0] == "image" &&
                                    <img src={URL.createObjectURL(url)} onClick={() => setActiveUrl(url)} />
                                }
                            </>


                            <button onClick={() => handleRemove(url)}>
                                <IoClose className="cursor-pointer" />
                            </button>
                        </div>
                    ))}

                    <div className={state.length >= 3 ? "hidden" : "add-more-btn"}>
                        <input
                            type="file"
                            accept="video/*,image/*"
                            className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                            onChange={handleMultipleImages}
                            multiple
                        />
                        <FiPlus />
                    </div>
                </div>

                <SendBtn onClick={() => onMessage({ file: state, type: "localMedia" })} />
            </BottomBar>
        </Root>
    )
}

const Root = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: calc(100vh - ${MAIN_NAV_HEIGHT + 70}px);
    background-color: ${p => p.theme.pure};
    border-top: 1px solid ${p => p.theme.border};
    // padding: 0 20px;
    color: ${p => p.theme.base};
    display: flex;
    flex-direction: column;
`
const MediaBig = styled.div` 
    height: 400px;
    width: 80%;
    // aspect-ratio: 0.667;
    overflow: hidden;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const BottomBar = styled.div`
    margin-top: auto;
    padding: 20px;
    // padding-bottom: 0;
    border-top: 1px solid ${p => p.theme.border};
    position: relative;

    .media-container, .add-more-btn {
        height: 70px;
        width: 70px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .media-container {
        height: 70px;
        width: 70px;
        border-radius: 5px;
        overflow: hidden;
        position: relative; 
        background-color: ${p => p.theme.primary};

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        button {
            position: absolute;
            top: 5px;
            right: 5px;
            z-index: 10;
            color: #fff;
            opacity: 0;
        }

        &:hover button {
            opacity: 1;
            transition: all 0.2s ease;
        }
         
    }

    .active-media {
        border: 3px solid ${p => p.theme.primary}; 
    }

    .add-more-btn {
        border: 2px solid ${p => p.theme.primary}; 
        color:  ${p => p.theme.primary};
        border: 2px solid ${p => p.theme.base}; 
        color:  ${p => p.theme.base};
        font-size: 28px;
        opacity: 0.4;
        cursor: pointer;
    }
`