import { PrimaryBtnOutline } from '@/styles/Btn.styled';
import axios from 'axios';
import Button from 'components/Button';
import PageProgressLoader from 'components/PageProgressLoader';
import { useAuth } from 'context/AuthContext';
import { addSpotlightRoute, createSpotlightTagApi, getSpotlightTagsApi } from 'network/apis/spotlight';
import { Router, useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react'
import toast from 'react-hot-toast';
import { FiUpload } from 'react-icons/fi';
import styled from 'styled-components';
import { rgba } from 'polished';
// import ReactTags from 'react-tag-input';
import dynamic from 'next/dynamic'
// const ReactTags = dynamic(() => import('react-tag-input'), {
//     ssr: false,
// })


const ReactTags = dynamic(() =>
    import('react-tag-input').then((mod) => mod.WithContext), {
    ssr: false
}
)

import { GrCloudUpload } from 'react-icons/gr';

function AddNewSpotlight() {
    const { token } = useAuth();
    const router = useRouter()
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const inputRef = useRef<any>();
    const cancelRef = useRef<any>();
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState<any>();
    const [tags, setTags] = useState([]);
    const [tagIds, setTagIds] = useState<number[]>([]);
    const [allTags, setAllTags] = useState([]);
    // const [suggestions, setSuggestions] = useState([]);

    const handleDelete = (i: any) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag: any) => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const handleTagClick = (index: number) => {
        console.log('The tag at index ' + index + ' was clicked');
    };

    useEffect(() => {
        tags.map(tag => {
            const getTagId = async () => {
                if (allTags.filter(t => t.tag_name === tag.text).length > 0) {
                    // setTagIds([...tagIds, parseInt(tag.id)])
                    return;
                }

                try {
                    const res = await createSpotlightTagApi({ token, name: tag.text })
                    setTags([...tags.filter(t => t.text !== tag.text), { text: tag.text, id: res?.id?.toString() }])
                    // setTagIds([...tagIds, res?.id])
                } catch (e) {
                    console.log(e);
                }
            }

            getTagId();
        })

        console.log("tags", tags)
        console.log("setTagIds: ", setTagIds)
        console.log("All Tags: ", allTags)
        console.log("tagIds: ", tagIds);

        console.log(tagIds)
    }, [tags])

    useEffect(() => {
        const getAllTags = async () => {
            try {
                const res = await getSpotlightTagsApi()
                console.log("AllTags: ", res.data)
                setAllTags([...allTags, ...res?.data])
            } catch (e) {
                console.log(e);
            }
        }
        getAllTags()
    }, [])

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
            if (selectedFile?.type?.includes('image')) {
                raw.append("type", "image");
            } else {
                raw.append("type", "video");
            }
            raw.append("file", selectedFile);
            raw.append("spotlight_tag_ids", JSON.stringify(tags.map(tag => tag.id)));

            // const raw2 = {
            //     ...raw,
            //     spotlight_tag_ids: tagIds
            // }
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
            router.back();
        } catch (error) {
            console.log('error in uploading myspotlight', error)
            toast.error("An error occured while uploading your spotlight, please try again!");
        }
    }

    const suggestions = allTags.map(tag => {
        return {
            id: tag?.id?.toString(),
            text: tag?.tag_name
        };
    });

    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];


    // TAGS
    // useEffect(() => {
    //     console.log('TAGS: ', tags)
    // }, [tags])

    return (
        <AddSpotlightSection>
            <div>
                <h1 className="text-base md:text-2xl lg:text-3xl font-bold mb-10">Upload your spotlight</h1>
                <div className={`input relative ${selectedFile ? "bg-paper border-[1px] border-[#ccc]" : "bg-border"}`}>
                    {!preview ? <label htmlFor="img" className='flex flex-col justify-center items-center text-sm md:text-lg text-gray-500 gap-2 p-4'>Click here to upload your spotlight
                        <GrCloudUpload className='text-base text-3xl opacity-50' />
                    </label> : ''}
                    <input className="input-tag" type="file" id="img" name="img" accept="image/*, video/*" onChange={onSelectFile} ref={inputRef} />
                    {
                        selectedFile &&
                        <div className='aspect-square w-72 flex justify-center items-center rounded-md'>
                            {
                                selectedFile.type.includes('image') ?
                                    <img src={preview} className='object-contain min-h-[48px] w-full' /> :
                                    <video width="520" height="300" controls>
                                        <source src={preview} type="video/mp4" />
                                    </video>
                            }
                        </div>
                    }
                </div>

                {/* selectedFile && */}
                <>
                    <TagContainer>
                        {/* <TagsInput
                            value={tags}
                            onChange={setTags}
                            name="tags"
                            placeHolder="Add tags"
                        /> */}
                        <ReactTags
                            tags={tags}
                            suggestions={suggestions}
                            delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            handleTagClick={handleTagClick}
                            inputFieldPosition="bottom"
                            autocomplete
                        />
                    </TagContainer>

                    <div className="flex items-center gap-5 mt-4">
                        <Button primary onClick={() => {
                            if (!selectedFile) return
                            onUpload()
                        }}>
                            Upload
                        </Button>
                        <PrimaryBtnOutline className="btn" onClick={() => {
                            setSelectedFile(undefined)
                            // setTags([])
                        }}>
                            Cancel
                        </PrimaryBtnOutline>
                    </div>
                </>

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
    )
}

export default AddNewSpotlight;

const AddSpotlightSection = styled.div`
margin-right: 2rem;

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
    min-height: 300px;
    width: 100%;
    /* max-width: 700px;
    min-width: 320px; */
}

.input-tag {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
}
`
const TagContainer = styled.div`
    margin-top: 1em;

    .ReactTags__tagInputField {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0.5em;
        margin-top: 10px;

        &:focus {
            border: 1px solid ${p => p.theme.primary};
        }
    }

    .ReactTags__selected {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .ReactTags__tag {
        background-color: ${p => rgba(p.theme.primary, 0.15)};
        padding: 5px 10px;
        border-radius: 4px;
        margin: 5px;
        display: flex;
        align-items: center;
        width: fit-content;
        gap: 5px;
    }

    .ReactTags__remove {
        font-size: 20px; 
    }

    .ReactTags__suggestions > * { 
            cursor: pointer;
    }

    .go3450369076 {
        background-color: inherit;

        @media (min-width: 1050px) {
            width: 25%;
        }
    }

    .go2286398182 {
    }

`
