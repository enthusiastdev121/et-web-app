import Image from "next/image";
import { useState } from "react";

export default function ImageCard({ item }: any) {
  //   const [heart, setHeart] = useState(false);

  return (
    <li
      className="relative gallery-image-container"
      style={{ gridRow: "span 5" }}
    >
      <img src={item?.uri} alt="profile" />

      {/* <div
        className="absolute hidden md:block"
        style={{ bottom: "-5px", right: "5px" }}
      >
        <Image
          src={heart ? "/svg/heart-filled.svg" : "/svg/heart-outline.svg"}
          height={34}
          width={34}
          alt="heart"
          onClick={() => setIsFav(!heart)}
        />
      </div> */}
    </li>
  );
}
