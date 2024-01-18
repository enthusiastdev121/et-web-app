import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { eyeColor } from "@/utils/constants/profile";
import TranslatedText from "components/TranslatedText";

const EYE_COLOR = [
  {
    name: "Blue",
    color: "#0070F4",
  },
  {
    name: "Black",
    color: "#000",
  },
  {
    name: "Blue-Green",
    color: "#088F8F",
  },
  {
    name: "Brown",
    color: "#964B00",
  },
  {
    name: "Green",
    color: "#70E73B",
  },
  {
    name: "Gray",
    color: "#98999B",
  },
  {
    name: "Gray-Blue",
    color: "#6699CC",
  },
  {
    name: "Gray-Green",
    color: "#5E716A",
  },
  {
    name: "Hazel",
    color: "#C9C789",
  },
];

export default function EyeColor({ setData, data, height, setActiveCall, isChild }: any) {
  const router = useRouter();

  return (
    <div
      className="padding text-center min-h-screen flex flex-col items-center justify-center"
      style={{ minHeight: height }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10 lg:mb-20">
        <TranslatedText> Select your eye color</TranslatedText>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 content-center">
        {eyeColor.map((i, index) => {
          return (
            <ChipBox
              key={i?.name}
              active={data?.eye_color === i?.name}
              onClick={() => {
                setActiveCall(2)
                setData((data: any) => ({ ...data, eye_color: i?.name }));

                if (isChild) {
                  document.getElementById("kidHairColor").classList.remove("hidden");
                  router.push("#kidHairColor");
                } else {
                  document.getElementById("hairColor").classList.remove("hidden");
                  router.push("#hairColor");
                }
              }}
              className="items-center flex gap-2 sm:gap-3"
            >
              <ColorBox style={{ background: i.color }} />

              <TranslatedText>{i.name}</TranslatedText>
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

  @media (max-width: 600px) {
    padding: 20px 20px;
  }

  // @media (max-width: 420px) {
  //   padding: 40px 48px;
  // }
  
  &:hover { 
    border: 4px solid ${(props) => props.theme.primary};
  }
`;
const ColorBox = tw.div`h-5 aspect-square rounded-full overflow-hidden border-2 border-white min-w-[20px]`;

