import Link from "next/link";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ChipBox } from "./Styles";
import tw from "tailwind-styled-components";
import RangeSlider from "components/RangeSlider";
import { useEffect, useState } from "react";
import Button from "components/Button";
import { updatePhysicalAttrsApi } from "network/apis/ownProfile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import OverlayLoader from "components/OverlayLoader";
import Router, { useRouter } from "next/router";
import { eyeColor, hairColor } from "@/utils/constants/profile";

const WEIGHT_MARKS = {
  0: "0",
  20: "20",
  40: "40",
  60: "60",
  80: "80",
  100: "100",
  120: "120",
  140: "140",
  160: "160",
};
const CHEST_MARKS = {
  0: "0",
  30: "30",
  60: "60",
  90: "90",
  120: "120",
  150: "150",
  180: "180",
  210: "210",
  240: "240",
};
const HIPS_MARKS = {
  0: "0",
  15: "15",
  30: "30",
  45: "45",
  60: "60",
  75: "75",
  90: "90",
  105: "105",
  120: "120",
};

const EYE_COLOR = [
  {
    name: "Blue",
    color: "#0070F4",
  },
  {
    name: "Black",
    color: "#000",
  },
  // {
  //   name: "Blue-Green",
  //   color: "#088F8F",
  // },
  {
    name: "Blue Green",
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
  // {
  //   name: "Gray",
  //   color: "#98999B",
  // },
  {
    name: "Grey",
    color: "#98999B",
  },
  // {
  //   name: "Gray-Blue",
  //   color: "#6699CC",
  // },
  // {
  //   name: "Gray-Green",
  //   color: "#5E716A",
  // },
  {
    name: "Grey-Green",
    color: "#5E716A",
  },
  {
    name: "Hazel",
    color: "#C9C789",
  },
];
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
const HAIR_STYLE = [
  "Buzz",
  "Conservative",
  "Dreadlocks",
  "Long",
  "Medium",
  "Shaved",
  "Short",
  "Straight",
  "Wavy",
  "Curly",
  "Afro",
  "Bald",
];

const BODY_TYPES = [
  {
    id: "built_any",
    label: "Any",
  },
  {
    id: "built_medium",
    label: "Medium",
  },
  {
    id: "built_athletic",
    label: "Athletic",
  },
  {
    id: "built_bb",
    label: "Body Builder",
  },
  {
    id: "built_xlarge",
    label: "Full Figured",
  },
  {
    id: "built_large",
    label: "Large",
  },
  {
    id: "built_petite",
    label: "Petite",
  },
  {
    id: "built_thin",
    label: "Thin",
  },
  {
    id: "built_lm",
    label: "Lean Muscle",
  },
];

export default function Appearance({ value, isChild }: any) {
  const router = useRouter();
  const [state, setState] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [apiLoader, setApiLoader] = useState(true);
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [chest, setChest] = useState(0)
  const [waist, setWaist] = useState(0)
  const [hips, setHips] = useState(0)
  const [dress, setDress] = useState(0)
  const [shirt, setShirt] = useState(0)
  const [shoe, setShoe] = useState(0)

  // useEffect(() => {
  //   !apiLoader && router.push("/profile", undefined, { shallow: true });
  // }, [apiLoader])

  const onUpdate = (d: any) => {
    setState((s: any) => ({ ...s, ...d }));
  };

  const { token, user } = useAuth();
  const { profile, setProfile } = useProfileStore();

  const onSave = async () => {
    try {
      setLoading(true);
      // physicalAttributes
      let kkk = {
        weightkilos: state.weight || 0,
        body_type: state.bodyType.label || "",
        heightfeet: state.height || 0,
        bust: state.chest || 0,
        waist: state.waist || 0,
        hips: state.hips || 0,
        dress: state.dressSize || 0,
        shirt: state.shirtSize || 0,
        shoes: state.shoeSize || 0,
        eyecolor: state.eyeColor || "",
        haircolor: state.hairColor || "",
        hairstyle: state.hairStyle || "",
      };
      const res = await updatePhysicalAttrsApi(
        token,
        JSON.stringify({ ...kkk, talentnum: user?.talentnum })
      );

      if (typeof res === "object") {
        setProfile((s: any) => ({
          ...s,
          ...{ ...kkk },
        }));
      }

      Router.push({
        pathname: '/profile/edit',
        query: { keyword: 'app-tour' },
      })
      setLoading(false);
      setApiLoader(false);
    } catch (err) {
      console.log("ERR", err);
      setLoading(false);
      setApiLoader(false);
    }
  };

  return (
    <Frame noPad={true} bannerChangeTwo>
      {loading && <OverlayLoader />}
      <div className="grow py-4 pb-12 overflow-auto sm:px-16 px-10">
        <div className="text-right mb-3">
          <Link href={"/" + profile.talentlogin}>
            <a className="txt-primary font-semibold text-base ml-auto  text-right">
              Skip, Go to profile
            </a>
          </Link>
        </div>

        <div className="mb-2">
          <div className="text-xl font-semibold">
            Let’s set {isChild ? "your child's" : "your"} appearance{" "}
          </div>
          <p>
            This is helpful in order for the Casting Directors to identify you
            easily.
          </p>
        </div>

        <Fields>
          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">What is {isChild ? "your child's" : "your"} Weight?</h3>
              <span className="txt-link font-semibold">{weight} Kg ({weight * 2.205 > 100 ? (weight * 2.205).toString().slice(0, 3) : (weight * 2.205).toString().slice(0, 2)} lbs)</span>
            </div>
            <RangeSlider
              value={state?.weight || 30}
              max={160}
              label="kg"
              onChange={(e) => {
                onUpdate({ weight: e })
                setWeight(e)
              }}
              marks={WEIGHT_MARKS}
            />
          </Field>

          <Field>
            <h3 className="font-bold">{isChild ? "Your child's" : "Your"} Body Type?</h3>
            <div className="flex gap-4 flex-wrap" style={{ maxWidth: 500 }}>
              {BODY_TYPES.map((i, index) => {
                return (
                  <ChipBox
                    key={i.id}
                    active={state?.bodyType?.id === i.id}
                    onClick={() => {
                      onUpdate({ bodyType: i });
                    }}
                  >
                    {i.label}
                  </ChipBox>
                );
              })}
            </div>
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">What is {isChild ? "your child's" : "your"} Height?</h3>
              <span className="txt-link font-semibold">{height.toString().split(".")[0]}{'"'} {height.toString().split(".")[1]}{height.toString().split(".")[1] !== undefined && "'"} ({(height * 30.48).toString().slice(0, 3)} cm) </span>
            </div>

            <RangeSlider
              value={state.height || 4}
              onChange={(val) => {
                onUpdate({ height: val })
                setHeight(val)
              }}
              label="ft."
              marks={{
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
              }}
              max={8}
              step={0.1}
            />
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">{isChild ? "Your child's" : "Your"} Chest size?</h3>
              <span className="txt-link font-semibold">{chest} cm ({(chest * 0.393701).toString().slice(0, 2)} in.)</span>
            </div>
            <RangeSlider
              value={state?.chest || 60}
              max={240}
              label="cm"
              onChange={(e) => {
                onUpdate({ chest: e })
                setChest(e)
              }}
              marks={CHEST_MARKS}
            />
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">{isChild ? "Your child's" : "Your"} Waist size?</h3>
              <span className="txt-link font-semibold">{waist} cm ({(waist * 0.393701).toString().slice(0, 2)} in.)</span>
            </div>
            <RangeSlider
              value={state?.waist || 60}
              max={240}
              label="cm"
              onChange={(e) => {
                onUpdate({ waist: e })
                setWaist(e)
              }}
              marks={CHEST_MARKS}
            />
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">Hips size?</h3>
              <span className="txt-link font-semibold">{hips} cm ({(hips * 0.393701).toString().slice(0, 2)} in.)</span>
            </div>
            <RangeSlider
              value={state?.hips || 60}
              max={120}
              label="cm"
              onChange={(e) => {
                onUpdate({ hips: e })
                setHips(e)
              }}
              marks={HIPS_MARKS}
            />
          </Field>

          <Field>
            <h3 className="font-bold">Eye color?</h3>
            <div className="flex gap-4 flex-wrap" style={{ maxWidth: 600 }}>
              {eyeColor.map((i, index) => {
                return (
                  <ColorChip
                    key={i?.name}
                    active={state?.eyeColor === i?.name}
                    onClick={() => {
                      onUpdate({ eyeColor: i?.name });
                    }}
                  >
                    <ColorBox style={{ background: i.color }} />

                    {i?.name}
                  </ColorChip>
                );
              })}
            </div>
          </Field>

          <Field>
            <h3 className="font-bold mt-10">Hair color?</h3>
            <div className="flex gap-4 flex-wrap" style={{ maxWidth: 600 }}>
              {hairColor.map((i, index) => {
                return (
                  <ColorChip
                    key={i?.name}
                    active={state?.hairColor === i?.name}
                    onClick={() => {
                      onUpdate({ hairColor: i?.name });
                    }}
                  >
                    <ColorBox style={{ background: i.color }} />

                    {i?.name}
                  </ColorChip>
                );
              })}
            </div>
          </Field>

          <Field>
            <h3 className="font-bold mt-10">Hair style?</h3>
            <div className="flex gap-4 flex-wrap" style={{ maxWidth: 500 }}>
              {HAIR_STYLE.map((i, index) => {
                return (
                  <ChipBox
                    key={i}
                    active={state?.hairStyle === i}
                    onClick={() => {
                      onUpdate({ hairStyle: i });
                    }}
                  >
                    {i}
                  </ChipBox>
                );
              })}
            </div>
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">Dress size?</h3>
              <span className="txt-link font-semibold">{dress} cm ({(dress * 0.393701).toString().slice(0, 2)} in.)</span>
            </div>
            <RangeSlider
              value={state?.dressSize || 60}
              max={120}
              label="cm"
              onChange={(e) => {
                onUpdate({ dressSize: e });
                setDress(e);
              }}
              marks={HIPS_MARKS}
            />
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">Shirt size?</h3>
              <span className="txt-link font-semibold">{shirt} cm ({(shirt * 0.393701).toString().slice(0, 2)} in.)</span>
            </div>
            <RangeSlider
              value={state?.shirtSize || 60}
              max={120}
              label="cm"
              onChange={(e) => {
                onUpdate({ shirtSize: e })
                setShirt(e)
              }}
              marks={HIPS_MARKS}
            />
          </Field>

          <Field>
            <div className="flex items-center gap-5 mt-10">
              <h3 className="font-bold">Shoe size?</h3>
              <span className="txt-link font-semibold">{shoe} cm ({(shoe * 0.393701).toString().slice(0, 2)} in.)</span>
            </div>
            <RangeSlider
              value={state?.shoeSize || 60}
              max={120}
              label="cm"
              onChange={(e) => {
                onUpdate({ shoeSize: e })
                setShoe(e)
              }}
              marks={HIPS_MARKS}
            />
          </Field>
        </Fields>

        <div className="text-right w-full mt-10">

          <Button
            primary
            onClick={() => {
              onSave();
              setFinished(true);
            }}
          >
            Done
          </Button>

        </div>
      </div>
    </Frame>
  );
}

const Fields = tw.div`flex flex-col gap-5`;
const Field = tw.div`flex flex-col gap-1`;

const ColorChip = tw(ChipBox)`flex gap-2 items-center `;
const ColorBox = tw.div`h-4 aspect-square rounded-full overflow-hidden border-2 border-white`;
