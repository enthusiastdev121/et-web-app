import { IoPause, IoPlay } from "react-icons/io5";
import styled from "styled-components";

const AudioControls = ({ isPlaying, onPlayPauseClick, setPlayed }: any) => (
  <div className="audio-controls flex items-center gap-5">
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => {
          onPlayPauseClick(false);
          setPlayed(false);
        }}
        aria-label="Pause"
      >
        {/* <Pause /> */}
        <ControlIcon className="card-icon cursor-pointer">
          <IoPause className="text-4xl" />
        </ControlIcon>
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => {
          onPlayPauseClick(true);
          setPlayed(true);
        }}
        aria-label="Play"
      >
        {/* <Play /> */}
        <ControlIcon className="card-icon cursor-pointer">
          <IoPlay className="text-4xl ml-1" />
        </ControlIcon>
      </button>
    )}
  </div>
);

export default AudioControls;

const ControlIcon = styled.div`
  background: ${(p: any) => p.theme.primary};
  color: #fff;
  height: 64px;
  width: 64px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
