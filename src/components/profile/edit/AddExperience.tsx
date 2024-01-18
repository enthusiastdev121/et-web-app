import { PrimaryBtn } from "@/styles/Btn.styled";
import Image from "next/image";
import Link from "next/link";

export default function AddExperience({ title, text, link, buttonText, imagesSource = "/images/preview-credit.svg" }: any) {
  return (
    <div className="edit-profile-shadow py-10 px-5 md:px-10 mb-5 bg-pure">
      {/* <h1 className="text-xl lg:text-2xl font-bold mb-3">{title}</h1> */}
      <div className="text-center">
        <div>
          <img src={imagesSource} alt="files" className="mx-auto" />
        </div>
        <h4 className="profile-box-title txt-base">
          {title}
        </h4>
        <p className="profile-box-subtitle txt-base opacity-80">{text}</p>
        <Link href={link} passHref>
          <PrimaryBtn className="btn">
            + Add {buttonText}
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}
