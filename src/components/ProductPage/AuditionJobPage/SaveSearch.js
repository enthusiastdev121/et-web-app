import Image from "next/image";
import styled from "styled-components";

import { PrimaryBtnRounded, ToggleBtn } from "@/styles/Btn.styled";

export default function SaveSearch() {
  return (
    <div className="p-10">
      <H2 className="font-bold mb-10">Save this Search</H2>

      <div className="grid grid-cols-1 gap-5 text-xs">
        <select className="border-2 rounded-3xl p-3" name="location">
          <option value="">Location</option>
          <option value="">Location</option>
          <option value="">Location</option>
        </select>
        <select className="border-2 rounded-3xl p-3" name="gender">
          <option value="">Gender</option>
          <option value="">Gender</option>
          <option value="">Gender</option>
        </select>
        <select className="border-2 rounded-3xl p-3" name="Age">
          <option value="">Age</option>
          <option value="">Age</option>
          <option value="">Age</option>
        </select>
        <select className="border-2 rounded-3xl p-3" name="Pay">
          <option value="">Pay</option>
          <option value="">Pay</option>
          <option value="">Pay</option>
        </select>
        <div className="relative">
          <div className="absolute top-4 right-5">
            <Image
              src="/svg/search-icon.svg"
              height={12}
              width={12}
              alt="heart"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border-2 rounded-3xl p-3 w-full placeholder:text-black"
          />
        </div>
        <PrimaryBtnRounded className="btn text-base">
          Save&nbsp;this&nbsp;Search
        </PrimaryBtnRounded>

        <ToggleBtn>
          <label className="">
            <div className="switch mt-1 md:mt-0">
              <input type="checkbox" />
              <span className="slider round"></span>
            </div>
            <span className="w-4/5 md:w-fit ml-3 text-left text-sm">
              Include jobs seeking worldwide applications.
            </span>
          </label>
        </ToggleBtn>
      </div>
    </div>
  );
}

const H2 = styled.h2`
  color: ${(props) => props.theme.primary};

  &::after {
    content: "";
    display: block;
    border-radius: 5px;
    height: 4px;
    width: 40px;
    margin-top: 5px;
    background-color: ${(props) => props.theme.abs.lightBlue};
  }
`;
