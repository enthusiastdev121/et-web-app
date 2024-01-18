import TranslatedText from "components/TranslatedText";
import Link from "next/link";
import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineVolumeUp,
} from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { NavList } from "./styles";

export default function Navbar({
  photos,
  videos,
  songs,
  documents,
  acting,
  dance,
  extras,
  hairMakeup,
  influencer,
  modeling,
  music,
  photography,
  presenter,
  filmStage,
  tvReality,
  creditExperience,
}: any) {
  return (
    // TODO: Make navbar sticky when user scrolls past it
    <NavList className="flex items-center gap-2 flex-wrap text-sm 2xl:text-base justify-center md:justify-center">
      {/* PHOTOS */}
      {photos > 0 && (
        <li>
          <Link href="#photos">
            <a className="flex items-center gap-1">
              <HiOutlinePhotograph className="text-lg" />
              <span className="hidden md:block"><TranslatedText>Photo</TranslatedText> {photos}</span>
            </a>
          </Link>
        </li>
      )}
      {/* VIDEOS */}
      {videos > 0 && (
        <li>
          <Link href="#videos">
            <a className="flex items-center gap-1">
              <HiOutlineVideoCamera className="text-lg" />
              <span className="hidden md:block"><TranslatedText>Video</TranslatedText>  {videos}</span>
            </a>
          </Link>
        </li>
      )}
      {/* SONGS */}
      {songs > 0 && (
        <li>
          <Link href="#audios">
            <a className="flex items-center gap-1">
              <HiOutlineVolumeUp className="text-lg" />
              <span className="hidden md:block"><TranslatedText>Audio</TranslatedText> {songs}</span>
            </a>
          </Link>
        </li>
      )}
      {/* DOCUMENTS */}
      {documents > 0 && (
        <li>
          <Link href="#documents">
            <a className="flex items-center gap-1">
              <HiOutlineDocumentText className="text-lg" />
              <span className="hidden md:block"><TranslatedText>Documents</TranslatedText> {documents}</span>
            </a>
          </Link>
        </li>
      )}

      <li>
        <Link href="#appearance">
          <a className="flex items-center gap-1">
            <IoPersonOutline className="text-lg" />
            <span className="hidden md:block"><TranslatedText>Appearance</TranslatedText></span>
          </a>
        </Link>
      </li>

      {creditExperience && (
        <li>
          <Link href="#credits">
            <a className="flex items-center gap-1">
              <HiOutlineBriefcase className="text-lg" />
              <span className="hidden md:block"><TranslatedText>Credits & Experience</TranslatedText></span>
            </a>
          </Link>
        </li>
      )}
      {acting && (
        <li>
          <Link href="#acting">
            <a className="flex items-center gap-1"><TranslatedText>Acting</TranslatedText></a>
          </Link>
        </li>
      )}
      {modeling && (
        <li>
          <Link href="#modeling">
            <a className="flex items-center gap-1"><TranslatedText>Modelling</TranslatedText></a>
          </Link>
        </li>
      )}
      {filmStage && (
        <li>
          <Link href="#filmStage">
            <a className="flex items-center gap-1"><TranslatedText>Film Stage & Crew</TranslatedText></a>
          </Link>
        </li>
      )}
      {tvReality && (
        <li>
          <Link href="#tvReality">
            <a className="flex items-center gap-1"><TranslatedText>TV & Reality</TranslatedText></a>
          </Link>
        </li>
      )}
      {dance && (
        <li>
          <Link href="#dance">
            <a className="flex items-center gap-1"><TranslatedText>Dancing</TranslatedText></a>
          </Link>
        </li>
      )}
      {influencer && (
        <li>
          <Link href="#influencer">
            <a className="flex items-center gap-1"><TranslatedText>Influencer</TranslatedText></a>
          </Link>
        </li>
      )}
      {music && (
        <li>
          <Link href="#music">
            <a className="flex items-center gap-1"><TranslatedText>Music</TranslatedText></a>
          </Link>
        </li>
      )}
      {photography && (
        <li>
          <Link href="#photography">
            <a className="flex items-center gap-1"><TranslatedText>Photography</TranslatedText></a>
          </Link>
        </li>
      )}
      {presenter && (
        <li>
          <Link href="#presenter">
            <a className="flex items-center gap-1"><TranslatedText>Presenter</TranslatedText></a>
          </Link>
        </li>
      )}
      {hairMakeup && (
        <li>
          <Link href="#hairMakeup">
            <a className="flex items-center gap-1"><TranslatedText>Hair&nbsp;Makeup</TranslatedText></a>
          </Link>
        </li>
      )}
      {extras && (
        <li>
          <Link href="#extras">
            <a className="flex items-center gap-1"><TranslatedText>Extras</TranslatedText></a>
          </Link>
        </li>
      )}
    </NavList>
  );
}
