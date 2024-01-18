import { PrimaryBtn } from "@/styles/Btn.styled";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Box } from "./styles";

export default function AddAudios() {
  return (
    <Box className="px-5 py-10 text-center">
      <div>
        <Image
          src="/images/microphone.png"
          alt="microphone"
          height={90}
          width={90}
        />
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold my-5">Audio</h2>
      <p className="mb-10">
        Add an audio track such as a music or voice-over track.
      </p>

      <div className="flex flex-col md:items-center">
        <PrimaryBtn className="btn flex items-center justify-center gap-1">
          <AiOutlinePlus className="text-lg" /> Add&nbsp;audio&nbsp;track
        </PrimaryBtn>
      </div>
    </Box>
  );
}
