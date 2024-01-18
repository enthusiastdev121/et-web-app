import ZSkel from "components/ZSkel";
import React from "react";
export default function ListSkel({ count = 4 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {[1, 2, 3, 4].map((i, ind) => {
        return (
          <div key={ind} className="flex flex-col gap-1 ">
            <div className=" h-20 w-full relative rounded-lg overflow-hidden">
              <ZSkel />
            </div>
          </div>
        );
      })}
    </div>
  );
}
