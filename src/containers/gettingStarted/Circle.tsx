import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const fadein = {
  hidden: { y: 50 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Circle(props: any) {
  const [strok, setStrok] = useState(100 - props.val);

  return (
    <motion.div
      className="relative w-fit"
      variants={fadein}
      initial="hidden"
      animate="visible"
    >
      <svg width="60" height="60" viewBox="0 0 120 120" className="-rotate-90">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="12"
        />
        <circle
          style={{ strokeDashoffset: strok, strokeDasharray: 100 }}
          className="percent"
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#0070F4"
          strokeWidth="12"
          pathLength="100"
        />
      </svg>
      <p className="value absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-#191919 font-black text-[14px]">
        {props.val}%{" "}
      </p>
    </motion.div>
  );
}

export default Circle;
