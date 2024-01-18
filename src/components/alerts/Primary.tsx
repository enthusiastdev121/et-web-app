import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PrimaryAlertContainer } from "./styles";

export default function PrimaryAlert({ message }: any) {
  return (
    <PrimaryAlertContainer className="flex items-center gap-3 p-2">
      <BsFillInfoCircleFill className="icon-primary w-1/5 md:w-fit" />
      <p className="text-xs sm:text-sm ">{message}</p>
      <MdKeyboardArrowRight />
    </PrimaryAlertContainer>
  );
}
