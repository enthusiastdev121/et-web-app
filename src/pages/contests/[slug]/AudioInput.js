import React from "react";


export default function AudioInput(props) {

    const { width, height } = props;

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
        props.getAudioFile(file)
        props.getduration(inputRef.current.duration)
    };

    return (
        <div className="VideoInput">
            {!source && (
                <div className="rounded-lg relative add-photo-container">
                    <input
                        type="file"
                        className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                        ref={inputRef}
                        onChange={handleFileChange}
                        accept=".mp3,.ogg"
                    />
                    <div className="text-center bg-upload-video">
                        <img
                            src="/images/mp3.svg"
                            alt="Upload"
                            className="mx-auto"
                        />
                    </div>
                </div>
            )}

            {source && (
                <div className="rounded-lg relative add-photo-container">

                    <div className="text-center bg-upload-video">
                        <audio
                            className="VideoInput_video mx-auto"
                            width="100%"
                            height={height}
                            controls
                            src={source}
                        />
                    </div>
                    <div className="rounded-lg relative">
                        <input
                            type="file"
                            className="absolute top-0 left-0  border-2 h-full w-full opacity-0"
                            onChange={handleFileChange}
                        />
                        <div className="text-center">
                            <div className="upload-black-image">
                                <button>Change</button>
                            </div>
                        </div>
                    </div>
                </div>


            )}


            {/* <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
     
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )} */}

        </div>
    );
}
