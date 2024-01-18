import Button from "components/Button";
import React, { useRef, useState } from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ContentBox, HeadingSmall, Input, SlideHeading } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Name({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
  isChild
}: any) {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const guardianFirstNameRef = useRef(null);
  const guardianLastNameRef = useRef(null);
  const [fname, setFName] = useState(value?.fName || "")
  const [lname, setLName] = useState(value?.lName || "")
  const [guardianfname, setGuardianFname] = useState(value?.guardianfname || "")
  const [guardianlname, setGuardianLname] = useState(value?.guardianlname || "")

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!isChild) {
      if (
        fname.length > 0 &&
        lname.length > 0
      ) {
        onUpdate({
          fName: fname,
          lName: lname,
        });
        setCurrentSlide(nextSlide);
      } else {
        toast.warning("Please fill all fields");
      }
    } else {
      if (
        fname.length > 0 &&
        lname.length > 0
      ) {
        onUpdate({
          fName: fname,
          lName: lname,
          gfname: guardianfname,
          glname: guardianlname,
        });
        setCurrentSlide(nextSlide);
      } else {
        toast.warning("Please fill all fields");
      }
    }
  };

  return (
    <Frame>
      <ToastContainer className="Toastify" />
      <div className="grow flex items-center content">
        <ContentBox>
          <SlideHeading>What is your name?</SlideHeading>

          {
            isChild
              ?
              <form className="flex flex-col gap-8">
                <Input
                  ref={firstNameRef}
                  placeholder="Child's first name"
                  required
                  value={fname}
                  onChange={e => setFName(e.target.value)}
                />
                <Input
                  ref={lastNameRef}
                  placeholder="Child's last name"
                  required
                  value={lname}
                  onChange={e => setLName(e.target.value)}
                />
                <Input
                  ref={guardianFirstNameRef}
                  placeholder="Guardian's first name"
                  required
                  value={guardianfname}
                  onChange={e => setGuardianFname(e.target.value)}
                />
                <Input
                  ref={guardianLastNameRef}
                  placeholder="Guardian's last name"
                  required
                  value={guardianlname}
                  onChange={e => setGuardianLname(e.target.value)}
                />
                <div className="self-start">
                  <Button primary onClick={handleSubmit}>
                    Ok
                  </Button>
                </div>
              </form>
              :
              <form className="flex flex-col gap-8">
                <Input
                  ref={firstNameRef}
                  placeholder="First name"
                  required
                  value={fname}
                  onChange={e => setFName(e.target.value)}
                />
                <Input
                  ref={lastNameRef}
                  placeholder="Last name"
                  required
                  value={lname}
                  onChange={e => setLName(e.target.value)}
                />
                <div className="self-start">
                  <Button primary onClick={handleSubmit}>
                    Ok
                  </Button>
                </div>
              </form>
          }


        </ContentBox>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={60}
        setCurrentSlide={setCurrentSlide}
        allFilled={value.fName !== undefined && value.fName !== undefined}
        warningText={"Please enter your name"}
      />
    </Frame>
  );
}
