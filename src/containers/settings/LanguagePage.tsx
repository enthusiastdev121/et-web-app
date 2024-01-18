import { languages } from "@/utils/constants/profile";
import Aside from "components/settings/Aside";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { ImArrowLeft2 } from "react-icons/im";
import styled from "styled-components";
import { Root, Main, Nav } from "./styles";

export default function LanguagePage() {
  const router = useRouter();

  return (
    <Root>
      <Aside active="language" />

      <Main>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Nav>
            <div className="text-xl mr-auto cursor-pointer">
              <ImArrowLeft2
                onClick={() => {
                  router.back();
                }}
              />
            </div>

            <div className="mr-auto title">Language</div>
          </Nav>

          <Container>
            <Searchbar>
              <span
                style={{ color: "rgba(60, 60, 67, 0.6)" }}
                className="absolute top-3 bottom-3"
              >
                <AiOutlineSearch />
              </span>
              <input type="text" placeholder="Search..." />
            </Searchbar>

            <ul>
              {languages.map((i: string) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Container>
        </div>
      </Main>
    </Root>
  );
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 40px;
   color: ${p => p.theme.base};
`;

const Searchbar = styled.div`
  position: relative;

  input {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 100px;
    width: 100%;
    padding: 10px 10px 10px 30px;
    margin-bottom: 20px;
  }
`;
