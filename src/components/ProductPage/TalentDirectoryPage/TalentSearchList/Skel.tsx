import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Skel() {
  return (
    <>
      <div style={{ flexDirection: "row", display: "flex", flexWrap: 'wrap', padding: "10px 10px", gap: 20 }}>
        {Array.from(Array(28).keys()).map((i) => {
          return (
            <div key={i}>
              <Skeleton
                style={{
                  height: 410,
                  width: 200,
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
                    width: 30,
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
