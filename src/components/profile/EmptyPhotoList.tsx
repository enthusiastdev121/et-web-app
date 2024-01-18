import { PrimaryBtn, PrimaryBtnOutline } from "@/styles/Btn.styled";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Box } from "./styles";

export default function EmptyPhotoList({ onClick }: any) {
  return (
    <Box className="box px-5 py-10 text-center" id="target10">
      <div>
        <img src="/images/preview-video-1.svg" alt="add photo"  className="mx-auto"/>
      </div>
      <h2 className="profile-box-title">Photo</h2>
      <p className="profile-box-subtitle">Add professional and stunning photos that showcase your career</p>

      <div className="flex flex-col md:items-center">
        <PrimaryBtn
          className="btn flex items-center justify-center gap-1"
          onClick={onClick}
        >
          <AiOutlinePlus className="text-lg" /> Add&nbsp;Photos
        </PrimaryBtn>
      </div>
    </Box>
  );
}
