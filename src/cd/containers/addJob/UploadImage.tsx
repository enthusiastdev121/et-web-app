import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled, { useTheme } from "styled-components"
import { IoMdImage } from 'react-icons/io'
import { HiPlus } from 'react-icons/hi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { addJobImageApi } from 'network/apis/cd/job'
import { useAuth } from 'context/AuthContext'
import OverlayLoader from 'components/OverlayLoader'
export default function UploadImage({ onChange, getData }: propTypes) {
    const [image, setImage] = useState<any>()
    const [imageObj, setImageObj] = useState<any>()
    const theme = useTheme()
    const FileBox = useRef<any>()
    const { token } = useAuth()
    const [loader, setLoader] = useState(false)
    const onImageChange = (e: any) => {
        const [file] = e.target.files;
        setImage(URL.createObjectURL(file));
        setImageObj(file);
        e.target.value = null;
    };
    const handelClick = () => {
        FileBox.current.click();
    }
    const hitApi = useCallback(async () => {
        if (!imageObj || !token) {
            return
        }
        const formData = new FormData();
        formData.append("file", imageObj,);
        try {
            setLoader(true)
            const res = await addJobImageApi({ token, formData });
            console.log('---------Response data from image api +++++++++++', res)
            onChange(res.id)
            setLoader(false)
        }
        catch (err) {
            setLoader(false)
            console.log("Errr....", err)
        }
    }, [image, token])
    useEffect(() => {
        hitApi()
    }, [hitApi])
    useEffect(() => {
        if (getData) {
            setImage(getData)
        }
    }, [getData])
    // console.log(' -----------  getData ------------', image)
    return (
        <ParentSection theme={theme}>
            <h2>Upload casting image <span>(Optional)</span></h2>
            {/* <div className={image === '' ? 'image_section' : 'image_section noborder'}> */}
            <div className={image === undefined ? 'image_section' : 'image_section noborder'}>
                {/* <img src={getData} /> */}

                <input type='file' accept="image/png, image/jpeg" onChange={onImageChange} ref={FileBox} />
                <span>
                    {image === undefined ?
                        <>
                            <IoMdImage />
                            <div>
                                <HiPlus />
                                <p>Add Photo</p>
                            </div></>
                        // : <img src={URL.createObjectURL(image)} />}
                        : <img src={image} />}
                    {loader ? <OverlayLoader /> : ''}
                </span>
                <div className={image === '' ? 'updateButton hide' : 'updateButton'}>
                    <button onClick={handelClick}><IoMdImage />Change photo</button>
                    <button onClick={() => { setImage('') }}><RiDeleteBin5Fill /></button>
                </div>
            </div>
        </ParentSection>
    )
}
type propTypes = {
    onChange: any,
    getData: any
}
const ParentSection = styled.section`
    h2{
        span{
            font-weight:400;
        }
    }
    .image_section{
        border: 2px dashed;
        border-radius: 10px;
        margin-top: 20px;
        background: #F6F7F9;
        position: relative;
        overflow: hidden;
        input {
            width: 100%;
            height: 300px;
            opacity:0;
            cursor: pointer;
            z-index: 9;
            position: relative;
            @media (max-width:450px){
                height: 220px;
            }
        }
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 0;
            transform: translate(-50%, -50%);
            width: 100%;
            div{
                display:flex;
                align-items: center;
                gap: 2px;
                color: ${p => p.theme.primary};
                justify-content: center;
                svg{
                    font-size:18px;
                    color: ${p => p.theme.primary};
                    width: 20px;
                    margin: 0px;
                }
                p{
                    font-weight:600;
                }
            }
            svg {
                font-size: 100px;
                color: #3C3C4399;
                margin: auto;
            }
            img{
                margin: auto;
            }
        }
        
    }
    .image_section.noborder {
        border-color: transparent;
    }
    .updateButton {
        position: absolute;
        bottom: 10px;
        right: 10px;
        display: flex;
        align-items: stretch;
        gap: 10px;
        z-index: 9999;
        button {
            display: flex;
            align-items: center;
            background: #000000CC;
            padding: 10px 20px;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            gap: 6px;
            @media (max-width:450px){
                padding: 6px 12px;
            }
        }
        svg{
            font-size:20px;
        }
    }
    .updateButton.hide{
        display:none;
    }
`