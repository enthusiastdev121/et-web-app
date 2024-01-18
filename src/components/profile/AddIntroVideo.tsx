import { PrimaryBtn } from "@/styles/Btn.styled";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Box } from "./styles";

export default function AddIntroVideo() {
  return (
    <Box className="px-5 py-10 text-center">
      <div>
        <Image src="/images/avator.png" alt="avatar" height={90} width={60} />
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold my-5">
        Video Introduction
      </h2>
      <p className="mb-10">
        Ready to add a video of you saying &apos;Hi&apos; to camera? You&apos;re
        in the right place!
      </p>

      <div className="flex flex-col md:items-center">
        <PrimaryBtn className="btn flex items-center justify-center gap-1">
          <AiOutlinePlus className="text-lg" /> Add&nbsp;video&nbsp;introduction
        </PrimaryBtn>
      </div>
    </Box>
  );
}
