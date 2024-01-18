import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { PrimaryBtnOutline } from "@/styles/Btn.styled";
import { ImageGalleryContainer } from "../styles";
import { useProfileStore } from "context/ProfileStore";
import { CgMenuGridO } from "react-icons/cg";
import { HiPhotograph } from "react-icons/hi";
import ImageCard from "./Card";
import { PROFILE_MEDIA_LIMIT } from "../../../utils/constants";
import { PhotoGallerySkel } from "../Skel";
import { PhotoItemD } from "types/profile";
import { useAuth } from "context/AuthContext";
import { fetchOwnPhotosService } from "network/services/profile";

const LIMIT = 11;

export default function AllPhotos({ own = false, userId }: Props) {
  const [isFav, setIsFav] = useState(false);
  const [dsp, setDsp] = useState("block");
  const [activeView, setActiveView] = useState("grid");
  const [list, setList] = useState<PhotoItemD[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const page = useRef(1);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const fetchOwnPhotos = useCallback(
    async (more: boolean = false) => {
      try {
        if (!token) {
          return;
        }

        if (more) {
          setLoadingMore(true);
        } else {
          page.current = 1;
          setLoading(true);
        }
        const { total, data } = await fetchOwnPhotosService({
          token,
          page: page.current,
          perPage: LIMIT,
        });

        if (more) {
          setList((s) => [...s, ...data]);
        } else {
          setList(data);
        }
        setTotal(total);
        setLoading(false);
        setLoadingMore(false);
      } catch (err) {
        console.log("Err", err);
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [token]
  );

  const fetchMoreOwnPhotos = useCallback(() => {
    if (list.length < total) {
      page.current = page.current + 1;
      fetchOwnPhotos(true);
    }
  }, [fetchOwnPhotos, total, list.length]);

  useEffect(() => {
    fetchOwnPhotos();
  }, [fetchOwnPhotos]);

  useEffect(() => {
    if (list.length < total) {
      setDsp("block");
    } else {
      setDsp("hidden");
    }
  }, [list?.length, total]);

  console.log("Photos list: ", list);

  return (
    <ImageGalleryContainer className="" id="photos">
      <nav className="block md:hidden">
        <ul className="flex items-center justify-around">
          <li className="relative cursor-pointer" onClick={() => setActiveView("grid")}>
            <span className={activeView === "grid" ? "active" : ""}>
              <CgMenuGridO className="text-xl" />
            </span>
          </li>
          <li className="cursor-pointer" onClick={() => setActiveView("list")}>
            <span className={activeView === "list" ? "active" : ""}>
              <HiPhotograph className="text-xl" />
            </span>
          </li>
        </ul>
      </nav>

      <ul className={activeView === "grid" ? "grid-container" : "list-container"}>
        {!loading ? (
          list.map((i: any) => {
            return <ImageCard item={i} key={i.id} />;
          })
        ) : (
          <PhotoGallerySkel />
        )}
      </ul>

      <div className={`${dsp} text-center mt-10`}>
        <PrimaryBtnOutline
          className="btn"
          onClick={() => {
            fetchMoreOwnPhotos();
          }}
        >
          Load&nbsp;More
        </PrimaryBtnOutline>
      </div>
    </ImageGalleryContainer>
  );
}

type Props = {
  own?: boolean;
  userId?: number;
};

{
  /* <div
        className={
          activeView === "grid"
            ? "grid grid-cols-3 gap-1 md:gap-3 grid-container px-1 sm:px-0"
            : "grid grid-cols-3 gap-1 md:gap-3 list-container px-1 sm:px-0"
        }
      >
        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 5" }}
        >
          <img src="/images/profile-images/img.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 7" }}
        >
          <img src="/images/profile-images/img-1.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 5" }}
        >
          <img src="/images/profile-images/img-2.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 5" }}
        >
          <img src="/images/profile-images/img-3.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 5" }}
        >
          <img src="/images/profile-images/img-4.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 3" }}
        >
          <img src="/images/profile-images/img-5.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 7" }}
        >
          <img src="/images/profile-images/img-6.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 5" }}
        >
          <img src="/images/profile-images/img-7.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 3" }}
        >
          <img src="/images/profile-images/img-8.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 6" }}
        >
          <img src="/images/profile-images/img-9.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>

        <div
          className="relative gallery-image-container"
          style={{ gridRow: "span 5" }}
        >
          <img src="/images/profile-images/img-10.png" alt="profile" />
          <div
            className="absolute hidden md:block"
            style={{ bottom: "-5px", right: "5px" }}
          >
            <Image
              src={isFav ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
              height={34}
              width={34}
              alt="heart"
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>
      </div> */
}
