import React, { useState } from "react";
import Slides from "./slides";
import Agree from "./slides/Agree";

export default function CompleteSignup() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="bg-paper" style={{ minHeight: "100vh" }}>
      {!agree ? <Agree onAgree={() => setAgree(true)} /> : <Slides />}
    </div>
  );
}
