import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Container, VideoContainer } from "./styles";

export default function VideoReviewOptionsModal({
  handleClose,
  setModalContent,
}: Props) {
  return (
    <VideoContainer>
         <div className="flex justify-between items-center border-b-2 pb-4 px-4 md:px-8">
        <FaArrowLeft
          className="cursor-pointer"
          onClick={() => setModalContent({ modalName: "options" })}
        />
        <h2>Send a video review</h2>
        <IoMdClose className="cursor-pointer text-2xl" onClick={handleClose} />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm mt-5">How would you like to send a video?</p>

        <div className="flex flex-col md:flex-row justify-center gap-3 text-sm font-medium my-5 items-center">
          <div
            className="flex flex-row md:flex-col gap-3 cursor-pointer items-center text-left md:text-center"
            onClick={() => setModalContent({ modalName: "video" })}
          >
            <div>
              <Image
                src="/svg/video-review.svg"
                alt="pen"
                height={80}
                width={80}
              />
            </div>
            <div>
              Take a video
              <br />
              from my device
            </div>
          </div>

          <hr
          className=" md:hidden"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
              margin: "0 2em",
              width: "80%",
              height: 1,
            }}
          />
          <hr
          className=" hidden md:block"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
              margin: "0 2em",
              width: 1,
              height: 84,
            }}
          />

<div
            className="flex flex-row items-center md:flex-col gap-3 cursor-pointer text-left md:text-center"
            onClick={() => setModalContent({ modalName: "video" })}
          >
            <div>
              <Image
                src="/svg/gallery.svg"
                alt="video"
                height={80}
                width={80}
              />
            </div>
            <div>
              Upload video
              <br />
              from gallery
            </div>
          </div>
        </div>
      </div>
    </VideoContainer>
  );
}

type Props = {
  handleClose: () => any;
  setModalContent: any;
};
