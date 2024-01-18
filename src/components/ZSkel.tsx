import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ZSkel() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Skeleton height={"100%"} width={"100%"} />
    </div>
  );
}
