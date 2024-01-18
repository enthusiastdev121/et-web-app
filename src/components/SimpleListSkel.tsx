import React from "react";
import Skeleton from "react-loading-skeleton";
import ZSkel from "./ZSkel";

export default function SimpleListSkel({ count = 4 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4].map((i, ind) => {
        return (
          <div key={ind} className="flex flex-col gap-1 ">
            <div className="flex items-center gap-1">
              <div className="h-12 relative  rounded-md overflow-hidden" style={{ width: "10%" }}>
                <ZSkel />
              </div>
              <div className="h-12 relative rounded-md overflow-hidden" style={{ width: "40%" }}>
                <ZSkel />
              </div>
            </div>
            <div className="h-48 w-full relative rounded-lg overflow-hidden">
              <ZSkel />
            </div>
          </div>
        );
      })}
    </div>
  );
}
