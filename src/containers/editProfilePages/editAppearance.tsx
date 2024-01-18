import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  updatePhysicalAttrsApi,
  updateProfileDetailApi,
  updateProfileInfoApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";

const KEYS = {
  gender: ["Male", "Female", "Others"],
};

const AGES = [
  {
    id: 1,
    min: 0,
    max: 5,
  },
  {
    id: 2,
    min: 6,
    max: 12,
  },
  {
    id: 3,
    min: 13,
    max: 17,
  },
  {
    id: 4,
    min: 18,
    max: 29,
  },
  {
    id: 5,
    min: 30,
    max: 39,
  },
  {
    id: 6,
    min: 40,
    max: 49,
  },
  {
    id: 7,
    min: 50,
    max: 59,
  },
  {
    id: 8,
    min: 60,
    max: 120,
  },
];

const FieldTypes = [
  {
    id: 2,
    key: "height",
    label: "Height",
    modalLabel: "Select Height",
  },
  {
    id: 3,
    key: "weight",
    label: "Weight",
    modalLabel: "Select Weight",
  },
  // {
  //   id: 4,
  //   key: 'chest',
  //   label: 'Chest',
  //   modalLabel: 'Select Chest',
  // },
  {
    id: 5,
    key: "ethnicity",
    label: "Ethnicity",
    modalLabel: "Select Ethnicity",
  },
  {
    id: 6,
    key: "waist",
    label: "Waist",
    modalLabel: "Select Waist",
  },

  {
    id: 7,
    key: "eyecolor",
    label: "Eye color",
    modalLabel: "Select Eye color",
  },
  {
    id: 8,
    key: "haircolor",
    label: "Hair color",
    modalLabel: "Select Hair color",
  },
  {
    id: 9,
    key: "hairstyle",
    label: "Hair Style",
    modalLabel: "Select Hair Style",
  },
  {
    id: 10,
    key: "dress",
    label: "Dress Size",
    modalLabel: "Select Dress Size",
  },
  {
    id: 11,
    key: "shirt",
    label: "Shirt Size",
    modalLabel: "Select Shirt Size",
  },
  {
    id: 12,
    key: "body_type",
    label: "Body type",
    modalLabel: "Select Body type",
  },
  {
    id: 13,
    key: "hips",
    label: "Hips",
    modalLabel: "Select Hips",
  },
];

