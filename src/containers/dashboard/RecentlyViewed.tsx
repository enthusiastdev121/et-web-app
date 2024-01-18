import { RecentlyViewedContainer } from "./Dashboard.styled";
import Image from "next/image";

export default function RecentlyViewed() {
  return (
    <RecentlyViewedContainer className="boxShadow py-5 rounded-lg txt-base">
      <div className="pb-3 border-b-2 px-5">
        <h2 className="text-lg font-semibold">Recently Viewed</h2>
      </div>

      <ul className="mb-5 text-sm flex flex-col justify-between">
        <li className="flex items-center my-5 px-5 gap-4">
          <div className="mr-4">
            <Image
              src="/images/recently-viewed-1.png"
              alt="multi media"
              height={60}
              width={60}
            />
          </div>
          <p className="border-b-2 pb-5">
            Untitled Project - created on 03/16/2020
          </p>
        </li>
        <li className="flex items-center my-5 px-5 gap-4">
          <div className="mr-4">
            <Image
              src="/images/recently-viewed-2.png"
              alt="multi media"
              height={60}
              width={60}
            />
          </div>
          <p className="border-b-2 pb-5">
            Untitled Project - created on 03/16/2020
          </p>
        </li>
        <li className="flex items-center my-5 px-5 gap-4">
          <div className="mr-4">
            <Image
              src="/images/recently-viewed-3.png"
              alt="multi media"
              height={60}
              width={60}
            />
          </div>
          <p className="border-b-2 pb-5">
            Untitled Project - created on 03/16/2020
          </p>
        </li>
        <li className="flex items-center my-5 px-5 gap-4">
          <div className="mr-4">
            <Image
              src="/images/recently-viewed-4.png"
              alt="multi media"
              height={60}
              width={60}
            />
          </div>
          <p className="border-b-2 pb-5">
            Untitled Project - created on 03/16/2020
          </p>
        </li>
      </ul>
    </RecentlyViewedContainer>
  );
}
