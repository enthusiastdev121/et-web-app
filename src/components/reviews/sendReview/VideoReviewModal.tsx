import Button from "components/Button";
import { VideoAdd } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { darken } from "polished";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { Container, VideoContainer } from "./styles";

export default function VideoReviewModal({
  handleClose,
  setModalContent,
}: Props) {
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState<any>();
  const [fileDetail, setFileDetail] = useState({
    url: "",
    duration: 0,
    size: 0,
  });
  const inputRef = useRef<any>();

  const onVideo = async (e: any) => {
    if (e.target?.files?.length > 0) {
      setFile(e.target?.files[0]);
    }
    e.target.value = null;
  };

  useEffect(() => {
    if (file) {
      setFileDetail((s) => ({
        ...s,
        url: URL.createObjectURL(file),
        size: file.size,
      }));
    }
  }, [file]);

  return (
    <VideoContainer>
      <div className="flex justify-between items-center border-b-2 pb-4 px-8">
        <FaArrowLeft
          className="cursor-pointer"
          onClick={() => setModalContent({ modalName: "video-options" })}
        />
        <h2>Send a video review</h2>
        <IoMdClose className="cursor-pointer text-2xl" onClick={handleClose} />
      </div>

      <div className="flex flex-col gap-5 text-center">
        <div className="mt-5">
          {/* <div style={{ height: 257, maxWidth: 650, margin: "0 auto" }} className="bg-gray-200">video thumbnail</div> */}

          {!fileDetail.url ? (
            <>
              <label htmlFor="video-input">
                <Bg
                  className="w-full aspect-video sm:aspect-[2220/1080] relative rounded-md overflow-hidden flex items-center justify-center text-gray-800  "

                >
                  <VideoAdd size="42" variant="Bold" />
                </Bg>
              </label>
            </>
          ) : (
            <div>
              <div className="rounded-md relative overflow-hidden bg-black">
                <div className="w-full aspect-video sm:aspect-[2220/1080] relative  ">
                  <video
                    controls
                    src={fileDetail.url}
                    className="h-full w-full object-contain"
                    onLoadedMetadata={(e) => {
                      if (fileDetail.url) {
                        setFileDetail((s) => ({
                          ...s,
                          duration: e.target?.duration || 0,
                        }));
                      }
                    }}
                  />
                </div>
              </div>

              <div>
                {fileDetail.url && (
                  <label
                    className="bg-black mt-1 text-xs py-1 px-3 rounded-2xl inline-block cursor-pointer"
                    style={{ color: "#fff" }}
                    htmlFor="video-input"
                  >Change Video</label>
                )}
              </div>
            </div>
          )}
          <div className="absolute opacity-0">
            <input
              type="file"
              id="video-input"
              accept="video/mp4,video/x-m4v,video/*"
              onChange={onVideo}
              multiple={false}
              ref={inputRef}
            />
          </div>


        </div>


        <small>How would you rate Explore Talent?</small>

        <div className="flex gap-2 align-center justify-center text-3xl">
          {
            [...Array(5)].map((star, index) => {
              index += 1;
              return (
                <BsStarFill
                  key={index}
                  style={{ color: index <= rating ? "#FFB543" : "#C5C5C5", cursor: "pointer" }}
                  onClick={() => setRating(index)}
                />
              )
            })
          }
        </div>

        <div>
          <Button
            primary
            style={{ borderRadius: 5 }}
            onClick={() => {
              handleClose()
              toast.custom((t) => (
                <div className="bg-primary py-5 px-10 text-white text-center rounded-lg flex items-center justify-center gap-4">
                  <div className="hidden md:block">
                    <Image src="/images/confetti-gp-2.png" alt="confetti" width={61} height={63} />
                  </div>
                  <div>
                    <h4 className="font-bold">Review sent successfully!</h4>
                    <p className="mt-3">Thank you for sending your review, It is now under approval</p>
                  </div>
                  <div className="hidden md:block">
                    <Image src="/images/confetti-gp-1.png" alt="confetti" width={61} height={63} />
                  </div>
                </div>
              ))
            }}
          >Sumbit video review</Button>
        </div>

        <small className="my-5">
          By submiting this review you agree to <Link href="/about/agreement"><a target="_blank" className="txt-primary">Terms and Privacy Policy</a></Link>
        </small>

      </div>
    </VideoContainer>
  );
}

const Bg = styled.div`
  background-color: ${(p: any) => darken(0.2, p.theme.pure)};
  height: 257px;
  max-width: 650px;
  margin: 0 auto;
`

type Props = {
  handleClose: () => any;
  setModalContent: any;
};
