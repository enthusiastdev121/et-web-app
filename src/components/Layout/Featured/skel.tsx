import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Skel() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => {
          return (
            <div key={i}>
              <Skeleton
                style={{
                  height: 370,
                  maxWidth: 270,
                  marginRight: 4,
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
