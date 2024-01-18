import { AudioPlayerContainer } from "./styles";

import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

const AudioPlayer = ({ uri, title, audioDuration, desc }: any) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(false);

  const audioRef = useRef(new Audio(uri));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, [1000]);
  };

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #2C8BED), color-stop(${currentPercentage}, #E5E7EB))
`;

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(uri);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, []);

  return (
    <AudioPlayerContainer className="flex gap-5 items-center">
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        setPlayed={setPlayed}
      />
      <div>
        {played ? (
          <>
            <h3 className="font-semibold lg:text-lg">{title}</h3>
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              className="progress"
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
              style={{ background: trackStyling }}
            />
          </>
        ) : (
          <div className="card-content">
            <h3 className="font-semibold lg:text-lg">{title}</h3>
            <div>
              <span className="font-semibold">{audioDuration}</span>
              <div className="dot flex items-center justify-center">
                <span> • </span>
              </div>
              <span>{desc}</span>
            </div>
          </div>
        )}
      </div>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
