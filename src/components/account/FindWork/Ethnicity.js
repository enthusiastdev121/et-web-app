import { useRouter } from "next/router";
import { ethnicities } from "@/utils/constants/profile";
import styled from "styled-components";
import TranslatedText from "components/TranslatedText";

export default function Ethnicity({ setData, isChild, data, height }) {
  const router = useRouter();

  return (
    <div className="padding text-center min-h-screen lg:flex items-center justify-center" style={{ minHeight: height }}>
      <div className="">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10">
          <TranslatedText> {isChild ? "Select your child's ethnicity" : "Select your ethnicity"}</TranslatedText>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {ethnicities.map((ethnicity) => (
            <SignupCard
              key={ethnicity.id}
              active={data?.ethnicity === ethnicity.label}
              onClick={() => {
                setData((data) => ({ ...data, ethnicity: ethnicity.label }));
                document.getElementById("address").classList.remove("hidden");
                router.push("#address");
              }}
              className="signup-card text-2xl font-semibold check-label"
              style={{ padding: "1.5em" }}
            >
              <p>
                {" "}
                <TranslatedText>{ethnicity.label}</TranslatedText>
              </p>
            </SignupCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const SignupCard = styled.div`
  background-color: ${(props) => props.theme.pure};
  border: 4px solid ${(props) => (props.active ? props.theme.primary : "#fff")};
  cursor: pointer;
  height: 100%;
  width: 100%;
  box-shadow: 3px 7px 25px #c6d6e6;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  font-weight: 600;
  height: 5em;
  width: 100%;
  padding: 0 1.5em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1em;
    font-size: 16px;
    line-height: 110%;
  }
  @media (max-width: 400px) {
    padding: 1em;
    font-size: 16px;
  }

  &:hover {
    border: 4px solid ${(props) => props.theme.primary};
  }
`;
