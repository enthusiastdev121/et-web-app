import ModalAnimated from 'components/ModalAnimated'
import styled from 'styled-components'
import toast from "react-hot-toast";
import React, { useEffect, useRef, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import Button from 'components/Button'
import { PrimaryBtnOutline } from '@/styles/Btn.styled'
import { FiUpload } from "react-icons/fi";
import PageProgressLoader from 'components/PageProgressLoader'
import axios from 'axios'
import { addSpotlightRoute } from 'network/apis/spotlight'
import { useAuth } from 'context/AuthContext'
import { formatMySpotlightsMedia } from 'network/apiFormatter/spotlights'
import { SpotlightMediaItemsD } from 'types/spotlight';

export default function AddSpotlightModal(props: {
    open: boolean,
    onClose: () => any,
    onUpdate: (d: SpotlightMediaItemsD) => any

}) {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const inputRef = useRef<any>();
    const cancelRef = useRef<any>();
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState<any>();
    const { token } = useAuth();
    const {
        open,
        onClose,
        onUpdate,
    } = props

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target?.files || e.target?.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target?.files[0])
        e.target.value = ''
    }

    const onUpload = async () => {
        try {
            const raw = new FormData();
            if (selectedFile.type.includes('image')) {
                raw.append("type", "image");
            } else {
                raw.append("type", "video");
            }
            raw.append("file", selectedFile);
            cancelRef.current = axios.CancelToken.source();
            setUploading(true);
            const res = await axios.post(addSpotlightRoute, raw, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + token,
                },
                cancelToken: cancelRef.current?.token,
                onUploadProgress: (progressEvent: any) => {
                    const p = progressEvent.loaded / progressEvent.total;
                    setProgress(p);
                },
            });
            setUploading(false);
            toast.success("Spotlight uploaded successfully");
            setSelectedFile(undefined)
            if (res.data?.id) {
                onUpdate(formatMySpotlightsMedia(res.data))
            }
        } catch (error) {
            console.log('error in uploading myspotlight', error)
            toast.error("An error occured while uploading your spotlight, please try again!");
        }
    }
    return (
        <>
            <ModalAnimated open={open}>
                <AddSpotlightSection>
                    <button className='close icon' onClick={onClose}><RiCloseFill /></button>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="text-base md:text-xl lg:text-2xl font-bold text-center mb-4">Upload your spotlight</h1>
                        <div className='input p-2 relative bg-border'>
                            {!preview ? <label htmlFor="img" className='flex flex-col justify-center items-center text-sm md:text-lg text-gray-500 gap-2 p-4'>click here to upload your spotlight
                                <FiUpload className='text-base md:text-2xl' />
                            </label> : ''}
                            <input type="file" id="img" name="img" accept="image/*, video/*" onChange={onSelectFile} ref={inputRef} className='cursor-pointer' />
                            {selectedFile && <div className='aspect-square w-72 flex justify-center items-center rounded-md'>

                                {selectedFile.type.includes('image') ? <img src={preview} className='object-contain h-48 w-full' /> :
                                    <video width="520" height="300" controls>
                                        <source src={preview} type="video/mp4" />
                                    </video>}
                            </div>}
                        </div>
                        {selectedFile && <div className="flex items-center justify-center gap-5 mt-4">
                            <Button primary type='submit' onClick={onUpload}>
                                Upload
                            </Button>
                            <PrimaryBtnOutline className="btn" onClick={() => setSelectedFile(undefined)}>
                                Cancel
                            </PrimaryBtnOutline>
                        </div>}
                    </div>
                    {uploading && (
                        <PageProgressLoader
                            onCancel={() => {
                                cancelRef.current?.cancel();
                                setProgress(0);
                                setUploading(false);
                            }}
                            title="Uploading spotlight"
                            progress={progress}
                        />
                    )}
                </AddSpotlightSection>
            </ModalAnimated>
        </>
    )
}

const AddSpotlightSection = styled.div`
    width: 96%;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    background-color: white;
    position: relative;
    border-radius: 8px;
    padding: 1rem;

    .icon {
  position: absolute;
  z-index: 999;
  background: #3c3c4399;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
}
@media screen and (max-width: 480px) {
  .icon {
    width: 25px;
  height: 25px;
  }
}
.close {
  top: 5px;
  left: 5px;
  transform: unset;
}

.input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 100%;
}

input {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
}
`