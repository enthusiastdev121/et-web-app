import React from "react";


export default function VideoInput(props) {

    const { width, height } = props;

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
        props.getVideo(file)
    };


    const playVid = () => {
        vid.play();
    }

    const pauseVid = () => {
        vid.pause();
    }

    return (
        <div className="VideoInput">
            {!source && (
                <div className="rounded-lg relative add-photo-container">
                    <input
                        type="file"
                        className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                        ref={inputRef}
                        onChange={handleFileChange}
                        accept=".mov,.mp4"
                    />
                    <div className="text-center bg-upload-video">
                        <img
                            src="/images/video-uploaded.svg"
                            alt="Upload"
                            className="mx-auto"
                        />
                    </div>
                </div>
            )}

            {source && (
                <div className="relative">
                    <video
                        className="VideoInput_video"
                        width="100%"
                        height={height}
                        controls

                        src={source}
                    />
                    <div className="rounded-lg relative">
                        <input
                            type="file"
                            className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                            onChange={handleFileChange}
                        />
                        <div className="text-center">
                            <div className="upload-black-image">
                                <button><img src="/images/camera-icon.png" alt="upload-image" />Change</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}