export default function EditAppearance() {
  const router = useRouter();
  const { placeHolder, profile, setProfile } = useProfileStore();
  const [state, setState] = useState({
    gender: profile.gender,
    age: profile.ageRange,
    month: 0,
    date: 0,
    year: 0,
    height: "",
    weight: "",
  });
  // const [defaultAge, setDefaultAge] = useState(4);
  // const [date, setDate] = useState(1);
  // const [month, setMonth] = useState(1);
  // const [year, setYear] = useState(2001);



  const [loading, setLoading] = useState(false);
  const { token, user } = useAuth();
  let arr;

  useEffect(() => {
    setState(s => {
      return { ...s, month: profile.dob?.month, date: profile?.dob?.day, year: profile.dob?.year, age: profile.ageRange }
    })
  }, [profile])

  useEffect(() => {
    setState((s) => ({
      ...s,
      gender: profile?.gender,
      height: placeHolder?.data?.physical_attributes?.height?.options?.filter(
        (i: any) => Number(i.keys.heightinches) === Number(profile?.heightinches)
      )[0]?.label,
      weight: placeHolder?.data?.physical_attributes?.weight?.options?.filter(
        (i: any) =>
          Number(i.keys.weightpounds) === Number(profile?.weightpounds)
      )[0]?.label,
      ethnicity:
        placeHolder?.data?.physical_attributes?.ethnicity?.options?.filter(
          (i: any) => i.label === profile?.ethnicity
        )[0]?.label,
      waist: placeHolder?.data?.physical_attributes?.waist?.options?.filter(
        (i: any) => Number(i.label) === Number(profile?.waist)
      )[0]?.label,
      eyecolor:
        placeHolder?.data?.physical_attributes?.eyecolor?.options?.filter(
          (i: any) => i === profile?.eyecolor
        )[0],
      hairstyle:
        placeHolder?.data?.physical_attributes?.hairstyle?.options?.filter(
          (i: any) => i === profile?.hairstyle
        )[0],
      haircolor:
        placeHolder?.data?.physical_attributes?.haircolor?.options?.filter(
          (i: any) => i === profile?.haircolor
        )[0],
      dress: placeHolder?.data?.physical_attributes?.dress?.options?.filter(
        (i: any) => Number(i) === Number(profile?.dress)
      )[0],
      shirt: placeHolder?.data?.physical_attributes?.shirt?.options?.filter(
        (i: any) => Number(i) === Number(profile?.shirt)
      )[0],
      body_type:
        placeHolder?.data?.physical_attributes?.body_type?.options?.filter(
          (i: any) => i.label === profile?.bodyType
        )[0]?.label,
      hips: placeHolder?.data?.physical_attributes?.hips?.options?.filter(
        (i: any) => Number(i.label) === Number(profile?.hips)
      )[0]?.label,
    }));
  }, [profile, placeHolder]);

  const onSave = async () => {
    let kk = {};
    Object.keys(state).forEach((i) => {
      placeHolder?.data?.physical_attributes[i]?.options.forEach((i2: any) => {
        if (typeof i2 === "string") {
          kk = {
            ...kk,
            [i]:
              placeHolder?.data?.physical_attributes[i]?.input_type === "number"
                ? Number(state[i] || 0)
                : state[i] || "",
          };
        } else {
          if (i2.label === state[i]) {
            if (i2.keys) {
              kk = { ...kk, ...i2.keys };
            } else {
              kk = {
                ...kk,
                [i]:
                  placeHolder?.data?.physical_attributes[i]?.input_type ===
                    "number"
                    ? Number(i2.label || 0)
                    : i2.label || "",
              };
            }
          }
        }
      });
    });

    try {
      setLoading(true);
      const res = await updatePhysicalAttrsApi(
        token,
        JSON.stringify({
          ...kk, talentnum: user?.talentnum, sex: state.gender,
          age_range: state.age,
          dobyyyy: state.year,
          dobmm: state.month,
          dobdd: state.date,
        })
      );
      const ethnicityRes = await updateProfileInfoApi({
        token: token,
        raw: {
          ethnicity: state?.ethnicity || "",
        }
      })

      setLoading(false);
      if (typeof res === "object") {

        console.log(profile);

        function calculate_age(dob) { 
          var diff_ms = Date.now() - dob.getTime();
          var age_dt = new Date(diff_ms); 
        
          return Math.abs(age_dt.getUTCFullYear() - 1970);
      }

        setProfile((s: any) => ({
          ...s,
          ...{ ...kk, bodyType: kk.body_type },
          dob: { year: state.year, month: state.month, day: state.date },
          // dob: new Date(
          //   Number(state.year),
          //   Number(state.month),
          //   Number(state.date)
          // ).toString(),
          ageRangeText: `${AGES.filter(i => i.id == state.age)[0]?.min}-${AGES.filter(i => i.id == state.age)[0]?.max}`,
          ageRange: state.age,
          age: calculate_age(new Date(state.year, state.month, state.date)),
          // ageRangeText: `30:50`,
          gender: state.gender
        }));
        router.back();
      }
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };
  console.log(profile, "state");

  return (
    <ParentContainer className="padding-small">
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between ">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Appearance</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>



        <div className="mb-5">
          {/* FIXME: gender not updating */}
          {/* <h2 className="font-bold text-xl mb-3">Personal Information</h2>
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Gender</h3>
            <Select
              value={state.gender}
              onChange={(e) => {
                setState((s) => ({ ...s, gender: e.target.value }));
              }}
            >
              {KEYS.gender.map((item: any, index: number) => (
                <option key={index}>{item}</option>
              ))}
            </Select>
          </div>

          {/* TODO: Age range and birthday */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Age range</h3>
            <Select
              value={state.age}
              onChange={(e) => {
                setState((s) => ({ ...s, age: e.target.value }));
              }}
            >
              {AGES.map((item: any,) => (
                <option key={item.id} value={item.id}
                // selected={profile?.ageRangeText?.includes(item.min.toString())}
                >
                  {item.min === 60 ?
                    item.min + '+'
                    : item.min + "-" + item.max
                  }

                </option>
              ))}
            </Select>
          </div>

          <div className="mb-7">
            <h3 className="font-semibold mb-1">Birthdate</h3>
            <div className="flex items-center gap-5">
              <div>
                <label className="text-[14px]">Month</label>
                <input
                  type="number"
                  placeholder="Month"
                  className="w-full p-2 border rounded-md"
                  value={state.month}
                  onChange={(e) => {
                    setState((s) => ({ ...s, month: e.target.value }));
                  }}

                />
              </div>
              {/* {MONTH.months.map((item: any, index: number) => (
                  <option key={index}>{item}</option>
                ))} */}
              <div>
                <label className="text-[14px]">Date</label>
                <input
                  type="number"
                  placeholder="Date"
                  className="w-full p-2 rounded-md border"
                  value={state.date}
                  onChange={(e) => {
                    setState((s) => ({ ...s, date: e.target.value }));
                  }}

                />
              </div>
              {/* {DATE.date.map((item: any, index: number) => (
                  <option key={index}>{item}</option>
                ))} */}

              <div>
                <label className="text-[14px]">Year</label>
                <input
                  type="number"
                  placeholder="Year"
                  className="w-full p-2 border rounded-md"
                  value={state.year}
                  onChange={(e) => {
                    setState((s) => ({ ...s, year: e.target.value }));
                  }}

                />
              </div>
              {/* {YEAR.year.map((item: any, index: number) => (
                  <option key={index}>{item}</option>
                ))} */}
            </div>
          </div>




          <hr className="my-5" />

          <h2 className="font-bold text-xl mb-3">Physical appearance</h2>
          {FieldTypes.map((i) => {
            return (
              <div className="mb-5" key={i.id}>
                <h3 className="font-semibold mb-1">{i.label}</h3>
                <Select
                  value={state[i.key]}
                  onChange={(e) => {
                    setState((s) => ({ ...s, [i.key]: e.target.value }));
                  }}
                >
                  {
                    (arr = placeHolder?.data?.physical_attributes
                      ? placeHolder?.data?.physical_attributes[
                        i.key
                      ]?.options?.map((i2: any) =>
                        typeof i2 === "string" ? i2 : i2.label
                      )
                      : [])
                  }

                  {arr.map((item: any, index: number) => (
                    <option key={index}>{item}</option>
                  ))}
                </Select>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button primary outlined onClick={() => router.back()}>
            Cancel
          </Button>
          <Button loading={loading} size="large" primary onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </ParentContainer>
  );
}
