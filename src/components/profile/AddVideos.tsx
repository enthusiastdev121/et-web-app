import { PrimaryBtn, PrimaryBtnOutline } from "@/styles/Btn.styled";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Box } from "./styles";

export default function AddVideos() {
  return (
    <Box className="box px-5 py-10 text-center">
      <div>
        <Image
          src="/images/video-player.png"
          alt="video player"
          height={95}
          width={105}
        />
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold my-5">Video</h2>
      <p className="mb-10">
        Add a showreel or videos showcasing your experience
      </p>

      <div className="flex flex-col md:items-center">
        <PrimaryBtn className="btn flex items-center justify-center gap-1">
          <AiOutlinePlus className="text-lg" /> Add&nbsp;video
        </PrimaryBtn>
      </div>
    </Box>
  );
}
