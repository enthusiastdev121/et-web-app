import { validateEmail } from "@/utils/helper";
import Button from "components/Button";
import React, { useRef } from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ContentBox, HeadingSmall, Input, SlideHeading } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Email({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
}: any) {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(emailRef.current.value) === null) {
      toast.error("Please enter a valid email");
    } else {
      onUpdate({
        email: emailRef.current.value,
      });
      setCurrentSlide(nextSlide);
    }
  };
  return (
    <Frame bannerChangeOne>
      {/* SKIP BUTTON */}
      {/* <button
        className="txt-link font-semibold cursor-pointer self-end mt-5"
        onClick={() => setCurrentSlide(nextSlide)}>Skip</button> */}
      <ToastContainer className="Toastify" />
      <div className="grow flex items-center content">
        <ContentBox>
          <SlideHeading>What is your email address?</SlideHeading>

          <form className="flex flex-col gap-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              ref={emailRef}
              value={value.email}
            />
            <div className="self-start">
              <Button primary onClick={handleSubmit}>
                Ok
              </Button>
            </div>
          </form>
        </ContentBox>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={54}
        setCurrentSlide={setCurrentSlide}
      />
    </Frame>
  );
}
