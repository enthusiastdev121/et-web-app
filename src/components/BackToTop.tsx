import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";

export default function BackToTop() {
  return (
    <Button
      className="flex items-center gap-2 rounded-3xl p-4 xl:p-2 2xl:p-4 fixed right-3 bottom-5 text-xs 2xl:text-sm z-10"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <span className="icon">
        <BsFillArrowUpCircleFill className="text-xl xl:text-base" />
      </span>
      <span className="hidden xl:block">Back to top</span>
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(p: any) => p.theme.pure};
  color: ${(p: any) => p.theme.base};
  z-index: 10;

  .icon {
    color: ${(p: any) => p.theme.primary};
  }
`;
