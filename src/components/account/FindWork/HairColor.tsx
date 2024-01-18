import { hairColor } from "@/utils/constants/profile";
import TranslatedText from "components/TranslatedText";
import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const HAIR_COLOR = [
  {
    name: "Auburn",
    color: "#922724",
  },
  {
    name: "Black",
    color: "#000",
  },
  {
    name: "Blonde",
    color: "#FAF0BE",
  },
  {
    name: "Brown",
    color: "#964B00",
  },
  {
    name: "Bald",
    color: "#F2EDE3",
  },
  {
    name: "Chestnut",
    color: "#954535",
  },
  {
    name: "Dark Brown",
    color: "#4E3423",
  },
  {
    name: "Gray",
    color: "#98999B",
  },
  {
    name: "Red",
    color: "#F70000",
  },
  {
    name: "White",
    color: "#FFFFFF",
  },
  {
    name: "Salt & Pepper",
    color: "#8D9599",
  },
];

export default function HairColor({ setData, data, height, setActiveCall, isChild }: any) {
  const router = useRouter();

  return (
    <div
      className="padding text-center min-h-screen flex flex-col items-center justify-center"
      style={{ minHeight: height }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10 lg:mb-20">
        <TranslatedText>Select your hair colour</TranslatedText>
      </h1>

      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 content-center">
        {hairColor.map((i, index) => {
          return (
            <ChipBox
              key={i?.name}
              active={data?.hair_color === i?.name}
              onClick={() => {
                setActiveCall(2)
                setData((data: any) => ({ ...data, hair_color: i?.name }));

                if (isChild) {
                  document.getElementById("lastName").classList.remove("hidden");
                  router.push("#lastName");
                } else {
                  document.getElementById("dobOne").classList.remove("hidden");
                  router.push("#dobOne");
                }
              }}
              // className="sm:items-center flex gap-3 flex-col sm:flex-row flex-start text-center items-start text-lg sm:text-base"
              className=" items-center flex gap-2 sm:gap-3"
            >
              <ColorBox style={{ background: i.color, borderColor: i.color === "#FFFFFF" ? "#ddd" : "#fff" }} />

              <TranslatedText>{i?.name}</TranslatedText>
            </ChipBox>
          );
        })}
      </div>
    </div>
  );
}

const ChipBox = styled.div <{ active: boolean }>` 
  background: ${(p) => p.theme.pure};
  color: ${(p) => p.theme.base};
  border: 4px solid ${(props) => (props.active ? props.theme.primary : props.theme.pure)};
  padding: 40px 48px;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 3px 7px 25px #c6d6e6;
  text-align: left;

  @media (max-width: 600px) {
    padding:  20px;
  }

  @media (max-width: 420px) {
    // padding: 40px 48px;
  }
  
  &:hover { 
    border: 4px solid ${(props) => props.theme.primary};
  }
`;
const ColorBox = tw.div`h-5 aspect-square rounded-full overflow-hidden border-2 border-white min-w-[20px]`;

