import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Skel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[1, 2, 3].map((i) => {
        return (
          <div key={i}>
            <Skeleton style={{ height: 80, width: 300, borderRadius: 8, marginBottom: 4 }} />
          </div>
        );
      })}
    </div>
  );
}
