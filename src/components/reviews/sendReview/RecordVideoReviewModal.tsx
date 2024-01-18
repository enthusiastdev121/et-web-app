import React, { useEffect, useRef } from "react";

const RecordVideoReviewModal = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);


    useEffect(() => {
        getVideo();
    }, [videoRef]);


    useEffect(() => {
        if (videoRef.current === null) {
            return;
        }
        paintToCanvas()
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 200);
    };

    const stop = (e) => {
        let video = videoRef.current;
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        video.srcObject = stream;
        video.play();

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            track.stop();
        }

        video.srcObject = null;
    }

    return (
        <div>
            <div>
                <button onClick={() => takePhoto()}>Take a photo</button>
                <video ref={videoRef} />
                <button onClick={stop}>STOP</button>
            </div>
        </div>
    );
};

export default RecordVideoReviewModal;