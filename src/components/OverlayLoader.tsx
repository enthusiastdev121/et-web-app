import React from "react";
import Spinner from "./Spinner";

export default function OverlayLoader() {
  return (
    <div className="absolute bg-white bg-opacity-60 left-0 top-0 h-full w-full z-10 flex items-center justify-center">
      <Spinner primary />
    </div>
  );
}
