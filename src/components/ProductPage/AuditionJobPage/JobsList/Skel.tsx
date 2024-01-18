import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Skel() {
  return (
    <>
      <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          return (
            <div key={i}>
              <Skeleton style={{ height: 80, width: "100%", borderRadius: 8, marginBottom: 4 }} />
              <Skeleton style={{ height: 28, width: "20%", borderRadius: 6, marginBottom: 4 }} />
            </div>
          );
        })}
      </div>
    </>
  );
}
