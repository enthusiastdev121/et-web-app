import { BiSearch } from "react-icons/bi";
import { HeaderContainer } from "./Applications.styled";

export default function Header() {
  return (
    <HeaderContainer className="px-10v py-5 text-white flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold">My Applications</h1>

      <div className="relative mt-5 md:mt-0 lg:w-1/3">
        <BiSearch className="absolute top-4 left-3" style={{ left: 12 }} />
        <input
          type="text"
          className="py-3 px-10 block w-full"
          placeholder="Search Invitation, Auditions..."
        />
      </div>
    </HeaderContainer>
  );
}
