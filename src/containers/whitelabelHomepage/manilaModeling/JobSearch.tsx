import { IoSearch } from "react-icons/io5";
import styled from "styled-components";
import TypeAnimation from "react-type-animation";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";
import { FontFamily } from "./styles";

export default function JobSearch() {
  return (
   <FontFamily>
     <Root>
      <h2>Looking for a job near your area?</h2>
      <Link href="auditions/all-jobs" passHref>
        <div className="relative search-bar">
          <IoSearch
            className="absolute top-5 left-5 text-2xl"
            style={{ color: "rgba(60, 60, 67, 0.6)" }}
          />
          <input type="text" disabled />
          <div className="absolute top-4 left-14 text-base" style={{ top: 18 }}>
            <TypeAnimation
              cursor={true}
              sequence={[
                "Acting Jobs",
                3000,
                "Modeling Jobs",
                3000,
                "Musician Jobs",
                3000,
                "Extras Jobs",
                3000,
              ]}
              wrapper="p"
              repeat={Infinity}
              className="font-semibold text-lg"
            />
          </div>

          <div className="absolute top-5 right-5 text-2xl hidden go txt-link cursor-pointer">
            <MdDoubleArrow />
          </div>
        </div>
      </Link>
    </Root>
   </FontFamily>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 100px auto;
  position: relative;
  z-index: 20;
   color: ${p => p.theme.base};

  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    text-align: center;

    @media (max-width: 510px) {
      line-height: 130%;
    }
  }

  .search-bar {
    max-width: 800px;
    width: 80vw;
    margin: 20px auto 0 auto;
  }

  input {
    background: #f4f5f8;
    border: 1px solid #e5e7eb;
    border-radius: 100px;
    display: block;
    width: 100%;
    padding: 18px 18px 18px 55px;
    font-size: 18px;
  }

  input:focus + div {
    display: none;
  }
  input:focus + div + .go {
    display: block;
  }
`;
