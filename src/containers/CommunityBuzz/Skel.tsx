import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Skel() {
  return (
    <>
      <div style={{ flexDirection: "column", display: "flex", gap: 10 }}>
        {[1, 2, 3].map((i) => {
          return (
            <div key={i} style={{ width: "100%", display: "flex", gap: 8 }}>
              <div style={{ flex: 0.3 }}>
                <Skeleton style={{ height: 100, borderRadius: 12 }} />
              </div>
              <div style={{ flex: 0.7 }}>
                <Skeleton
                  style={{ height: 20, marginBottom: 2, borderRadius: 6 }}
                />
                <Skeleton
                  style={{
                    height: 20,
                    width: "40%",
                    marginBottom: 2,
                    borderRadius: 6,
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
