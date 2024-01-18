import Link from "next/link";
import styled from "styled-components";

import { PrimaryBtn, TertiaryBtn, PrimaryBtnLight } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { H2, H3, H4, Body1 } from "@/styles/Typography.styled";
import Image from "next/image";

export default function LookingPage9() {
  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 9/10</Question>
      <H2 size={48}>
        9. How do you want your listing to look in search results?
      </H2>

      <div className="mt-10 md:text-left flex justify-between items-start flex-col lg:flex-row border-b-2 pb-20 mb-20">
        <div>
          <H3>Basic Listing - Free</H3>

          <div className="mt-10 px-5">
            <H4>Voice Actor Needed as John Major</H4>
            <Body1>
              Great briefs attract great talent. Try to keep it short and sweet.
              aTell them a little about your project. Is it a comedy? A horror?
              Is there any graphic content that they should know about? Tell
              them where this project will be seen.
            </Body1>
          </div>
        </div>

        <div className="mt-5 lg:mt-0 mx-auto lg:mx-0 lg:w-1/3 lg:ml-20 flex flex-col">
          <PrimaryBtn className="btn mb-5 w-full">Try Basic Listing</PrimaryBtn>
          <div className="relative">
            <AddPhoto className="w-full absolute top-0 left-0 -z-10 flex flex-col justify-center items-center">
              <div className="mt-5">
                <Image src="/svg/photo.svg" height={30} width={36} alt="logo" />
              </div>
              <p className="mt-5 mb-5">ADD PHOTO LOGO</p>
            </AddPhoto>
            <input
              type="file"
              className="border py-16 block opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <H3>
            <Image
              src="/svg/rounded-tick.svg"
              height={22}
              width={22}
              alt="tick"
            />
            <span className="ml-4">Enhanced Listing - $39.00 USD</span>
          </H3>

          <ul className="mt-5 ">
            <li>
              <Image
                src="/svg/blue-tick.svg"
                height={10}
                width={12}
                alt="tick"
              />{" "}
              5.5x more applications
            </li>
            <li>
              <Image
                src="/svg/blue-tick.svg"
                height={10}
                width={12}
                alt="tick"
              />{" "}
              Larger title & standout background
            </li>
            <li>
              <Image
                src="/svg/blue-tick.svg"
                height={10}
                width={12}
                alt="tick"
              />{" "}
              Displays a larger logo in search results
            </li>
            <li>
              <Image
                src="/svg/blue-tick.svg"
                height={10}
                width={12}
                alt="tick"
              />{" "}
              Prominent position
            </li>
          </ul>

          <div>
            <div>
              <H4>Voice Actor Needed as John Major</H4>
              <Body1>
                Great briefs attract great talent. Try to keep it short and
                sweet. aTell them a little about your project. Is it a comedy? A
                horror? Is there any graphic content that they should know
                about? Tell them where this project will be seen.
              </Body1>
            </div>
            <Image
              src="/images/enhanced-listing-img.png"
              height={140}
              width={215}
              alt="something"
            />
          </div>
        </div>

        <PrimaryBtnLight className="btn">Try Enhanced Listing</PrimaryBtnLight>
      </div>

      <div className="flex w-full flex-col sm:flex-row justify-center mt-20">
        <Link href="#looking8" passHref>
          <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
        </Link>
        <div>
          <Link href="#looking10" passHref>
            <TertiaryBtn
              className="btn mr-2"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking10").classList.remove("hidden");
              }}
            >
              Cancel
            </TertiaryBtn>
          </Link>
          <Link href="#looking10" passHref>
            <PrimaryBtn
              className="btn"
              border="1px solid"
              onClick={() => {
                document.getElementById("looking10").classList.remove("hidden");
              }}
            >
              Next &rarr;
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}

const AddPhoto = styled.div`
  border: 1px dashed ${(props) => props.theme.primary};
  padding: 1em;

  p {
    color: ${(props) => props.theme.primary};
    font-weight: 600;
  }
`;
