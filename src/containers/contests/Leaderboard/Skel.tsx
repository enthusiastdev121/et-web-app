import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Skel() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <div key={i}>
              <Skeleton
                style={{
                  height: 370,
                  width: 270,
                  marginRight: 4,
                }}
              />

              <div>
                <Skeleton
                  style={{
                    height: 20,
                    width: 50,
                    marginBottom: 4,
                  }}
                />
              </div>
              <div>
                <Skeleton
                  style={{
                    height: 20,
                    width: 270,
                    marginBottom: 4,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
