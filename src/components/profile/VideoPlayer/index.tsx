import { IoClose } from "react-icons/io5";
import { VideoPlayerContainer } from "./styles";

export default function VideoPlayer({ handleClose, uri }: any) {
  return (
    <VideoPlayerContainer
      className="video-overlay flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-slate-100"
      style={{ zIndex: "400" }}
      onClick={handleClose}
    >
      <div className="relative">
        <IoClose
          style={{
            color: "#000",
            position: "absolute",
            top: "5px",
            right: "5px",
            fontSize: "24px",
            zIndex: "999",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />

        <video
          controls
          width="700"
          style={{ zIndex: "500", maxHeight: "80vh", maxWidth: "90vw" }}
        >
          <source src={uri} type="video/webm"></source>
        </video>
      </div>
    </VideoPlayerContainer>
  );
}
