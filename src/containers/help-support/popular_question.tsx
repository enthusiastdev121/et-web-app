import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const PopularQuestion = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(false);


  return (
    <Question>
      <OpenAnswer className="bg-pure txt-base">
        <button
          className="w-full py-4 px-10"
          onClick={() => setToggleBtn(!toggleBtn)}
        >
          <h1 className="font-bold txt-base text-left ">{data.title}</h1>
          <MdKeyboardArrowDown
            className="absolute bottom-4 top-4 left-2 text-gray-600"
            fontSize={24}
          />
        </button>
        {toggleBtn ? (
          <Answer>
            <AnswerContent className="text-center lg:text-left mt-4">
              <p>{data.body}</p>
            </AnswerContent>
          </Answer>
        ) : null}
      </OpenAnswer>
    </Question>
  );
};

export default PopularQuestion;

const Question = styled.div``;
const OpenAnswer = tw.div`
shadow border  text-gray-700 mb-3  relative bg-white font-semibold w-full mt-4
`;
const Answer = tw.div`
border-t px-3 py-5
`;
const AnswerContent = styled.div``;
const Text = tw.div`
font-bold xl:text-xl
`;
