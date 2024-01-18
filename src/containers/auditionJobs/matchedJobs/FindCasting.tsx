import { PrimaryBtnOutlineRounded } from "@/styles/Btn.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { FindCastingContainer } from "./styles";

export default function FindCasting() {
  return (
    <FindCastingContainer className="rounded p-4 grid grid-cols-2 md:grid-cols-3 2xl:grid 2xl:grid-cols-11 gap-5 text-sm 2xl:text-base items-center">
      <select
        className="active 2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
      >
        <option>Type</option>
        <option>one</option>
        <option>two</option>
      </select>

      <select
        className="2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
      >
        <option>View all location</option>
        <option>one</option>
        <option>two</option>
      </select>

      <select
        className="2xl:col-span-2"
        style={{ padding: "0.5em 2em", borderRadius: "50px" }}
      >
        <option>Rate/Pay</option>
        <option>one</option>
        <option>two</option>
      </select>

      <div className="input-container relative 2xl:col-span-4">
        <AiOutlineSearch
          className="absolute left-3 opacity-50"
          style={{ top: "10px" }}
        />
        <input
          type="text"
          placeholder="search job"
          className="block w-full text-inherit bg-pure"
          style={{ padding: "0.5em 2.5em", borderRadius: "50px" }}
        />
      </div>

      <PrimaryBtnOutlineRounded
        className="btn block 2xl:col-span-1"
        style={{ padding: "0.5em" }}
      >
        Reset
      </PrimaryBtnOutlineRounded>
    </FindCastingContainer>
  );
}
